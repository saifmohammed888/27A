import React from 'react';
import Banner from '../components/elements/home/banner';
import Features from '../components/elements/home/features';
import ServicesOffered from '../components/elements/home/services';
import LuxuryStylist from '../components/elements/home/stylist';
import ComingSoon from '../components/elements/home/products';
import { USP } from '../components/elements/home/usp';
import { HomeLayout } from '../components/layouts/homeLayout';

export default function Home() {
  return (
    <div>
      <HomeLayout pageName={"Home"}>
        <Banner />
        <LuxuryStylist />
        <USP/>
        <ServicesOffered />
        <Features />
        <ComingSoon/>
      </HomeLayout>
    </div>
  );
}
