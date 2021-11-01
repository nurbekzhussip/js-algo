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
      return;
    }

    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }
    this.inOrder(node.right, callback);
  }

  postOrder(node, callback) {
    if (!node) {
      return;
    }

    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);
    if (callback) {
      callback(node);
    }
  }

  traverseDFS(method, callback) {
    if (method === "preOrder") {
      return this.preOrder(this.root, callback);
    } else if (method === "inOrder") {
      return this.inOrder(this.root, callback);
    }

    return this.postOrder(this.root, callback);
  }

  traverseBFS(callback) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      callback(node);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
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

//8, 7, 5, 2, 6, 9, 10, 20, 11
/* myTree.traverseDFS("preOrder", (node) => {
    console.log(node.value);
  }); */

//2, 5, 6, 7, 8, 9, 10, 11, 20
/* myTree.traverseDFS("inOrder", (node) => {
    console.log(node.value);
  }); */

//2, 6, 5, 7, 11, 20, 10, 9, 8
/* myTree.traverseDFS("postOrder", (node) => {
    console.log(node.value);
  }); */

//8, 7, 9, 5, 10, 2, 6, 20, 11
myTree.traverseBFS((node) => {
  console.log(node.value);
});
