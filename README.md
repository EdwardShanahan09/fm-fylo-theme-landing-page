# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/EdwardShanahan09/fm-fylo-theme-landing-page](https://github.com/EdwardShanahan09/fm-fylo-theme-landing-page)
- Live Site URL: [https://edwardshanahan09.github.io/fm-fylo-theme-landing-page/](https://edwardshanahan09.github.io/fm-fylo-theme-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Validating email input with a regular expression in JavaScript

````
```js
 const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = event.target.email.value;
  const errorMessageElement = document.querySelector("#form__error");

  if (!pattern.test(emailValue)) {
    errorMessageElement.textContent = "Error, please check your email";
  } else {
    errorMessageElement.textContent = "";
  }
````

### Continued development

I want to keep improving element positioning, especially with Flexbox, Grid, and responsive spacing so layouts stay balanced across screen sizes.

### Useful resources

- [Email validation in JavaScript](https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/) - This article helped me understand how to use a regular expression to validate user input and improve the form feedback experience.

## Author

- Github - [EdwardShanahan09](https://github.com/EdwardShanahan09)
- Frontend Mentor - [@EdwardShanahan09](https://www.frontendmentor.io/profile/EdwardShanahan09)
