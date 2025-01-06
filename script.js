class StringCalculator {
  add(numbers) {
    if (numbers?.trim() === "") return 0;

    // Check if there's a custom delimiter
    let delimiter = ",";
    const numArray = numbers.split(new RegExp(`[${delimiter}]`));

    // Return the sum of valid numbers
    return numArray.reduce((sum, num) => sum + +num, 0);
  }
}

module.exports = StringCalculator;
