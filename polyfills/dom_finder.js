/* 
This code snippet aims to find the value of a node in rootB that corresponds to the same relative position in the DOM tree as a given node (nodeA) in rootA. Let's break down the intuition and algorithm for each function:

*/
const getPathFromChildToParent = (parent, child) => {
    let currentNode = child
    const pathArray = []
    while(currentNode !== parent) {
        const parentElement = currentNode.parentElement
        const childrenArray = Array.from(parentElement.children)
        pathArray.push(childrenArray.indexOf(currentNode))
        currentNode = parentElement
    }
    return pathArray
}

const getValueFromPath = (parent, path) => {
    let currentNode = parent
    while(path.length) {
        currentNode = currentNode.children[path.pop()]
    }
    return currentNode.innerText
}



const findNodeValue = () => {
    const rootA = document.getElementById('rootA')
    const rootB = document.getElementById('rootB')
    const nodeA = document.getElementById('nodeA')
    // Call getPathFromChildToParent to get the path array from nodeA to the root in rootA.
    const path = getPathFromChildToParent(rootA, nodeA)
    // Call getValueFromPath with rootB and the obtained path array to get the corresponding node's value in rootB.
    return getValueFromPath(rootB, path)
}
console.log(findNodeValue())




function getPathFromChildToParent1(parent, child){
    let currNode = child
    const pathArray = []
    while (currNode !== parent){
        const currentParentElement = currNode.parentElement
        const childrenArray = Array.from(parentElement.children)
        pathArray.push(childrenArray.indexOf(currNode))
        currNode = currentParentElement
    }
    return pathArray
}


function getValueFromPath(parent, path){
    let currNode = parent
    while (path.length){
        currNode = currNode.children[path.pop()]

    }
    return currNode.innerText
}

/* 

getPathFromChildToParent function:

Intuition:

Starting from the given child node, traverse up the DOM tree until reaching the specified parent node.
Record the index of each child node in its parent's children array along the way.
The resulting array represents the path from the child to the parent in terms of child indices.
Algorithm:

Initialize currentNode with the given child node (child).
Initialize an empty array called pathArray to store the indices.
Use a while loop to traverse up the DOM tree until currentNode reaches the specified parent node (parent).
Get the parent element of currentNode.
Convert the parent's children array to a regular array using Array.from.
Find the index of currentNode in the children array and push it onto pathArray.
Update currentNode with its parent.
Return the pathArray representing the path from the child to the parent.
getValueFromPath function:

Intuition:

Starting from the given parent node, traverse down the DOM tree following the recorded path.
Return the value (innerText) of the node at the end of the path.
Algorithm:

Initialize currentNode with the given parent node (parent).
Use a while loop to traverse down the DOM tree until the path array is empty.
Pop an index from the path array.
Update currentNode with the child node at the popped index.
Return the innerText of the final currentNode.
findNodeValue function:

Intuition:

Find the path from the node (nodeA) in rootA to its parent and then use this path to locate the corresponding node in rootB.
Retrieve and return the innerText value of the corresponding node in rootB.
Algorithm:

Get references to the root elements (rootA and rootB) and the specified node (nodeA).
Call getPathFromChildToParent to get the path array from nodeA to the root in rootA.
Call getValueFromPath with rootB and the obtained path array to get the corresponding node's value in rootB.
Return the resulting value.

*/

