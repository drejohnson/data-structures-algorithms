function frequencyQueries(queries) {
  // Write your code here
  const numbers = {};
  const counts = {};
  const result = [];

  queries.forEach(([operation, number]) => {
    switch (operation) {
      // inserts
      case 1:
        // if (numbers[number])
        numbers[number] = numbers[number] || 0;
        if (numbers[number] > 0) counts[numbers[number]]--;
        numbers[number]++;
        counts[numbers[number]] = (counts[numbers[number]] || 0) + 1;
        break;
      // deletes
      case 2:
        if (numbers[number] > 0) {
          counts[numbers[number]]--;
          numbers[number]--;
          counts[numbers[number]] = (counts[numbers[number]] || 0) + 1;
        }
        break;
      // checks
      case 3:
        result.push(counts[number] > 0 ? 1 : 0);
        break;
    }
  });

  return result;
}
