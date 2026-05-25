// Complete Striver's A2Z DSA Sheet Data
// All 455+ problems organized by Steps and Sub-steps

export interface Problem {
  id: number;
  name: string;
  leetcode?: string;
  gfg?: string;
  youtube?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export interface SubStep {
  title: string;
  problems: Problem[];
}

export interface Step {
  stepNumber: string;
  title: string;
  subSteps: SubStep[];
}

export const dsaSheetData: Step[] = [
  // ==================== STEP 1: Learn the Basics ====================
  {
    stepNumber: "1",
    title: "Learn the Basics",
    subSteps: [
      {
        title: "Things to know in C++/Java/Python or any language",
        problems: [
          { id: 1, name: "User Input / Output", gfg: "" },
          { id: 2, name: "Data Types", gfg: "https://practice.geeksforgeeks.org/problems/java-data-types3510/1" },
          { id: 3, name: "If Else Statements", gfg: "https://practice.geeksforgeeks.org/problems/java-if-else-decision-making0924" },
          { id: 4, name: "Switch Statement", gfg: "https://practice.geeksforgeeks.org/problems/java-switch-case-statement3529/1" },
          { id: 5, name: "What are arrays, strings?" },
          { id: 6, name: "For loops", gfg: "https://practice.geeksforgeeks.org/problems/for-loop-primecheck-java/1" },
          { id: 7, name: "While loops" },
          { id: 8, name: "Functions (Pass by Reference and Value)", gfg: "" },
          { id: 9, name: "Time Complexity" },
        ]
      },
      {
        title: "Build up Logical Thinking (Patterns)",
        problems: [
          { id: 10, name: "Pattern 1 - Right-Angled Triangle", difficulty: 'Easy' },
          { id: 11, name: "Pattern 2 - Right-Angled Triangle 2", difficulty: 'Easy' },
          { id: 12, name: "Pattern 3 - Right-Angled Triangle with Numbers", difficulty: 'Easy' },
          { id: 13, name: "Pattern 4 - Right-Angled Triangle with Same Number Row", difficulty: 'Easy' },
          { id: 14, name: "Pattern 5 - Inverted Right-Angled Triangle", difficulty: 'Easy' },
          { id: 15, name: "Pattern 6 - Inverted Right-Angled Triangle 2", difficulty: 'Easy' },
          { id: 16, name: "Pattern 7 - Pyramid", difficulty: 'Easy' },
          { id: 17, name: "Pattern 8 - Inverted Pyramid", difficulty: 'Easy' },
          { id: 18, name: "Pattern 9 - Diamond", difficulty: 'Easy' },
          { id: 19, name: "Pattern 10 - Half Diamond", difficulty: 'Easy' },
          { id: 20, name: "Pattern 11 - Binary Triangle", difficulty: 'Easy' },
          { id: 21, name: "Pattern 12 - Number-Crown Pattern", difficulty: 'Medium' },
          { id: 22, name: "Pattern 13 - Increasing Number Triangle", difficulty: 'Easy' },
          { id: 23, name: "Pattern 14 - Increasing Letter Triangle", difficulty: 'Easy' },
          { id: 24, name: "Pattern 15 - Reverse Letter Triangle", difficulty: 'Easy' },
          { id: 25, name: "Pattern 16 - Alpha-Ramp Pattern", difficulty: 'Easy' },
          { id: 26, name: "Pattern 17 - Alpha-Hill Pattern", difficulty: 'Medium' },
          { id: 27, name: "Pattern 18 - Alpha-Triangle Pattern", difficulty: 'Medium' },
          { id: 28, name: "Pattern 19 - Symmetric-Void Pattern", difficulty: 'Medium' },
          { id: 29, name: "Pattern 20 - Symmetric-Butterfly Pattern", difficulty: 'Medium' },
          { id: 30, name: "Pattern 21 - Hollow Rectangle Pattern", difficulty: 'Easy' },
          { id: 31, name: "Pattern 22 - The Number Pattern", difficulty: 'Medium' },
        ]
      },
      {
        title: "Learn STL / Java Collections",
        problems: [
          { id: 32, name: "C++ STL / Java Collections" },
        ]
      },
      {
        title: "Know Basic Maths",
        problems: [
          { id: 33, name: "Count Digits", gfg: "https://practice.geeksforgeeks.org/problems/count-digits5716/1", leetcode: "", difficulty: 'Easy' },
          { id: 34, name: "Reverse a Number", gfg: "https://practice.geeksforgeeks.org/problems/reverse-bits3556/1", leetcode: "https://leetcode.com/problems/reverse-integer/", difficulty: 'Easy' },
          { id: 35, name: "Check Palindrome", gfg: "https://practice.geeksforgeeks.org/problems/palindrome0746/1", leetcode: "https://leetcode.com/problems/palindrome-number/", difficulty: 'Easy' },
          { id: 36, name: "GCD Or HCF", gfg: "https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1", difficulty: 'Easy' },
          { id: 37, name: "Armstrong Numbers", gfg: "https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1", leetcode: "https://leetcode.com/problems/armstrong-number/", difficulty: 'Easy' },
          { id: 38, name: "Print all Divisors", gfg: "https://practice.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1", difficulty: 'Easy' },
          { id: 39, name: "Check for Prime", gfg: "", difficulty: 'Easy' },
        ]
      },
      {
        title: "Learn Basic Recursion",
        problems: [
          { id: 40, name: "Understand recursion by print something N times", gfg: "", difficulty: 'Easy' },
          { id: 41, name: "Print name N times using recursion", gfg: "", difficulty: 'Easy' },
          { id: 42, name: "Print 1 to N using recursion", gfg: "", difficulty: 'Easy' },
          { id: 43, name: "Print N to 1 using recursion", gfg: "", difficulty: 'Easy' },
          { id: 44, name: "Sum of first N numbers", gfg: "", difficulty: 'Easy' },
          { id: 45, name: "Factorial of N numbers", gfg: "", difficulty: 'Easy' },
          { id: 46, name: "Reverse an array", gfg: "", difficulty: 'Easy' },
          { id: 47, name: "Check if a string is palindrome or not", gfg: "", leetcode: "https://leetcode.com/problems/valid-palindrome/", difficulty: 'Easy' },
          { id: 48, name: "Fibonacci Number", gfg: "", leetcode: "https://leetcode.com/problems/fibonacci-number/", difficulty: 'Easy' },
        ]
      },
      {
        title: "Learn Basic Hashing",
        problems: [
          { id: 49, name: "Counting frequencies of array elements", gfg: "https://practice.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1", difficulty: 'Easy' },
          { id: 50, name: "Find the highest/lowest frequency element", gfg: "", difficulty: 'Easy' },
        ]
      },
    ]
  },
  // ==================== STEP 2: Sorting Techniques ====================
  {
    stepNumber: "2",
    title: "Sorting Techniques",
    subSteps: [
      {
        title: "Sorting-I",
        problems: [
          { id: 51, name: "Selection Sort", gfg: "https://practice.geeksforgeeks.org/problems/selection-sort/1", difficulty: 'Easy' },
          { id: 52, name: "Bubble Sort", gfg: "https://practice.geeksforgeeks.org/problems/bubble-sort/1", difficulty: 'Easy' },
          { id: 53, name: "Insertion Sort", gfg: "https://practice.geeksforgeeks.org/problems/insertion-sort/1", difficulty: 'Easy' },
        ]
      },
      {
        title: "Sorting-II",
        problems: [
          { id: 54, name: "Merge Sort", gfg: "https://practice.geeksforgeeks.org/problems/merge-sort/1", difficulty: 'Medium' },
          { id: 55, name: "Recursive Bubble Sort", gfg: "", difficulty: 'Easy' },
          { id: 56, name: "Recursive Insertion Sort", gfg: "", difficulty: 'Easy' },
          { id: 57, name: "Quick Sort", gfg: "https://practice.geeksforgeeks.org/problems/quick-sort/1", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 3: Arrays ====================
  {
    stepNumber: "3",
    title: "Arrays",
    subSteps: [
      {
        title: "Easy",
        problems: [
          { id: 58, name: "Largest Element in an Array", gfg: "https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/1", difficulty: 'Easy' },
          { id: 59, name: "Second Largest Element in an Array without sorting", gfg: "", difficulty: 'Easy' },
          { id: 60, name: "Check if the array is sorted", gfg: "", difficulty: 'Easy' },
          { id: 61, name: "Remove duplicates from Sorted array", leetcode: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: 'Easy' },
          { id: 62, name: "Left Rotate an array by one place", gfg: "", difficulty: 'Easy' },
          { id: 63, name: "Left rotate an array by D places", gfg: "", difficulty: 'Easy' },
          { id: 64, name: "Move Zeros to end", leetcode: "https://leetcode.com/problems/move-zeroes/", difficulty: 'Easy' },
          { id: 65, name: "Linear Search", gfg: "", difficulty: 'Easy' },
          { id: 66, name: "Find the Union and intersection of two sorted arrays", gfg: "", difficulty: 'Easy' },
          { id: 67, name: "Find missing number in an array", leetcode: "https://leetcode.com/problems/missing-number/", difficulty: 'Easy' },
          { id: 68, name: "Maximum Consecutive Ones", leetcode: "https://leetcode.com/problems/max-consecutive-ones/", difficulty: 'Easy' },
          { id: 69, name: "Find the number that appears once, and other numbers twice", leetcode: "https://leetcode.com/problems/single-number/", difficulty: 'Easy' },
        ]
      },
      {
        title: "Medium",
        problems: [
          { id: 70, name: "Longest subarray with given sum (Positives)", gfg: "", difficulty: 'Medium' },
          { id: 71, name: "Longest subarray with given sum (Positives + Negatives)", gfg: "", difficulty: 'Medium' },
          { id: 72, name: "2Sum Problem", leetcode: "https://leetcode.com/problems/two-sum/", difficulty: 'Medium' },
          { id: 73, name: "Sort an array of 0's 1's and 2's", leetcode: "https://leetcode.com/problems/sort-colors/", difficulty: 'Medium' },
          { id: 74, name: "Majority Element (>n/2 times)", leetcode: "https://leetcode.com/problems/majority-element/", difficulty: 'Easy' },
          { id: 75, name: "Kadane's Algorithm, maximum subarray sum", leetcode: "https://leetcode.com/problems/maximum-subarray/", difficulty: 'Medium' },
          { id: 76, name: "Print subarray with maximum subarray sum (extended version of above problem)", gfg: "", difficulty: 'Medium' },
          { id: 77, name: "Stock Buy and Sell", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: 'Easy' },
          { id: 78, name: "Rearrange the array in alternating positive and negative items", gfg: "", difficulty: 'Medium' },
          { id: 79, name: "Next Permutation", leetcode: "https://leetcode.com/problems/next-permutation/", difficulty: 'Medium' },
          { id: 80, name: "Leaders in an Array", gfg: "https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1", difficulty: 'Easy' },
          { id: 81, name: "Longest Consecutive Sequence in an Array", leetcode: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: 'Medium' },
          { id: 82, name: "Set Matrix Zeros", leetcode: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: 'Medium' },
          { id: 83, name: "Rotate Matrix by 90 degrees", leetcode: "https://leetcode.com/problems/rotate-image/", difficulty: 'Medium' },
          { id: 84, name: "Print the matrix in spiral manner", leetcode: "https://leetcode.com/problems/spiral-matrix/", difficulty: 'Medium' },
          { id: 85, name: "Pascal's Triangle", leetcode: "https://leetcode.com/problems/pascals-triangle/", difficulty: 'Easy' },
        ]
      },
      {
        title: "Hard",
        problems: [
          { id: 86, name: "Majority Element (n/3 times)", leetcode: "https://leetcode.com/problems/majority-element-ii/", difficulty: 'Medium' },
          { id: 87, name: "3-Sum Problem", leetcode: "https://leetcode.com/problems/3sum/", difficulty: 'Medium' },
          { id: 88, name: "4-Sum Problem", leetcode: "https://leetcode.com/problems/4sum/", difficulty: 'Medium' },
          { id: 89, name: "Largest Subarray with 0 Sum", gfg: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1", difficulty: 'Medium' },
          { id: 90, name: "Count number of subarrays with given xor K", gfg: "", difficulty: 'Hard' },
          { id: 91, name: "Merge Overlapping Subintervals", leetcode: "https://leetcode.com/problems/merge-intervals/", difficulty: 'Medium' },
          { id: 92, name: "Merge two sorted arrays without extra space", leetcode: "https://leetcode.com/problems/merge-sorted-array/", gfg: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1", difficulty: 'Medium' },
          { id: 93, name: "Find the repeating and missing number", gfg: "", difficulty: 'Medium' },
          { id: 94, name: "Count Inversions", gfg: "https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1", difficulty: 'Medium' },
          { id: 95, name: "Reverse Pairs", leetcode: "https://leetcode.com/problems/reverse-pairs/", difficulty: 'Hard' },
          { id: 96, name: "Maximum Product Subarray", leetcode: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 4: Binary Search ====================
  {
    stepNumber: "4",
    title: "Binary Search",
    subSteps: [
      {
        title: "BS on 1D Arrays",
        problems: [
          { id: 97, name: "Binary Search to find X in sorted array", leetcode: "https://leetcode.com/problems/binary-search/", difficulty: 'Easy' },
          { id: 98, name: "Implement Lower Bound", gfg: "", difficulty: 'Easy' },
          { id: 99, name: "Implement Upper Bound", gfg: "", difficulty: 'Easy' },
          { id: 100, name: "Search Insert Position", leetcode: "https://leetcode.com/problems/search-insert-position/", difficulty: 'Easy' },
          { id: 101, name: "Floor/Ceil in Sorted Array", gfg: "", difficulty: 'Easy' },
          { id: 102, name: "Find the first or last occurrence of a given number in a sorted array", gfg: "", difficulty: 'Easy' },
          { id: 103, name: "Count occurrences of a number in a sorted array with duplicates", gfg: "", difficulty: 'Easy' },
          { id: 104, name: "Find peak element", leetcode: "https://leetcode.com/problems/find-peak-element/", difficulty: 'Medium' },
          { id: 105, name: "Search in Rotated Sorted Array I", leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: 'Medium' },
          { id: 106, name: "Search in Rotated Sorted Array II", leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: 'Medium' },
          { id: 107, name: "Find minimum in Rotated Sorted Array", leetcode: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: 'Medium' },
          { id: 108, name: "Single element in a Sorted Array", leetcode: "https://leetcode.com/problems/single-element-in-a-sorted-array/", difficulty: 'Medium' },
          { id: 109, name: "Find kth element of two sorted arrays", gfg: "", difficulty: 'Hard' },
          { id: 110, name: "Find out how many times has an array been rotated", gfg: "", difficulty: 'Easy' },
        ]
      },
      {
        title: "BS on Answers",
        problems: [
          { id: 111, name: "Find square root of a number in log n", leetcode: "https://leetcode.com/problems/sqrtx/", difficulty: 'Easy' },
          { id: 112, name: "Find the Nth root of a number using binary search", gfg: "", difficulty: 'Easy' },
          { id: 113, name: "Koko Eating Bananas", leetcode: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: 'Medium' },
          { id: 114, name: "Minimum days to make M bouquets", leetcode: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", difficulty: 'Medium' },
          { id: 115, name: "Find the smallest Divisor", leetcode: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/", difficulty: 'Medium' },
          { id: 116, name: "Capacity to Ship Packages within D Days", leetcode: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", difficulty: 'Medium' },
          { id: 117, name: "Kth Missing Positive Number", leetcode: "https://leetcode.com/problems/kth-missing-positive-number/", difficulty: 'Medium' },
        ]
      },
      {
        title: "BS on 2D Arrays",
        problems: [
          { id: 118, name: "Search in a 2D matrix", leetcode: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: 'Medium' },
          { id: 119, name: "Find Peak Element (2D)", leetcode: "https://leetcode.com/problems/find-a-peak-element-ii/", difficulty: 'Medium' },
          { id: 120, name: "Matrix Median", gfg: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1", difficulty: 'Hard' },
        ]
      },
      {
        title: "BS on Answers - Advanced",
        problems: [
          { id: 121, name: "Aggressive Cows", gfg: "https://practice.geeksforgeeks.org/problems/aggressive-cows/1", difficulty: 'Hard' },
          { id: 122, name: "Book Allocation Problem", gfg: "", difficulty: 'Medium' },
          { id: 123, name: "Split array – Largest Sum", leetcode: "https://leetcode.com/problems/split-array-largest-sum/", difficulty: 'Hard' },
          { id: 124, name: "Minimize Max Distance to Gas Station", gfg: "", difficulty: 'Hard' },
          { id: 125, name: "Median of 2 sorted arrays", leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: 'Hard' },
          { id: 126, name: "Kth element of 2 sorted arrays", gfg: "", difficulty: 'Hard' },
        ]
      },
    ]
  },
  // ==================== STEP 5: Strings ====================
  {
    stepNumber: "5",
    title: "Strings",
    subSteps: [
      {
        title: "Basic and Easy",
        problems: [
          { id: 127, name: "Remove outermost Paranthesis", leetcode: "https://leetcode.com/problems/remove-outermost-parentheses/", difficulty: 'Easy' },
          { id: 128, name: "Reverse words in a given string", gfg: "https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1", difficulty: 'Easy' },
          { id: 129, name: "Largest odd number in a string", leetcode: "https://leetcode.com/problems/largest-odd-number-in-string/", difficulty: 'Easy' },
          { id: 130, name: "Longest Common Prefix", leetcode: "https://leetcode.com/problems/longest-common-prefix/", difficulty: 'Easy' },
          { id: 131, name: "Isomorphic String", leetcode: "https://leetcode.com/problems/isomorphic-strings/", difficulty: 'Easy' },
          { id: 132, name: "Check whether one string is a rotation of another", gfg: "", difficulty: 'Easy' },
          { id: 133, name: "Check if two strings are anagram of each other", leetcode: "https://leetcode.com/problems/valid-anagram/", difficulty: 'Easy' },
        ]
      },
      {
        title: "Medium",
        problems: [
          { id: 134, name: "Sort Characters by frequency", leetcode: "https://leetcode.com/problems/sort-characters-by-frequency/", difficulty: 'Medium' },
          { id: 135, name: "Maximum Nesting Depth of Paranthesis", leetcode: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/", difficulty: 'Easy' },
          { id: 136, name: "Roman Number to Integer and vice versa", leetcode: "https://leetcode.com/problems/roman-to-integer/", difficulty: 'Easy' },
          { id: 137, name: "Implement Atoi", leetcode: "https://leetcode.com/problems/string-to-integer-atoi/", gfg: "https://practice.geeksforgeeks.org/problems/implement-atoi/1", difficulty: 'Medium' },
          { id: 138, name: "Count Number of Substrings", gfg: "", difficulty: 'Medium' },
          { id: 139, name: "Longest Palindromic Substring (without DP)", leetcode: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: 'Medium' },
          { id: 140, name: "Sum of Beauty of all substrings", leetcode: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/", difficulty: 'Medium' },
          { id: 141, name: "Reverse Every Word in A String", leetcode: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 6: Linked List ====================
  {
    stepNumber: "6",
    title: "Linked List",
    subSteps: [
      {
        title: "Learn 1D LL",
        problems: [
          { id: 142, name: "Introduction to LinkedList, learn about struct, and how is node represented", gfg: "", difficulty: 'Easy' },
          { id: 143, name: "Inserting a node in LinkedList", gfg: "", difficulty: 'Easy' },
          { id: 144, name: "Deleting a node in LinkedList", gfg: "", difficulty: 'Easy' },
          { id: 145, name: "Find the length of the linkedlist [learn traversal]", gfg: "", difficulty: 'Easy' },
          { id: 146, name: "Search an element in the LL", gfg: "", difficulty: 'Easy' },
        ]
      },
      {
        title: "Learn 2D LL / DLL",
        problems: [
          { id: 147, name: "Introduction to DLL, learn about struct, and how is node represented", gfg: "", difficulty: 'Easy' },
          { id: 148, name: "Insert a node in DLL", gfg: "", difficulty: 'Easy' },
          { id: 149, name: "Delete a node in DLL", gfg: "", difficulty: 'Easy' },
        ]
      },
      {
        title: "Medium Problems on LL",
        problems: [
          { id: 150, name: "Reverse a LinkedList [Iterative]", leetcode: "https://leetcode.com/problems/reverse-linked-list/", difficulty: 'Easy' },
          { id: 151, name: "Reverse a LL [Recursive]", leetcode: "https://leetcode.com/problems/reverse-linked-list/", difficulty: 'Easy' },
          { id: 152, name: "Middle of a LinkedList [TortoiseHare Method]", leetcode: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: 'Easy' },
          { id: 153, name: "Detect a loop in LL", leetcode: "https://leetcode.com/problems/linked-list-cycle/", difficulty: 'Easy' },
          { id: 154, name: "Find the starting point in LL", leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/", difficulty: 'Medium' },
          { id: 155, name: "Length of Loop in LL", gfg: "", difficulty: 'Medium' },
          { id: 156, name: "Check if LL is palindrome or not", leetcode: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: 'Medium' },
          { id: 157, name: "Segregate odd and even nodes in LL", leetcode: "https://leetcode.com/problems/odd-even-linked-list/", difficulty: 'Medium' },
          { id: 158, name: "Remove Nth node from the back of the LL", leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: 'Medium' },
          { id: 159, name: "Delete the middle node of LL", leetcode: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/", difficulty: 'Medium' },
          { id: 160, name: "Sort LL", leetcode: "https://leetcode.com/problems/sort-list/", difficulty: 'Medium' },
          { id: 161, name: "Sort a LL of 0's 1's and 2's by changing links", leetcode: "", gfg: "", difficulty: 'Medium' },
          { id: 162, name: "Find the intersection point of Y LL", leetcode: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: 'Easy' },
          { id: 163, name: "Add 1 to a number represented by LL", gfg: "", difficulty: 'Medium' },
          { id: 164, name: "Add 2 numbers in LL", leetcode: "https://leetcode.com/problems/add-two-numbers/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Hard Problems on LL",
        problems: [
          { id: 165, name: "Delete all occurrences of a key in DLL", gfg: "", difficulty: 'Medium' },
          { id: 166, name: "Find pairs with given sum in DLL", gfg: "", difficulty: 'Medium' },
          { id: 167, name: "Remove duplicates from sorted DLL", gfg: "", difficulty: 'Easy' },
          { id: 168, name: "Reverse LL in group of given size K", leetcode: "https://leetcode.com/problems/reverse-nodes-in-k-group/", gfg: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1", difficulty: 'Hard' },
          { id: 169, name: "Rotate a LL", leetcode: "https://leetcode.com/problems/rotate-list/", difficulty: 'Medium' },
          { id: 170, name: "Flattening of LL", gfg: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1", difficulty: 'Medium' },
          { id: 171, name: "Clone a Linked List with random and next pointer", leetcode: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 7: Recursion ====================
  {
    stepNumber: "7",
    title: "Recursion",
    subSteps: [
      {
        title: "Get a Strong Hold",
        problems: [
          { id: 172, name: "Recursive Implementation of atoi()", gfg: "https://practice.geeksforgeeks.org/problems/implement-atoi/1", difficulty: 'Medium' },
          { id: 173, name: "Pow(x, n)", leetcode: "https://leetcode.com/problems/powx-n/", difficulty: 'Medium' },
          { id: 174, name: "Count Good numbers", leetcode: "https://leetcode.com/problems/count-good-numbers/", difficulty: 'Medium' },
          { id: 175, name: "Sort a stack using recursion", gfg: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1", difficulty: 'Medium' },
          { id: 176, name: "Reverse a stack using recursion", gfg: "https://practice.geeksforgeeks.org/problems/reverse-a-stack/1", difficulty: 'Medium' },
        ]
      },
      {
        title: "Subsequences Pattern",
        problems: [
          { id: 177, name: "Generate all binary strings", gfg: "", difficulty: 'Medium' },
          { id: 178, name: "Generate Paranthesis", leetcode: "https://leetcode.com/problems/generate-parentheses/", difficulty: 'Medium' },
          { id: 179, name: "Print all subsequences/Power Set", leetcode: "https://leetcode.com/problems/subsets/", difficulty: 'Medium' },
          { id: 180, name: "Learn All Patterns of Subsequences (Theory)", gfg: "", difficulty: 'Easy' },
          { id: 181, name: "Count all subsequences with sum K", gfg: "", difficulty: 'Medium' },
          { id: 182, name: "Check if there exists a subsequence with sum K", gfg: "", difficulty: 'Medium' },
          { id: 183, name: "Combination Sum", leetcode: "https://leetcode.com/problems/combination-sum/", difficulty: 'Medium' },
          { id: 184, name: "Combination Sum-II", leetcode: "https://leetcode.com/problems/combination-sum-ii/", difficulty: 'Medium' },
          { id: 185, name: "Subset Sum-I", gfg: "", difficulty: 'Medium' },
          { id: 186, name: "Subset Sum-II", leetcode: "https://leetcode.com/problems/subsets-ii/", difficulty: 'Medium' },
          { id: 187, name: "Combination Sum – III", leetcode: "https://leetcode.com/problems/combination-sum-iii/", difficulty: 'Medium' },
          { id: 188, name: "Letter Combinations of a Phone number", leetcode: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Trying out all combos / Hard",
        problems: [
          { id: 189, name: "Palindrome Partitioning", leetcode: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: 'Medium' },
          { id: 190, name: "Word Search", leetcode: "https://leetcode.com/problems/word-search/", difficulty: 'Medium' },
          { id: 191, name: "N Queen", leetcode: "https://leetcode.com/problems/n-queens/", difficulty: 'Hard' },
          { id: 192, name: "Rat in a Maze", gfg: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", difficulty: 'Medium' },
          { id: 193, name: "Word Break", leetcode: "https://leetcode.com/problems/word-break/", difficulty: 'Medium' },
          { id: 194, name: "M Coloring Problem", gfg: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1", difficulty: 'Medium' },
          { id: 195, name: "Sudoku Solver", leetcode: "https://leetcode.com/problems/sudoku-solver/", difficulty: 'Hard' },
          { id: 196, name: "Expression Add Operators", leetcode: "https://leetcode.com/problems/expression-add-operators/", difficulty: 'Hard' },
        ]
      },
    ]
  },
  // ==================== STEP 8: Bit Manipulation ====================
  {
    stepNumber: "8",
    title: "Bit Manipulation",
    subSteps: [
      {
        title: "Learn Bit Manipulation",
        problems: [
          { id: 197, name: "Introduction to Bit Manipulation [Theory]", gfg: "", difficulty: 'Easy' },
          { id: 198, name: "Check if the i-th bit is set or not", gfg: "", difficulty: 'Easy' },
          { id: 199, name: "Check if a number is odd or not", gfg: "", difficulty: 'Easy' },
          { id: 200, name: "Check if a number is power of 2 or not", gfg: "", difficulty: 'Easy' },
          { id: 201, name: "Count the number of set bits", gfg: "https://practice.geeksforgeeks.org/problems/set-bits0143/1", difficulty: 'Easy' },
          { id: 202, name: "Set/Unset the rightmost unset bit", gfg: "", difficulty: 'Easy' },
          { id: 203, name: "Swap two numbers without using third variable", gfg: "", difficulty: 'Easy' },
          { id: 204, name: "Divide two integers without using multiplication, division and mod operator", leetcode: "https://leetcode.com/problems/divide-two-integers/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Interview Problems",
        problems: [
          { id: 205, name: "Single Number I", leetcode: "https://leetcode.com/problems/single-number/", difficulty: 'Easy' },
          { id: 206, name: "Single Number II", leetcode: "https://leetcode.com/problems/single-number-ii/", difficulty: 'Medium' },
          { id: 207, name: "Single Number III", leetcode: "https://leetcode.com/problems/single-number-iii/", difficulty: 'Medium' },
          { id: 208, name: "Reverse Bits", leetcode: "https://leetcode.com/problems/reverse-bits/", difficulty: 'Easy' },
          { id: 209, name: "Power Set", leetcode: "https://leetcode.com/problems/subsets/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Advanced Maths",
        problems: [
          { id: 210, name: "Print Prime Factors of a Number", gfg: "", difficulty: 'Easy' },
          { id: 211, name: "Sieve of Eratosthenes", leetcode: "https://leetcode.com/problems/count-primes/", gfg: "", difficulty: 'Medium' },
          { id: 212, name: "Prime Factorization using Sieve", gfg: "", difficulty: 'Medium' },
          { id: 213, name: "Pow(x, n) using Binary Exponentiation", leetcode: "https://leetcode.com/problems/powx-n/", difficulty: 'Medium' },
          { id: 214, name: "Segmented Sieve", gfg: "", difficulty: 'Hard' },
        ]
      },
    ]
  },
  // ==================== STEP 9: Stack and Queue ====================
  {
    stepNumber: "9",
    title: "Stacks and Queues",
    subSteps: [
      {
        title: "Learning",
        problems: [
          { id: 215, name: "Introduction to Stack (Understanding LIFO)", gfg: "", difficulty: 'Easy' },
          { id: 216, name: "Implement Stack using Arrays", gfg: "", difficulty: 'Easy' },
          { id: 217, name: "Implement Queue using Arrays", gfg: "", difficulty: 'Easy' },
          { id: 218, name: "Implement Stack using Queue", leetcode: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: 'Easy' },
          { id: 219, name: "Implement Queue using Stack", leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: 'Easy' },
          { id: 220, name: "Check for Balanced Parentheses", leetcode: "https://leetcode.com/problems/valid-parentheses/", difficulty: 'Easy' },
          { id: 221, name: "Next Greater Element", leetcode: "https://leetcode.com/problems/next-greater-element-i/", gfg: "", difficulty: 'Medium' },
          { id: 222, name: "Next Greater Element - II", leetcode: "https://leetcode.com/problems/next-greater-element-ii/", difficulty: 'Medium' },
          { id: 223, name: "Sort a Stack", gfg: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1", difficulty: 'Medium' },
        ]
      },
      {
        title: "Medium Problems",
        problems: [
          { id: 224, name: "Next Smaller Element", gfg: "", difficulty: 'Medium' },
          { id: 225, name: "LRU Cache", leetcode: "https://leetcode.com/problems/lru-cache/", difficulty: 'Medium' },
          { id: 226, name: "LFU Cache", leetcode: "https://leetcode.com/problems/lfu-cache/", difficulty: 'Hard' },
          { id: 227, name: "Online Stock Span", leetcode: "https://leetcode.com/problems/online-stock-span/", gfg: "", difficulty: 'Medium' },
          { id: 228, name: "Implement Min Stack", leetcode: "https://leetcode.com/problems/min-stack/", difficulty: 'Medium' },
          { id: 229, name: "The Celebrity Problem", gfg: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1", difficulty: 'Medium' },
        ]
      },
      {
        title: "Hard Problems",
        problems: [
          { id: 230, name: "Largest Rectangle in Histogram", leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: 'Hard' },
          { id: 231, name: "Sliding Window Maximum", leetcode: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: 'Hard' },
          { id: 232, name: "Trapping Rain Water", leetcode: "https://leetcode.com/problems/trapping-rain-water/", gfg: "https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1", difficulty: 'Hard' },
          { id: 233, name: "Sum of Subarray Minimums", leetcode: "https://leetcode.com/problems/sum-of-subarray-minimums/", difficulty: 'Medium' },
          { id: 234, name: "Asteroid Collision", leetcode: "https://leetcode.com/problems/asteroid-collision/", difficulty: 'Medium' },
          { id: 235, name: "Remove K Digits", leetcode: "https://leetcode.com/problems/remove-k-digits/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 10: Sliding Window ====================
  {
    stepNumber: "10",
    title: "Sliding Window",
    subSteps: [
      {
        title: "Sliding Window Problems",
        problems: [
          { id: 236, name: "Maximum sum subarray of size k", gfg: "https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1", difficulty: 'Easy' },
          { id: 237, name: "First negative in every window of size k", gfg: "", difficulty: 'Medium' },
          { id: 238, name: "Count occurrences of anagrams", leetcode: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", gfg: "", difficulty: 'Medium' },
          { id: 239, name: "Maximum of all subarrays of size k", leetcode: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: 'Hard' },
          { id: 240, name: "Longest subarray with sum <= K (Positives)", gfg: "", difficulty: 'Medium' },
          { id: 241, name: "Longest sub-string with exactly K distinct characters", leetcode: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/", gfg: "", difficulty: 'Medium' },
          { id: 242, name: "Longest sub-string with at most 2 distinct characters", leetcode: "https://leetcode.com/problems/fruit-into-baskets/", difficulty: 'Medium' },
          { id: 243, name: "Minimum window substring", leetcode: "https://leetcode.com/problems/minimum-window-substring/", difficulty: 'Hard' },
          { id: 244, name: "Longest repeating character replacement", leetcode: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: 'Medium' },
          { id: 245, name: "Binary subarray with sum", leetcode: "https://leetcode.com/problems/binary-subarrays-with-sum/", difficulty: 'Medium' },
          { id: 246, name: "Count number of nice subarrays", leetcode: "https://leetcode.com/problems/count-number-of-nice-subarrays/", difficulty: 'Medium' },
          { id: 247, name: "Number of substrings containing all three characters", leetcode: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 11: Heaps ====================
  {
    stepNumber: "11",
    title: "Heaps",
    subSteps: [
      {
        title: "Learning",
        problems: [
          { id: 248, name: "Introduction to Heap", gfg: "", difficulty: 'Easy' },
          { id: 249, name: "Implement Min Heap / Max Heap", gfg: "", difficulty: 'Easy' },
        ]
      },
      {
        title: "Medium Problems",
        problems: [
          { id: 250, name: "Kth Largest Element", leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: 'Medium' },
          { id: 251, name: "Maximum Sum Combination", gfg: "", difficulty: 'Medium' },
          { id: 252, name: "Find Median from Data Stream", leetcode: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: 'Hard' },
          { id: 253, name: "Merge K Sorted Arrays", gfg: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1", difficulty: 'Medium' },
          { id: 254, name: "K Most Frequent Elements", leetcode: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Hard Problems",
        problems: [
          { id: 255, name: "Task Scheduler", leetcode: "https://leetcode.com/problems/task-scheduler/", difficulty: 'Medium' },
          { id: 256, name: "Hands of Straights", leetcode: "https://leetcode.com/problems/hand-of-straights/", difficulty: 'Medium' },
          { id: 257, name: "Reorganize String", leetcode: "https://leetcode.com/problems/reorganize-string/", difficulty: 'Medium' },
          { id: 258, name: "Merge K Sorted Lists", leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: 'Hard' },
          { id: 259, name: "Smallest Range Covering Elements from K Lists", leetcode: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: 'Hard' },
          { id: 260, name: "Find K Closest Elements", leetcode: "https://leetcode.com/problems/find-k-closest-elements/", difficulty: 'Medium' },
          { id: 261, name: "Kth Largest Element in a Stream", leetcode: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: 'Easy' },
          { id: 262, name: "IPO", leetcode: "https://leetcode.com/problems/ipo/", difficulty: 'Hard' },
        ]
      },
    ]
  },
  // ==================== STEP 12: Greedy Algorithms ====================
  {
    stepNumber: "12",
    title: "Greedy Algorithms",
    subSteps: [
      {
        title: "Easy",
        problems: [
          { id: 263, name: "Activity Selection", gfg: "https://practice.geeksforgeeks.org/problems/activity-selection-1587115620/1", difficulty: 'Easy' },
          { id: 264, name: "Assign Cookies", leetcode: "https://leetcode.com/problems/assign-cookies/", difficulty: 'Easy' },
          { id: 265, name: "Lemonade Change", leetcode: "https://leetcode.com/problems/lemonade-change/", difficulty: 'Easy' },
        ]
      },
      {
        title: "Medium",
        problems: [
          { id: 266, name: "Jump Game I", leetcode: "https://leetcode.com/problems/jump-game/", difficulty: 'Medium' },
          { id: 267, name: "Jump Game II", leetcode: "https://leetcode.com/problems/jump-game-ii/", difficulty: 'Medium' },
          { id: 268, name: "Jump Game III", leetcode: "https://leetcode.com/problems/jump-game-iii/", difficulty: 'Medium' },
          { id: 269, name: "Job Sequencing Problem", gfg: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", difficulty: 'Medium' },
          { id: 270, name: "N Meetings in One Room", gfg: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1", difficulty: 'Easy' },
          { id: 271, name: "Non-overlapping Intervals", leetcode: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: 'Medium' },
          { id: 272, name: "Insert Interval", leetcode: "https://leetcode.com/problems/insert-interval/", difficulty: 'Medium' },
          { id: 273, name: "Minimum Platforms", gfg: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", difficulty: 'Medium' },
          { id: 274, name: "Fractional Knapsack", gfg: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", difficulty: 'Medium' },
        ]
      },
      {
        title: "Hard",
        problems: [
          { id: 275, name: "Candy", leetcode: "https://leetcode.com/problems/candy/", difficulty: 'Hard' },
          { id: 276, name: "Gas Station", leetcode: "https://leetcode.com/problems/gas-station/", difficulty: 'Medium' },
          { id: 277, name: "Partition Labels", leetcode: "https://leetcode.com/problems/partition-labels/", difficulty: 'Medium' },
          { id: 278, name: "Minimum Cost to Cut a Stick", leetcode: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", difficulty: 'Hard' },
          { id: 279, name: "Minimum Number of Arrows to Burst Balloons", leetcode: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 13: Binary Trees ====================
  {
    stepNumber: "13",
    title: "Binary Trees",
    subSteps: [
      {
        title: "Learning",
        problems: [
          { id: 280, name: "Introduction to Trees", gfg: "", difficulty: 'Easy' },
          { id: 281, name: "Binary Tree Representation in C++/Java", gfg: "", difficulty: 'Easy' },
          { id: 282, name: "Binary Tree Traversal (Inorder, Preorder, Postorder)", leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: 'Easy' },
          { id: 283, name: "Level Order Traversal / BFS", leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: 'Medium' },
          { id: 284, name: "Preorder, Inorder, Postorder Traversals in One Traversal", leetcode: "", difficulty: 'Medium' },
        ]
      },
      {
        title: "Medium",
        problems: [
          { id: 285, name: "Height of a Binary Tree", leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", gfg: "", difficulty: 'Easy' },
          { id: 286, name: "Check if the Binary tree is height-balanced or not", leetcode: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: 'Easy' },
          { id: 287, name: "Diameter of Binary Tree", leetcode: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: 'Easy' },
          { id: 288, name: "Maximum path sum", leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: 'Hard' },
          { id: 289, name: "Check if two trees are identical or not", leetcode: "https://leetcode.com/problems/same-tree/", difficulty: 'Easy' },
          { id: 290, name: "Zig Zag Traversal of Binary Tree", leetcode: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: 'Medium' },
          { id: 291, name: "Boundary Traversal of Binary Tree", gfg: "", difficulty: 'Medium' },
          { id: 292, name: "Vertical Order Traversal", leetcode: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: 'Hard' },
          { id: 293, name: "Top View of Binary Tree", gfg: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1", difficulty: 'Medium' },
          { id: 294, name: "Bottom View of Binary Tree", gfg: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1", difficulty: 'Medium' },
          { id: 295, name: "Right/Left View of Binary Tree", leetcode: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: 'Medium' },
          { id: 296, name: "Symmetric Binary Tree", leetcode: "https://leetcode.com/problems/symmetric-tree/", difficulty: 'Easy' },
          { id: 297, name: "Print Root to Node Path in Binary Tree", gfg: "", difficulty: 'Medium' },
          { id: 298, name: "Lowest Common Ancestor", leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: 'Medium' },
          { id: 299, name: "Maximum Width of Binary Tree", leetcode: "https://leetcode.com/problems/maximum-width-of-binary-tree/", difficulty: 'Medium' },
          { id: 300, name: "Check for Children Sum Property", gfg: "", difficulty: 'Medium' },
          { id: 301, name: "Print all Nodes at distance K", leetcode: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", difficulty: 'Medium' },
          { id: 302, name: "Minimum time to burn a Tree starting from a Leaf Node", gfg: "", difficulty: 'Hard' },
          { id: 303, name: "Count total Nodes in a COMPLETE Binary Tree", leetcode: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: 'Medium' },
          { id: 304, name: "Requirements needed to construct a Unique Binary Tree", gfg: "", difficulty: 'Medium' },
          { id: 305, name: "Construct Binary Tree from Inorder & Preorder", leetcode: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: 'Medium' },
          { id: 306, name: "Construct Binary Tree from Inorder & Postorder", leetcode: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: 'Medium' },
          { id: 307, name: "Serialize and Deserialize Binary Tree", leetcode: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: 'Hard' },
          { id: 308, name: "Morris Preorder Traversal", gfg: "", difficulty: 'Medium' },
          { id: 309, name: "Morris Inorder Traversal", leetcode: "", difficulty: 'Medium' },
          { id: 310, name: "Flatten Binary Tree to a Linked List", leetcode: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 14: Binary Search Trees ====================
  {
    stepNumber: "14",
    title: "Binary Search Trees",
    subSteps: [
      {
        title: "Learning",
        problems: [
          { id: 311, name: "Introduction to BST", gfg: "", difficulty: 'Easy' },
          { id: 312, name: "Searching in a BST", leetcode: "https://leetcode.com/problems/search-in-a-binary-search-tree/", difficulty: 'Easy' },
          { id: 313, name: "Construct BST from given keys", leetcode: "", difficulty: 'Medium' },
          { id: 314, name: "Construct BST from Preorder Traversal", leetcode: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Medium",
        problems: [
          { id: 315, name: "Validate BST", leetcode: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: 'Medium' },
          { id: 316, name: "LCA of Two Nodes in a BST", leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: 'Medium' },
          { id: 317, name: "Inorder Predecessor/Successor in BST", gfg: "", difficulty: 'Medium' },
          { id: 318, name: "Floor in a BST", gfg: "", difficulty: 'Easy' },
          { id: 319, name: "Kth Smallest Element in BST", leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: 'Medium' },
          { id: 320, name: "Kth Largest Element in BST", gfg: "", difficulty: 'Medium' },
        ]
      },
      {
        title: "Hard",
        problems: [
          { id: 321, name: "Inorder Successor in BST II", leetcode: "", difficulty: 'Medium' },
          { id: 322, name: "Two Sum in BST / Inorder Traversal and Two Pointer", leetcode: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", difficulty: 'Easy' },
          { id: 323, name: "Largest BST in Binary Tree", gfg: "https://practice.geeksforgeeks.org/problems/largest-bst/1", difficulty: 'Hard' },
          { id: 324, name: "Inorder Traversal & Morris Traversal", gfg: "", difficulty: 'Medium' },
          { id: 325, name: "Recover BST", leetcode: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: 'Medium' },
          { id: 326, name: "Convert Sorted Array to BST", leetcode: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", difficulty: 'Easy' },
        ]
      },
    ]
  },
  // ==================== STEP 15: Graphs ====================
  {
    stepNumber: "15",
    title: "Graphs",
    subSteps: [
      {
        title: "Learning",
        problems: [
          { id: 327, name: "Introduction to Graphs", gfg: "", difficulty: 'Easy' },
          { id: 328, name: "Graph Representation", gfg: "", difficulty: 'Easy' },
          { id: 329, name: "Connected Components", gfg: "", difficulty: 'Easy' },
        ]
      },
      {
        title: "BFS / DFS",
        problems: [
          { id: 330, name: "BFS Traversal", gfg: "", difficulty: 'Easy' },
          { id: 331, name: "DFS Traversal", gfg: "", difficulty: 'Easy' },
          { id: 332, name: "Number of Provinces", leetcode: "https://leetcode.com/problems/number-of-provinces/", difficulty: 'Medium' },
          { id: 333, name: "Number of Islands", leetcode: "https://leetcode.com/problems/number-of-islands/", difficulty: 'Medium' },
          { id: 334, name: "Flood Fill Algorithm", leetcode: "https://leetcode.com/problems/flood-fill/", difficulty: 'Easy' },
          { id: 335, name: "Rotting Oranges", leetcode: "https://leetcode.com/problems/rotting-oranges/", gfg: "https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1", difficulty: 'Medium' },
          { id: 336, name: "Detect Cycle in Undirected Graph using BFS", gfg: "", difficulty: 'Medium' },
          { id: 337, name: "Detect Cycle in Undirected Graph using DFS", gfg: "", difficulty: 'Medium' },
          { id: 338, name: "Detect Cycle in Directed Graph using DFS", gfg: "", difficulty: 'Medium' },
          { id: 339, name: "Detect Cycle in Directed Graph using BFS (Kahn's)", gfg: "", difficulty: 'Medium' },
          { id: 340, name: "Topological Sort (BFS) – Kahn's Algorithm", gfg: "https://practice.geeksforgeeks.org/problems/topological-sort/1", difficulty: 'Medium' },
          { id: 341, name: "Topological Sort (DFS)", gfg: "", difficulty: 'Medium' },
        ]
      },
      {
        title: "Medium Problems",
        problems: [
          { id: 342, name: "Number of Distinct Islands", gfg: "", difficulty: 'Medium' },
          { id: 343, name: "Bipartite Check using BFS", leetcode: "https://leetcode.com/problems/is-graph-bipartite/", difficulty: 'Medium' },
          { id: 344, name: "Bipartite Check using DFS", gfg: "", difficulty: 'Medium' },
          { id: 345, name: "Strongly Connected Components (Kosaraju's Algorithm)", gfg: "", difficulty: 'Hard' },
          { id: 346, name: "Dijkstra's Algorithm – Shortest Path", leetcode: "https://leetcode.com/problems/network-delay-time/", gfg: "", difficulty: 'Medium' },
          { id: 347, name: "Bellman-Ford Algorithm", gfg: "", difficulty: 'Medium' },
          { id: 348, name: "Floyd Warshall Algorithm", gfg: "", difficulty: 'Medium' },
          { id: 349, name: "MST using Prim's Algorithm", leetcode: "", gfg: "", difficulty: 'Medium' },
          { id: 350, name: "MST using Kruskal's Algorithm", leetcode: "", gfg: "", difficulty: 'Medium' },
        ]
      },
      {
        title: "Hard Problems",
        problems: [
          { id: 351, name: "Word Ladder I", leetcode: "https://leetcode.com/problems/word-ladder/", difficulty: 'Hard' },
          { id: 352, name: "Word Ladder II", leetcode: "https://leetcode.com/problems/word-ladder-ii/", difficulty: 'Hard' },
          { id: 353, name: "Critical Connections in a Network (Tarjan's Bridge)", leetcode: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: 'Hard' },
          { id: 354, name: "Articulation Points in a Graph", gfg: "", difficulty: 'Hard' },
          { id: 355, name: "Course Schedule I", leetcode: "https://leetcode.com/problems/course-schedule/", difficulty: 'Medium' },
          { id: 356, name: "Course Schedule II", leetcode: "https://leetcode.com/problems/course-schedule-ii/", difficulty: 'Medium' },
          { id: 357, name: "Alien Dictionary", leetcode: "", gfg: "", difficulty: 'Hard' },
          { id: 358, name: "Cheapest Flights Within K Stops", leetcode: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: 'Medium' },
          { id: 359, name: "Minimum Multiplications to Reach End", gfg: "", difficulty: 'Hard' },
          { id: 360, name: "Shortest Path in a Binary Maze", gfg: "", difficulty: 'Medium' },
          { id: 361, name: "Path With Minimum Effort", leetcode: "https://leetcode.com/problems/path-with-minimum-effort/", difficulty: 'Medium' },
          { id: 362, name: "Swim in Rising Water", leetcode: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: 'Hard' },
          { id: 363, name: "Is it a tree? (Graph Valid Tree)", gfg: "", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 16: Dynamic Programming ====================
  {
    stepNumber: "16",
    title: "Dynamic Programming",
    subSteps: [
      {
        title: "DP on Subsequences",
        problems: [
          { id: 364, name: "Subset Sum Equals to Target", gfg: "", difficulty: 'Medium' },
          { id: 365, name: "Partition Equal Subset Sum", leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: 'Medium' },
          { id: 366, name: "Partition Set Into 2 Subsets with Min Absolute Sum Difference", leetcode: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/", difficulty: 'Hard' },
          { id: 367, name: "Count Subsets with Sum K", gfg: "", difficulty: 'Medium' },
          { id: 368, name: "Count Partitions with Given Difference", gfg: "", difficulty: 'Medium' },
          { id: 369, name: "0/1 Knapsack", gfg: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", difficulty: 'Medium' },
          { id: 370, name: "Minimum Coins", leetcode: "https://leetcode.com/problems/coin-change/", gfg: "", difficulty: 'Medium' },
          { id: 371, name: "Target Sum", leetcode: "https://leetcode.com/problems/target-sum/", difficulty: 'Medium' },
          { id: 372, name: "Unbounded Knapsack", gfg: "", difficulty: 'Medium' },
          { id: 373, name: "Rod Cutting Problem", leetcode: "", gfg: "https://practice.geeksforgeeks.org/problems/rod-cutting0840/1", difficulty: 'Medium' },
        ]
      },
      {
        title: "DP on Strings",
        problems: [
          { id: 374, name: "Longest Common Subsequence", leetcode: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: 'Medium' },
          { id: 375, name: "Print Longest Common Subsequence", gfg: "", difficulty: 'Medium' },
          { id: 376, name: "Longest Common Substring", gfg: "https://practice.geeksforgeeks.org/problems/longest-common-substring1452/1", difficulty: 'Medium' },
          { id: 377, name: "Longest Palindromic Subsequence", leetcode: "https://leetcode.com/problems/longest-palindromic-subsequence/", difficulty: 'Medium' },
          { id: 378, name: "Minimum Insertions to Make String Palindrome", leetcode: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", difficulty: 'Medium' },
          { id: 379, name: "Minimum Insertions/Deletions to Convert String", leetcode: "https://leetcode.com/problems/delete-operation-for-two-strings/", difficulty: 'Medium' },
          { id: 380, name: "Shortest Common Supersequence", leetcode: "https://leetcode.com/problems/shortest-common-supersequence/", difficulty: 'Hard' },
          { id: 381, name: "Distinct Subsequences", leetcode: "https://leetcode.com/problems/distinct-subsequences/", difficulty: 'Medium' },
          { id: 382, name: "Edit Distance", leetcode: "https://leetcode.com/problems/edit-distance/", difficulty: 'Medium' },
          { id: 383, name: "Wildcard Matching", leetcode: "https://leetcode.com/problems/wildcard-matching/", difficulty: 'Hard' },
        ]
      },
      {
        title: "DP on Stocks",
        problems: [
          { id: 384, name: "Best Time to Buy and Sell Stock I", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: 'Easy' },
          { id: 385, name: "Best Time to Buy and Sell Stock II", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: 'Medium' },
          { id: 386, name: "Best Time to Buy and Sell Stock III", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", difficulty: 'Hard' },
          { id: 387, name: "Best Time to Buy and Sell Stock IV", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", difficulty: 'Hard' },
          { id: 388, name: "Best Time to Buy and Sell Stock with Cooldown", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", difficulty: 'Medium' },
          { id: 389, name: "Best Time to Buy and Sell Stock with Transaction Fee", leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/", difficulty: 'Medium' },
        ]
      },
      {
        title: "DP on LIS",
        problems: [
          { id: 390, name: "Longest Increasing Subsequence", leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: 'Medium' },
          { id: 391, name: "Printing Longest Increasing Subsequence", gfg: "", difficulty: 'Medium' },
          { id: 392, name: "Longest Increasing Subsequence using Binary Search", leetcode: "", difficulty: 'Medium' },
          { id: 393, name: "Largest Divisible Subset", leetcode: "https://leetcode.com/problems/largest-divisible-subset/", difficulty: 'Medium' },
          { id: 394, name: "Longest String Chain", leetcode: "https://leetcode.com/problems/longest-string-chain/", difficulty: 'Medium' },
          { id: 395, name: "Longest Bitonic Subsequence", gfg: "https://practice.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1", difficulty: 'Medium' },
          { id: 396, name: "Number of Longest Increasing Subsequences", leetcode: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", difficulty: 'Medium' },
        ]
      },
      {
        title: "MCM DP / Partition DP",
        problems: [
          { id: 397, name: "Matrix Chain Multiplication", gfg: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1", difficulty: 'Hard' },
          { id: 398, name: "Matrix Chain Multiplication (Bottom-Up)", gfg: "", difficulty: 'Hard' },
          { id: 399, name: "Minimum Cost to Cut the Stick", leetcode: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", difficulty: 'Hard' },
          { id: 400, name: "Burst Balloons", leetcode: "https://leetcode.com/problems/burst-balloons/", difficulty: 'Hard' },
          { id: 401, name: "Evaluate Boolean Expression to True", gfg: "", difficulty: 'Hard' },
          { id: 402, name: "Palindrome Partitioning II", leetcode: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: 'Hard' },
          { id: 403, name: "Partition Array for Maximum Sum", leetcode: "https://leetcode.com/problems/partition-array-for-maximum-sum/", difficulty: 'Medium' },
        ]
      },
      {
        title: "DP on Squares",
        problems: [
          { id: 404, name: "Maximum Rectangle Area with all 1's", leetcode: "https://leetcode.com/problems/maximal-rectangle/", difficulty: 'Hard' },
          { id: 405, name: "Count Square Submatrices with All Ones", leetcode: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/", difficulty: 'Medium' },
        ]
      },
      {
        title: "DP on Grids",
        problems: [
          { id: 406, name: "Unique Paths", leetcode: "https://leetcode.com/problems/unique-paths/", difficulty: 'Medium' },
          { id: 407, name: "Unique Paths II", leetcode: "https://leetcode.com/problems/unique-paths-ii/", difficulty: 'Medium' },
          { id: 408, name: "Minimum Path Sum", leetcode: "https://leetcode.com/problems/minimum-path-sum/", difficulty: 'Medium' },
          { id: 409, name: "Triangle", leetcode: "https://leetcode.com/problems/triangle/", difficulty: 'Medium' },
          { id: 410, name: "Minimum Falling Path Sum", leetcode: "https://leetcode.com/problems/minimum-falling-path-sum/", difficulty: 'Medium' },
        ]
      },
    ]
  },
  // ==================== STEP 17: Tries ====================
  {
    stepNumber: "17",
    title: "Tries",
    subSteps: [
      {
        title: "Theory",
        problems: [
          { id: 411, name: "Implement Trie (INSERT | SEARCH | STARTSWITH)", leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: 'Medium' },
        ]
      },
      {
        title: "Problems",
        problems: [
          { id: 412, name: "Implement Trie II (Prefix Tree with countWordsEqualTo, countWordsStartingWith, erase)", leetcode: "", difficulty: 'Medium' },
          { id: 413, name: "Longest String with All Prefixes", gfg: "", difficulty: 'Medium' },
          { id: 414, name: "Number of Distinct Substrings in a String", gfg: "", difficulty: 'Hard' },
          { id: 415, name: "Bit PreRequisites for TRIE Problems", gfg: "", difficulty: 'Medium' },
          { id: 416, name: "Maximum XOR of two numbers in an array", leetcode: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", difficulty: 'Medium' },
          { id: 417, name: "Maximum XOR With an Element From Array", leetcode: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", difficulty: 'Hard' },
        ]
      },
    ]
  },
  // ==================== STEP 18: Strings (Advanced) ====================
  {
    stepNumber: "18",
    title: "Strings (Advanced)",
    subSteps: [
      {
        title: "Hard Problems",
        problems: [
          { id: 418, name: "Minimum number of bracket reversals needed to make an expression balanced", gfg: "", leetcode: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/", difficulty: 'Medium' },
          { id: 419, name: "Count and Say", leetcode: "https://leetcode.com/problems/count-and-say/", gfg: "https://practice.geeksforgeeks.org/problems/decode-the-pattern1138/1", difficulty: 'Medium' },
          { id: 420, name: "Hashing In Strings | Theory", gfg: "", difficulty: 'Medium' },
          { id: 421, name: "Rabin Karp Algorithm", gfg: "", difficulty: 'Hard' },
          { id: 422, name: "Z-Function", gfg: "", difficulty: 'Hard' },
          { id: 423, name: "KMP Algorithm / LPS (pi) Array", leetcode: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", gfg: "", difficulty: 'Medium' },
          { id: 424, name: "Shortest Palindrome", leetcode: "https://leetcode.com/problems/shortest-palindrome/", gfg: "", difficulty: 'Hard' },
          { id: 425, name: "Longest Happy Prefix", leetcode: "https://leetcode.com/problems/longest-happy-prefix/", difficulty: 'Hard' },
          { id: 426, name: "Count Palindromic Subsequences in given string", gfg: "", difficulty: 'Hard' },
        ]
      },
    ]
  },
];

// Helper to count total problems
export function getTotalProblems(): number {
  let count = 0;
  for (const step of dsaSheetData) {
    for (const subStep of step.subSteps) {
      count += subStep.problems.length;
    }
  }
  return count;
}

export function getStepProblemCount(step: Step): number {
  let count = 0;
  for (const subStep of step.subSteps) {
    count += subStep.problems.length;
  }
  return count;
}
