import React, { Component } from "react";
import Landing from "../Sections/Landing";
import About from "../Sections/About";
import Experience from "../Sections/Experience";
import Skills from "../Sections/Skills";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import BackToTop from "../Components/BackToTop/main";
import NavigationBar from "../Components/NavigationBar/main";

class SiteLayout extends Component {
    render() {
        return (
            <main>
                <NavigationBar />
                <BackToTop />
                
                <Landing />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
                
                <Footer />
            </main>
        )
    }
}

export default SiteLayout;