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

  prepend(value) {
    const newNode = new Node(value);

    if (!this.listHead) {
      this.listHead = newNode;
      return;
    }

    newNode.nextNode = this.listHead; // links new node to old 1st node
    this.listHead = newNode; // updates list's head to the new node
  }
}

// append(value)
// create new Node with value
// if list is empty: listHead = new Node; return
// else: start at listHead, while current node has nextNode:
// move to next node
//current.nextNode = new Node

module.exports = { LinkedList };
