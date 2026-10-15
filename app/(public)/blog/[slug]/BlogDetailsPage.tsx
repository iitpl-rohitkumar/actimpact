import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import BlogDetailsHero from "./BlogDetailsHero";
import BlogDetailsContent from "./BlogDetailsContent";
import BlogNewsletterSection from "../BlogNewsletterSection";
import { blogPosts, BlogPost } from "../blogData";

interface BlogDetailsPageProps {
  slug?: string;
}

export default function BlogDetailsPage({ slug }: BlogDetailsPageProps) {
  const currentPost: BlogPost =
    blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <WebsiteLayout>
      <BlogDetailsHero post={currentPost} />
      <BlogDetailsContent post={currentPost} />
      <BlogNewsletterSection />
    </WebsiteLayout>
  );
}
