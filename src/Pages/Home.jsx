// Home.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

// React Helmet
import { Helmet } from 'react-helmet-async';

// Menu
import Menu from "../Components/Menu";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Sections
import Resume from "../Sections/Resume";
import Intro from "../Sections/Intro";
import Objectives from "../Sections/Objectives";
import Methods from "../Sections/Methods";
import Results from "../Sections/Results";
import Conclutions from "../Sections/Conclutions";

// Return
const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Inicio &mdash; Tiempos de floración de variedades de Cannabis cultivadas en La Pampa.
                </title>
            </Helmet>
            <Menu />
            <Header />
            <main className="c-main c-main-home">
                <Resume />
                <Intro />
                <Objectives />
                <Methods />
                <Results />
                <Conclutions />
            </main>
            <Footer />
        </>
    );
};

// Export
export default Home;
