import React, { useEffect, useState } from 'react';

interface SlidingTextProps {
  title: string;
  className?: string;
  initialDelay?: number;
  tag?: keyof JSX.IntrinsicElements;
}

const SlidingText = ({ title, className = '', initialDelay = 0, tag = 'h1' }: SlidingTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [initialDelay]);

  const Text = tag;

  return (
    <div className="sliding-text-wrapper">
      <Text className={`sliding-text ${className} ${isVisible ? 'visible' : 'hidden'}`}>
        {title}
      </Text>
    </div>
  );
};

export default SlidingText;
