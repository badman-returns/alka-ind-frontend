import React from "react";
import {Routes, Route} from 'react-router';
import BaseHomePage from "./HomePage/BaseHomePage";

export default function RootPublicPage(){
    return (
        <Routes>
            <Route path='/' element={<BaseHomePage/>}/>
        </Routes>
    )
}