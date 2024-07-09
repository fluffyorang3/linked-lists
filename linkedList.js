function node(value = null, next = null) {
  return {
    value,
    next,
  };
}

function linkedList() {
  let head = null;
  let size = 0;

  function append(value) {
    if (head === null) {
      head = node(value);
      size++;
      return;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = node(value);
    size++;
  }

  function prepend(value) {
    if (head === null) {
      head = node(value);
      size++;
      return;
    }
    let current = node(value);
    current.next = head;
    head = current;
    size++;
  }

  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }
  function getTail() {
    if (head === null) {
      return null;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  function at(index) {
    if (index < 0 || index >= size) {
      return null;
    }

    if (head === null) {
      return null;
    }
    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  function pop() {
    if (head === null) {
      return null;
    }
    let current = head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }
  function find(value) {
    if (head === null) {
      return null;
    }
    let current = head;
    while (current.value !== value) {
      current = current.next;
    }
    if (current.value !== value) {
      return null;
    } else {
      return current.value;
    }
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    find,
  };
}
