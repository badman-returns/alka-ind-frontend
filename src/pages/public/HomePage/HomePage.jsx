import React, { Fragment } from "react";
import { Stack } from '@mui/material';
import Header from "../../../components/Header/Header";
import AppNavigationBar from "../../../components/AppNavigationBar/AppNavigationBar";
import Slider from "../../../components/Slider/Slider";
import CategoryNavigationBar from "../../../components/CategoryNavigationBar/CategoryNavigationBar";
import LatestProduct from "../../../components/LatestProduct/LatestProduct";
import Partners from "../../../components/Partners/Partners";
import Footer from "../../../components/Footer/Footer";

export default function HomePage({ orgInfo, carousels }) {
    return (
        <Fragment>
            <Stack direction='column'>
                <Header orgInfo={orgInfo} />
                <AppNavigationBar orgInfo={orgInfo} />
                <CategoryNavigationBar />
                <Slider carousels={carousels}/>
                <LatestProduct />
                <Partners />
                <Footer />
            </Stack>
        </Fragment>
    )
}