import { useState } from 'react';
import styles from '../styles/Home.module.css';

interface InputProps {
  autofocus?: boolean;
  placeholder?: string;
  callback?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  autofocus,
  placeholder,
  callback,
}) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: any, value: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (value === 'linkedin' || value === 'li') {
        window.open('https://www.linkedin.com/in/ian-mukherjee/');
      }
      if (value === 'parcel') {
        window.open('https://parcel.so/');
      }
      setValue('');
      callback(value);
    }
  };

  return (
    <div className={styles.commandline}>
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
      {
        <input
          autoFocus={autofocus}
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => setValue(e.target.value)}
          onKeyDown={(e: any) => handleKeyDown(e, value)}
          className={styles.input}
        />
      }
    </div>
  );
};

export default Input;
