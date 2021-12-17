export function renderPoll(poll) {
    // render and append
    const pastPollEl = document.createElement('div');
    const newQuestionEl = document.createElement('p');
    const newOptionOneEl = document.createElement('p');
    const newOptionTwoEl = document.createElement('p');
    const newVotesOneEl = document.createElement('p');
    const newVotesTwoEl = document.createElement('p');

    pastPollEl.classList.add('poll');
    newQuestionEl.textContent = poll.question;
    newOptionOneEl.textContent = poll.option_a;
    newOptionTwoEl.textContent = poll.option_b;
    newVotesOneEl.textContent = poll.vote_a;
    newVotesTwoEl.textContent = poll.vote_b;

    pastPollEl.append(newQuestionEl, newOptionOneEl, newVotesOneEl, newOptionTwoEl, newVotesTwoEl);

    return pastPollEl;
}