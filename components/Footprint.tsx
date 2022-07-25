import styles from '../styles/Home.module.css';

interface FootprintProps {
  command: string;
}

export const Footprint: React.FC<FootprintProps> = ({ command }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          fontSize: '14px',
          color: '#0c0',
          marginRight: '2px',
          whiteSpace: 'nowrap',
        }}
      >
        ➞ ~
      </div>
      <span className={styles.text} style={{ margin: 0, marginLeft: '1px' }}>
        {command}
      </span>
    </div>
  );
};

export default Footprint;
