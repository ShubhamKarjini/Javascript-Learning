// in js ".innerHTML" is used for element manipulation and ".getElementById" is used for accessing element
// .querySelector always returns first appearance of the id/class
//nodelist is different from array which doesn't have map() property
//while using querySelectorAll it always returns a nodelist, so to access it we need to use index of the element we need to access.
// getElementById returns HTML collection whereas queryselectorAll returns nodelist
//getElementByClassName always returns a HTMLcollection
//if we wanted to access the nodeslist of some parent then it doesn't always return exact numbers, instead it includes text+next line element given 

const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
    
// }

// console.log(parent.firstElementChild.innerHTML);
// console.log(parent.lastElementChild.innerHTML);

// const dayOne = document.querySelector('.day')
// console.log(dayOne.innerHTML);
// console.log(dayOne.parentElement.innerHTML);
// console.log(dayOne.nextElementSibling.innerHTML);







