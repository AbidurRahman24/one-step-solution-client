import React from 'react';
import Footer from '../../shared/Footer';
import Navigation from '../../shared/Navigation';
import Header from '../header/Header';
import HomeServices from '../services/HomeServices';
import Artical from '../home/artical/Artical';
import Achieve from '../home/achievements/Achieve';
import Brand from '../home/brand/Brand';
import Contact from '../contact/Contact';


const Home = () => {
    return (
        <>
            <header>
                
            </header>
            <main>
                <Header ></Header>
                <HomeServices></HomeServices>
                <Artical></Artical>
                <Achieve></Achieve>
                <Brand></Brand>
                <Contact></Contact>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;