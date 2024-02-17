function findMinMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return { min, max };
}

// Example usage:
const numbers = [3, 5, 1, 9, 2, 7];
const result = findMinMax(numbers);
console.log("Min:", result.min); // Output: 1
console.log("Max:", result.max); // Output: 9
