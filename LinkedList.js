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

  size() {
    let counter = 0;
    let current = this.listHead;

    if (this.listHead === null) {
      return 0;
    }

    while (current !== null) {
      counter++;
      current = current.nextNode;
    }

    return counter;
  }

  head() {
    return this.listHead;
  }

  tail() {
    if (this.listHead === null) {
      return null;
    }

    let current = this.listHead;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0 || this.listHead === null) {
      return undefined;
    }

    let current = this.listHead;
    let counter = 0;

    while (current !== null) {
      if (counter == index) {
        return current;
      }
      current = current.nextNode;
      counter += 1;
    }

    return undefined;
  }

  pop() {
    if (this.listHead === null) {
      return undefined;
    }
    const poppedNode = this.listHead;
    this.listHead = this.listHead.nextNode;
    return poppedNode.value;
  }
}

module.exports = { LinkedList };
