import React from "react";
import "./components_css/Portfolio.css";

const Portfolio = () => {

    return (
        <>
            <article class="pfeatured">
                <h1>Portfolio</h1>
                <div class="articles">
                    <article class="pimagebox">
                        <div class="pimage">
                            <a href="https://agile-falls-71270.herokuapp.com/"> <img src="https://64.media.tumblr.com/210274eb6138d33e0305264565c1e043/3c91452b31102642-5c/s2048x3072/511a1d6fad57df0698276028bb1121b7b4e56c7b.pnj"/></a>
                        </div>
                        <div class="pimagetext">
                            <p>Grace Shopper is an e-commerce website specializing in analog music. It allows users to search the site's catalog with several different categories, includes a checkout system and cart, and even has a front page with additional features.</p>
                        </div>
                    </article>
                    <article class="pimagebox">
                        <div class="pimage">
                            <a href="https://zesty-bavarois-cb650e.netlify.app/"> <img src="https://64.media.tumblr.com/2c1e708c0cbbe0d63306606c6548e2ff/3c91452b31102642-88/s2048x3072/c0a4f42f5e9ec3a3a01560a4f49133b1f8808044.pnj"/></a>
                        </div>
                        <div class="pimagetext">
                            <p>Fitness Tracker is a pair programming project done during my enrollment in Fullstack Academy. It is a fully functional website allowing users to log in, as well as create and edit fitness routines and activities.</p>
                        </div>
                    </article>
                </div>
                <div>More to come...</div>
            </article>
        </>
    )
}

export default Portfolio;