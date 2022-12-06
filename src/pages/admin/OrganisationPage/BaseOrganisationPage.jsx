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

    const onFileUpload = (event) => {
        if (event.target.files.length > 0) {
            const logo = event.target.files[0];

            let formData = new FormData();
            formData.append('name', orgInfo.name);
            formData.append('phone', orgInfo.phone);
            formData.append('email', orgInfo.email);
            formData.append('address', orgInfo.address);
            formData.append('logo', logo);
            console.log(formData);
            uploadLogo(formData);
        }
    };

    const uploadLogo = async (formData) => {
        const response = await dispatch(postOrganisationInfo(formData));
        toast.success(response);
    }

    useEffect(() => {
        fetchOrganisationData();
        // eslint-disable-next-line
    }, []);

    return orgInfo ? <OrganisatonPage organisationInfo={orgInfo} onFileUpload={onFileUpload} /> : null;
}

export default BaseOrganisationPage