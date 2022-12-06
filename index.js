//construct binary search tree
const tree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,

      left: null,
      right: null
    }
  }
};

//function to find the minimum value in a binary search tree
function findMin(tree) {
  if (tree.left === null) {
    return tree.value;
  }
  return findMin(tree.left);
}

//function to find the maximum value in a binary search tree
function findMax(tree) {
  if (tree.right === null) {
    return tree.value;
  }
  return findMax(tree.right);
}

//function to find the height of a binary search tree
function findHeight(tree) {
  if (tree === null) {
    return -1;
  }
  return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
}

//function to check if a binary search tree is balanced
function isBalanced(tree) {
  if (tree === null) {
    return true;
  }
  const heightDiff = Math.abs(findHeight(tree.left) - findHeight(tree.right));
  if (heightDiff > 1) {
    return false;
  }
  return isBalanced(tree.left) && isBalanced(tree.right);
}

//function to check if a binary search tree is a binary search tree

function isBinarySearchTree(tree) {
  if (tree === null) {
    return true;
  }
  if (tree.left !== null && findMax(tree.left) > tree.value) {
    return false;
  }
  if (tree.right !== null && findMin(tree.right) <= tree.value) {
    return false;
  }
  return isBinarySearchTree(tree.left) && isBinarySearchTree(tree.right);
}

//function to find the third largest value in a binary search tree
function findThirdLargest(tree) {
  if (tree.right === null && tree.left === null) {
    return null;
  }
  if (tree.right === null) {
    return findMax(tree.left);
  }
  if (tree.right.right === null && tree.right.left === null) {
    return tree.value;
  }
  return findThirdLargest(tree.right);
}

const insert = (tree, value) => {
  if (tree === null) {
    return {
      value,
      left: null,
      right: null
    };
  }
  if (value < tree.value) {
    tree.left = insert(tree.left, value);
  } else if (value > tree.value) {
    tree.right = insert(tree.right, value);
  }
  return tree;
};

const remove = (tree, value) => {
  if (tree === null) {
    return null;
  }
  if (value < tree.value) {
    tree.left = remove(tree.left, value);
  } else if (value > tree.value) {
    tree.right = remove(tree.right, value);
  } else {
    if (tree.left === null && tree.right === null) {
      return null;
    }
    if (tree.left === null) {
      return tree.right;
    }
    if (tree.right === null) {
      return tree.left;
    }
    const temp = tree.right;
    while (temp.left !== null) {
      temp = temp.left;
    }
    tree.value = temp.value;
    tree.right = remove(tree.right, temp.value);
  }
  return tree;
};

console.log(findMin(tree));
console.log(findMax(tree));
console.log(findHeight(tree));
console.log(isBalanced(tree));
console.log(isBinarySearchTree(tree));
console.log(findThirdLargest(tree));

//output
//1
//8
//2
//true
//true
//7
