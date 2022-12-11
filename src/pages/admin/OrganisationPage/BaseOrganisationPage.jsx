import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postOrganisationInfo } from '../../../store/slices/organisation';
import { fetchOrganisationInfo, organisationSelector } from '../../../store/slices/organisation';
import OrganisatonPage from './OrganisatonPage'

function BaseOrganisationPage() {
    const dispatch = useDispatch();
    const { orgInfo } = useSelector(organisationSelector);

    const fetchOrganisationData = () => {
        dispatch(fetchOrganisationInfo());
    }

    const generateFormData = (name, phone, email, address, logo) => {
        let formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('address', address);
        if(logo){
            formData.append('logo', logo);
        }
        return formData;
    }

    const onFileUpload = (event) => {
        if (event.target.files.length > 0) {
            const logo = event.target.files[0];
            let formData = generateFormData(orgInfo.name, orgInfo.phone, orgInfo.email, orgInfo.address, logo);
            submitOrganisationData(formData);
        }
    };


    const submitOrganisationData = async(formData) => {
        const response = await dispatch(postOrganisationInfo(formData));
        toast.success(response);
    }

    useEffect(() => {
        fetchOrganisationData();
        // eslint-disable-next-line
    }, []);

    return orgInfo ? <OrganisatonPage organisationInfo={orgInfo} onFileUpload={onFileUpload} submitOrganisationData={submitOrganisationData} generateFormData={generateFormData} /> : null;
}

export default BaseOrganisationPage