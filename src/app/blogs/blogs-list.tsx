"use client"

import AllArticles from "./all-articles";
import HeroSection from "./hero-section";
import LatestBlogs from "./latest-blogs";




const BlogsList = () => {
  return (
    <div>
      <HeroSection />
      <LatestBlogs />
      <AllArticles />
    </div>
  );
}

export default BlogsList;