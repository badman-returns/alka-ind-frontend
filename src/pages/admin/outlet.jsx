import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../utils/useAuth";

export default function AdminOutlet(){
    const navigate = useNavigate();
    const {token, user} = useAuth();

    useEffect(() => {
        navigate('/admin/login')
    }, []);
    
    return(
        <Outlet/>
    )
}