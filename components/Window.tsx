import { useRef, useState } from 'react';
import Moment from 'react-moment';
import { Folder } from 'phosphor-react';
import Input from '../components/Input';
import Delayed from '../components/Delayed';
import History from './History';
import styles from '../styles/Home.module.css';

interface WindowProps {
  time: number;
  hide: boolean;
  minimize: boolean;
  setHide: (args: any) => void;
  setMinimize: (args: any) => void;
  setShowButton: (args: any) => void;
}

export const Window: React.FC<WindowProps> = ({
  time,
  hide,
  setHide,
  minimize,
  setMinimize,
  setShowButton,
}) => {
  const childInputRef = useRef(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [commands, setCommands] = useState<string[]>([]);

  const focusChild = () => {
    childInputRef.current && childInputRef.current.focus();
  };

  return (
    <div
      onClick={focusChild}
      className={`${styles.window} ${
        expanded ? styles.expanded : styles.condensed
      } ${hide && styles.hidden} ${minimize && styles.minimize}`}
    >
      {/* TOP PANE */}
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
      {/* BODY */}
      <div className={`${styles.windowbody} ${minimize && styles.hidden}`}>
        <p className={styles.text}>
          <Moment format={'ddd MMM D HH:mm:ss'}>{time}</Moment>
        </p>

        <Delayed waitBeforeShow={500}>
          <p className={styles.text}>
            hello my name is ian. i am the co-founder and chief product officer
            of{' '}
            <a
              className={styles.textlink}
              href="https://parcel.so"
              onClick={(e: any) => {
                e.stopPropagation();
              }}
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
        <History commands={commands} />
        <Delayed waitBeforeShow={1000}>
          <Input
            customRef={childInputRef}
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
  );
};

export default Window;
