import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Grid,
	Typography,
	Box,
       } from '@material-ui/core';
import	Navbar from './Navbar'
import Wel from  "../Wel.gif";

const useStyles=makeStyles(theme=>({
	
	avatar:{
		
		width:theme.spacing(35),
		height:theme.spacing(35),
		margin:theme.spacing(1),
		
	}
	,
	title:{
		
	color:"tomato"	
		
	},
	
	typedContainer:{

     position:"absolute",
     top:"50%",
	 left:"50%",
	 transform:"translate(-50%,-50%)",
	 width:"100vw",
	 textAlign:"center",
	 zIndex:1
	
	
	}
	
}))


function Welcome() {
	
	const classes =useStyles();
	
  return (
    <div>
	<Navbar/>
	
	<Box className={classes.typedContainer}>
	
	<Grid container justify="center">
	
	<Avatar className={classes.avatar} src={Wel} alt="Welcome"/>
	</Grid><br/>
	<Typography variant="h4" >
	
	<Link to="/" className={classes.title}>Enter To My Dev-House </Link>
	
	</Typography>
	
	
	
	
	
	
	</Box>
	
	</div>
  );
}

export default Welcome;
