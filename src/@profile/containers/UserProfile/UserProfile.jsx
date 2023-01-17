import React from 'react'
import { FlexWrapp, StyledButton } from './StyledUserProfile'
import { Box, Typography, Grid, Container } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const UserProfile = () => {
    return (
        <Container maxWidth='xl' sx={{ mt: '150px' }}>
            <Typography variant='h3' sx={{ mb: '141px' }}>Welcome, SUZANNE EATON</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <StyledButton>
                        <FlexWrapp>
                            <PersonOutlineIcon 
                            
                            fontSize='large' />
                            <div className="content">

                                <p className="title">My profile</p>
                                <p className="description">Show and update your personal information</p>
                            </div>
                        </FlexWrapp>


                    </StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton>
                        <FlexWrapp>
                            <ShoppingBasketOutlinedIcon fontSize='large' />
                            <div className="content">

                                <p className="title">Purchase history</p>
                                <p className="description">Show and update your personal information</p>
                            </div>
                        </FlexWrapp>
                    </StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton>
                        <FlexWrapp>

                            <FavoriteBorderIcon fontSize='large' />
                            <div className="content">
                                <p className="title">My wishlist</p>

                                <p className="description">Show and update your personal information</p>
                            </div>
                        </FlexWrapp>

                    </StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton>
                        <FlexWrapp>

                            <ArticleOutlinedIcon fontSize='large' />
                            <div className="content">
                                <p className="title">Address book</p>

                                <p className="description">Show and update your personal information</p>
                            </div>
                        </FlexWrapp>

                    </StyledButton>
                </Grid>

            </Grid>
        </Container>

    )
}

export default UserProfile

