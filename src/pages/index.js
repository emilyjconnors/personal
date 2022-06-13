/* eslint-disable */
import * as React from "react"
import '../css/shared.css';
import '../css/index.css';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineMobile } from "react-icons/ai";
import { IoAccessibilityOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import Computer from '../assets/computer.inline.svg';
import norwaylights from '../assets/norway-lights.webm';
import norwaylightsalt from '../assets/norway-lights.mp4';
import hoverimage from '../assets/hoverimage.webp';
import hoverimageblurred from '../assets/hoverimageblurred.webp';
import resume from '../assets/resume.pdf';
import ContactForm from "./contact";
import { CSSTransition } from 'react-transition-group';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IndexPage = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const [inProp, setInProp] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => setInProp(true), 4000);
    }, [])
    
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    React.useEffect(() => {
        const proj = ref.current;
        const threedimage = document.querySelector("#contact");
        ScrollTrigger.matchMedia({
            "(min-width:769px)": function(){
                gsap.to(proj.querySelector(".norway"), {
                    scrollTrigger: {
                        trigger: proj.querySelector(".norway"),
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: 3,
                        toggleActions: "restart pause reverse pause"
                    },
                    y: -100,
                    duration: 3
                }),
                gsap.to(proj.querySelector(".roseburg"), {
                    scrollTrigger: {
                        trigger: proj.querySelector(".roseburg"),
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: 2,
                        toggleActions: "restart pause reverse pause"
                    },
                    y: -50,
                    duration: 4
                }),
                gsap.to(proj.querySelector(".loscabos"), {
                    scrollTrigger: {
                        trigger: proj.querySelector(".loscabos"),
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: 3,
                        toggleActions: "restart pause reverse pause"
                    },
                    y: 100,
                    duration: 3
                })
                var skills = gsap.utils.toArray('.skills .percent');
                skills.forEach((skill) => {
                    gsap.to(skill, {
                        scrollTrigger: {
                            trigger: skill,
                            start: "top 90%",
                            end: "top 10%",
                            toggleActions: "restart reverse restart reverse", 
                        },
                        duration: 1,
                        x: 0
                    })
                })
            },
            "all": function(){
                gsap.from(threedimage, {
                    scrollTrigger: {
                      start: 'top bottom',
                      end: 'bottom top',
                      trigger: threedimage,
                      toggleClass: 'in-view'
                    }
                });
            }
        });
    })
    
    return (
        <main>
            <Helmet>
                <html lang="en" />
                <title>Emily Connors</title>
                <script src="computersvg.js" type="text/javascript" />
                <script src="threedsrc.js" type="text/javascript" />
            </Helmet>
            <CSSTransition in={inProp} timeout={0}>
                {state => (
                    <div className="banner">
                        <div className="inner">
                            <h1>Emily Connors</h1>
                            <h2>Web Developer</h2>
                            <Computer/>
                        </div>
                    </div>
                )}
            </CSSTransition>
            <CSSTransition in={inProp} timeout={0}>
                {state => (
                    <div className="navbar">
                        <div className="wrapper">
                            <div className="logo">
                                <Link to="/">
                                    <StaticImage src="../assets/ec-white.webp" alt="Emily Connors Logo" layout="fixed" width={80} height={80} loading="eager" />
                                </Link>
                            </div>
                            <button onClick={handleToggle} aria-label="menu">
                                {navbarOpen 
                                    ? <div className="menu-icon open"></div> 
                                    : <div className="menu-icon closed"></div>
                                }
                            </button>
                            <div className={`dropdown ${navbarOpen ? "active" : ""}`}>
                                <div className="nav">
                                    <ul>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#work">Work</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/emilyjconnors/" target="_blank"><FaLinkedin role="button" aria-label="LinkedIn"/></a></li>
                                        <li><a href="https://github.com/emilyjconnors" target="_blank"><GoMarkGithub role="button" aria-label="Github"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </CSSTransition>
            <div className="keyboard-background"></div>
            <section id="about">
                <div className="content-wrapper">
                    <span className="hightlight-title">Hello,</span> 

                    <p className="intro-text"><b>I’m Emily and I am a senior front-end developer in Colorado. I have over ten years' work experience in web development and have built and launched over 250 websites.</b></p>

                    <div className="buttons">
                        <Link to="#work" theme="profesional">View Portfolio</Link>
                        <a href={resume} target="_blank" rel="noreferrer">Download Resume</a>
                    </div>

                    <hr/>

                    <div className="bio-box">
                        <div className="frame">
                            <StaticImage src="../assets/emily.webp" alt="Emily Connors" width={230} height={306}/>
                        </div>
                        <span className="name">Emily Connors</span>
                        <span className="title">Website Developer</span>
                        <dl>
                            <dt>Phone</dt><dd><a href="tel: 303-217-3874">303-217-3874</a></dd>
                            <dt>Email</dt><dd><a href = "mailto: hello@emilyconnors.com">hello@emilyconnors.com</a></dd>
                            <dt>Github</dt><dd><a href = "https://github.com/emilyjconnors" target="_blank">@emilyjconnors</a></dd>
                        </dl>
                    </div>

                    <h3>A little about my work experience…</h3>
                    <p>I wasn’t always a "computer nerd"—I got my bachelor's degree in hospitality, tourism and event management. I worked in that industry for 7 years until I was introduced to web technology and realized I had a real interest in coding. In 2014, I moved to NYC to study web development through the immersive boot camp at General Assembly. During that same time, I worked as a Wordpress website developer for a small marketing startup. Not long after,  I was hired as a junior web developer at Simpleview, a tech company in Tucson, Arizona, that builds and provides tools for destination marketing organizations (DMOs).</p> 

                    <p>Within my first year at Simpleview, I was recognized at a company retreat for my work ethic and promoted to CMS developer. In 2018, I was made a lead developer, where I was responsible for managing a small production team building client websites on Simpleview's CMS platform.  In this role, I met all technical and leadership demands, consistently delivering web builds on schedule and under budget. Outside of the office, I have also enjoyed helping out family and friends with small website projects ranging from small business sites to college sports scholarship portfolios.</p> 

                    <h3>My strengths</h3>
                    <p>I believe that my eye for detail and consideration for client needs make me a perfect fit for front-end development. I am most passionate about building products that successfully meet a client's needs while adhering to current best practices in web development. I enjoy working in a team environment where I can collaborate with other developers, designers, project managers and others.  As a manager, I have learned that I excel at project organization and team motivation, and I particularly enjoy mentoring newer developers. I continue to look for opportunities to improve processes where I can.</p>

                    <p>To find out more about me as a web developer, please check out some of my work below. There I have highlighted some of the projects I am most proud to have worked on. If you would rather learn a little more about me as a person, direct yourself to the personal side of this website, through my blog. Here I, and others, write about our experiences in the handicapped community, a topic I am passionate about as an adult living with Spinal Muscular Atrophy (SMA).</p>

                    <hr className="compressed"/>         
                </div>
                {/* <div className="accent-corner"></div>  */}
            </section>
            <section id="work">
                <div className="intro-content">
                    <h3>Highlighted Work and Skills</h3>
                </div>
                <div className="content-wrapper-fullwidth">
                    <div className="inner-grid" ref={ref}>
                        <div className="content-simpleview item">
                            <h4>Simpleview</h4>
                            <p>At Simpleview I built and maintained large-scale, database-driven internet applications. Here are just a few of the projects I've worked on recently.</p>
                            <p><a href="http://www.simpleviewinc.com" target="_blank">See more about Simpleview</a></p>
                        </div>
                        <div className="project denver">
                            <StaticImage src="../assets/denver.webp" alt="Visit Denver" style={{width:"100%"}}/>
                        </div>
                        <div className="project norway item">
                            <video autoPlay muted loop width="100%">
                                <source src={norwaylights} type="video/webm"/>
                                <source src={norwaylightsalt} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="project roseburg">
                            <StaticImage src="../assets/roseburg.webp" alt="Roseburg" style={{width:"100%"}}/>
                        </div>
                        <div className="project loscabos">
                            <StaticImage src="../assets/los-cabos.webp" alt="Los Cabos" style={{width:"100%"}}/>
                        </div>
                        <div className="skills">
                            <h5>Compentencies</h5>
                            <ul>
                                <li><AiOutlineMobile />Mobile First Development</li>
                                <li><IoAccessibilityOutline />Web Accessabitlity</li>
                                <li><MdOutlineManageAccounts />Technical Management</li>
                            </ul>
                            <dl>
                                <div><dt>HTML / CSS</dt><dd><span className="percent" style={{width:"90%"}}><span>90%</span></span></dd></div>
                                <div><dt>Javascrip(ES6) / JQuery</dt><dd><span className="percent" style={{width:"85%"}}><span>85%</span></span></dd></div>
                                <div><dt>React / Vue</dt><dd><span className="percent" style={{width:"60%"}}><span>60%</span></span></dd></div>
                                <div><dt>Foundation / Bootstrap</dt><dd><span className="percent" style={{width:"80%"}}><span>80%</span></span></dd></div>
                                <div><dt>Git / GitHub</dt><dd><span className="percent" style={{width:"75%"}}><span>75%</span></span></dd></div>
                            </dl>
                        </div>
                        <div className="project saltlake">
                            <StaticImage src="../assets/salt-lake.webp" alt="Salt Lake City" style={{width:"100%"}}/>
                        </div>
                        <div className="project saltlakemobile">
                            <StaticImage src="../assets/salt-lake-mobile.webp" alt="Salt Lake City" style={{width:"100%"}}/>
                        </div>
                        <div className="content-awards">
                            <p>Many of the websites I have built have won awards in their respective industries and in website technology (including w3 Awards and Hermes Creative Awards). To find out more, <a href = "mailto: hello@emilyconnors.com">email me.</a></p>
                        </div>
                        <div className="project oakland">
                            <StaticImage src="../assets/oakland.webp" alt="Oakland" style={{width:"100%"}}/>
                        </div>
                        <div className="project alabama">
                            <StaticImage src="../assets/alabama.webp" alt="Alabama" style={{width:"100%"}}/>
                        </div>
                        <div className="project queenstown">
                            <StaticImage src="../assets/queenstown.webp" alt="Visit Queenstown" style={{width:"100%"}}/>
                        </div>
                        <div className="project traversecity">
                            <StaticImage src="../assets/traverse-city.webp" alt="Traverse City" style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <h4>Freelance</h4>
                    <div className="freelance">
                        <p>On the side, I help small businesses, family and friends get small website projects up and running. I work with clients to determine their webiste needs and find the best solutions to meet them. Often this includes custom design work, server and domain setup, content creation, video and photo editing and training.</p>
                        <StaticImage src="../assets/goldenruledogtraining.webp" alt="Golden Rule Dog Training"/>
                        <p className="quote"><q>Emily Connors took what seemed like a daunting task (completely remaking my business website) and walked me through it with ease and confidence.  I have no technical skills.  Emily has not only superior skills but has the added and highly necessary skills to explain to laypeople (like me) what is needed to reach their goals.  She makes technology seem unintimidating!  I love my website and have been getting a lot of business from it.  Five stars!</q> - Elaine Berg, GoldenRuleDogTraining.com</p>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="content-wrapper-fullwidth-image">
                    <div 
                        id="gl" 
                        data-imageoriginal={hoverimage} 
                        data-imagedepth={hoverimageblurred}
                        data-horizontalthreshold="45" 
                        data-verticalthreshold="55">
                    </div>
                    <div className="inner">
                        <h3>Contact Me</h3>
                        <ContactForm />
                    </div>
                </div>
            </section>
            <footer>
                <div className="logo">
                    <Link to="/">
                        <StaticImage src="../assets/ec-white.webp" alt="Emily Connors Logo" width={80} height={80} layout="fixed"/>
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default IndexPage
 