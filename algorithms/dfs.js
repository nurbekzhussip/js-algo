class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (node.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node, callback) {
    if (!node) {
      return;
    }

    if (callback) {
      callback(node);
    }

    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  inOrder(node, callback) {
    if (!node) {
      return null;
    }

    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }
    this.inOrder(node.right, callback);
  }

  postOrder(node, callback) {
    if (!node) {
      return null;
    }

    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);

    if (callback) {
      callback(node);
    }
  }

  traverseDFS(method, callback) {
    switch (method) {
      case "preOrder":
        return this.preOrder(this.root, callback);
      case "inOrder":
        return this.inOrder(this.root, callback);
      case "postOrder":
        return this.postOrder(this.root, callback);
      default:
        return null;
    }
  }
}

const myTree = new BinaryTree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);

console.log("---PRE ORDER---");
myTree.traverseDFS("preOrder", (node) => {
  console.log(node.value);
});
console.log("---IN ORDER---");
myTree.traverseDFS("inOrder", (node) => {
  console.log(node.value);
});
console.log("---POST ORDER---");
myTree.traverseDFS("postOrder", (node) => {
  console.log(node.value);
});
