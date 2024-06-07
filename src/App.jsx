// App.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Ract Helmet
import { HelmetProvider } from 'react-helmet-async';

// Components
import Home from "./Pages/Home";
import Bibliografía from "./Pages/Bibliografía"


// Return
function App() {
    return (
        <>
            <HelmetProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bibliografia" element={<Bibliografía />} />
                    </Routes>
                </Router>
            </HelmetProvider>
        </>
    );
}

// Export
export default App;