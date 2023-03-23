import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 *  <div id="parent">
 *   <div id="child-2">
 *      <h1> I am heading 1 <h1/>
 *      <h2> I am heading 2 <h2/>
 *   </div>
 * 
 *   <div id="child-2">
 *         <h1> I am heading 1 <h1/>
 *         <h2> I am heading 2 <h2/>
 *   </div>
 * </div>
 */

const parent = React.createElement("div",{"id":"parent"}, 
   [
    React.createElement("div",{id: "child-2"}, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ]
    ),
    React.createElement("div",{id: "child-1"}, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ]
    )
   ]
);


console.log(parent);
 

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent)