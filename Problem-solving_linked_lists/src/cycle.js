const cycle = (list) => {
  let node = list.head;
  let pointer_slow = node;
  let pointer_fast = node;
  
  while (pointer_fast && pointer_fast.next) {
    pointer_slow = pointer_slow.next;
    pointer_fast = pointer_fast.next.next;
    
    if (pointer_slow === pointer_fast) {
      return true;
    }
  }
  
  return false;
};

module.exports = cycle;
