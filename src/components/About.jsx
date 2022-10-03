import React from "react";
import "./components_css/About.css";

const About = () => {

    return (
        <>
            <div class="featured">
                <h1>About</h1>
                <div class="aimagebox">
                    <div class="aimage">
                        <img src="https://64.media.tumblr.com/b9f3c9524083c3d6cdb8e4e1c594ad95/b717208726291128-ac/s1280x1920/209b8624c0337f6640c1f5fb6c628b336fdb058d.pnj" />
                    </div>
                    <div class="imagetext">
                        <p>Audrey is an artist and developer in a wide range of digital mediums. In addition to her knowledge of the PERN stack including PSQL, Express, React and Node.js, as well as Javascript, HTML and CSS, she has experience with writing, storyboarding, digital art and flash animation.</p>
                        <p id="divider">~</p>
                        <p>Audrey graduated magna cum laude from the University of Illinois at Chicago in 2019 with a Bachelor's in History and a 3.9 GPA. She has also recieved a certificate of completion from Fullstack Academy. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;