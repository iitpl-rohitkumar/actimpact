import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import BlogHeroSection from "./BlogHeroSection";
import BlogGridSection from "./BlogGridSection";
import BlogNewsletterSection from "./BlogNewsletterSection";

export default function BlogPage() {
  return (
    <WebsiteLayout>
      <BlogHeroSection />
      <BlogGridSection />
      <BlogNewsletterSection />
    </WebsiteLayout>
  );
}
