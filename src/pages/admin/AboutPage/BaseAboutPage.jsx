import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { aboutSelector, fetchAbout, insertAbout } from '../../../store/slices/about';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from './AboutPage';

function BaseAboutPage() {
    const dispatch = useDispatch();
    const { about } = useSelector(aboutSelector);
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
        //eslint-disable-next-line
    }, []);

    return about ? <AboutPage handleOnChange={handleOnChange} handleSubmit={handleSubmit} content={about.content} /> : null
}

export default BaseAboutPage;