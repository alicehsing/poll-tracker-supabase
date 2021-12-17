const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzkzMywiZXhwIjoxOTU1MDgzOTMzfQ.EBPUcU_WWpLifNiYHK0-7lDB2fZtodlhB2Yb7rOSIek';
const SUPABASE_URL = 'https://knhiasotugxozbbkbqrw.supabase.co';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getUser() {
    return client.auth.user();
}

export function checkLoggedIn() {
    if (!client.auth.session()) {
        window.location = '../';
    }
}

export async function logout() {
    await client.auth.signOut();
    return window.location.href = '../';
}

export async function signUp(realEmail, realPassword){
    //   - consult the supabase docs to find:
    const response = await client.auth.signUp({ 
        email: realEmail,
        password: realPassword 
    });

    return response.user;
}

export async function signIn(realEmail, realPassword){
    const response = await client.auth.signIn({ 
        email: realEmail, 
        password: realPassword 
    });

    return response.data;
}

export async function createPoll(question, optionA, optionB, votesA, votesB) {
    const response = await client
        .from('polls')
        .insert([
            {   
                question: question,
                option_a: optionA,
                option_b: optionB,
                vote_a: votesA,
                vote_b: votesB,
            },
        ]);

    return response.data;
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select();

    return response.data;
    // return client.auth.session();
}

export async function redirectToPolls() {
    if (await getUser()) {
        location.replace('./polls');
    }
}