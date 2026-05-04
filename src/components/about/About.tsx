import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>About Me</h2>
            <h3 className={styles.subtitle}>Matías Pergolani</h3>
            <p className={styles.text}>
              I&apos;m a percussionist and music teacher. I&apos;ve been working
              with Rhythmic Sign Language for over ten years.
            </p>
            <p className={styles.text}>
              I&apos;ve worked with people of all ages, from different places
              and cultures, helping them connect through the universal language
              of music.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/matias-2.png"
              alt="Photo of Matías Pergolani"
              className={styles.image}
              width={1504}
              height={946}
              sizes="(min-width: 768px) 42vw, 92vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
