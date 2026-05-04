"use client";

import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import {
  Text,
  Video,
  Benefits,
  About,
  Contact,
  WhatsAppButton,
  Banner,
  Header,
} from "@/components";
import { useRellax } from "../hooks/useRellax";
import styles from "./Welcome.module.css";

export default function Welcome() {
  useRellax();
  return (
    <div>
      {/* Header & Navigation */}
      <Header />

      <section className={styles.section}>
        <Image
          className={clsx("rellax", styles.bgImage)}
          src="/assets/foto1.webp"
          alt="slide 1"
          width={1920}
          height={1080}
          data-rellax-speed="-1"
          unoptimized
          priority
        />
        <div className={styles.content}>
          <Image
            className={styles.heroLogo}
            width={400}
            height={100}
            src="/assets/icon.svg"
            alt="icon"
          />
          <Text as="h1" variant="heading" className={styles.heroTitle}>
            PULSE
          </Text>
          <Text variant="body">Unite your team through rhythm</Text>
          <a></a>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        id="experience"
        className={clsx(styles.section, styles.joinSection)}
      >
        <div className={styles.joinGrid}>
          <div className={styles.joinIntro}>
            <Text as="h3" variant="heading">
              Join the pulse
            </Text>
            <Text variant="body" as="h5" className={styles.joinDescription}>
              Pulse is a team building musical experience.
              <br />
              We use the Rhythmic Sign Language created by Argentinian
              percussionist Santiago Vázquez, to create live music, together.
              <br />
              As we are playing, we come together into a single pulse.
            </Text>
          </div>

          <div className={styles.joinMediaColumn}>
            <div className={styles.joinImageFlip}>
              <Image
                className={clsx("rellax", styles.joinImage)}
                src="/assets/duo-2.png"
                alt="People playing percussion together"
                width={1433}
                height={942}
                data-rellax-speed="1"
              />
            </div>
            <div className={styles.joinQuoteBlock}>
              <Text as="h3" variant="heading" className={styles.joinQuoteLine}>
                We lose ourselves, into the music //
              </Text>
              <Text as="h3" variant="heading" className={styles.joinQuoteLine}>
                {"//"} We find each other, becoming one
              </Text>
              <Text as="h3" variant="heading" className={styles.joinQuoteLine}>
                We find ourselves again, new and unexpected //
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <Video />

      <Banner />

      <Benefits />

      <About />

      <Contact />

      <WhatsAppButton />
    </div>
  );
}
