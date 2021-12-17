import { logout, checkLoggedIn, getPolls, createPoll } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

checkLoggedIn(); 

const pollFormEl = document.querySelector('#poll-form');
const voteAButton = document.querySelector('#option-a-vote');
const voteBButton = document.querySelector('#option-b-vote');
const questionEl = document.querySelector('#poll-question');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVotesEl = document.querySelector('#option-a-votes');
const optionBVotesEl = document.querySelector('#option-b-votes');
const closePollButton = document.querySelector('#close-poll');
const pastPollsEl = document.querySelector('.past-poll-display');
const logoutButton = document.querySelector('#logout');

// let state
let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

window.addEventListener('load', async() => {
    await displayAllPolls();
});


pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollFormEl);
    question = data.get('poll-question');
    optionA = data.get('poll-option-a');
    optionB = data.get('poll-option-b');

    questionEl.textContent = question;
    optionATitleEl.textContent = optionA;
    optionBTitleEl.textContent = optionB;

    pollFormEl.reset();
});

voteAButton.addEventListener('click', () => {
    votesA++;
    optionAVotesEl.textContent = votesA;
});

voteBButton.addEventListener('click', () => {
    votesB++;
    optionBVotesEl.textContent = votesB;
});

closePollButton.addEventListener('click', async() => {
     // on click
    // Take the current poll state and add it to past polls IN SUPABASE
    await createPoll(question, optionA, optionB, votesA, votesB);
    
    // reset state for a new question now that we have a saved copy
    question = '';
    optionA = '';
    optionB = '';
    votesA = 0;
    votesB = 0;
    // Re-fetch the polls from supabase and redisplay the list (clear the list in the DOM, render, and append)
    displayCurrentPollEl();
    displayAllPolls();
});

logoutButton.addEventListener('click', async() => {
    await logout();
});

function displayCurrentPollEl() {
    questionEl.textContent = question;
    optionATitleEl.textContent = optionA;
    optionAVotesEl.textContent = votesA;
    optionBTitleEl.textContent = optionB;
    optionBVotesEl.textContent = votesB;
}

async function displayAllPolls() {
    const polls = await getPolls();

    pastPollsEl.textContent = '';

    for (let poll of polls) {
        const pastPollEl = renderPoll(poll);
        pastPollsEl.append(pastPollEl);
    }

}