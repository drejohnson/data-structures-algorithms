// Create a function that takes a string and returns a
// new string with duplicates removed

function removeDuplicates(str) {
  console.log([...new Set(str.split(" "))].join(" "))
}

const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'