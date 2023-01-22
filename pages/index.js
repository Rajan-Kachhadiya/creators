import React from "react";
import Layout from "../components/layout";
import { About, Creators, Feature, WelcomeBanner, WhyUs } from "../components/homepage";

export default function Index() {
  return (
    <Layout>
      <WelcomeBanner />
      <Feature />
      <About />
      <Creators />
      <WhyUs />
    </Layout>
  )
}