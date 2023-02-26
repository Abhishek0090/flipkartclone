import React from 'react'


import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';

const StyledHeader = styled(AppBar)`
    background  : #2874f0;
    height : 55px
`;

const LogoComponent = styled(Box)`
    margin-left : 12%; 
    line-height : 0;
    margin-bottom:10px;

`;

const SubHeading = styled(Typography)`
    font-size : 11px;
    font-style  : italic;

`;

//while importing html compo in styled compo use it as string

const PlusImage = styled('img')({
    width: 10
});



const Header = () => {

    const logoUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"


    return (
        <StyledHeader >
            <Toolbar>
                <LogoComponent >
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

            </Toolbar>
        </StyledHeader>
    )
}

export default Header