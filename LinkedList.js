const Node = require("./Node.js");

class LinkedList {
  constructor() {
    this.listHead = null; // list starts empty
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.listHead) {
      this.listHead = newNode;
      return;
    }

    let current = this.listHead;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }
}

// append(value)
// create new Node with value
// if list is empty: listHead = new Node; return
// else: start at listHead, while current node has nextNode:
// move to next node
//current.nextNode = new Node

module.exports = { LinkedList };
