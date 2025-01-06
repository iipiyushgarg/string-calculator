class StringCalculator {
  add(numbers) {
    if (numbers?.trim() === "") return 0;

    // Check if there's a custom delimiter
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      [delimiter, numbers] = numbers.slice(2).split("\n", 2);
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`));

    // Check for negative numbers
    const negativeNumbers = numArray?.filter((num) => +num < 0);

    if (negativeNumbers?.length) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    // Return the sum of valid numbers
    return numArray.reduce((sum, num) => sum + +num, 0);
  }
}

module.exports = StringCalculator;
