import Button from '@/components/button';
import styles from './page.module.scss';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <p>NUMBER ONE CREATIVE DIGITAL AGENCY</p>
        <h1>Smart Choices For Your Business Growth </h1>
        <Button
          type='button'
          size='lg'
          icon
        >
          Contact Us
        </Button>
      </main>
    </>
  );
}
