// Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = s => {
  const visited = new Set();
  let left = 0;
  let runner = 0;
  let max = 0;

  // use sliding window
  while (runner < s.length) {
    const currentChar = s.charAt(runner);
    // not visited
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      max = Math.max(visited.size, max);
      runner++;
    } else {
      visited.delete(s.charAt(left));
      left++;
    }
  }

  return max;
};

lengthOfLongestSubstring('abcabcbb')