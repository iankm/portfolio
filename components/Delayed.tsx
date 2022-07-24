import { useEffect, useState, FC, ReactNode } from 'react';

interface DelayedProps {
  waitBeforeShow: number;
  children?: ReactNode;
}

export const Delayed: FC<DelayedProps> = ({ waitBeforeShow, children }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return hidden ? null : children;
};

export default Delayed;
