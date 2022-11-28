import React from "react";
import {Routes, Route} from 'react-router';
import HomePage from "./HomePage/HomePage";

export default function RootPublicPage(){
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
}