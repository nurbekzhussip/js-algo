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

//                8
//            7       9
//         5             10
//      2     6              20
//                       11

console.log(myTree);
