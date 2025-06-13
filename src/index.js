// For making Dynamic websites we have to do "DOM manipulation" (api that browser provides for making changes to the website content / appearance after the website is loaded )
// DOM manipulation is "hard" to do and expensive => When doing the DOM manipulation we should always have to find the updated change / data and then update the website.

// React and ReactDOM both these libraries provides a new syntax for making "dynamic" webiste with efficiency. React calculates the difference between the previous state and new state and reactDOM performs the DOM-manipulation based on the difference. => when using react we have to provide the update data to the React. React will compare it with previous state and if there is difference, reactDOM will update that difference using the DOM-manipulation.

// Jquery is one of the library that makes the DOM-manipulation easy.

// For these above things React provides us a new syntax to create websites, at the end react compiler will convert the new syntax into html, css and js

// React uses Virtual DOM (light weight copy of the actual DOM that browser provides)
// When we provide the updated state / data to the React, it updates the virtual DOM / creates new Virtual DOM, compares it with the acutal DOM object and efficiently updates the real DOM.

// React only changes those parts of actual DOM that has been changed in virtual DOM

// React Jargons
// 1. "State" -> data / object present inside the website that is dynamic (that might gets updated over the period of time)

// 2. "Components" -> Building blocks of the websites. (for me) -> These basically are functions that throws HTML + JS. React provides special syntax to call these functions like <ComponentName />

// 3. "Re-rendering" -> When the state gets updated, we have to show that on the screen, for this React refreshes the screen and this process is called "re-rendering". 

// React provides apis to provide the updated content / data / state and then updates the DOM / re-rendering

// State variables represents "dynamic data" ( content that get changed over time ) present on the website. => Content that is dynamic should always be wrapped inside the state. (Using this React conitnously watches that data and when it gets changed it re-renders / refresh that state)




// different ways to import and export the functions / variables in nodeJS application
// currently using type: "module"