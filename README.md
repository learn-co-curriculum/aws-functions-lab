# Functions Lab

## Introduction

Functions are are important concept in not just JavaScript, but programming 
in general. They open up what you can do with code and what kind of problems
you can solve. As such, it's important we get the basics down! This lab 
will have you practicing basic function definition, as well as a small 
challenge at the end combining two concepts we've learned together: `if...else` 
statements and, of course, functions. 

## Getting Started 

Fork and clone this lesson into your local environment. Navigate into its directory 
in the terminal, then run `code .` to open the files in Visual Studio Code. Do your
work in the given `index.js` file.

Install all the dependencies with `npm install` to ensure you can test your work 
as you go with `npm test`.

## The Problems

Define a function called `saturdayFun` using **function declaration**:

- It has one parameter that expects a string
- It uses a default argument, `'roller-skate'` when no argument are passed.
  - It allows the default argument to be overridden.
- It returns a string like `"This Saturday, I want to ...!"` where the `...`
should be filled in with whatever is passed in as the first argument.

Define a function called `mondayWork` using **function declaration**:

- It has one parameter that expects a string
- It uses a default argument, `'go to the office'` when no arguments are passed.
  - It allows the default argument to be overridden.
- It returns a string like `"This Monday, I will ..."` where the `...`
should be filled in with whatever is passed in as the first argument.

Define a function called `wednesdaySleep` using a **function expression**: 

- It has two parameters, both expect a string
- It uses a default argument for both parameters when no arguments are passed.
  - First parameter default: `'very tired'`.
  - Second parameter default: `'early'`.
  - It allows both deafult arguments to be overridden.
- It returns a string like `"Every Wednesday, I am ... after work. I will usually go
to bed ..."` where the `...`'s should be filled in with the first and second 
parameter respectively.

Define a function called `favoriteDay` using your function definition method of choice:

- It has one parameter that expects a string
- It use a default argument, `'Saturday'` when no arguments are passed.
  - It allows the default argument to be overridden. 
- It should return a different string based on what is passed in as an argument. 
  - If the argument passed in is a weekday (`Monday`, `Tuesday`, `Wednesday`, 
  `Thursday`, `Friday`), the string should say `"I actually prefer weekdays, specifically ..."` 
  - If the argument passed in is a weekend (`Saturday`, `Sunday`), the string shoud say
  `"Who doesn't love the weekend! I especially love ..."`
  - In both cases, the `...` should be filled in with whatever is passed in as the first
  argument.

  > **BONUS**: Sometimes, you never know what user's are going to pass in as arguments. What 
  > if a user puts in an animal instead of a day, for example? Neither of our sentences would
  > make much sense. Try accounting for that by returning a third different string that says
  > something like "Error: That's not a day of the week, try again!"

## Conclusion

In this lab, you practiced function fundamentals like function declaration. 
We've also seen that there are more you can do inside functions than just a single
return line or console log. With just these basics in hand, you're ready to tackle 
more complex problems with JavaScript! 
