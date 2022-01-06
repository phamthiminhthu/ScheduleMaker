import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DrawerButton from './DrawerButton';
import ImageLogo from '../../assets/logo.png';
import avatar from '../../assets/avatarDefault.png';
import { instance } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import './HeaderHasAuthor.scss';



const settings = [{ content: 'Tài khoản', url: '/student/account' },
{ content: 'Logout', url: '/student/account' }];


const HeaderHasAuthor = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [dataUser, setDataUser] = React.useState('');
    const [image, setImage] = React.useState('');

    React.useEffect(() => {
        let load = true;
        if (load) {
            instance.get(`/api/current-user`).then(res => {
                setDataUser(res.data);
                setImage(res.data.avatar);
            });
        }
        return (() => {
            load = false;
        })

    }, []);
    const history = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();
        instance.post(`/api/logout`).then(res => {
            if (res.status === 200) {
                console.log(res);
                localStorage.removeItem('auth_token')
                localStorage.removeItem('auth_email')
                history('/')
            }
        })

    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <AppBar position="static" style={{ 'backgroundColor': '#554bb9' }} className="header-has-author">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <DrawerButton />

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src={ImageLogo}></img>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={image ? image : avatar} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.content} onClick={handleCloseNavMenu}>

                                    {
                                        setting.content === 'Logout' ? <button className='btn border-0' onClick={logoutSubmit}> <Typography textAlign="center">{setting.content}</Typography></button>
                                            : (<Link to={setting.url} className="nav text-dark"><Typography textAlign="center">{setting.content}</Typography></Link>)

                                    }
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderHasAuthor;