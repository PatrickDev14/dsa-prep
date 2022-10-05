function getNumber(binary) {
  // Write your code here
  let current = binary.next;
  let result = binary.data;
  while (current) {
      result = result * 2 + current.data;
      current = current.next;
  }
  return result;
}

// We implement a queue using a circular linked list, where Front is the pointer to the fron node and Rear is the pointer to the rear node:
// Now, we wnat to add another eleemtn to the front or rear of the list. What is the minimum number of additional pointers required to do this operation in O(1)?

// linked lists are not suitable for implementing ? insertion sort - binary search - radix sort - polynomial **binary search

// There is a database with exam scores. Write a query to print the names of the students who scored an even number of marks. The names should be
// listed in uppercase, alphabetically ascending. The result shold be in the format:  NAME  MARKS
SELECT UPPER(NAME),MARKS
FROM exam
WHERE mod(MARKS,2)=0
ORDER BY NAME;