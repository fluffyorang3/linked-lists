function node(value = null, next = null) {
  return {
    value,
    next,
  };
}

function linkedList() {
  let head = null;
  let size = 0;
  return {
    append: function (value) {
      const newNode = node(value);
      if (head === null) {
        head = newNode(value);
      } else {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode();
      }
      size++;
    },
    prepend: function (value) {
      const newNode = node(value);
      head = newNode;

      size++;
    },
    size: function () {
      console.log(size);
    },
    head: function () {
      if (head === null) {
        console.log("There is no head");
      } else {
        console.log(head);
      }
    },
    tail: function () {
      if (head === null) {
        console.log("There is no tail");
      } else {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        console.log(current);
      }
    },
    at: function (index) {
      if (index > size || index < 0) {
        console.log("Index is out of range");
      }
      for (let i = 0; i < index; i++) {}
    },
  };
}
