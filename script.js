import React from "react";
import ReactDOM from "react-dom/client";



// heading is not a tag it is an object

const heading = React.createElement("h1", {}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//how to create the nested elements

/*
<div id="parent">
    <div id="child">
         <h1></h1>
    </div>
</div>

ReactElement(Object)-->HtML(Browser understand)
*/

const parent = React.createElement("div"
    , { id: "parent" },
    [React.createElement("div",
        { id: "child1" },
        // here we are giving the array of childrens
        [React.createElement("h1", {key:"c1h1"}, "I am h1 tag"),
        React.createElement("h2", {key:"c1h2"}, "I am h2 tag")]),
    
     React.createElement("div",
        { id: "child2" },
        // here we are giving the array of childrens
        [React.createElement("h1", {key:"c2h1"}, "I am h1 tag"),
        React.createElement("h2", {key:"c2h2"}, "I am h2 tag")])]

);
// render-->it was replace not append the content by child
root.render(parent);