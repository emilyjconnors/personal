/* eslint-disable */
import * as React from "react"
import '../css/shared.css';
import '../css/blog.css';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const BlogPage = () => {
    return (
        <main id="blog">
            <title>Emily Connors</title>
            <div className="navbar">
                <div className="wrapper">
                    <div className="logo">
                        <Link to="/">
                            <StaticImage src="../assets/ec-white.webp" alt="Emily Connors Logo" layout="fixed" width={80} height={80} loading="eager" />
                        </Link>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/emilyjconnors/" target="_blank"><FaLinkedin role="button" aria-label="LinkedIn"/></a></li>
                            <li><a href="https://github.com/emilyjconnors" target="_blank"><GoMarkGithub role="button" aria-label="Github"/></a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <section>
                <div className="content-wrapper">
                    <span className="hightlight-title">Coming Back Soon!</span>

                    <p className="intro-text"><b>My Blog is currently undergoing a redesign. Please come back soon to read from a collective of perspectives and personal experiences from people in the handicapped community.  Here, each author has unique insights on a topic -- from having lived it already. And although I'm sure similar content is out there already on the World Wide Web, I hope you find our stories interesting and informative. At the very least, you'll get to know a little about me and my life with Spinal Muscular Atrophy.</b></p>

                    <div className="buttons">
                        <Link to="/">Return Home</Link>
                    </div>
                </div>
            </section>
            <footer>
                <div className="logo">
                    <Link to="/">
                        <StaticImage src="../assets/ec-white.webp" alt="Emily Connors Logo" layout="fixed" width={80} height={80} />
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default BlogPage
 