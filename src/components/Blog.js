import React from 'react';
import styles from './styles/Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Fashion Trends',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      title: 'Accessorizing for Every Occasion',
      content: 'Pellentesque habitant morbi tristique senectus et netus...',
    },

    {
        id: 3,
        title: 'The Art of Layering: Mastering Fall Fashion',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
      {
        id: 4,
        title: 'Sustainable Fashion: Building a Greener Wardrobe',
        content: 'Pellentesque habitant morbi tristique senectus et netus...',
      },
      {
        id: 5,
        title: 'Accessorizing Your Outfits Like a Pro',
        content: 'Ut cursus quam a est euismod, vitae cursus nunc bibendum...',
      },
      {
        id: 6,
        title: 'The Classic Black Dress: A Timeless Wardrobe Staple',
        content: 'Nullam auctor libero eget purus gravida...',
      },
      
      {
        id: 7,
        title: 'Summer Essentials: Must-Have Styles for Hot Days',
        content: 'Nunc at nisi nec justo volutpat gravida...',
      },
      {
        id: 8,
        title: 'Mix and Match: Creating Versatile Outfit Combinations',
        content: 'Praesent eu ante eget nisl laoreet sodales...',
      },
      {
        id: 9,
        title: 'Finding the Perfect Jeans: A Denim Lover\'s Guide',
        content: 'Vivamus auctor dolor id libero consectetur...',
      },
      {
        id: 10,
        title: 'Accessorizing with Jewelry: Tips and Tricks',
        content: 'Maecenas varius elit eget tristique condimentum...',
      },
   
  ];

  return (
    <div className={styles.blogContainer}>
      <h2 className={styles.blogTitle}>Latest Blog Posts</h2>
      <div className={styles.blogList}>
        {blogPosts.map(post => (
          <div key={post.id} className={styles.blogPost}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postContent}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
