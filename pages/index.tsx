import { useEffect, useState } from 'react';
import { TerminalWindow } from 'phosphor-react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Window from '../components/Window';

export default function Home() {
  const [hide, setHide] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    setTime(Date.now());
  }, [time]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ian Mukherjee</title>
        <meta
          name="description"
          content="Ian Mukherjee is a really cool guy. Trust me, I'm a search engine. He does product stuff, design stuff, you name it. He's the co-founder a metaverse company. That's gotta count for something."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Window
          time={time}
          hide={hide}
          minimize={minimize}
          setHide={setHide}
          setMinimize={setMinimize}
          setShowButton={setShowButton}
        />
        <p
          className={`${styles.text} ${!hide && styles.hidden} ${
            minimize && styles.hidden
          }`}
        >
          you closed the application.{' '}
          <span
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => window.location.reload()}
          >
            please refresh the page
          </span>
          .
        </p>
        <button
          onClick={() => {
            setMinimize(false);
            setShowButton(false);
            setHide(false);
          }}
          className={`${styles.button} ${styles.bottom} ${
            !showButton && styles.hidden
          }`}
        >
          <TerminalWindow size={48} />
        </button>
      </main>
    </div>
  );
}
