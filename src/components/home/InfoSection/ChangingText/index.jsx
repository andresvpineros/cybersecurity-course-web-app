import React, { useState, useEffect, useCallback } from 'react';

const ChangingText = ({ initialText }) => {
  const [text, setText] = useState(initialText || '');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let intervalId = null;
  let iteration = 0;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startInterval = useCallback(() => {
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      setText((prevText) => {
        const newText = prevText 
          .split('')
          .map((_letter, index) => {
            if (index < iteration) {
              return initialText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        iteration += 1 / 3;

        if (iteration >= initialText.length) {
          clearInterval(intervalId); 
          iteration = 0;
        }

        return newText;
      });
    }, 50);
  });

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const autoChangeInterval = setInterval(() => {
      startInterval();
    }, 5000);

    return () => {
      clearInterval(autoChangeInterval); 
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {text}
    </div>
  );
};

export default ChangingText;
