"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";

export function Blog55() {
  const mainPost = {
    src: "https://images.pexels.com/photos/33011250/pexels-photo-33011250.jpeg",
    category: "Health",
    title: "Understanding HIV Prevention Strategies",
    desc: "Learn effective methods to prevent HIV transmission.",
    author: "John Doe",
    authorImg: "https://images.pexels.com/photos/33018651/pexels-photo-33018651.jpeg",
    date: "11 Jan 2022",
    readTime: "5 min read",
    href: "#",
  };

  const sidePosts = [
    {
      src: "https://images.pexels.com/photos/33023725/pexels-photo-33023725.jpeg",
      category: "Environment",
      title: "Climate Change and Health",
      desc: "Explore the impact of climate on health.",
      author: "Jane Smith",
      authorImg: "https://images.pexels.com/photos/12079506/pexels-photo-12079506.jpeg",
      date: "15 Feb 2022",
      readTime: "7 min read",
      href: "#",
    },
    {
      src: "https://images.pexels.com/photos/5789278/pexels-photo-5789278.jpeg",
      category: "Community",
      title: "Supporting Local Initiatives",
      desc: "Join us in empowering local communities.",
      author: "Emily Johnson",
      authorImg: "https://images.pexels.com/photos/20873461/pexels-photo-20873461.jpeg",
      date: "20 Mar 2022",
      readTime: "4 min read",
      href: "#",
    },
    {
      src: "https://images.pexels.com/photos/6646817/pexels-photo-6646817.jpeg",
      category: "Awareness",
      title: "Raising Awareness on HIV",
      desc: "Understanding the importance of awareness campaigns.",
      author: "Michael Brown",
      authorImg: "https://images.pexels.com/photos/11626597/pexels-photo-11626597.jpeg",
      date: "30 Apr 2022",
      readTime: "6 min read",
      href: "#",
    },
    // Additional dummy posts
    {
      src: "https://images.pexels.com/photos/3845744/pexels-photo-3845744.jpeg",
      category: "Health",
      title: "New Advances in HIV Treatment",
      desc: "Discover the latest breakthroughs in medical research.",
      author: "Alice Green",
      authorImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      date: "05 May 2022",
      readTime: "8 min read",
      href: "#",
    },
    {
      src: "https://images.pexels.com/photos/1282307/pexels-photo-1282307.jpeg",
      category: "Environment",
      title: "Community-led Climate Initiatives",
      desc: "How locals are making a difference in climate action.",
      author: "David Lee",
      authorImg: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      date: "18 May 2022",
      readTime: "5 min read",
      href: "#",
    },
  ];

  const scrollRef = useRef(null);

  function scrollUp() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -200, behavior: "smooth" });
    }
  }

  function scrollDown() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 200, behavior: "smooth" });
    }
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 md:mb-18 lg:mb-20 max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Blog</p>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-5xl">
            Latest Insights and Updates
          </h1>
          <p className="md:text-md">Explore our latest blog posts.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Main Breaking News */}
          <a
            href={mainPost.href}
            className="group relative flex-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={mainPost.src}
              alt={mainPost.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="mb-1 font-semibold">{mainPost.category}</p>
              <h3 className="text-3xl font-bold leading-tight">{mainPost.title}</h3>
              <p className="mt-2 text-sm">{mainPost.desc}</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={mainPost.authorImg}
                  alt={mainPost.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{mainPost.author}</p>
                  <div className="flex items-center text-xs opacity-80">
                    <span>{mainPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{mainPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Side posts with scroll buttons */}
          <div className="flex flex-col gap-2 flex-[0.6] relative">
            {/* Scroll buttons */}
            <div className="flex justify-end mb-2 gap-2">
              <button
                onClick={scrollUp}
                aria-label="Scroll up"
                className="rounded bg-green-700 p-2 text-white hover:bg-green-600 disabled:opacity-50"
              >
                <RxChevronUp size={20} />
              </button>
              <button
                onClick={scrollDown}
                aria-label="Scroll down"
                className="rounded bg-green-700 p-2 text-white hover:bg-green-600 disabled:opacity-50"
              >
                <RxChevronDown size={20} />
              </button>
            </div>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex flex-col gap-6 max-h-[620px] overflow-y-auto pr-2"
            >
              {sidePosts.map((post, i) => (
                <a
                  key={i}
                  href={post.href}
                  className="group flex gap-4 rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-28 h-28 rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="mb-1 font-semibold text-green-900">{post.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-700">{post.desc}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <img
                        src={post.authorImg}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs font-semibold">{post.author}</p>
                        <div className="flex items-center text-xs text-gray-600">
                          <span>{post.date}</span>
                          <span className="mx-1">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-10 md:mt-14 lg:mt-16">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
