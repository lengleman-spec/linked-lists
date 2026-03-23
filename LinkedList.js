const Node = require("./Node.js");

class LinkedList {
  constructor() {
    this.listHead = null; // list starts empty
  }
}

module.exports = { LinkedList };

// append(value)
// create new Node with value
// if list is empty: listHead = new Node; return
// else: start at listHead, while current node has nextNode:
// move to next node
//current.nextNode = new Node
