class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);

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

  traverseBFS(callback) {
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();

      if (callback) {
        callback(node);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
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

myTree.traverseBFS((node) => {
  console.log(node.value);
});
