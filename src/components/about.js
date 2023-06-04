import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import About from './section-components/about';
import Counter from './section-components/counter';
import Service from './section-components/service';
import AgentV3 from './section-components/agent';
import Testimonial from './section-components/testimonial';
import MoreInfo from './section-components/more-info';
import Footer from './global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <About />
        <Counter />
        <Service />
        <AgentV3 />
        <Testimonial />
        <MoreInfo />
        <Footer />
    </div>
}

export default AboutPage

