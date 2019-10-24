import React from 'react';
import Head from '../components/shared/Head';
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Carousel from "../components/layout/Carousel";
import Card from "../components/layout/Card";
import Footer from "../components/shared/Footer";

// temporary api
import {MOVIE_DATA} from "../data/movie-api";

const Home = () => (
  <div>
    <Head />
    <Navbar/>

    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Carousel/>
            <Card movieList={MOVIE_DATA}/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>{`
      .home-page{
        padding: 80px 0 0;
      }
    `}</style>
  </div>
);

export default Home
