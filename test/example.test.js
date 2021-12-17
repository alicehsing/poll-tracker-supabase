// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPoll } from '../render-utils.js';
const test = QUnit.test;

const renderObject = {
    question: 'What is your favorite day of the week?',
    option_a: 'Friday',
    option_b: 'Saturday',
    vote_a: 6,
    vote_b: 10
};
test('renderPoll function should create 5 p tags and a div element, then append all p to div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="poll"><p>What is your favorite day of the week?</p><p>Friday</p><p>6</p><p>Saturday</p><p>10</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPoll(renderObject);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'return a div with 5 p tags');
});
