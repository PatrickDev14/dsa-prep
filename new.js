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
// Now, we want to add another element to the front or rear of the list. What is the minimum number of additional pointers required to do this operation in O(1)?

// linked lists are not suitable for implementing ? insertion sort - binary search - radix sort - polynomial **binary search