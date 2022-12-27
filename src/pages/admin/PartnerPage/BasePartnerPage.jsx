import React, { useEffect } from 'react'
import PartnerPage from './PartnerPage'
import { addPartner, fetchPartners, partnerSelector, removePartner, updatePartnerDetails } from '../../../store/slices/partner';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function BasePartnerPage() {
  const dispatch = useDispatch();
  const { partners } = useSelector(partnerSelector);

  const getPartners = () => {
    dispatch(fetchPartners());
  }

  const generateFormData = (name, testimony, logo) => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('testimony', testimony);
    if (logo) {
      formData.append('partner', logo);
    }
    return formData;
  }

  const submitPartnerData = (id, name, testimony, logo) => {
    console.log(id);
    const formData = generateFormData(name, testimony, logo);
    if (id !== null && id !== undefined) {
      modifyPartnerData(id, formData);
    } else {
      console.log('Insert');
      insertPartner(formData);
    }
  }

  const modifyPartnerData = async (id, formData) => {
    const response = await dispatch(updatePartnerDetails(id, formData));
    toast.success(response);
  }

  const insertPartner = async (formData) => {
    const response = await dispatch(addPartner(formData));
    toast.success(response);
  }

  const deletePartner = async (id) => {
    const response = dispatch(removePartner(id));
    toast.success(response);
  }

  useEffect(() => {
    getPartners();
  }, [])

  return (
    <PartnerPage partners={partners} deletePartner={deletePartner} submitPartnerData={submitPartnerData} />
  )
}

export default BasePartnerPage