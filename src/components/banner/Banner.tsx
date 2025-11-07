import React from "react";
import Image from "next/image";
import Text from "../text/Text";
import styles from "../Welcome.module.css";

export default function Banner() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapperHalfHeight}>
        <Image
          className={styles.bgImage}
          src="/assets/foto2.png"
          alt="Unity slide"
          width={1920}
          height={1080}
          priority
        />
        <div
          className={styles.bannerContent}
          style={{
            textAlign: "right",
            alignItems: "flex-end",
          }}
        >
          <Text as="h2" variant="heading">
            Unity
          </Text>
          <Text variant="body">How strong can we become if we come</Text>
          <Text variant="body">together into the same pulse?</Text>
        </div>
      </div>
      <div className={styles.wrapperHalfHeight}>
        <Image
          className={styles.bgImage}
          src="/assets/foto3.png"
          alt="Bring it slide"
          width={1920}
          height={1080}
          priority
        />
        <div
          className={styles.bannerContent}
          style={{
            alignItems: "flex-start",
          }}
        >
          <Text as="h2" variant="heading">
            Bring it!
          </Text>
          <Text variant="body">
            Can you put your ideas forward and into the groove?
          </Text>
        </div>
      </div>
    </section>
  );
}
