
import React from 'react';
import styles from './styles/Home.module.css'; 
import heroImage from './assets/hero-image.jpg'; 
import clothesImage from './assets/clothes.jpg'; 
import shoesImage from './assets/shoes.jpg'; 
import accessoriesImage from './assets/accessories.jpg'; 
import founderImage from './assets/founder.jpg'; 



const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.heroContent}>
          <h1>Spring/Summer Collection 2023</h1>
          <p>Get up to 30% off on new arrivals</p>
          <a href="/products" className={styles.shopNowButton}>Shop Now</a>
        </div>
      </section>

      <section className={styles.featuredProducts}>
        <div className={styles.featuredProduct} style={{ backgroundImage: `url(${clothesImage})` }}>
          <a href="/products" className={styles.productLink}>CLOTHES</a>
        </div>
        <div className={styles.featuredProduct} style={{ backgroundImage: `url(${shoesImage})` }}>
          <a href="/products" className={styles.productLink}>SHOES</a>
        </div>
        <div className={styles.featuredProduct} style={{ backgroundImage: `url(${accessoriesImage})` }}>
          <a href="/products" className={styles.productLink}>ACCESSORIES</a>
        </div>
      </section>

      <section className={styles.aboutUs} id="aboutUs">
  <div className={styles.aboutUsContent}>
    <div className={styles.aboutUsIntro}>
      <div className={styles.aboutUsLeft}>
        <h2 className={styles.aboutUsTitle}>About Us</h2>
        <p>
          Welcome to XYZ Clothing, where fashion meets individuality. Our journey began with a passion for empowering individuals to express themselves through their personal style. We believe that clothing is more than just fabric; it's a canvas for self-expression, creativity, and confidence.
        </p>
        <div className={styles.founderMessage}>
          <img src={founderImage} alt="Founder" className={styles.founderImage} />
          <p>"Fashion is not just about clothing, it's about expressing who you are."</p>
          <p className={styles.founderName}>John Doe</p>
          <p className={styles.founderTitle}>Founder, XYZ Clothing</p>
        </div>
      </div>
      <div className={styles.aboutUsRight}>
        
        <p>Explore our latest collections and discover your unique style with XYZ Clothing. Our fashion experts are dedicated to helping you find the perfect outfit for any occasion. Join us on this journey of self-expression and let your style shine.</p>
        <a href="/login" className={styles.learnMoreLink}>Learn More</a>
      </div>
    </div>
  </div>
</section>

<section className={styles.contactUs} id="contactUs">
        <div className={styles.contactUsContent}>
          <h2 className={styles.contactUsTitle}>Contact Us</h2>
          <p className={styles.contactUsText}>
            Have questions or feedback? We'd love to hear from you! Reach out to our friendly support team.
          </p>
          <a href="/login" className={styles.contactUsLink}>Email Us</a>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
