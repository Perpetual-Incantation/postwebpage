import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
    <h1 align="center">Posts Via Fetch API</h1>

    <Articles mdata={mdata}/>
    </div>
  )
}
