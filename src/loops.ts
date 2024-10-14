/**
 * Complete the following problems using loops and arrays.
 */

/**
 * Given an array of numbers, return their sum. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The sum of all numbers in the array
 */
export function summate(nums: number[]): number {
    let total: number = 0;
    if (nums.length === 0) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

/**
 * Given an array of numbers, return their average. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The average of all numbers in the array
 */
export function average(nums: number[]): number {
    let total: number = 0;

    if (nums.length === 0) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total / nums.length;
}

/**
 * Given an array of numbers, divide each number by 2.
 * @param nums An array of numbers
 * @returns The array of numbers divided by 2
 */
export function halve(nums: number[]): number[] {
    let halved: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        halved.push(nums[i] / 2);
    }
    return halved;
}

/**
 * Given an array of numbers, return only the positive numbers.
 * @param nums An array of numbers
 * @returns An array of only positive numbers
 */
export function onlyPositives(nums: number[]): number[] {
    let positives: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positives.push(nums[i]);
        }
    }
    return positives;
}

/**
 * Given an array of numbers, return the average of only the positive numbers.
 * @param nums An array of numbers
 * @returns The average of only the positive numbers
 */
export function averagePositives(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let total: number = 0;
    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total += nums[i];
            count += 1;
        }
    }
    if (total === 0) {
        return 0;
    }
    return total / count;
}

/**
 * Given an array of strings, return only the strings that end with 's'.
 * @param words An array of strings
 * @returns An array of only strings that end with 's'
 */
export function getPlurals(words: string[]): string[] {
    let sStrings: string[] = [];
    for (let i = 0; i < words.length; i++) {
        let word: string = words[i];
        if (word.slice(-1) === "s") {
            sStrings.push(word);
        }
    }
    return sStrings;
}

/**
 * Given an array of strings, return the first string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * @param words An array of strings
 * @returns The first string that ends with 's'
 */
export function firstPlural(words: string[]): string {
    let word: string = "";
    for (let i = 0; i < words.length; i++) {
        word = words[i];
        if (word.slice(-1) === "s") {
            return word;
        }
    }
    return "";
}

/**
 * Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold.
 * @param nums An array of numbers
 * @param threshold A threshold number
 * @returns The array of numbers with values less than the threshold increased by 1
 */
export function growIfSmall(nums: number[], threshold: number): number[] {
    let added: number[] = nums.slice();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < threshold) {
            let val: number = nums[i];
            added[i] = val + 1;
        } else {
            added[i] = nums[i];
        }
    }
    return added;
}

/**
 * Given an array of strings, return the longest string.
 * If the array is empty, return an empty string.
 * If there is a tie, return the first longest string.
 * @param words An array of strings
 * @returns The longest string
 */
export function longestString(words: string[]): string {
    let maxLen: number = 0;
    let maxWord: string = "";
    for (let i = 0; i < words.length; i++) {
        let currentWord: string = words[i];
        if (currentWord.length > maxLen) {
            maxWord = currentWord;
            maxLen = currentWord.length;
        }
    }
    return maxWord;
}

/**
 * Given an array of strings, return the longest string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * If there is a tie, return the first longest plural string.
 * @param words An array of strings
 * @returns The longest string that ends with 's'
 */
export function longestPlural(words: string[]): string {
    let word: string = "";
    let maxLen: number = 0;
    let maxWord: string = "";
    for (let i = 0; i < words.length; i++) {
        word = words[i];
        if (word.slice(-1) === "s") {
            if (word.length > maxLen) {
                maxLen = word.length;
                maxWord = word;
            }
        }
    }
    return maxWord;
}

/**
 * Given two arrays of numbers, add the numbers at each index together and return a new array of the sums.
 * If the arrays are different lengths, use the longer array's length and use zero for the missing values
 * in the smaller array.
 * @param nums1 An array of numbers
 * @param nums2 An array of numbers
 * @returns An array of the sums of the numbers at each index
 */
export function addPairs(nums1: number[], nums2: number[]): number[] {
    let newArray: number[] = [];
    let length: number = 0;

    // select the bigger array's length
    if (nums1.length > nums2.length) {
        length = nums1.length;
    } else {
        length = nums2.length;
    }

    for (let i = 0; i < length; i++) {
        if (i + 1 > nums1.length) {
            //if the arrays are diff lengths, num1 is too short, then just add the val from num2
            newArray.push(nums2[i]);
        } else if (i + 1 > nums2.length) {
            //if the arrays are diff lengths, num2 is too short, then just add the val from num1
            newArray.push(nums1[i]);
        } else {
            //if the arrays are the same length, or they haven't "run out of values" yet, keep adding
            newArray.push(nums1[i] + nums2[i]);
        }
    }
    return newArray;
}
