/* eslint-disable arrow-body-style */
const usePrevious = (
  history: number[]
): [number, (index: number
  ) => number] => {
  const getPreviousValue = (index: number): number => {
    console.log(`El history index ${history[index]}`);

    console.log(history);
    return history[index];
  };
  return [history.length, getPreviousValue];
};

export default usePrevious;
