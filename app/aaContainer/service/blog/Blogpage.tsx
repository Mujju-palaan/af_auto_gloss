import React from 'react'
import Blogcard from '@/components/cards/Blogcard'
import { BlogData } from '@/data/blogData';

const BlogPage = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {BlogData.map((blog, index) => (
        <Blogcard
          key={index}
          image={blog.image}
          date={blog.date}
          question={blog.question}
          answer={blog.answer}
        />
      ))}
    </div>
  );
};

export default BlogPage