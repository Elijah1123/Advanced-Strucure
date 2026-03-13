// Linkend List - Unlike an arry where items are next to each other
//                in memory , each "node" in linked list just points
//                to the next one .


const list = {
    value: "Head",
    next: {
        value: "Middle",
        next: {
            value: "Tail",
            next: null
        }
    }
};

console.log(list.next.value)

// Binary Search Tree (BST) -Trees are used for fast searching. Every "left" child is smaller than the parent, and every "right" child is larger.


const tree = {
    value: 10,
    left: {value:5, left: null, right: null},
    right: {value: 15, left: null, right: null}
};

console.log(tree.left.value  < tree.value)