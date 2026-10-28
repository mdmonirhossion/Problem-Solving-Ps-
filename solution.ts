/**
 * STN-7 Problem Solving Assessment — all 20 solutions in a single TypeScript file.
 * Tests (examples + edge cases): node solution.test.ts   (Node >= 22.18)  or  npx tsx solution.test.ts
 */

/* 
 * Problem 1: Staircase
 * Approach: row i (1..n) = (n - i) spaces + i '#'. Rows joined with "\n".
 * Time O(n^2) (output size), Space O(n^2).
   */
var staircase = function (n: number): string {
  const rows: string[] = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

/* 
 * Problem 2: Grading Students
 * Approach: grade < 38 stays. Otherwise, if next multiple of 5 minus grade < 3
 * round up. Returns a NEW array. Time O(n), Space O(n).
 *  */
var gradingStudents = function (grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
  });
};

/* 
 * Problem 3: Time Conversion
 * Approach: split hour/min/sec and AM/PM suffix. 12AM -> 00, 12PM -> 12,
 * other PM -> +12. Time O(1), Space O(1).
 * ========================================================================== */
var timeConversion = function (s: string): string {
  const input = s.trim().toUpperCase();
  const period = input.slice(-2); // "AM" | "PM"
  const [hh, mm, ss] = input.slice(0, -2).trim().split(":");
  let hour = parseInt(hh, 10);

  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else if (hour !== 12) {
    hour += 12;
  }

  return `${String(hour).padStart(2, "0")}:${mm}:${ss}`;
};

/* 
 * Problem 4: String Repeat
 * Approach: build the result with a loop (no hardcoding). n <= 0 -> "".
 * Time O(n * |s|), Space O(n * |s|).
 *  */
var repeatStr = function (n: number, s: string): string {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
};

/* 
 * Problem 5: Reversed Strings
 * Approach: spread into code points (safe for emoji/surrogate pairs), reverse,
 * join. Original string is immutable so it is never modified.
 * Time O(n), Space O(n).
 *  */
var solution = function (str: string): string {
  return [...str].reverse().join("");
};

/* 
 * Problem 6: Sum of Positive
 * Approach: single pass, add only values strictly > 0. Empty array -> 0.
 * Time O(n), Space O(1).
 *  */
var positiveSum = function (arr: number[]): number {
  let sum = 0;
  for (const value of arr) {
    if (value > 0) sum += value;
  }
  return sum;
};

/* 
 * Problem 7: Grasshopper — Summation
 * Approach: Gauss formula num * (num + 1) / 2. Time O(1), Space O(1).
 *  */
var summation = function (num: number): number {
  return (num * (num + 1)) / 2;
};

/* 
 * Problem 8: Convert a Boolean to a String
 * Approach: explicit string conversion. Time O(1), Space O(1).
 *  */
var booleanToString = function (b: boolean): string {
  return b ? "true" : "false";
};

/* 
 * Problem 9: Fizz Buzz
 * Approach: check divisible by BOTH (15) first, then 3, then 5.
 * Time O(n), Space O(n).
 *  */
var fizzBuzz = function (n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};

/* 
 * Problem 10: Running Sum of 1D Array
 * Approach: carry a running total; write it to a NEW array.
 * Time O(n), Space O(n).
 *  */
var runningSum = function (nums: number[]): number[] {
  const result: number[] = new Array(nums.length);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result[i] = total;
  }
  return result;
};

/* 
 * Problem 11: Richest Customer Wealth
 * Approach: sum each row, keep the maximum. Empty input -> 0.
 * Time O(m * n), Space O(1).
 *  */
var maximumWealth = function (accounts: number[][]): number {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
};

/* 
 * Problem 12: Remove Duplicates from Sorted Array
 * Approach: two pointers. `k` is the write index of the next unique value;
 * `i` scans. Modifies nums IN-PLACE and returns k.
 * Time O(n), Space O(1).
 *  */
var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

/* 
 * Problem 13: Contains Duplicate
 * Approach: Set lookup, return early on first repeat.
 * Time O(n), Space O(n).
 *  */
var containsDuplicate = function (nums: number[]): boolean {
  const seen = new Set<number>();
  for (const value of nums) {
    if (seen.has(value)) return true;
    seen.add(value);
  }
  return false;
};

/* 
 * Problem 14: Move Zeroes
 * Approach: two pointers. Move every non-zero to the front keeping order
 * (swap with the write index) — zeros end up at the back. In-place, void.
 * Time O(n), Space O(1).
 *  */
var moveZeroes = function (nums: number[]): void {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      if (read !== write) {
        const tmp = nums[write];
        nums[write] = nums[read];
        nums[read] = tmp;
      }
      write++;
    }
  }
};

/* 
 * Problem 15: Merge Sorted Array
 * Approach: merge from the BACK so we never overwrite unread values of nums1.
 * Only nums2's remaining items need copying at the end. In-place, void.
 * Time O(m + n), Space O(1).
 *  */
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // last valid element in nums1
  let j = n - 1; // last element in nums2
  let write = m + n - 1; // last slot in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write--] = nums1[i--];
    } else {
      nums1[write--] = nums2[j--];
    }
  }
};

/* 
 * Problem 16: 3Sum
 * Approach: sort a COPY, fix index i, then two pointers (l, r). Skip equal
 * values for i / l / r so triplets are unique. Early exit when nums[i] > 0.
 * Time O(n^2), Space O(1) extra (O(n) for the sorted copy / output).
 *  */
var threeSum = function (nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) break; // remaining values are all positive
    if (i > 0 && sorted[i] === sorted[i - 1]) continue; // duplicate anchor

    let l = i + 1;
    let r = sorted.length - 1;
    while (l < r) {
      const sum = sorted[i] + sorted[l] + sorted[r];
      if (sum === 0) {
        result.push([sorted[i], sorted[l], sorted[r]]);
        l++;
        r--;
        while (l < r && sorted[l] === sorted[l - 1]) l++;
        while (l < r && sorted[r] === sorted[r + 1]) r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
};

/* 
 * Problem 17: Plus One
 * Approach: walk from the least significant digit. A digit < 9 is simply
 * incremented (done). A 9 becomes 0 and carries. If every digit was 9,
 * prepend a 1. Works for any length (no Number/BigInt overflow).
 * Time O(n), Space O(n).
 * ========================================================================== */
var plusOne = function (digits: number[]): number[] {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  return [1, ...result];
};

/* 
 * Problem 18: Reverse String
 * Approach: two pointers swapping from both ends. In-place, void.
 * Time O(n), Space O(1).
 *  */
var reverseString = function (s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
};

/* 
 * Problem 19: Length of Last Word
 * Approach: scan from the end — skip trailing spaces, then count characters
 * until the next space (or the start). No split/allocation.
 * Time O(n), Space O(1).
 *  */
var lengthOfLastWord = function (s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--; // trailing spaces

  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

/* 
 * Problem 20: Longest Common Prefix
 * Approach: vertical scanning. Compare column by column against the first
 * string; stop at the first mismatch / end of any string.
 * Empty array or any empty string -> "".
 * Time O(S) where S = total characters, Space O(1).
 *  */
var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return "";

  const first = strs[0];
  for (let col = 0; col < first.length; col++) {
    const ch = first[col];
    for (let row = 1; row < strs.length; row++) {
      if (col >= strs[row].length || strs[row][col] !== ch) {
        return first.slice(0, col);
      }
    }
  }
  return first;
};

export {
  staircase,
  gradingStudents,
  timeConversion,
  repeatStr,
  solution,
  positiveSum,
  summation,
  booleanToString,
  fizzBuzz,
  runningSum,
  maximumWealth,
  removeDuplicates,
  containsDuplicate,
  moveZeroes,
  merge,
  threeSum,
  plusOne,
  reverseString,
  lengthOfLastWord,
  longestCommonPrefix,
};
