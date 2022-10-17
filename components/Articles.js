import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Grid, Box, Stack, Button } from '@mui/material'
import styled from '@mui/system/styled';
import Paper from '@mui/material/Paper';


const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  margin: '20px',
}));

const myItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 20 ,

}));


const Articles = ({ mdata }) => {
  // console.log(mdata)

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid className='mybox'container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {mdata.posts.map((curElem) => (
            <Grid xs={2} sm={4} key={curElem.id}>
              <Box  component="span" margin={5} sx={{ p: 2 }}>
                <Stack direction="row" spacing={2} marginLeft={20} alignItems='center' >
                  {curElem.tags.map((tag) => (
                    <myItem><h3 className='tag'>{tag}</h3></myItem>
                  ))
                  }

                </Stack>

                <Item><h3 className='title'>{curElem.title}</h3></Item>

                <Item className='bosy'>{curElem.body}</Item>
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