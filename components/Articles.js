import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Box, Stack, Button } from '@mui/material'
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));


const Articles = ({ mdata }) => {
  // console.log(mdata)

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {mdata.posts.map((curElem) => (
            <Grid xs={2} sm={4} key={curElem.id}>
              <Box component="span" sx={{ p: 2 }}>
                <Box marginRight="5px" sx={{ p: 2 }}>
                  <Item>{curElem.tags }</Item>
                </Box>
                <Item><h3>{curElem.id}-{curElem.title}</h3></Item>

                <Item>{curElem.body}</Item>
              </Box>


            </Grid>
          ))}
        </Grid>
      </Box>



    </div>
  )
}

export default Articles


/*{
         mdata.posts.map((curElem)=>{
           return(
           <div key={curElem.id}>
   
           </div>)
         })
         
        mdata.posts.map((item) =>{
          return (

          )
        })
      }*/