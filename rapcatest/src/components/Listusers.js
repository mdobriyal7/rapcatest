import React from 'react'
import { apicontext } from '../App'
import { useContext } from 'react'
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { IconButton, Typography } from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import { CardActionArea } from '@mui/material';
import Userform from './Userform'


const useStyle=makeStyles({root:{maxWidth:200},media:{height:140}})

export default function Listuser() {
    const { apidata } = useContext(apicontext)
    const Classes=useStyle();

    return (<>
        <Container>
            <Grid container spacing={6}>

                {apidata.map((element) => {
                    return <Grid item key={element.id} xs={12} md={6} lg={3}>
                        <Card>
                            <CardActionArea>
                        <CardHeader title={element.first_name + ' ' + element.last_name} />
                        <CardContent>{element.email}</CardContent>
                        <CardMedia component="img"  style={{height:200,width:280}}image= {element.avatar} />
                        </CardActionArea>
                        </Card>

                    </Grid>
                })}
            </Grid>
        </Container>
            <Userform/>
            </>



    )






}