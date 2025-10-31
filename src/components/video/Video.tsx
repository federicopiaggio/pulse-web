import React from 'react';
import styles from './video.module.css';

export default function Video() {
  return (
    <section id="video" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>See the Experience in Action</h2>
        <p className={styles.subtitle}>
          Watch how our team building sessions unfold and feel the energy of the group coming together.
        </p>
        <div className={styles.videoWrapper}>
          <div className={styles.videoResponsiveWrapper}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            />
          </div>
        </div>
      </div>
    </section>
  );
}