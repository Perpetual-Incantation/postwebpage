import Head from 'next/head'
import Image from 'next/image'
import Articles from '../components/Articles'


export async function getStaticProps(){
  console.log("hello")
    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    console.log(data)
    return {
        props:{
           mdata: data,
        },
    }
}

export default function Home({mdata}) {
  return (
    <div>
    <title>Posts via Fetch API</title>
    <h1 align="center" margin="20px">Posts Via Fetch API</h1>
    <br></br>
    <br></br>
    <br></br>

    <Articles mdata={mdata}/>
    
    </div>
  )
}
