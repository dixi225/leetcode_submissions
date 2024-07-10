function minOperations(logs: string[]): number {
  let step = 0;
  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];
    if (log === '../') {
      if (step > 0) step--;
    } else if (log !== './') {
      step++;
    }
  }
  return step;
};