import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Header, Footer, Portfolio, About } from "./index";

const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
        </>
    );
};
export default App;
