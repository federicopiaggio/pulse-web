import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import Text from '../text/Text';
import styles from '../Welcome.module.css';

export default function Banner() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapperHalfHeight}>
        <Image
          className={clsx("rellax", styles.bgImage)}
          src="/assets/foto2.png"
          alt="Unity slide"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div 
          className={clsx("rellax", styles.content)}
          style={{
            textAlign: 'right',
            alignItems: 'flex-end',
            right: 0
          }}
        >
          <Text as="h2" variant="heading">Unity</Text>
          <Text variant="body">How strong can we become if we come</Text> 
          <Text variant="body">together into the same pulse?</Text>
        </div>
      </div>
      <div className={styles.wrapperHalfHeight}>
        <Image
          className={clsx("rellax", styles.bgImage)}
          src="/assets/foto3.png"
          alt="Bring it slide"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div 
          className={clsx("rellax", styles.content)}
          style={{ justifyContent: 'flex-end' }}
        >
          <Text as="h2" variant="heading">Bring it!</Text>
          <Text variant="body">
            Can you put your ideas forward and into the groove?
          </Text>
        </div>
      </div>
    </section>
  );
}