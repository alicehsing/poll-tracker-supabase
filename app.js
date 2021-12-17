// import functions and grab DOM elements

import { signUp, signIn, redirectToPolls } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

// if user is current logged in, redirect to poll.js
// redirectToPolls();

signUpForm.addEventListener('submit', async(event) => {
    event.preventDefault();
  // get the username and password from the form (new FormData(form))
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');
    //sign up the user
    const user = await signUp(email, password);
    // redirect the user to the protected page with their data
    // window.location.href = './polls';
    if (!user) {
        window.location.href = './';
    } else { redirectToPolls(); }
});

signInForm.addEventListener('submit', async(event) => {
    event.preventDefault();

    const data = new FormData(signInForm);
    const email = data.get('email');
    const password = data.get('password');
    const user = await signIn(email, password);
    if (user) {
        redirectToPolls();
    } else {
        alert('Invalid login credentials');
        window.location.href = './';
    } 
});