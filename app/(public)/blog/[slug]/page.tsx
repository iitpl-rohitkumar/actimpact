import React from "react";
import BlogDetailsPage from "./BlogDetailsPage";
import { blogPosts } from "../blogData";

export function generateStaticParams() {
  return [
    ...blogPosts.map((post) => ({ slug: post.slug })),
    { slug: "details" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  return {
    title: `${post.title} — ActImpact Blog`,
    description: post.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetailsPage slug={slug} />;
}
