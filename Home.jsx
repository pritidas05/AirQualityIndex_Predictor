import React from 'react';
import web from "../src/Image/s1.jpg";
import web1 from "../src/Image/web1.jpg";
import web2 from "../src/Image/web2.jpg";
import HomeImg from "../src/Image/background.jpg";
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <section
       id={styles.header}
      className={`d-flex align-items-center ${styles.nav_bg}`}
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure the minimum height is set to cover the viewport
        minWidth : '100%'
      }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className={`col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ${styles['header-content']}`}>
                  <h1 >
                    Prevent
                    <strong className={styles['brand-name']}> Air Pollution </strong>
                  </h1>
                  <h2 className={`my-3 ${styles['header-subtitle']}`}>
                    PROTECT NATURE
                  </h2>
                  <div className={`mt-3 ${styles['header-button']}`}>
                    <NavLink to="/login" className={`btn-get-started ${styles['btn-get-started']}`}>
                      Get started
                    </NavLink>
                  </div>
                </div>
                <div className={`col-lg-6 order-1 order-lg-2 ${styles['header-img']}`}>
                  <div className={styles['image-container']}>
                    <img src={web} className={` ${styles.animated} ${styles['middle-image']} ${styles['rectangular-image']}`} alt="" />
                    <img src={web2} className={`${styles.animated} ${styles['left-image']} ${styles['rectangular-image']}`} alt="" />
                    <img src={web1} className={`${styles.animated} ${styles['right-image']} ${styles['rectangular-image']}`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;