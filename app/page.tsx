import Button from '@/components/button';
import styles from './page.module.scss';
import Navbar from '@/components/navbar';
import Hero from './_components/hero';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
