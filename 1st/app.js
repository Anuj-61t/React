/**
 * CreateElement is a React Method to create a Core React Element
 * By passing 3 parameters (typeOfElement, {attributes written as key value pair}, Things that goes inside that element)
 * All parameters are properties of that element object other than the type of that element 
 * Here in heading variable is a object having properties return by react.createElement 
 * that are 
 * type: h1
 * props: { contains attributes and children } 
 */
const heading = React.createElement("h1",{"id":"heading"}, "Hello World");

// const somethingTag = React.createElement("something",{"something":"value"},"I am Something")
// console.log(somethingTag)
console.log(heading);

// root is created from a DOM element, we need to pass a dom element that will be considered as a root/parent from which reactDOM will render 

const root = ReactDOM.createRoot(document.getElementById("root"));


// ReactDOM render method will convert that object into an html tag with all the properties passed to that element
root.render(heading)