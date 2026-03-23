const { LinkedList } = require("./LinkedList.js");

test("append adds a node to the end", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");

  expect(list.listHead.value).toBe("dog");
  expect(list.listHead.nextNode.value).toBe("cat");
});

test("prepend adds a node to the start", () => {
  const list = new LinkedList();
  list.append("cat"); // current list: cat
  list.prepend("dog"); // new head: dog

  expect(list.listHead.value).toBe("dog");
  expect(list.listHead.nextNode.value).toBe("cat");
});

test("size returns the number of nodes", () => {
  const list = new LinkedList();

  list.append("dog");
  list.prepend("cat");
  expect(list.size()).toBe(2);
});

test("head returns the first node", () => {
  const list = new LinkedList();

  list.append("dog");
  list.prepend("cat");
  expect(list.head().value).toBe("cat");
});

test("tail returns the last node", () => {
  const list = new LinkedList();

  list.append("dog");
  list.prepend("cat");
});
