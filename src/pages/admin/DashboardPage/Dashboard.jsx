import React from 'react';
import { useAuth } from '../../../utils/useAuth';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Navigate, Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from '@mui/material';


const drawerWidth = 220;

export default function Dashboard() {
    const { logout, loggedInStatus} = useAuth();
    const isLoggedIn = loggedInStatus();

    function handleLogout(event) {
        event.preventDefault();
        logout();
    }

    if (isLoggedIn) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Grid container justifyContent='space-between'>
                            <Grid item>
                                <Typography variant="h6" noWrap component="div">
                                    ALKA INDUSTRIES
                                </Typography>
                            </Grid>
                            <Grid item style={{ cursor: 'pointer' }}>
                                <Box justifyContent='flex-end' onClick={handleLogout}>
                                    <Grid container flexDirection='column' alignItems='center'>
                                        <LogoutIcon />
                                        <Typography>Logout</Typography>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            <Link to='/admin/dashboard/about' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='About' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/organisation' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Organisation' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/caraousel' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Caraousel' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/partners' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Partners' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/category' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Category' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/latest-products' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Latest Products' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/products' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Products' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/admin/dashboard/enquiry' style={{ textDecoration: 'none', color: 'GrayText' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary='Enquiry' />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        );
    } 
    return (
        <Navigate to='/admin/login'/>
    )
}