import React, { useEffect } from 'react';
import HomePage from './HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrganisationInfo, organisationSelector } from '../../../store/slices/organisation';

function BaseHomePage() {
    const dispatch = useDispatch();
    const { orgInfo } = useSelector(organisationSelector);

    const getPageData = () => {
        dispatch(fetchOrganisationInfo());
    }

    useEffect(() => {
        getPageData();
        // eslint-disable-next-line
    }, [])

    return orgInfo ? <HomePage orgInfo={orgInfo}/> : null;
}

export default BaseHomePage