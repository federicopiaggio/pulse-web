"use client";

import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import Text from "./text/Text";
import Header from "./header/Header";
import {
  Video,
  Benefits,
  About,
  Contact,
  WhatsAppButton,
  Banner,
} from "./placeholders";
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
          style={{ transform: "scale(1.3)", left: "15%", top: "-85px" }}
          src="/assets/foto1.webp"
          alt="slide 1"
          fill
          priority
        />
        <div className={styles.content}>
          <Image
            width={400}
            height={100}
            src="/assets/icon.svg"
            style={{ width: "100%", aspectRatio: "6/2" }}
            alt="icon"
          />
          <Text as="h1" variant="heading" style={{ lineHeight: "120px" }}>
            PULSE
          </Text>
          <Text variant="body">Unite your team through rhythm</Text>
          <a></a>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles.section}>
        <Image
          className={clsx("rellax", styles.smallImage)}
          style={{ right: "0", top: "40%" }}
          src="/assets/foto5.jpg"
          alt="slide 3"
          width={400}
          height={400}
        />
        <div
          className={styles.content}
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ width: "50%" }}>
            <div
              style={{ display: "flex", gap: "10px", flexDirection: "column" }}
            >
              <Text as="h3" variant="heading">
                Join the pulse
              </Text>
              <Text variant="body" as="h5" style={{ color: "#d1d5db" }}>
                Pulse is a team building musical experience.
                <br />
                We use the Rhythmic Sign Language created by Argentinian
                percussionist Santiago Vázquez, to create live music, together.
                <br />
                As we are playing, we come together into a single pulse.
              </Text>
            </div>
          </div>
          <div style={{ alignSelf: "flex-end", textAlign: "end" }}>
            <Text as="h3" variant="heading">
              We lose ourselves, into the music //
            </Text>
            <Text as="h3" variant="heading">
              {"//"} We find each other, becoming one
            </Text>
            <Text as="h3" variant="heading">
              We find ourselves again, new and unexpected //
            </Text>
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
