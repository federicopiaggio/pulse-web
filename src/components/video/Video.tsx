import React from "react";
import styles from "./video.module.css";
import { Text } from "@/components";

export const Video = () => {
  return (
    <section id="video" className={styles.section}>
      <div className={styles.container}>
        <Text as="h2" className={styles.title}>
          See the Experience in Action
        </Text>
        <Text as="p" className={styles.subtitle}>
          Watch how our team building sessions unfold and feel the energy of the
          group coming together.
        </Text>
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
};
