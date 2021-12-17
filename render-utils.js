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
    newVotesOneEl.textContent = poll.votes_a;
    newVotesTwoEl.textContent = poll.votes_b;

    pastPollEl.append(newQuestionEl, newOptionOneEl, newOptionTwoEl, newVotesOneEl, newVotesTwoEl);

    return pastPollEl;
}