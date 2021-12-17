## The Golden Rule

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## HTML Setup & Events(💥💥💥)

1)a div for "form":💥💥💥 Add 'submit' listener to the form. On submit, update the current poll question and options, and reflect that in the DOM
  Inside the form:
    - 1 input for "question"
    - 1 input for "option a"
    - 1 input for "option b"
    - button for "Create Poll"

2)a div for injecting/appending "Current Poll" info

- a p tag for displaying "question"
- a p tag for "option-a-title"
- a p tag for "option-a-votes"
- a p tag for "option-b-title"
- a p tag for "option-b-votes"

3)a div for 2 vote buttons:

- 1 button for "vote option a"💥💥💥 Add event listener to increment the vote count for option A in the current poll
- 1 button for "vote option b"💥💥💥 Add event listener to increment the vote count for option B in the current poll

4)1 button for "Close Poll" 💥💥💥 Append the current poll to the past polls state in supabase ("Update the list"): clear DOM of the list -> Use a for loop to loop through all past polls, create some DOM and display each past poll in the list -> Clear out/reset current poll state and DOM.

5)an empty div for injecting/appending "Past Poll" info

6)a button for "logout"

## Events

- on load:
  - go fetch all this user's past polls
  - display them
- On click "Vote" buttons:
  - increment the state of the vote for that option
  - then display the change
- On submit add question and options button:
  - grab the DOM for the current poll, then inject the question and options into those DOM elements
- On click of "Close Poll" button:
  - Take the current poll state and add it to past polls IN SUPABASE!!!
  - Re-fetch the polls from supabase and redisplay the list (clear the list in the DOM, render, and append)

## Sign In & Sign Up

Sign In:

- Once the user hits submit on the form . . .
- get the username and password from the form (new FormData(form))
- "log in the user"
  - consult the supabase docs to find:

    const response = await client.auth.signIn({
    email: 'example@email.com',
    password: 'example-password',
    })
- redirect the user to the protected page with their data

Sign Up:

- Once the user hits submit on the form . . .
- get the username and password from the form (new FormData(form))
- "log in the user"
  - consult the supabase docs to find:
    const response = await client.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    })
- redirect the user to the protected page with their data
