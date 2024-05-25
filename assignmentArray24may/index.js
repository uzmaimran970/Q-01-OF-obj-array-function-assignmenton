"use strict";
// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list
// define an object named people
const people = {
    friends: []
};
const firstfriend = {
    firstname: "yusra",
    lastname: "naz",
    id: 10,
};
const secondfriend = {
    firstname: "sania",
    lastname: "kanwal",
    id: 12,
};
const thirdfriend = {
    firstname: "nibah",
    lastname: "haram",
    id: 15,
};
//Adding these friend objects to the friends array within the people object.
people.friends.push(firstfriend, secondfriend, thirdfriend);
console.log(people);
