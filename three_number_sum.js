/*
 * Complete the 'threeNumberSum' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER target
 */

function threeNumberSum(arr, target) {
    const result = []

    // return empty array if arr has less than 3 items
    if (arr.length < 3) return result

    // sort items in array
    arr = arr.sort((a, b) => a - b)

    let len = arr.length
    for (let i = 0; i < len; i++) {

        // stop if item at current index is greater than target
        if (arr[i] > target) break

        // skip duplicate items
        if (i > 0 && arr[i] === arr[i - 1]) continue

        let j = i + 1

        let k = arr.length - 1

        while (j < k) {
            let total = arr[i] + arr[j] + arr[k]
            if (total === target) {
                result.push([arr[i], arr[j], arr[k]])

                while (arr[j] === arr[j++]);
                while (arr[k] === arr[k--]);
            }

            if (arr < target) j++
            else k--
        }
    }

    return result
}