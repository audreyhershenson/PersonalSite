import React from "react";
import "./components_css/Home.css";

const Home = () => {

    return (
        <>
            <div className="featured">
                <div className="introbox"><h1>Digital Artist, Designer and Programmer</h1>
                <p>Audrey is a full stack web developer proficient with the PERN stack who specializes in attractive, eye-catching websites and applications that will help you stand out from the crowd.</p></div>
                <br></br>
                <article className="imagebox">
                    <img src="https://64.media.tumblr.com/2c01ec0de2bb1e0f074d36470cf6e31d/128c098bc661dea7-76/s2048x3072/1752370919eab1ed89c74d5e06a349aa38872552.jpg" alt="Audrey's perfect cat, Zoey" />
                    <p>Audrey's very photogenic cat, Zoey</p>
                </article>
                <br></br>
            </div>
        </>
    )
}

export default Home;