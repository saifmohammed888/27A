import React from 'react';
import Head from 'next/head';
import Navbar from '../components/common/navbar';
import Banner from '../components/elements/home/banner';
import Features from '../components/elements/home/features';
import ServicesOffered from '../components/elements/home/services';
import LuxuryStylist from '../components/elements/home/stylist';
import Footer from '../components/common/footer';
import ComingSoon from '../components/elements/home/products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>27A - Luxury Hair Experts</title>
        <meta name="description" content="Welcome to the Next.js home page" />
        <link rel="icon" href="/images/logo.jpeg" />
        <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <Navbar />
        <Banner />
        <LuxuryStylist />
        <ServicesOffered />
        <Features />
        <ComingSoon/>
        <Footer/>
      </main>
    </div>
  );
}
