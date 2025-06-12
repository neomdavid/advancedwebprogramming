import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const drawerWidth = 240;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const firstName = user ? user.firstName : 'Admin';
  const role = user ? user.type : 'admin';

  useEffect(() => {
    if (location.state?.showToast) {
      toast.success(location.state.message || `Welcome back, ${location.state.firstName}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#f4f6fa' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#1c1c1c',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
        open
      >
        <Box>
          <Box sx={{ py: 3}}>
            <Typography variant="subtitle1" sx={{ fontWeight: 900 ,textAlign: 'center',fontSize: '2.5rem',marginTop:'-10px', paddingBottom:'8px'}}>
              ND
            </Typography>
            <Divider sx={{ background: '#444' }} />

            <Typography variant="subtitle1" sx={{ fontWeight: 500 ,textAlign: 'center',fontSize: '1.3rem', paddingTop:'15px'}}>
              {firstName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#bfc7d5' ,textAlign: 'center',fontSize: '0.8  rem'}}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </Typography>
          </Box>
          <Divider sx={{ background: '#444' }} />
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem button component={Link} to="/admin" selected={location.pathname === '/admin'}>
              <ListItemIcon sx={{ color: '#bfc7d5' }}><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            {role === 'admin' && (
              <ListItem button component={Link} to="/admin/users" selected={location.pathname === '/admin/users'}>
                <ListItemIcon sx={{ color: '#bfc7d5' }}><PeopleIcon /></ListItemIcon>
                <ListItemText primary="User Management" />
              </ListItem>
            )}
            <ListItem button component={Link} to="/admin/articles" selected={location.pathname === '/admin/articles'}>
              <ListItemIcon sx={{ color: '#bfc7d5' }}><ArticleIcon /></ListItemIcon>
              <ListItemText primary="Articles Management" />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ p: 3 }}>
          <ListItem button onClick={handleLogout} sx={{ background: '#e74c3c', borderRadius: 1, color: '#fff', '&:hover': { background: '#c0392b' } }}>
            <ListItemIcon sx={{ color: '#fff' }}><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Box>
      </Drawer>
      <Outlet/>
    </Box>
  );
};

export default AdminLayout;
