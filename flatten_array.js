// Without using .flat(), create a function to flatten an array

// function flatten(input) {
//   const stack = [...input];
//   const res = [];
//   while (stack.length) {
//     // pop value from stack
//     const next = stack.pop();
//     if (Array.isArray(next)) {
//       // push back array items, won't modify the original input
//       stack.push(...next);
//     } else {
//       res.push(next);
//     }
//   }
//   console.log(res.reverse())
//   return res.reverse();
// }

function flat(input) {
  return input.reduce((prev, curr) => {
		if (Array.isArray(curr)) {
			prev = prev.concat(flat(curr));
		} else {
      prev.push(curr);
    }
		return prev;
	}, []);
}

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]
console.log(flat(exampleArray))
