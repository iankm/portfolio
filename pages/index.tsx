import { useEffect, useState } from 'react';
import { Folder, TerminalWindow } from 'phosphor-react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Moment from 'react-moment';
import Input from '../components/Input';
import Delayed from '../components/Delayed';
import Prompts from '../components/Prompts';

export default function Home() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [commands, setCommands] = useState<string[]>([]);

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
        <div
          className={`${styles.window} ${
            expanded ? styles.expanded : styles.condensed
          } ${hide && styles.hidden} ${minimize && styles.minimize}`}
        >
          <div className={styles.windowtoppane}>
            <div className={styles.dots}>
              <div className={styles.red} onClick={() => setHide(!hide)} />
              <div
                className={styles.yellow}
                onClick={() => {
                  setMinimize(!minimize);

                  setTimeout(() => {
                    setHide(true);
                    setShowButton(true);
                  }, 400);
                }}
              />
              <div
                className={styles.green}
                onClick={() => setExpanded(!expanded)}
              />
            </div>
            <h1
              className={styles.title}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '4px' }}>
                <Folder size={20} />
              </span>
              ian — ian@Ians-Website
            </h1>
            <div className={styles.empty} />
          </div>
          <div className={`${styles.windowbody} ${hide && styles.hidden}`}>
            <p className={styles.text}>
              <Moment format={'ddd MMM D HH:mm:ss'}>{time}</Moment>
            </p>

            <Delayed waitBeforeShow={500}>
              <p className={styles.text}>
                hello my name is ian. i am the co-founder and chief product
                officer of{' '}
                <a
                  className={styles.textlink}
                  href="https://parcel.so"
                  rel="noreferrer"
                  target="_blank"
                >
                  parcel
                </a>
              </p>
            </Delayed>
            <Delayed waitBeforeShow={800}>
              <p className={styles.text}>for more information, type help</p>
            </Delayed>
            <Prompts commands={commands} />
            <Delayed waitBeforeShow={1000}>
              <Input
                autofocus={true}
                callback={(value: string) => {
                  if (value === 'clear') {
                    setCommands([]);
                  } else {
                    setCommands([...commands, value]);
                  }
                }}
              />
            </Delayed>
          </div>
        </div>
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
