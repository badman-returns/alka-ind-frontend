import React, { useEffect } from 'react';
import CaraouselPage from './CaraouselPage';
import { addCarousel, fetchCarousels, carouselSelector } from '../../../store/slices/carousel';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function BaseCarouselPage() {
  const { carousels } = useSelector(carouselSelector);
  const dispatch = useDispatch();

  const createCarousels = async (carousel) => {
    const response = await dispatch(addCarousel(carousel));
    toast.success(response);
  }

  const onFileUpload = (event) => {
    if (event.target.files.length > 0) {
      const carousel = event.target.files[0];
      let formData = new FormData();
      formData.append('banner', carousel);
      createCarousels(formData);
    }
  }

  const getCarousels = () => {
    dispatch(fetchCarousels());
    console.log(carousels);
    }

  useEffect(() => {
    getCarousels();
  }, [])
  return (
    <CaraouselPage onFileUpload={onFileUpload} carousels={carousels} />
  )
}

export default BaseCarouselPage;