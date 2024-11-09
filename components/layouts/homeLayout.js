import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import Head from 'next/head'

export const HomeLayout = ({pageName, children }) => {
  return (
    <div>
        <Head>
        <title>27A - Luxury Hair Experts - {pageName}</title>
        <meta name="description" content="Welcome to 27A, luxury hair experts" />
        <link rel="icon" href="/images/logo.jpeg" />
        <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            <Navbar />
              {children}
            <Footer/>  
        </main>
    </div>
  )
}
