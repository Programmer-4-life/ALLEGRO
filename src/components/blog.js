import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog';
import Footer from './global-components/footer';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog"  />
        <Blog />
        <Footer />
    </div>
}

export default BlogPage

