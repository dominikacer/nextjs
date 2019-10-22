import React from 'react';
import Head from '../components/shared/Head';
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Carousel from "../components/layout/Carousel";
import Card from "../components/layout/Card";
import Footer from "../components/shared/Footer";

const Home = () => (
  <div>
    <Head />
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Carousel/>
          <Card/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home
