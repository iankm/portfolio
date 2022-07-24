import styles from '../styles/Home.module.css';
import Footprint from './Footprint';

export const Prompts = ({ commands }) => {
  const prompts = (command: string) => {
    switch (command) {
      case 'help':
        return 'linkedin parcel';
      case 'linkedin':
        return 'redirecting to linkedin...';
      case 'parcel':
        return 'redirecting to parcel...';
      default:
        return `command not found: ${command}`;
    }
  };

  return (
    <>
      {commands.map((command: string) => {
        return (
          <>
            <Footprint command={command} />
            <p className={styles.text}>{prompts(command)}</p>
          </>
        );
      })}
    </>
  );
};

export default Prompts;
