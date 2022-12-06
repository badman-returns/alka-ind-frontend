import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader';
import { loaderSelector } from '../../store/slices/loader'

export const ApplicationLoader= (WrappedComponent) => {
    function HOC(props) {
        const { loading } = useSelector(loaderSelector);
        return (
            <>
                {loading && <Loader />}
                <WrappedComponent {...props} />
            </>
        )
    }
    return HOC;
}

export default ApplicationLoader;