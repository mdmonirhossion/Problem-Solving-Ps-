// Quick test runner for solution.ts (examples from the assignment + edge cases).
// Run: node solution.test.ts   (Node >= 22.18)   or   npx tsx solution.test.ts
import {
  staircase, gradingStudents, timeConversion, repeatStr, solution, positiveSum,
  summation, booleanToString, fizzBuzz, runningSum, maximumWealth, removeDuplicates,
  containsDuplicate, moveZeroes, merge, threeSum, plusOne, reverseString,
  lengthOfLastWord, longestCommonPrefix,
} from "./solution.ts";

let passed = 0;
let failed = 0;

function check(name: string, actual: unknown, expected: unknown): void {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    failed++;
    console.log(`FAIL  ${name}\n   expected ${e}\n   actual   ${a}`);
  }
}

// sorts triplets so order does not matter (problem allows any order)
const norm = (t: number[][]) => t.map((x) => [...x].sort((a, b) => a - b)).sort();

// 1
check("P1 n=4", staircase(4), "   #\n  ##\n ###\n####");
check("P1 n=1", staircase(1), "#");
check("P1 n=0", staircase(0), "");
// 2
check("P2 ex1", gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
check("P2 ex2", gradingStudents([84, 29, 57]), [85, 29, 57]);
check("P2 100/37", gradingStudents([100, 37, 99]), [100, 37, 100]);
// 3
check("P3 ex1", timeConversion("07:05:45PM"), "19:05:45");
check("P3 ex2", timeConversion("12:00:00AM"), "00:00:00");
check("P3 ex3", timeConversion("12:30:45PM"), "12:30:45");
check("P3 am", timeConversion("09:15:00AM"), "09:15:00");
// 4
check("P4 ex1", repeatStr(3, "ha"), "hahaha");
check("P4 ex2", repeatStr(0, "hello"), "");
check("P4 ex3", repeatStr(4, "a"), "aaaa");
// 5
check("P5 ex1", solution("world"), "dlrow");
check("P5 ex2", solution("hello"), "olleh");
check("P5 empty", solution(""), "");
// 6
check("P6 ex1", positiveSum([1, -4, 7, 12]), 20);
check("P6 ex2", positiveSum([-1, -2, 0, -5]), 0);
check("P6 empty", positiveSum([]), 0);
// 7
check("P7 ex1", summation(8), 36);
check("P7 ex2", summation(1), 1);
// 8
check("P8 true", booleanToString(true), "true");
check("P8 false", booleanToString(false), "false");
// 9
check("P9 n=5", fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
check("P9 n=15", fizzBuzz(15),
  ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
// 10
check("P10 ex1", runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
check("P10 ex2", runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
check("P10 neg", runningSum([3, -1, 0]), [3, 2, 2]);
// 11
check("P11 ex1", maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);
check("P11 ex2", maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);
// 12
{
  const a = [1, 1, 2];
  const k = removeDuplicates(a);
  check("P12 ex1 k", k, 2);
  check("P12 ex1 arr", a.slice(0, k), [1, 2]);
  const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k2 = removeDuplicates(b);
  check("P12 ex2 k", k2, 5);
  check("P12 ex2 arr", b.slice(0, k2), [0, 1, 2, 3, 4]);
  check("P12 empty", removeDuplicates([]), 0);
  const c = [7];
  check("P12 single", removeDuplicates(c), 1);
}
// 13
check("P13 ex1", containsDuplicate([1, 2, 3, 1]), true);
check("P13 ex2", containsDuplicate([1, 2, 3, 4]), false);
check("P13 ex3", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
check("P13 empty", containsDuplicate([]), false);
// 14
{
  const a = [0, 1, 0, 3, 12]; check("P14 return void", moveZeroes(a), undefined); check("P14 ex1", a, [1, 3, 12, 0, 0]);
  const b = [0, 0, 1]; moveZeroes(b); check("P14 ex2", b, [1, 0, 0]);
  const c = [1, 2, 3]; moveZeroes(c); check("P14 ex3", c, [1, 2, 3]);
  const d = [0, 0, 0]; moveZeroes(d); check("P14 all zero", d, [0, 0, 0]);
}
// 15
{
  const a = [1, 2, 3, 0, 0, 0]; merge(a, 3, [2, 5, 6], 3); check("P15 ex1", a, [1, 2, 2, 3, 5, 6]);
  const b = [1]; merge(b, 1, [], 0); check("P15 ex2", b, [1]);
  const c = [0]; merge(c, 0, [1], 1); check("P15 ex3", c, [1]);
  const d = [4, 5, 6, 0, 0, 0]; merge(d, 3, [1, 2, 3], 3); check("P15 nums2 smaller", d, [1, 2, 3, 4, 5, 6]);
  const e = [-1, 0, 0, 3, 3, 3, 0, 0, 0]; merge(e, 6, [1, 2, 2], 3); check("P15 dupes/zeros", e, [-1, 0, 0, 1, 2, 2, 3, 3, 3]);
}
// 16
check("P16 ex1", norm(threeSum([-1, 0, 1, 2, -1, -4])), norm([[-1, -1, 2], [-1, 0, 1]]));
check("P16 ex2", threeSum([0, 1, 1]), []);
check("P16 ex3", threeSum([0, 0, 0]), [[0, 0, 0]]);
check("P16 many zeros", threeSum([0, 0, 0, 0, 0]), [[0, 0, 0]]);
check("P16 short", threeSum([1, -1]), []);
{
  const input = [3, -2, 1, 0];
  threeSum(input);
  check("P16 input not mutated", input, [3, -2, 1, 0]);
}
// 17
check("P17 ex1", plusOne([1, 2, 9]), [1, 3, 0]);
check("P17 ex2", plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
check("P17 ex3", plusOne([9, 9, 9]), [1, 0, 0, 0]);
check("P17 zero", plusOne([0]), [1]);
check("P17 long", plusOne(Array(25).fill(9)), [1, ...Array(25).fill(0)]);
// 18
{
  const a = ["h", "e", "l", "l", "o"]; reverseString(a); check("P18 ex1", a, ["o", "l", "l", "e", "h"]);
  const b = ["H", "a", "n", "n", "a", "h"]; reverseString(b); check("P18 ex2", b, ["h", "a", "n", "n", "a", "H"]);
  const c: string[] = []; reverseString(c); check("P18 empty", c, []);
}
// 19
check("P19 ex1", lengthOfLastWord("Hello World"), 5);
check("P19 ex2", lengthOfLastWord("   fly me   to   the moon  "), 4);
check("P19 ex3", lengthOfLastWord("luffy is still joyboy"), 6);
check("P19 single", lengthOfLastWord("a"), 1);
check("P19 only spaces", lengthOfLastWord("    "), 0);
// 20
check("P20 ex1", longestCommonPrefix(["flower", "flow", "flight"]), "fl");
check("P20 ex2", longestCommonPrefix(["dog", "racecar", "car"]), "");
// NOTE: the assignment sheet lists "inter" for this example, but all three words start with "inters"
// (inter-s-pecies, inter-s-tellar, inter-s-tate), so the correct longest common prefix is "inters".
check("P20 ex3", longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters");
check("P20 ex3 (words w/o shared 's')", longestCommonPrefix(["interface", "internet", "interval"]), "inter");
check("P20 single", longestCommonPrefix(["alone"]), "alone");
check("P20 has empty", longestCommonPrefix(["abc", "", "abd"]), "");
check("P20 identical", longestCommonPrefix(["same", "same"]), "same");

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) throw new Error("Some tests failed");
