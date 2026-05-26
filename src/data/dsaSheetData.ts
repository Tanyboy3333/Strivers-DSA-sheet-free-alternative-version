// Striver's A2Z DSA Sheet - Complete Problem Data
// Tanyboy's Version

export interface Problem {
  name: string;
  leetcode?: string;
  gfg?: string;
  codingninjas?: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface SubSection {
  title: string;
  problems: Problem[];
}

export interface Step {
  step: string;
  title: string;
  subsections: SubSection[];
}

export const dsaSheetData: Step[] = [
  // ============ STEP 1: Learn the Basics ============
  {
    step: "1",
    title: "Learn the Basics",
    subsections: [
      {
        title: "Know Basic Maths",
        problems: [
          { name: "Count Digits", gfg: "https://www.geeksforgeeks.org/problems/count-digits5716/1", leetcode: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/", difficulty: "Easy" },
          { name: "Reverse a Number", gfg: "https://www.geeksforgeeks.org/problems/reverse-digit5716/1", leetcode: "https://leetcode.com/problems/reverse-integer/", difficulty: "Easy" },
          { name: "Check Palindrome", gfg: "https://www.geeksforgeeks.org/problems/palindrome0746/1", leetcode: "https://leetcode.com/problems/palindrome-number/", difficulty: "Easy" },
          { name: "GCD Or HCF", gfg: "https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1", difficulty: "Easy" },
          { name: "Armstrong Numbers", gfg: "https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1", leetcode: "https://leetcode.com/problems/armstrong-number/", difficulty: "Easy" },
          { name: "Print all Divisors", gfg: "https://www.geeksforgeeks.org/problems/all-divisors-of-a-number/1", difficulty: "Easy" },
          { name: "Check for Prime", gfg: "https://www.geeksforgeeks.org/problems/prime-number2314/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Learn Basic Recursion",
        problems: [
          { name: "Print Name N times", gfg: "https://www.geeksforgeeks.org/problems/print-gfg-n-times/1", difficulty: "Easy" },
          { name: "Print 1 to N", gfg: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops3621/1", difficulty: "Easy" },
          { name: "Print N to 1", gfg: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1", difficulty: "Easy" },
          { name: "Sum of First N numbers", gfg: "https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1", difficulty: "Easy" },
          { name: "Factorial of N", gfg: "https://www.geeksforgeeks.org/problems/factorial5723/1", difficulty: "Easy" },
          { name: "Reverse an Array", gfg: "https://www.geeksforgeeks.org/problems/reverse-an-array/1", difficulty: "Easy" },
          { name: "Check if String is Palindrome", gfg: "https://www.geeksforgeeks.org/problems/palindrome-string0817/1", leetcode: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
          { name: "Fibonacci Number", leetcode: "https://leetcode.com/problems/fibonacci-number/", gfg: "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Learn Basic Hashing",
        problems: [
          { name: "Counting frequencies of array elements", gfg: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0", difficulty: "Easy" },
          { name: "Find the highest/lowest frequency element", gfg: "https://www.geeksforgeeks.org/problems/find-highest-and-lowest-frequency-elements/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Learn to Sort",
        problems: [
          { name: "Selection Sort", gfg: "https://www.geeksforgeeks.org/problems/selection-sort1581/1", difficulty: "Easy" },
          { name: "Bubble Sort", gfg: "https://www.geeksforgeeks.org/problems/bubble-sort/1", difficulty: "Easy" },
          { name: "Insertion Sort", gfg: "https://www.geeksforgeeks.org/problems/insertion-sort/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Solve Problems on Arrays",
        problems: [
          { name: "Find the Largest element in an array", gfg: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1", difficulty: "Easy" },
          { name: "Find Second Largest element in an array", gfg: "https://www.geeksforgeeks.org/problems/second-largest3735/1", difficulty: "Easy" },
          { name: "Check if the array is sorted", leetcode: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/", gfg: "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1", difficulty: "Easy" },
          { name: "Remove duplicates from Sorted array", leetcode: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", gfg: "https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1", difficulty: "Easy" },
          { name: "Left Rotate an array by one place", gfg: "https://www.geeksforgeeks.org/problems/left-rotate-array-by-one place/", difficulty: "Easy" },
          { name: "Left rotate an array by D places", gfg: "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1217756/1", leetcode: "https://leetcode.com/problems/rotate-array/", difficulty: "Easy" },
          { name: "Move Zeros to end", leetcode: "https://leetcode.com/problems/move-zeroes/", gfg: "https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1", difficulty: "Easy" },
          { name: "Linear Search", gfg: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1", difficulty: "Easy" },
          { name: "Find the Union", gfg: "https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1", leetcode: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Medium" },
          { name: "Find missing number in an array", leetcode: "https://leetcode.com/problems/missing-number/", gfg: "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1", difficulty: "Easy" },
          { name: "Maximum Consecutive Ones", leetcode: "https://leetcode.com/problems/max-consecutive-ones/", gfg: "https://www.geeksforgeeks.org/problems/maximum-consecutive-one/1", difficulty: "Easy" },
          { name: "Find the number that appears once", leetcode: "https://leetcode.com/problems/single-number/", gfg: "https://www.geeksforgeeks.org/problems/element-appearing-once2552/1", difficulty: "Easy" },
          { name: "Longest Subarray with given Sum K (Positives)", gfg: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1", difficulty: "Medium" },
          { name: "Longest Subarray with sum K (Positives + Negatives)", leetcode: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 2: Sorting Techniques ============
  {
    step: "2",
    title: "Sorting Techniques",
    subsections: [
      {
        title: "Solve Problems",
        problems: [
          { name: "Sort an array of 0s, 1s and 2s", leetcode: "https://leetcode.com/problems/sort-colors/", gfg: "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1", difficulty: "Medium" },
          { name: "Majority Element (>n/2 times)", leetcode: "https://leetcode.com/problems/majority-element/", gfg: "https://www.geeksforgeeks.org/problems/majority-element-1587115620/1", difficulty: "Easy" },
          { name: "Majority Element II (>n/3 times)", leetcode: "https://leetcode.com/problems/majority-element-ii/", gfg: "https://www.geeksforgeeks.org/problems/majority-element-ii/1", difficulty: "Medium" },
          { name: "Merge Sort", gfg: "https://www.geeksforgeeks.org/problems/merge-sort/1", difficulty: "Medium" },
          { name: "Quick Sort", gfg: "https://www.geeksforgeeks.org/problems/quick-sort/1", difficulty: "Medium" },
          { name: "Count Inversions", gfg: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1", leetcode: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", difficulty: "Hard" },
          { name: "Find Duplicate in Array", leetcode: "https://leetcode.com/problems/find-the-duplicate-number/", gfg: "https://www.geeksforgeeks.org/problems/find-duplicate-number-in-array/1", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 3: Arrays ============
  {
    step: "3",
    title: "Arrays",
    subsections: [
      {
        title: "Easy",
        problems: [
          { name: "Two Sum", leetcode: "https://leetcode.com/problems/two-sum/", gfg: "https://www.geeksforgeeks.org/problems/key-pair5616/1", difficulty: "Easy" },
          { name: "Find the repeating and missing number", gfg: "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1", leetcode: "https://leetcode.com/problems/set-mismatch/", difficulty: "Medium" },
          { name: "Merge two sorted arrays without extra space", leetcode: "https://leetcode.com/problems/merge-sorted-array/", gfg: "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1", difficulty: "Easy" },
          { name: "Kadane's Algorithm (Max Subarray Sum)", leetcode: "https://leetcode.com/problems/maximum-subarray/", gfg: "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1", difficulty: "Medium" },
          { name: "Merge Overlapping Subintervals", leetcode: "https://leetcode.com/problems/merge-intervals/", gfg: "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1", difficulty: "Medium" },
          { name: "Best Time to Buy and Sell Stock", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", gfg: "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Medium",
        problems: [
          { name: "Rearrange Array Elements by Sign", leetcode: "https://leetcode.com/problems/rearrange-array-elements-by-sign/", gfg: "https://www.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1", difficulty: "Medium" },
          { name: "Next Permutation", leetcode: "https://leetcode.com/problems/next-permutation/", gfg: "https://www.geeksforgeeks.org/problems/next-permutation5226/1", difficulty: "Medium" },
          { name: "Leaders in an Array problem", gfg: "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1", difficulty: "Easy" },
          { name: "Longest Consecutive Sequence in an Array", leetcode: "https://leetcode.com/problems/longest-consecutive-sequence/", gfg: "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1", difficulty: "Medium" },
          { name: "Set Matrix Zeroes", leetcode: "https://leetcode.com/problems/set-matrix-zeroes/", gfg: "https://www.geeksforgeeks.org/problems/set-matrix-zeroes-130710/1", difficulty: "Medium" },
          { name: "Rotate Image by 90 degrees", leetcode: "https://leetcode.com/problems/rotate-image/", gfg: "https://www.geeksforgeeks.org/problems/rotate-a-2d-matrix-without-using-extra-space1004/1", difficulty: "Medium" },
          { name: "Spiral Traversal of Matrix", leetcode: "https://leetcode.com/problems/spiral-matrix/", gfg: "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1", difficulty: "Medium" },
          { name: "Count Subarrays with given XOR K", gfg: "https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1", leetcode: "https://leetcode.com/problems/count-the-number-of-fair-pairs/", difficulty: "Hard" },
          { name: "Majority Element II", leetcode: "https://leetcode.com/problems/majority-element-ii/", gfg: "https://www.geeksforgeeks.org/problems/majority-element-ii/1", difficulty: "Medium" },
          { name: "Longest Subarray with sum K (Two Pointer)", gfg: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1", difficulty: "Medium" },
          { name: "3 Sum", leetcode: "https://leetcode.com/problems/3sum/", gfg: "https://www.geeksforgeeks.org/problems/three-sum/1", difficulty: "Medium" },
          { name: "4 Sum", leetcode: "https://leetcode.com/problems/4sum/", gfg: "https://www.geeksforgeeks.org/problems/four-elements/0", difficulty: "Medium" },
          { name: "Trapping Rain Water", leetcode: "https://leetcode.com/problems/trapping-rain-water/", gfg: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1", difficulty: "Hard" },
          { name: "Container With Most Water", leetcode: "https://leetcode.com/problems/container-with-most-water/", gfg: "https://www.geeksforgeeks.org/problems/container-with-most-water0535/1", difficulty: "Medium" },
          { name: "Remove Duplicates from Sorted Array", leetcode: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
        ],
      },
      {
        title: "Hard",
        problems: [
          { name: "Pascal's Triangle", leetcode: "https://leetcode.com/problems/pascals-triangle/", gfg: "https://www.geeksforgeeks.org/problems/pascal-triangle0652/1", difficulty: "Easy" },
          { name: "Majority Element (n/3 times)", leetcode: "https://leetcode.com/problems/majority-element-ii/", gfg: "https://www.geeksforgeeks.org/problems/majority-element-ii/1", difficulty: "Medium" },
          { name: "3-sum Problem", leetcode: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
          { name: "4-sum Problem", leetcode: "https://leetcode.com/problems/4sum/", difficulty: "Medium" },
          { name: "Largest Subarray with 0 sum", gfg: "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1", difficulty: "Medium" },
          { name: "Count Subarrays with given XOR", gfg: "https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1", difficulty: "Hard" },
          { name: "Merge Overlapping Subintervals", leetcode: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
          { name: "Merge two sorted arrays without extra space", leetcode: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" },
          { name: "Find the missing and repeating number", gfg: "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1", difficulty: "Medium" },
          { name: "Count Inversions", gfg: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1", difficulty: "Hard" },
          { name: "Reverse Pairs", leetcode: "https://leetcode.com/problems/reverse-pairs/", gfg: "https://www.geeksforgeeks.org/problems/count-reverse-pairs/1", difficulty: "Hard" },
          { name: "Maximum Product Subarray", leetcode: "https://leetcode.com/problems/maximum-product-subarray/", gfg: "https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 4: Binary Search ============
  {
    step: "4",
    title: "Binary Search",
    subsections: [
      {
        title: "BS on 1D Arrays",
        problems: [
          { name: "Binary Search to find X in sorted array", leetcode: "https://leetcode.com/problems/binary-search/", gfg: "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1", difficulty: "Easy" },
          { name: "Implement Lower Bound", gfg: "https://www.geeksforgeeks.org/problems/floor-or-ceil-in-a-sorted-array/1", difficulty: "Easy" },
          { name: "Implement Upper Bound", gfg: "https://www.geeksforgeeks.org/problems/ceil-the-floor2807/1", difficulty: "Easy" },
          { name: "Search Insert Position", leetcode: "https://leetcode.com/problems/search-insert-position/", gfg: "https://www.geeksforgeeks.org/problems/search-insert-position/1", difficulty: "Easy" },
          { name: "Floor/Ceil in Sorted Array", gfg: "https://www.geeksforgeeks.org/problems/floor-or-ceil-in-a-sorted-array/1", difficulty: "Easy" },
          { name: "First and Last Position of an Element", leetcode: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", gfg: "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x2041/1", difficulty: "Medium" },
          { name: "Number of Occurrences", gfg: "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1", difficulty: "Easy" },
          { name: "Search in Rotated Sorted Array", leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/", gfg: "https://www.geeksforgeeks.org/problems/search-in-a-rotated-sorted-array-6128/1", difficulty: "Medium" },
          { name: "Search in Rotated Sorted Array II", leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: "Medium" },
          { name: "Find Minimum in Rotated Sorted Array", leetcode: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", gfg: "https://www.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3621/1", difficulty: "Medium" },
          { name: "Single Element in a Sorted Array", leetcode: "https://leetcode.com/problems/single-element-in-a-sorted-array/", difficulty: "Medium" },
          { name: "Find Peak Element", leetcode: "https://leetcode.com/problems/find-peak-element/", gfg: "https://www.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1", difficulty: "Medium" },
        ],
      },
      {
        title: "BS on Answers",
        problems: [
          { name: "Nth Root of a Number", gfg: "https://www.geeksforgeeks.org/calculating-n-th-real-root-using-binary-search/", difficulty: "Easy" },
          { name: "Koko Eating Bananas", leetcode: "https://leetcode.com/problems/koko-eating-bananas/", gfg: "https://www.geeksforgeeks.org/problems/koko-eating-bananas/1", difficulty: "Medium" },
          { name: "Minimum Days to Make M Bouquets", leetcode: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", difficulty: "Medium" },
          { name: "Find the Smallest Divisor Given a Threshold", leetcode: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/", difficulty: "Medium" },
          { name: "Capacity To Ship Packages Within D Days", leetcode: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", difficulty: "Medium" },
          { name: "Kth Missing Positive Number", leetcode: "https://leetcode.com/problems/kth-missing-positive-number/", gfg: "https://www.geeksforgeeks.org/problems/kth-missing-positive-number/1", difficulty: "Easy" },
          { name: "Aggressive Cows", gfg: "https://www.geeksforgeeks.org/problems/aggressive-cows/1", leetcode: "https://leetcode.com/problems/magnetic-force-between-two-balls/", difficulty: "Hard" },
          { name: "Allocate Minimum Number of Pages", gfg: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1", leetcode: "https://leetcode.com/problems/split-array-largest-sum/", difficulty: "Hard" },
          { name: "Split Array - Largest Sum", leetcode: "https://leetcode.com/problems/split-array-largest-sum/", gfg: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1", difficulty: "Hard" },
        ],
      },
      {
        title: "BS on 2D Arrays",
        problems: [
          { name: "Search a 2D Matrix", leetcode: "https://leetcode.com/problems/search-a-2d-matrix/", gfg: "https://www.geeksforgeeks.org/problems/search-in-a-matrix-1619/1", difficulty: "Medium" },
          { name: "Search a 2D Matrix II", leetcode: "https://leetcode.com/problems/search-a-2d-matrix-ii/", gfg: "https://www.geeksforgeeks.org/problems/search-in-a-row-wise-and-column-wise-sorted-matrix/1", difficulty: "Medium" },
          { name: "Find Peak Element II", leetcode: "https://leetcode.com/problems/find-a-peak-element-ii/", gfg: "https://www.geeksforgeeks.org/problems/find-a-peak-element-ii/1", difficulty: "Hard" },
          { name: "Median of Row Wise Sorted Matrix", gfg: "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix/1", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 5: Strings ============
  {
    step: "5",
    title: "Strings",
    subsections: [
      {
        title: "Basic and Easy",
        problems: [
          { name: "Reverse Words in a String", leetcode: "https://leetcode.com/problems/reverse-words-in-a-string/", gfg: "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1", difficulty: "Medium" },
          { name: "Longest Palindrome in a String", gfg: "https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3400/1", leetcode: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
          { name: "Roman Number to Integer", leetcode: "https://leetcode.com/problems/roman-to-integer/", gfg: "https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1", difficulty: "Easy" },
          { name: "Integer to Roman", leetcode: "https://leetcode.com/problems/integer-to-roman/", difficulty: "Medium" },
          { name: "Implement ATOI/STRSTR", leetcode: "https://leetcode.com/problems/string-to-integer-atoi/", gfg: "https://www.geeksforgeeks.org/problems/implement-atoi/1", difficulty: "Medium" },
          { name: "Longest Common Prefix", leetcode: "https://leetcode.com/problems/longest-common-prefix/", gfg: "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array4510/1", difficulty: "Easy" },
          { name: "Rabin Karp Algorithm", gfg: "https://www.geeksforgeeks.org/problems/rabin-karp-algorithm-for-pattern-searching/1", difficulty: "Hard" },
          { name: "KMP / LPS Array", leetcode: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", gfg: "https://www.geeksforgeeks.org/problems/search-pattern0205/1", difficulty: "Medium" },
          { name: "Minimum Characters to Make String Palindromic", gfg: "https://www.geeksforgeeks.org/problems/minimum-characters-to-be-added-in-front-to-make-string-palindrome/1", difficulty: "Hard" },
          { name: "Check for Anagrams", leetcode: "https://leetcode.com/problems/valid-anagram/", gfg: "https://www.geeksforgeeks.org/problems/anagram-1587115620/1", difficulty: "Easy" },
          { name: "Count and Say", leetcode: "https://leetcode.com/problems/count-and-say/", difficulty: "Medium" },
          { name: "Compare Version Numbers", leetcode: "https://leetcode.com/problems/compare-version-numbers/", difficulty: "Medium" },
        ],
      },
      {
        title: "Medium",
        problems: [
          { name: "Sort Characters By Frequency", leetcode: "https://leetcode.com/problems/sort-characters-by-frequency/", gfg: "https://www.geeksforgeeks.org/problems/sort-by-frequency-of-characters/1", difficulty: "Medium" },
          { name: "Maximum Nesting Depth of Parentheses", leetcode: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/", difficulty: "Easy" },
          { name: "Roman to Integer", leetcode: "https://leetcode.com/problems/roman-to-integer/", difficulty: "Easy" },
        ],
      },
    ],
  },
  // ============ STEP 6: Linked Lists ============
  {
    step: "6",
    title: "Linked Lists",
    subsections: [
      {
        title: "Learn 1D LL",
        problems: [
          { name: "Introduction to Linked List", gfg: "https://www.geeksforgeeks.org/problems/introduction-to-linked-list/1", difficulty: "Easy" },
          { name: "Insert Node at Beginning / End", gfg: "https://www.geeksforgeeks.org/problems/insert-in-middle-of-linked-list/1", difficulty: "Easy" },
          { name: "Delete Node in a Linked List", leetcode: "https://leetcode.com/problems/delete-node-in-a-linked-list/", gfg: "https://www.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1", difficulty: "Medium" },
          { name: "Search in Linked List", gfg: "https://www.geeksforgeeks.org/problems/search-in-linked-list-1664432923/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Learn 2D LL",
        problems: [
          { name: "Introduction to Doubly Linked List", gfg: "https://www.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1", difficulty: "Easy" },
          { name: "Doubly linked list Insertion at given position", gfg: "https://www.geeksforgeeks.org/problems/insert-at-position-in-doubly-linked-list/1", difficulty: "Easy" },
          { name: "Delete Head of Doubly Linked List", gfg: "https://www.geeksforgeeks.org/problems/delete-head-of-doubly-linked-list/1", difficulty: "Easy" },
          { name: "Delete Tail of Doubly Linked List", gfg: "https://www.geeksforgeeks.org/problems/delete-tail-of-doubly-linked-list/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Medium",
        problems: [
          { name: "Middle of the Linked List", leetcode: "https://leetcode.com/problems/middle-of-the-linked-list/", gfg: "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1", difficulty: "Easy" },
          { name: "Reverse a Linked List", leetcode: "https://leetcode.com/problems/reverse-linked-list/", gfg: "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1", difficulty: "Easy" },
          { name: "Detect a Loop in Linked List", leetcode: "https://leetcode.com/problems/linked-list-cycle/", gfg: "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1", difficulty: "Easy" },
          { name: "Find the starting point of the Loop", leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/", gfg: "https://www.geeksforgeeks.org/problems/find-the-first-node-of-loop-in-linked-list--170645/1", difficulty: "Medium" },
          { name: "Remove Nth Node from End of List", leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
          { name: "Delete the middle node of Linked List", leetcode: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/", gfg: "https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1", difficulty: "Medium" },
          { name: "Sort a Linked List", leetcode: "https://leetcode.com/problems/sort-list/", gfg: "https://www.geeksforgeeks.org/problems/sort-a-linked-list/1", difficulty: "Medium" },
          { name: "Sort linked list of 0s 1s 2s", gfg: "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1", difficulty: "Medium" },
          { name: "Add Two Numbers as Linked List", leetcode: "https://leetcode.com/problems/add-two-numbers/", gfg: "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1", difficulty: "Medium" },
          { name: "Add 1 to a number represented as a Linked List", gfg: "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1", difficulty: "Medium" },
          { name: "Intersection of Two Linked Lists", leetcode: "https://leetcode.com/problems/intersection-of-two-linked-lists/", gfg: "https://www.geeksforgeeks.org/problems/intersection-of-two-linked-list/1", difficulty: "Easy" },
          { name: "Intersection of Two Sorted Linked List", gfg: "https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1", difficulty: "Medium" },
          { name: "Merge two sorted linked list", leetcode: "https://leetcode.com/problems/merge-two-sorted-lists/", gfg: "https://www.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1", difficulty: "Easy" },
          { name: "Flattening a Linked List", gfg: "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1", difficulty: "Medium" },
          { name: "Palindrome Linked List", leetcode: "https://leetcode.com/problems/palindrome-linked-list/", gfg: "https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Hard",
        problems: [
          { name: "Reverse Linked List in groups of Size k", leetcode: "https://leetcode.com/problems/reverse-nodes-in-k-group/", gfg: "https://www.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1", difficulty: "Hard" },
          { name: "Flattening a Linked List", gfg: "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1", difficulty: "Medium" },
          { name: "Clone a Linked List with Random Pointer", leetcode: "https://leetcode.com/problems/copy-list-with-random-pointer/", gfg: "https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1", difficulty: "Medium" },
          { name: "LRU Cache", leetcode: "https://leetcode.com/problems/lru-cache/", gfg: "https://www.geeksforgeeks.org/problems/lru-cache/1", difficulty: "Hard" },
          { name: "Merge K Sorted Lists", leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/", gfg: "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 7: Recursion ============
  {
    step: "7",
    title: "Recursion",
    subsections: [
      {
        title: "Get a Strong Hold",
        problems: [
          { name: "Sort an Array using Recursion", gfg: "https://www.geeksforgeeks.org/problems/sort-an-array-using-recursion/1", difficulty: "Easy" },
          { name: "Sort a Stack using Recursion", gfg: "https://www.geeksforgeeks.org/problems/sort-a-stack/1", difficulty: "Medium" },
          { name: "Reverse a Stack using Recursion", gfg: "https://www.geeksforgeeks.org/problems/reverse-a-stack/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Subsets, Subsequences, Permutations",
        problems: [
          { name: "Print All Subsets / Power Set", gfg: "https://www.geeksforgeeks.org/problems/power-set4302/1", leetcode: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
          { name: "Print All Subsequences", gfg: "https://www.geeksforgeeks.org/problems/print-subsequences-of-a-string/1", difficulty: "Medium" },
          { name: "Count All Subsequences with Sum K", gfg: "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1", difficulty: "Medium" },
          { name: "Combination Sum", leetcode: "https://leetcode.com/problems/combination-sum/", gfg: "https://www.geeksforgeeks.org/problems/combination-sum/1", difficulty: "Medium" },
          { name: "Combination Sum II", leetcode: "https://leetcode.com/problems/combination-sum-ii/", gfg: "https://www.geeksforgeeks.org/problems/combination-sum-ii/1", difficulty: "Medium" },
          { name: "Subset Sum Problem", gfg: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1", difficulty: "Medium" },
          { name: "Subset Sum - Equal to target", gfg: "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1", leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
          { name: "Permutations of an Array", leetcode: "https://leetcode.com/problems/permutations/", gfg: "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1", difficulty: "Medium" },
          { name: "Permutations II", leetcode: "https://leetcode.com/problems/permutations-ii/", difficulty: "Medium" },
        ],
      },
      {
        title: "Recursion on Subsequences / Hard",
        problems: [
          { name: "Letter Combinations of a Phone Number", leetcode: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", gfg: "https://www.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1", difficulty: "Medium" },
          { name: "Generate Parentheses", leetcode: "https://leetcode.com/problems/generate-parentheses/", gfg: "https://www.geeksforgeeks.org/problems/generate-all-parentheses/1", difficulty: "Medium" },
          { name: "N-Queens", leetcode: "https://leetcode.com/problems/n-queens/", gfg: "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1", difficulty: "Hard" },
          { name: "Sudoku Solver", leetcode: "https://leetcode.com/problems/sudoku-solver/", gfg: "https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1", difficulty: "Hard" },
          { name: "Word Search", leetcode: "https://leetcode.com/problems/word-search/", gfg: "https://www.geeksforgeeks.org/problems/word-search/1", difficulty: "Medium" },
          { name: "M-Coloring Problem", gfg: "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1", difficulty: "Medium" },
          { name: "Rat in a Maze", gfg: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", difficulty: "Medium" },
          { name: "Palindrome Partitioning", leetcode: "https://leetcode.com/problems/palindrome-partitioning/", gfg: "https://www.geeksforgeeks.org/problems/palindromic-patitionsing4845/1", difficulty: "Medium" },
          { name: "K-th Permutation Sequence", leetcode: "https://leetcode.com/problems/permutation-sequence/", gfg: "https://www.geeksforgeeks.org/problems/find-kth-permutation/1", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 8: Bit Manipulation ============
  {
    step: "8",
    title: "Bit Manipulation",
    subsections: [
      {
        title: "Learn Bit Manipulation",
        problems: [
          { name: "Convert to Binary", gfg: "https://www.geeksforgeeks.org/problems/decimal-to-binary-1587115620/1", difficulty: "Easy" },
          { name: "Convert to Decimal", gfg: "https://www.geeksforgeeks.org/problems/binary-to-decimal1611/1", difficulty: "Easy" },
          { name: "Swap Two Numbers", gfg: "https://www.geeksforgeeks.org/problems/swap-two-numbers3444/1", difficulty: "Easy" },
          { name: "Check if the i-th bit is set or not", gfg: "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1", difficulty: "Easy" },
          { name: "Set the i-th bit", gfg: "https://www.geeksforgeeks.org/problems/set-kth-bit3744/1", difficulty: "Easy" },
          { name: "Clear the i-th bit", gfg: "https://www.geeksforgeeks.org/problems/clear-the-bit3744/1", difficulty: "Easy" },
          { name: "Toggle i-th bit", gfg: "https://www.geeksforgeeks.org/problems/toggle-bits-given-range0952/1", difficulty: "Easy" },
          { name: "Remove the last set bit", gfg: "https://www.geeksforgeeks.org/problems/remove-the-last-set-bit3945/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Interview Problems",
        problems: [
          { name: "Power of Two", leetcode: "https://leetcode.com/problems/power-of-two/", gfg: "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1", difficulty: "Easy" },
          { name: "Count total set bits", gfg: "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1", difficulty: "Hard" },
          { name: "Divide Two Integers", leetcode: "https://leetcode.com/problems/divide-two-integers/", difficulty: "Medium" },
          { name: "Single Number I", leetcode: "https://leetcode.com/problems/single-number/", gfg: "https://www.geeksforgeeks.org/problems/element-appearing-once2552/1", difficulty: "Easy" },
          { name: "Single Number II", leetcode: "https://leetcode.com/problems/single-number-ii/", gfg: "https://www.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1", difficulty: "Medium" },
          { name: "Single Number III", leetcode: "https://leetcode.com/problems/single-number-iii/", difficulty: "Medium" },
          { name: "XOR from L to R", gfg: "https://www.geeksforgeeks.org/problems/xor-of-all-elements-between-given-range/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Advanced Maths",
        problems: [
          { name: "Prime Numbers till N (Sieve of Eratosthenes)", gfg: "https://www.geeksforgeeks.org/problems/sieve-of-eratosthenes5242/1", leetcode: "https://leetcode.com/problems/count-primes/", difficulty: "Medium" },
          { name: "Print Prime Factors of a Number", gfg: "https://www.geeksforgeeks.org/problems/prime-factors5052/1", difficulty: "Easy" },
          { name: "Power(n, x) - Pow(x,n)", leetcode: "https://leetcode.com/problems/powx-n/", gfg: "https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 9: Stacks and Queues ============
  {
    step: "9",
    title: "Stacks & Queues",
    subsections: [
      {
        title: "Learning",
        problems: [
          { name: "Implement Stack using Arrays", gfg: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1", difficulty: "Easy" },
          { name: "Implement Queue using Arrays", gfg: "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1", difficulty: "Easy" },
          { name: "Implement Stack using Queue", leetcode: "https://leetcode.com/problems/implement-stack-using-queues/", gfg: "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1", difficulty: "Easy" },
          { name: "Implement Queue using Stack", leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/", gfg: "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1", difficulty: "Easy" },
          { name: "Check for Balanced Parentheses", leetcode: "https://leetcode.com/problems/valid-parentheses/", gfg: "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1", difficulty: "Easy" },
          { name: "Next Greater Element", leetcode: "https://leetcode.com/problems/next-greater-element-i/", gfg: "https://www.geeksforgeeks.org/problems/next-larger-element2856/1", difficulty: "Medium" },
          { name: "Next Smaller Element", gfg: "https://www.geeksforgeeks.org/problems/next-smaller-element/1", difficulty: "Medium" },
          { name: "Sort a Stack", gfg: "https://www.geeksforgeeks.org/problems/sort-a-stack/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Medium",
        problems: [
          { name: "Next Greater Element - II", leetcode: "https://leetcode.com/problems/next-greater-element-ii/", difficulty: "Medium" },
          { name: "Trapping Rain Water (Stack)", leetcode: "https://leetcode.com/problems/trapping-rain-water/", gfg: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1", difficulty: "Hard" },
          { name: "Sum of Subarray Minimums", leetcode: "https://leetcode.com/problems/sum-of-subarray-minimums/", difficulty: "Medium" },
          { name: "Asteroid Collision", leetcode: "https://leetcode.com/problems/asteroid-collision/", gfg: "https://www.geeksforgeeks.org/problems/asteroid-collision/1", difficulty: "Medium" },
          { name: "Remove K Digits", leetcode: "https://leetcode.com/problems/remove-k-digits/", difficulty: "Medium" },
          { name: "Largest Rectangle in Histogram", leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/", gfg: "https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/1", difficulty: "Hard" },
          { name: "Sliding Window Maximum", leetcode: "https://leetcode.com/problems/sliding-window-maximum/", gfg: "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1", difficulty: "Hard" },
          { name: "Stock Span Problem", leetcode: "https://leetcode.com/problems/online-stock-span/", gfg: "https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1", difficulty: "Medium" },
          { name: "Celebrity Problem", gfg: "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1", difficulty: "Medium" },
          { name: "LRU Cache", leetcode: "https://leetcode.com/problems/lru-cache/", gfg: "https://www.geeksforgeeks.org/problems/lru-cache/1", difficulty: "Hard" },
        ],
      },
      {
        title: "Hard",
        problems: [
          { name: "LFU Cache", leetcode: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" },
          { name: "Online Stock Span", leetcode: "https://leetcode.com/problems/online-stock-span/", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 10: Sliding Window & Two Pointer ============
  {
    step: "10",
    title: "Sliding Window & Two Pointer",
    subsections: [
      {
        title: "Solve Problems",
        problems: [
          { name: "Maximum sum subarray of size K", gfg: "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1", difficulty: "Easy" },
          { name: "First negative in every window of size k", gfg: "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1", difficulty: "Easy" },
          { name: "Count occurrences of anagrams", gfg: "https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1", leetcode: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", difficulty: "Medium" },
          { name: "Maximum of all subarrays of size k", gfg: "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1", leetcode: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
          { name: "Longest Substring without Repeating Characters", leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", gfg: "https://www.geeksforgeeks.org/problems/longest-distinct-characters-in-string5848/1", difficulty: "Medium" },
          { name: "Longest Repeating Character Replacement", leetcode: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" },
          { name: "Minimum Window Substring", leetcode: "https://leetcode.com/problems/minimum-window-substring/", gfg: "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1", difficulty: "Hard" },
          { name: "Valid Parenthesis String", leetcode: "https://leetcode.com/problems/valid-parenthesis-string/", difficulty: "Medium" },
          { name: "Max Consecutive Ones III", leetcode: "https://leetcode.com/problems/max-consecutive-ones-iii/", gfg: "https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1", difficulty: "Medium" },
          { name: "Binary Subarrays With Sum", leetcode: "https://leetcode.com/problems/binary-subarrays-with-sum/", gfg: "https://www.geeksforgeeks.org/problems/count-subarrays-with-given-sum/1", difficulty: "Medium" },
          { name: "Subarray with K different integers", leetcode: "https://leetcode.com/problems/subarrays-with-k-different-integers/", difficulty: "Hard" },
          { name: "Minimum Size Subarray Sum", leetcode: "https://leetcode.com/problems/minimum-size-subarray-sum/", gfg: "https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5165/1", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 11: Heaps ============
  {
    step: "11",
    title: "Heaps",
    subsections: [
      {
        title: "Learning",
        problems: [
          { name: "Min Heap / Max Heap Implementation", gfg: "https://www.geeksforgeeks.org/problems/implement-a-min-heap/1", difficulty: "Easy" },
          { name: "Kth Largest Element", leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/", gfg: "https://www.geeksforgeeks.org/problems/kth-largest-element5346/1", difficulty: "Medium" },
          { name: "Maximum Sum Combination", gfg: "https://www.geeksforgeeks.org/problems/maximum-sum-combination/1", difficulty: "Medium" },
          { name: "Find Median from Data Stream", leetcode: "https://leetcode.com/problems/find-median-from-data-stream/", gfg: "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1", difficulty: "Hard" },
          { name: "Merge K Sorted Lists", leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/", gfg: "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1", difficulty: "Hard" },
        ],
      },
      {
        title: "Medium / Hard",
        problems: [
          { name: "K Most Frequent Elements", leetcode: "https://leetcode.com/problems/top-k-frequent-elements/", gfg: "https://www.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1", difficulty: "Medium" },
          { name: "Sort Characters by Frequency", leetcode: "https://leetcode.com/problems/sort-characters-by-frequency/", difficulty: "Medium" },
          { name: "Task Scheduler", leetcode: "https://leetcode.com/problems/task-scheduler/", gfg: "https://www.geeksforgeeks.org/problems/task-scheduler/1", difficulty: "Medium" },
          { name: "Hand of Straights", leetcode: "https://leetcode.com/problems/hand-of-straights/", gfg: "https://www.geeksforgeeks.org/problems/hands-of-straights/1", difficulty: "Medium" },
          { name: "Reorganize String", leetcode: "https://leetcode.com/problems/reorganize-string/", gfg: "https://www.geeksforgeeks.org/problems/rearrange-characters4634/1", difficulty: "Medium" },
          { name: "Merge K Sorted Arrays", gfg: "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1", difficulty: "Medium" },
          { name: "Kth Largest Element in a Stream", leetcode: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy" },
          { name: "Design Twitter", leetcode: "https://leetcode.com/problems/design-twitter/", difficulty: "Hard" },
          { name: "Connect N Ropes", gfg: "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1", difficulty: "Easy" },
        ],
      },
    ],
  },
  // ============ STEP 12: Greedy Algorithms ============
  {
    step: "12",
    title: "Greedy Algorithms",
    subsections: [
      {
        title: "Solve Problems",
        problems: [
          { name: "Activity Selection (N meetings in one room)", gfg: "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1", difficulty: "Easy" },
          { name: "Minimum Platforms", gfg: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", difficulty: "Medium" },
          { name: "Job Sequencing Problem", gfg: "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", difficulty: "Medium" },
          { name: "Fractional Knapsack", gfg: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", difficulty: "Medium" },
          { name: "Greedy algorithm to find minimum number of coins", gfg: "https://www.geeksforgeeks.org/problems/-minimum-number-of-coins/1", difficulty: "Medium" },
          { name: "Assign Cookies", leetcode: "https://leetcode.com/problems/assign-cookies/", gfg: "https://www.geeksforgeeks.org/problems/assign-cookies/1", difficulty: "Easy" },
          { name: "Jump Game I", leetcode: "https://leetcode.com/problems/jump-game/", gfg: "https://www.geeksforgeeks.org/problems/jump-game/1", difficulty: "Medium" },
          { name: "Jump Game II", leetcode: "https://leetcode.com/problems/jump-game-ii/", gfg: "https://www.geeksforgeeks.org/problems/jump-game-ii/1", difficulty: "Medium" },
          { name: "Minimum number of platforms", gfg: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", difficulty: "Medium" },
          { name: "Candy", leetcode: "https://leetcode.com/problems/candy/", gfg: "https://www.geeksforgeeks.org/problems/candy/1", difficulty: "Hard" },
          { name: "Non-overlapping Intervals", leetcode: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: "Medium" },
          { name: "Insert Interval", leetcode: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
          { name: "Minimum Platforms Required", gfg: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", difficulty: "Medium" },
          { name: "Gas Station", leetcode: "https://leetcode.com/problems/gas-station/", gfg: "https://www.geeksforgeeks.org/problems/gas-station/1", difficulty: "Medium" },
          { name: "Partition Labels", leetcode: "https://leetcode.com/problems/partition-labels/", difficulty: "Medium" },
          { name: "Lemonade Change", leetcode: "https://leetcode.com/problems/lemonade-change/", gfg: "https://www.geeksforgeeks.org/problems/lemonade-change/1", difficulty: "Easy" },
        ],
      },
    ],
  },
  // ============ STEP 13: Binary Trees ============
  {
    step: "13",
    title: "Binary Trees",
    subsections: [
      {
        title: "Traversals",
        problems: [
          { name: "Inorder Traversal", leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/", gfg: "https://www.geeksforgeeks.org/problems/inorder-traversal/1", difficulty: "Easy" },
          { name: "Preorder Traversal", leetcode: "https://leetcode.com/problems/binary-tree-preorder-traversal/", gfg: "https://www.geeksforgeeks.org/problems/preorder-traversal/1", difficulty: "Easy" },
          { name: "Postorder Traversal", leetcode: "https://leetcode.com/problems/binary-tree-postorder-traversal/", gfg: "https://www.geeksforgeeks.org/problems/postorder-traversal/1", difficulty: "Easy" },
          { name: "Morris Inorder Traversal", leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Medium" },
          { name: "Morris Preorder Traversal", leetcode: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Medium" },
          { name: "Left View of Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1", difficulty: "Easy" },
          { name: "Bottom View of Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1", difficulty: "Medium" },
          { name: "Top View of Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1", difficulty: "Medium" },
          { name: "Preorder Inorder Postorder in One Traversal", gfg: "https://www.geeksforgeeks.org/problems/preorder-inorder-postorder-traversal-of-a-binary-tree/1", difficulty: "Medium" },
          { name: "Vertical Order Traversal", leetcode: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", gfg: "https://www.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1", difficulty: "Hard" },
          { name: "Root to Node Path in Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1", difficulty: "Medium" },
          { name: "Level Order Traversal / Levelwise", leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/", gfg: "https://www.geeksforgeeks.org/problems/level-order-traversal/1", difficulty: "Medium" },
          { name: "Height of Binary Tree", leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", gfg: "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1", difficulty: "Easy" },
        ],
      },
      {
        title: "Medium",
        problems: [
          { name: "Diameter of Binary Tree", leetcode: "https://leetcode.com/problems/diameter-of-binary-tree/", gfg: "https://www.geeksforgeeks.org/problems/diameter-of-binary-tree/1", difficulty: "Easy" },
          { name: "Balanced Binary Tree", leetcode: "https://leetcode.com/problems/balanced-binary-tree/", gfg: "https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1", difficulty: "Easy" },
          { name: "LCA of Two Nodes", leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", gfg: "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1", difficulty: "Medium" },
          { name: "Check if Two Trees are Identical", leetcode: "https://leetcode.com/problems/same-tree/", gfg: "https://www.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1", difficulty: "Easy" },
          { name: "Zig Zag Traversal", leetcode: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", gfg: "https://www.geeksforgeeks.org/problems/zig-zag-traversal-of-binary-tree/1", difficulty: "Medium" },
          { name: "Boundary Traversal of Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1", difficulty: "Medium" },
          { name: "Maximum path sum", leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", gfg: "https://www.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1", difficulty: "Hard" },
          { name: "Construct Binary Tree from Inorder & Preorder", leetcode: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", gfg: "https://www.geeksforgeeks.org/problems/construct-tree-1/1", difficulty: "Medium" },
          { name: "Construct Binary Tree from Inorder & Postorder", leetcode: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", gfg: "https://www.geeksforgeeks.org/problems/construct-binary-tree-from-inorder-and-postorder/1", difficulty: "Medium" },
          { name: "Symmetric Binary Tree", leetcode: "https://leetcode.com/problems/symmetric-tree/", gfg: "https://www.geeksforgeeks.org/problems/symmetric-tree/1", difficulty: "Easy" },
          { name: "Flatten Binary Tree to Linked List", leetcode: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", gfg: "https://www.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1", difficulty: "Medium" },
          { name: "Check if Binary Tree is the mirror of itself", leetcode: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
          { name: "Children Sum Property", gfg: "https://www.geeksforgeeks.org/problems/children-sum-parent/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Hard",
        problems: [
          { name: "Print Root to Node Path", gfg: "https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1", difficulty: "Medium" },
          { name: "Vertical Order Traversal", leetcode: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: "Hard" },
          { name: "Maximum Width of Binary Tree", leetcode: "https://leetcode.com/problems/maximum-width-of-binary-tree/", difficulty: "Medium" },
          { name: "Binary Tree to Doubly Linked List", gfg: "https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1", difficulty: "Hard" },
          { name: "Minimum time to burn a Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/burning-tree/1", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 14: Binary Search Trees ============
  {
    step: "14",
    title: "Binary Search Trees",
    subsections: [
      {
        title: "Learning",
        problems: [
          { name: "Search in a BST", leetcode: "https://leetcode.com/problems/search-in-a-binary-search-tree/", gfg: "https://www.geeksforgeeks.org/problems/search-a-node-in-bst/1", difficulty: "Easy" },
          { name: "Find Min / Max in BST", gfg: "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1", difficulty: "Easy" },
          { name: "Insert into a BST", leetcode: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", gfg: "https://www.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1", difficulty: "Medium" },
          { name: "Delete a Node in BST", leetcode: "https://leetcode.com/problems/delete-node-in-a-bst/", gfg: "https://www.geeksforgeeks.org/problems/delete-a-node-from-bst/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Medium",
        problems: [
          { name: "Validate BST", leetcode: "https://leetcode.com/problems/validate-binary-search-tree/", gfg: "https://www.geeksforgeeks.org/problems/check-for-bst/1", difficulty: "Medium" },
          { name: "LCA of Two Nodes in BST", leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", gfg: "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1", difficulty: "Medium" },
          { name: "Inorder Successor in BST", gfg: "https://www.geeksforgeeks.org/problems/inorder-successor-in-bst/1", leetcode: "https://leetcode.com/problems/inorder-successor-in-bst/", difficulty: "Medium" },
          { name: "Construct BST from Given Keys", gfg: "https://www.geeksforgeeks.org/problems/construct-bst-from-given-keys/1", difficulty: "Medium" },
          { name: "Kth Smallest Element in BST", leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", gfg: "https://www.geeksforgeeks.org/problems/kth-largest-element-in-bst/1", difficulty: "Medium" },
          { name: "Inorder Predecessor/Successor", gfg: "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1", difficulty: "Easy" },
          { name: "Two Sum in BST / BST Iterator", leetcode: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", gfg: "https://www.geeksforgeeks.org/problems/find-pair-given-difference/1", difficulty: "Medium" },
          { name: "Largest BST in Binary Tree", gfg: "https://www.geeksforgeeks.org/problems/largest-bst/1", leetcode: "https://leetcode.com/problems/largest-bst-subtree/", difficulty: "Hard" },
          { name: "Serialize and Deserialize Binary Tree", leetcode: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 15: Graphs ============
  {
    step: "15",
    title: "Graphs",
    subsections: [
      {
        title: "BFS / DFS",
        problems: [
          { name: "BFS of Graph", gfg: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1", difficulty: "Easy" },
          { name: "DFS of Graph", gfg: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1", difficulty: "Easy" },
          { name: "Number of Islands", leetcode: "https://leetcode.com/problems/number-of-islands/", gfg: "https://www.geeksforgeeks.org/problems/number-of-islands/1", difficulty: "Medium" },
          { name: "Flood Fill", leetcode: "https://leetcode.com/problems/flood-fill/", gfg: "https://www.geeksforgeeks.org/problems/flood-fill-algorithm1856/1", difficulty: "Easy" },
          { name: "Rotting Oranges", leetcode: "https://leetcode.com/problems/rotting-oranges/", gfg: "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1", difficulty: "Medium" },
          { name: "Detect Cycle in Undirected Graph (BFS)", gfg: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1", difficulty: "Medium" },
          { name: "Detect Cycle in Undirected Graph (DFS)", gfg: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1", difficulty: "Medium" },
          { name: "Detect Cycle in Directed Graph", gfg: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1", difficulty: "Medium" },
          { name: "Topological Sort (BFS - Kahn's)", gfg: "https://www.geeksforgeeks.org/problems/topological-sort/1", difficulty: "Medium" },
          { name: "Topological Sort (DFS)", gfg: "https://www.geeksforgeeks.org/problems/topological-sort/1", difficulty: "Medium" },
          { name: "Number of Distinct Islands", gfg: "https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1", difficulty: "Medium" },
          { name: "Bipartite Check (BFS)", leetcode: "https://leetcode.com/problems/is-graph-bipartite/", gfg: "https://www.geeksforgeeks.org/problems/bipartite-graph/1", difficulty: "Medium" },
          { name: "Bipartite Check (DFS)", gfg: "https://www.geeksforgeeks.org/problems/bipartite-graph/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Shortest Path",
        problems: [
          { name: "Shortest Path in Undirected Graph with Unit Weights", gfg: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1", difficulty: "Medium" },
          { name: "Word Ladder I", leetcode: "https://leetcode.com/problems/word-ladder/", gfg: "https://www.geeksforgeeks.org/problems/word-ladder/1", difficulty: "Hard" },
          { name: "Word Ladder II", leetcode: "https://leetcode.com/problems/word-ladder-ii/", gfg: "https://www.geeksforgeeks.org/problems/word-ladder-ii/1", difficulty: "Hard" },
          { name: "Dijkstra's Algorithm", gfg: "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1", leetcode: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium" },
          { name: "Bellman Ford Algorithm", gfg: "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1", difficulty: "Medium" },
          { name: "Floyd Warshall Algorithm", gfg: "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1", difficulty: "Medium" },
          { name: "Shortest Path in a Binary Maze", gfg: "https://www.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze/1", difficulty: "Medium" },
        ],
      },
      {
        title: "Disjoint Set / MST",
        problems: [
          { name: "Disjoint Set Union (Union Find)", gfg: "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1", difficulty: "Medium" },
          { name: "Kruskal's Algorithm (MST)", gfg: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", difficulty: "Medium" },
          { name: "Prim's Algorithm (MST)", gfg: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", difficulty: "Medium" },
          { name: "Number of Operations to Make Network Connected", leetcode: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/", difficulty: "Medium" },
          { name: "Accounts Merge", leetcode: "https://leetcode.com/problems/accounts-merge/", difficulty: "Medium" },
        ],
      },
      {
        title: "Other Algorithms",
        problems: [
          { name: "Strongly Connected Components (Kosaraju's)", gfg: "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", difficulty: "Medium" },
          { name: "Bridges in Graph (Tarjan's)", gfg: "https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1", difficulty: "Medium" },
          { name: "Articulation Points", gfg: "https://www.geeksforgeeks.org/problems/articulation-point/1", difficulty: "Hard" },
          { name: "Cheapest Flights Within K Stops", leetcode: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", gfg: "https://www.geeksforgeeks.org/problems/cheapest-flights-within-k-stops/1", difficulty: "Medium" },
          { name: "Alien Dictionary", gfg: "https://www.geeksforgeeks.org/problems/alien-dictionary/1", leetcode: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Hard" },
          { name: "Course Schedule I", leetcode: "https://leetcode.com/problems/course-schedule/", gfg: "https://www.geeksforgeeks.org/problems/prerequisite-tasks/1", difficulty: "Medium" },
          { name: "Course Schedule II", leetcode: "https://leetcode.com/problems/course-schedule-ii/", gfg: "https://www.geeksforgeeks.org/problems/course-schedule/1", difficulty: "Medium" },
          { name: "Surrounded Regions", leetcode: "https://leetcode.com/problems/surrounded-regions/", gfg: "https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1", difficulty: "Medium" },
          { name: "Number of Enclaves", leetcode: "https://leetcode.com/problems/number-of-enclaves/", gfg: "https://www.geeksforgeeks.org/problems/number-of-enclaves/1", difficulty: "Medium" },
        ],
      },
    ],
  },
  // ============ STEP 16: Dynamic Programming ============
  {
    step: "16",
    title: "Dynamic Programming",
    subsections: [
      {
        title: "1D DP",
        problems: [
          { name: "Climbing Stairs", leetcode: "https://leetcode.com/problems/climbing-stairs/", gfg: "https://www.geeksforgeeks.org/problems/count-ways-to-nth-stairorder-does-not-matter/1", difficulty: "Easy" },
          { name: "Frog Jump", gfg: "https://www.geeksforgeeks.org/problems/geek-jump/1", difficulty: "Easy" },
          { name: "Frog Jump with K Distance", gfg: "https://www.geeksforgeeks.org/problems/minimal-cost/1", difficulty: "Easy" },
          { name: "House Robber", leetcode: "https://leetcode.com/problems/house-robber/", gfg: "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1", difficulty: "Medium" },
          { name: "House Robber II", leetcode: "https://leetcode.com/problems/house-robber-ii/", difficulty: "Medium" },
          { name: "Decode Ways", leetcode: "https://leetcode.com/problems/decode-ways/", gfg: "https://www.geeksforgeeks.org/problems/total-decoding-messages1235/1", difficulty: "Medium" },
          { name: "Unique Paths", leetcode: "https://leetcode.com/problems/unique-paths/", gfg: "https://www.geeksforgeeks.org/problems/number-of-unique-paths/1", difficulty: "Medium" },
          { name: "Minimum Path Sum", leetcode: "https://leetcode.com/problems/minimum-path-sum/", gfg: "https://www.geeksforgeeks.org/problems/path-sum-in-a-matrix/1", difficulty: "Medium" },
          { name: "Minimum Coins (Coin Change)", leetcode: "https://leetcode.com/problems/coin-change/", gfg: "https://www.geeksforgeeks.org/problems/number-of-coins1829/1", difficulty: "Medium" },
          { name: "Target Sum", leetcode: "https://leetcode.com/problems/target-sum/", gfg: "https://www.geeksforgeeks.org/problems/target-sum/1", difficulty: "Medium" },
          { name: "Ninja's Training", gfg: "https://www.geeksforgeeks.org/problems/geeks-training/1", difficulty: "Medium" },
        ],
      },
      {
        title: "2D / 3D DP and DP on Grids",
        problems: [
          { name: "Ninja's Training", gfg: "https://www.geeksforgeeks.org/problems/geeks-training/1", difficulty: "Medium" },
          { name: "Unique Paths II", leetcode: "https://leetcode.com/problems/unique-paths-ii/", difficulty: "Medium" },
          { name: "Minimum Path Sum", leetcode: "https://leetcode.com/problems/minimum-path-sum/", difficulty: "Medium" },
          { name: "Cherry Pickup II", leetcode: "https://leetcode.com/problems/cherry-pickup-ii/", difficulty: "Hard" },
          { name: "Subset Sum Problem", gfg: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1", difficulty: "Medium" },
          { name: "Partition Equal Subset Sum", leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/", gfg: "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1", difficulty: "Medium" },
          { name: "Partition Array Into Two Arrays to Minimize Sum Difference", gfg: "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1", difficulty: "Hard" },
          { name: "Count Subsets with Sum K", gfg: "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1", difficulty: "Medium" },
          { name: "Coin Change 2", leetcode: "https://leetcode.com/problems/coin-change-ii/", gfg: "https://www.geeksforgeeks.org/problems/coin-change2448/1", difficulty: "Medium" },
          { name: "Unbounded Knapsack", gfg: "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items/1", difficulty: "Medium" },
          { name: "Rod Cutting Problem", gfg: "https://www.geeksforgeeks.org/problems/rod-cutting0840/1", difficulty: "Medium" },
        ],
      },
      {
        title: "DP on Strings",
        problems: [
          { name: "Longest Common Subsequence", leetcode: "https://leetcode.com/problems/longest-common-subsequence/", gfg: "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1", difficulty: "Medium" },
          { name: "Print Longest Common Subsequence", gfg: "https://www.geeksforgeeks.org/problems/print-longest-common-subsequence/1", difficulty: "Medium" },
          { name: "Longest Common Substring", gfg: "https://www.geeksforgeeks.org/problems/longest-common-substring/1", difficulty: "Medium" },
          { name: "Longest Palindromic Subsequence", leetcode: "https://leetcode.com/problems/longest-palindromic-subsequence/", difficulty: "Medium" },
          { name: "Minimum Insertions to Make String Palindrome", leetcode: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", difficulty: "Medium" },
          { name: "Minimum Insertions/Deletions to Convert String", leetcode: "https://leetcode.com/problems/delete-operation-for-two-strings/", gfg: "https://www.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions5958/1", difficulty: "Medium" },
          { name: "Shortest Common Supersequence", leetcode: "https://leetcode.com/problems/shortest-common-supersequence/", gfg: "https://www.geeksforgeeks.org/problems/shortest-common-supersequence/1", difficulty: "Hard" },
          { name: "Distinct Subsequences", leetcode: "https://leetcode.com/problems/distinct-subsequences/", gfg: "https://www.geeksforgeeks.org/problems/distinct-occurrences/1", difficulty: "Hard" },
          { name: "Edit Distance", leetcode: "https://leetcode.com/problems/edit-distance/", gfg: "https://www.geeksforgeeks.org/problems/edit-distance3702/1", difficulty: "Medium" },
          { name: "Wildcard Matching", leetcode: "https://leetcode.com/problems/wildcard-matching/", gfg: "https://www.geeksforgeeks.org/problems/wildcard-string-matching/1", difficulty: "Hard" },
        ],
      },
      {
        title: "DP on Stocks",
        problems: [
          { name: "Best Time to Buy and Sell Stock I", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
          { name: "Best Time to Buy and Sell Stock II", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", gfg: "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1", difficulty: "Medium" },
          { name: "Best Time to Buy and Sell Stock III", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", difficulty: "Hard" },
          { name: "Best Time to Buy and Sell Stock IV", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", difficulty: "Hard" },
          { name: "Best Time to Buy and Sell Stock with Cooldown", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", difficulty: "Medium" },
          { name: "Best Time to Buy and Sell Stock with Transaction Fee", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/", difficulty: "Medium" },
        ],
      },
      {
        title: "DP on Longest Increasing Subsequence",
        problems: [
          { name: "Longest Increasing Subsequence", leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/", gfg: "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1", difficulty: "Medium" },
          { name: "Print Longest Increasing Subsequence", gfg: "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1", difficulty: "Medium" },
          { name: "Longest Bitonic Subsequence", gfg: "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence/1", difficulty: "Medium" },
          { name: "Number of Longest Increasing Subsequence", leetcode: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", difficulty: "Medium" },
          { name: "Maximum Sum Increasing Subsequence", gfg: "https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1", difficulty: "Medium" },
        ],
      },
      {
        title: "DP on Trees",
        problems: [
          { name: "Binary Tree Cameras", leetcode: "https://leetcode.com/problems/binary-tree-cameras/", difficulty: "Hard" },
          { name: "House Robber III", leetcode: "https://leetcode.com/problems/house-robber-iii/", difficulty: "Medium" },
          { name: "Binary Tree Maximum Path Sum", leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
        ],
      },
      {
        title: "MCM / Partition DP",
        problems: [
          { name: "Matrix Chain Multiplication", gfg: "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1", difficulty: "Hard" },
          { name: "Burst Balloons", leetcode: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
          { name: "Palindrome Partitioning II", leetcode: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" },
          { name: "Boolean Evaluation", gfg: "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 17: Tries ============
  {
    step: "17",
    title: "Tries",
    subsections: [
      {
        title: "Solve Problems",
        problems: [
          { name: "Implement Trie (Prefix Tree)", leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/", gfg: "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1", difficulty: "Medium" },
          { name: "Implement Trie II", gfg: "https://www.geeksforgeeks.org/problems/trie-delete-and-search/1", difficulty: "Medium" },
          { name: "Longest String with All Prefixes", gfg: "https://www.geeksforgeeks.org/problems/longest-string-with-all-prefixes/1", difficulty: "Medium" },
          { name: "Number of Distinct Substrings in a String", gfg: "https://www.geeksforgeeks.org/problems/count-distinct-substrings/1", difficulty: "Hard" },
          { name: "Power Set", gfg: "https://www.geeksforgeeks.org/problems/power-set4302/1", difficulty: "Medium" },
          { name: "Maximum XOR of Two Numbers in an Array", leetcode: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", gfg: "https://www.geeksforgeeks.org/problems/maximum-xor-of-two-numbers-in-an-array/1", difficulty: "Medium" },
          { name: "Maximum XOR With an Element From Array", leetcode: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", difficulty: "Hard" },
        ],
      },
    ],
  },
  // ============ STEP 18: Strings (Advanced) ============
  {
    step: "18",
    title: "Strings (Advanced)",
    subsections: [
      {
        title: "Solve Problems",
        problems: [
          { name: "Rabin Karp Algorithm", gfg: "https://www.geeksforgeeks.org/problems/rabin-karp-algorithm-for-pattern-searching/1", difficulty: "Hard" },
          { name: "KMP Algorithm / LPS Array", leetcode: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", gfg: "https://www.geeksforgeeks.org/problems/search-pattern0205/1", difficulty: "Medium" },
          { name: "Shortest Palindrome", leetcode: "https://leetcode.com/problems/shortest-palindrome/", difficulty: "Hard" },
          { name: "Repeated String Match", leetcode: "https://leetcode.com/problems/repeated-string-match/", gfg: "https://www.geeksforgeeks.org/problems/repeated-string-match/1", difficulty: "Medium" },
          { name: "Valid Anagram", leetcode: "https://leetcode.com/problems/valid-anagram/", gfg: "https://www.geeksforgeeks.org/problems/anagram-1587115620/1", difficulty: "Easy" },
        ],
      },
    ],
  },
];

// Count total problems
export function getTotalProblemCount(): number {
  return dsaSheetData.reduce((total, step) => {
    return total + step.subsections.reduce((subTotal, sub) => subTotal + sub.problems.length, 0);
  }, 0);
}

// Get problems count per step
export function getStepProblemCount(step: Step): number {
  return step.subsections.reduce((total, sub) => total + sub.problems.length, 0);
}
