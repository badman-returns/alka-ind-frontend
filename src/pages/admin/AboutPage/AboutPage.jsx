import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import RichEditor from '../../../components/RichEditor/RichEditor';
import { useDispatch, useSelector } from 'react-redux';
import { aboutSelector, fetchAbout, insertAbout } from '../../../store/slices/about';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AboutPage() {
  const dispatch = useDispatch();
  const { about } = useSelector(aboutSelector);
  const { content } = about ? about : {};
  const [richText, setRichText] = useState('');

  const fetchAboutData = () => {
    dispatch(fetchAbout());
  }

  const handleOnChange = (e) => {
    setRichText(e);
  }

  const handleSubmit = async () => {
    const result = await dispatch(insertAbout(richText));
    const { message, status } = result;
    if (status !== 200) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <React.Fragment>
      <Grid container flexDirection='column' gap={2}>
        <Grid item>
          <Grid container flexDirection='row' justifyContent='space-between'>
            <Box>
              <Typography variant='h4'>About Page</Typography>
            </Box>
            <Box alignItems='center'>
              <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <RichEditor value={content} handleOnChange={handleOnChange} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default AboutPage;