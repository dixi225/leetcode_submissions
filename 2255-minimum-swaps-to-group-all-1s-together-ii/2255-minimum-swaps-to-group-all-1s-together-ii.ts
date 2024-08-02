function minSwaps(nums: number[]): number {
  const n = nums.length
  const k = nums.reduce((a, b) => a + b, 0)
  let c = k - nums.slice(0, k).reduce((a, b) => a + b, 0)
  let min = c

  for (let i = k; i < n + k; i++) {
    c += nums[i - k] - nums[i % n]
    min = Math.min(min, c)
  }

  return min
}