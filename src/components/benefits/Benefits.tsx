import React from "react";
import styles from "./benefits.module.css";

export const Benefits = () => {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Your Team Will Achieve</h2>
        <p className={styles.subtitle}>
          This experience is designed to develop key skills in a fun and
          engaging environment.
        </p>
        <div className={styles.grid}>
          {/* Benefit Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0115 15v3h1zM4.75 12.094A5.973 5.973 0 004 15v3H3v-3a3.005 3.005 0 01.25-1.094zM12 15v3h-2v-3a3 3 0 013-3h1a3 3 0 013 3v3h-2v-3a1 1 0 00-1-1h-1a1 1 0 00-1 1z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Initiative</h3>
            <p className={styles.cardText}>
              Learn to trust your intuition and gain confidence to put your
              ideas forward.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Focus</h3>
            <p className={styles.cardText}>
              Concentrate on your own beat while listening to the overall
              groove.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Presence</h3>
            <p className={styles.cardText}>
              Experience being fully present, in this moment while also being
              aware of what is about to come.
            </p>
          </div>

          {/* Benefit Card 4 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0110 13v-2.26A5 5 0 0112.258 6H14a4 4 0 110 8h-1.152A6.973 6.973 0 0012 16c0 .34.024.673.07 1h.862a4 4 0 100-2h-1.93zM3.5 13.33A5 5 0 016 11V8.74A5 5 0 013.742 4H2a4 4 0 100 8h1.152A6.973 6.973 0 014 10c0-.34-.024-.673-.07-1H2.07A4 4 0 102 14h1.5z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Leadership</h3>
            <p className={styles.cardText}>
              Find out what makes you trust someone to lead you, what makes you
              a trust-worthy leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
