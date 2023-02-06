import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function AdminOutlet(){
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/admin/login')
    }, []);
    
    return(
        <Outlet/>
    )
}