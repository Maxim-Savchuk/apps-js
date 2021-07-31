const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c',
    }, {
        question: 'What is the most used programming language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    }, {
        question: 'Who is the President of the US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
    }, {
        question: 'What dose HTML stand for?',
        a: 'Hypertext Murkup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'a',
    }
]

let currentQuestion = 0;

function loadQuiz() {


    currentQuestion++;
}