import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import AppNavigationBar from "../../../components/AppNavigationBar/AppNavigationBar";
import CategoryNavigationBar from "../../../components/CategoryNavigationBar/CategoryNavigationBar";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import LatestProduct from "../../../components/LatestProduct/LatestProduct";
import Partners from "../../../components/Partners/Partners";
import Slider from "../../../components/Slider/Slider";
import {
  carouselSelector,
  fetchCarousels,
} from "../../../store/slices/carousel";
import {
  fetchOrganisationInfo,
  organisationSelector,
} from "../../../store/slices/organisation";
import { useLocation } from "react-router";
import {
  categorySelector,
  fetchCategory,
} from "../../../store/slices/category";

export default function BasePage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { orgInfo } = useSelector(organisationSelector);
  const { carousels } = useSelector(carouselSelector);
  const { category } = useSelector(categorySelector);

  const getPageData = () => {
    dispatch(fetchOrganisationInfo());
    dispatch(fetchCarousels());
    dispatch(fetchCategory());
  };

  useEffect(() => {
    getPageData();
  }, []);

  return (
    <>
      {orgInfo != null ? (
        <Fragment>
          <Header orgInfo={orgInfo} />
          <AppNavigationBar orgInfo={orgInfo} />
        </Fragment>
      ) : null}
      <CategoryNavigationBar categories={category} />
      {pathname === "/" ? (
        <Fragment>
          {carousels != null ? <Slider carousels={carousels} /> : null}
          <LatestProduct />
          <Partners />
        </Fragment>
      ) : null}
      <Outlet />
      <Footer />
    </>
  );
}
