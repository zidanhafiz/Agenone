import Button from '@/components/button';
import styles from './index.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id='home'
      className={styles.hero}
    >
      <div className={styles.container}>
        <span className={styles.caption}>NUMBER ONE CREATIVE DIGITAL AGENCY</span>
        <h1>
          <span>Smart Choices </span> <br />
          For Your Business Growth
        </h1>
        <p>
          We&apos;re a team of experienced designers, developers, and marketers,
          passionate about delivering exceptional digital solutions.
        </p>
        <Button
          type='a'
          size='lg'
          icon
        >
          Contact Us
        </Button>
        <div className={styles['card__banner']}>
          <p className={styles.heading}>
            Benefit of <span>improving your business</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
