import Image from "next/image";
import useState from 'react';
// import Head from "next/head";
import Card from "./Card.jsx";
import styles from "./page.module.css";
// import Results from "./results/page.jsx";
import brokenHeart from "./public/images/broken-heart-svgrepo-com.svg";

export default function Home() {
  function HandleClick() {
  }

  // the main page

  
  return (

    <><div className={styles.page}>
      <main className={styles.card}>

        {/* category options (hardcoded) */}
        {/*
        
      */}
        <Card title={'TITLE'} />
      </main>
      <footer className={styles.footer}>
        <div>Test</div>
      </footer>
    </div></>
  );
}
