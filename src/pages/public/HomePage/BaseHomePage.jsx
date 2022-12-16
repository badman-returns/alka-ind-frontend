import React, { useEffect } from 'react';
import HomePage from './HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrganisationInfo, organisationSelector } from '../../../store/slices/organisation';
import { carouselSelector, fetchCarousels } from '../../../store/slices/carousel';

function BaseHomePage() {
    const dispatch = useDispatch();
    const { orgInfo } = useSelector(organisationSelector);
    const { carousels } = useSelector(carouselSelector);

    const getPageData = () => {
        dispatch(fetchOrganisationInfo());
        dispatch(fetchCarousels());
    }

    useEffect(() => {
        getPageData();
        // eslint-disable-next-line
    }, [])

    return orgInfo && carousels? <HomePage orgInfo={orgInfo} carousels={carousels}/> : null;
}

export default BaseHomePage