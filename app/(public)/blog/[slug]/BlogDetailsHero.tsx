import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../blogData";

interface BlogDetailsHeroProps {
  post: BlogPost;
}

export default function BlogDetailsHero({ post }: BlogDetailsHeroProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
      <div className="relative w-full min-h-[300px] sm:min-h-[302px] rounded-[20px] overflow-hidden flex flex-col justify-center p-6 sm:p-10 lg:p-12 shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/hero-section_36465e46.png"
          alt={post.title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#00000066]" />

        {/* Content Container */}
        <div className="relative z-10  text-white flex flex-col gap-3 mx-auto text-center">
          <Link
            href="/blog"
            className="font-sans font-bold text-[14px] sm:text-[16px] text-[#FF5523] uppercase tracking-wider hover:underline inline-block w-fit mx-auto"
          >
            Blogs
          </Link>

          <h1 className="font-serif font-medium text-[28px] sm:text-[36px] lg:text-[42px] text-white leading-[1.2] max-w-[885px]">
            {post.title}
          </h1>

          {/* Badges Row */}
          <div className="flex items-center justify-end gap-3 mt-1">
            <span className="bg-[#FDF3EC]/35 backdrop-blur-xs text-white font-sans font-medium text-[13px] sm:text-[14px] px-3.5 py-1 rounded-[14px]">
              {post.tag}
            </span>
            <span className="bg-[#FDF3EC]/35 backdrop-blur-xs text-white font-sans font-normal text-[13px] sm:text-[14px] px-3.5 py-1 rounded-[14px]">
              {post.date}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
