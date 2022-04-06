const { ignore } = require("nodemon/lib/rules");

console.log("hello world");

class LinkedListNode {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  add(node) {
    if (!this.next) {
      this.next = node;
    } else {
      this.next.add(node);
    }
  }
  // need to implement a recursion to get a list of lists
  getList() {
    if (!this.next) {
      return this.data;
    } else {
      return this.data + this.next.getList();
    }
  }
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode("C");
const nodeD = new LinkedListNode("D");
const nodeE = new LinkedListNode("E");
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'

// binaryTreeNode ------------------

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // we need compare the this value with the nodes value and see if its grate then or less then
    // if less then add to the lest node of pass it down the line
    if (this.value > node) {
      !this.left ? (this.left = node) : this.left.add(node);
      //if greater then add to the right node or pass it down the line
    } else {
      !this.right ? (this.right = node) : this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
// console.log("B", B);

// find person in a tree question
class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (this.value > node.name) {
      !this.left ? (this.left = node) : this.left.add(node);
    } else {
      !this.right ? (this.right = node) : this.right.add(node);
    }
  }

  findPerson(name) {
    // this is a base case
    if (name === this.value) return this.person;
    console.log("this.value", this.value);

    // check to see if the name is smaller then this name
    if (this.value < name) {
      // makes user to go to go down the correct path by using the same conditional as the add. // but why wont it work
      return !this.left ? this.left.findPerson(name) : undefined;
    } else {
      return !this.right ? this.right.findPerson(name) : undefined;
    }
  }
}

const rootPerson = new PersonTreeNode({ name: "root" });
const nelson = new PersonTreeNode({
  name: "Nelson",
  phone: "555-5555",
  address: " 123 green street ave",
});
const corry = new PersonTreeNode({
  name: "Corry",
  phone: "555-5555",
  address: " 123 green street ave",
});
const katie = new PersonTreeNode({
  name: "Katie",
  phone: "555-52345",
  address: " 11234 green street ave",
});
rootPerson.add(corry);
rootPerson.add(katie);
rootPerson.add(nelson);

console.log("root", rootPerson);

console.log(rootPerson.findPerson("Corry"));
