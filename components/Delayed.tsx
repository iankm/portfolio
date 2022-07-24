import { useEffect, useState } from 'react';

interface DelayedProps {
  waitBeforeShow: number;
  children?: any;
}

export const Delayed: React.FC<DelayedProps> = ({
  waitBeforeShow,
  children,
}) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return hidden ? null : children;
};

export default Delayed;
