import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background  : #2874f0;
    height : 55px
`;



const LogoComponent = styled(Link)(({ theme }) => ({
    marginLeft : '12%', 
    lineHeight : '0',
    color: '#FFFFFF',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        marginLeft : '1%', 
    } 
    
})); 

const SubHeading = styled(Typography)`
    font-size : 11px;
    font-style  : italic;

`;

//while importing html compo in styled compo use it as string

const PlusImage = styled('img')({
    width: 10
});

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {

    const logoUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader >
            <Toolbar style={{ minHeight: 55 }}>
                    <MenuButton
                            color="inherit"
                            onClick={handleOpen}
                        >
                            <Menu />
                    </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <LogoComponent to='/'>
                    <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <Box>
                        <SubHeading>Explore&nbsp;

                            <Box component="span" style={{ color: 'yellow' }}>
                                Plus
                            </Box>
                            <PlusImage src={subUrl} alt="sub-logo" />
                        </SubHeading>
                    </Box>

                </LogoComponent>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header