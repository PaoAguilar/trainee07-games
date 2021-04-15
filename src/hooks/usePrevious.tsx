/* eslint-disable arrow-body-style */
import { useEffect, useRef } from 'react';
// Hook
const usePrevious = (
  history: number[]
): [number, (index: number) => number] => {
  //   console.log(`En useprevious index: ${index}`);

  //   const ref = useRef<number>(0);
  //   useEffect(() => {
  // console.log('En useEffect');

  // console.log(ref.current);
  // console.log({ index });
  // console.log({ history });
  // ref.current.push(history);
  //   }, [history]);
  const getPreviousValue = (index: number) => {
    console.log('El history index');
    console.log(history[index]);
    
    return history[index];
  };
  return [history.length, getPreviousValue];
};

export default usePrevious;
