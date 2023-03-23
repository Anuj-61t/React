# React Project

# Day 1

- How JS inserts html tag 
  Using dom manipulation (createElement, getElementById) to insert html tags with attributes, name and children tags
- Where React Comes in
  1) Add react as a cdn and separating javascript into a separate file.
  2) Way of creating an html tag and rendering in react
        1) Create an element with react with react.createElement() which return an object
        2) Get (manipulate) a single DOM element in which we want to add react elements
        3) Render the created react element in DOM using reactDom render() method passing in the selected DOM element
- How to create nested and sibling create elements and render it with react and reactDOM

# Day 2
  - NPM

    ITS NOT NODE PACKAGE MANAGER
  - node_modules
    What is Transitive dependencies : Dependencies of installed packages (connecting to friend of a friend of a friend)
  - EACH NODE_MODULE HAS ITS OWN PACKAGE.JSON FILE 

  - What is bundler?
    A program that pack things (files: js,css, html) together for the project to make it browser(deploy) friendly (minified, compress).
  - Example of JavaScript Bundlers : Webpack, Rollup,  Parcel

# Parcel
- A package bundlers with features like
  - File Watching Algo (written in C++) 
  - Caching
  - Minification
  - Bundling 
  - Compress
  - HMR - Hot Module Reload (kinda like build on the fly)
  - Differential Bundling (cross platform-version support)
  - Code Splitting
  - Diagnostics
  - 