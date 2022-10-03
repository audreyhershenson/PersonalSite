import React from "react";
import "./components_css/Footer.css";

const Footer = () => {

    return (
        <footer>
            <div>For job inquiries or questions, please email me at audreyhershenson@gmail.com.</div>
            <div>
                <a className="footerImage" href="https://steamcommunity.com/id/audreys_trick/myworkshopfiles/?appid=294100"> <img src="https://64.media.tumblr.com/8e5b80cfea70f36cdef45f92de73b44d/fa501a58efe79555-72/s75x75_c1/677ae2ebc4f1bba4c77bff9013c63933eb0c47bc.pnj" /></a>
                <a className="footerImage" href="https://github.com/audreyhershenson"> <img src="https://64.media.tumblr.com/23d9b6a0931f9addbb081baec744341d/b77f2662d3878a7a-17/s75x75_c1/a5bc12bdb2dd4b441c875e0bb39ebe1074fbd48b.pnj" /></a>
                <a className="footerImage" href="https://www.linkedin.com/in/audrey-hershenson/"> <img src="https://64.media.tumblr.com/e5fcfc92cd11274ceebf7d711defcd01/cbd9bdca0dff0369-3c/s75x75_c1/23a4542b3283632766cd3cfb65612d074c129578.pnj" /></a>
            </div>
        </footer>
    )
}

export default Footer;