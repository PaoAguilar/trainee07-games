const useTimeMachine = ({
  history,
  activeIndex,
}: {
  history: number[];
  activeIndex: number;
}): [number, (index: number) => number] => {
  const getPreviousValue = (index: number): number => history[index];
  return [history[activeIndex - 1], getPreviousValue];
};

export default useTimeMachine;
