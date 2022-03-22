const quizData = [
    {
        question: "images/papaya.jpg",
        a: "banana",
        b: "orange",
        c: "papaya",
        d: "lemon",
        correct: "c",
    },
    {
        question: "images/orange.jpg",
        a: "orange",
        b: "banana",
        c: "pineaple",
        d: "kiwi",
        correct: "a",
    },
    {
        question: "images/apple.jpg",
        a: "guava",
        b: "carrot",
        c: "strawberry",
        d: "apple",
        correct: "d",
    },
    {
        question: "images/tomato.jpg",
        a: "tomato",
        b: "banana",
        c: "pineaple",
        d: "kiwi",
        correct: "a",
    },
    {
        question: "images/apple.jpg",
        a: "guava",
        b: "carrot",
        c: "strawberry",
        d: "apple",
        correct: "d",
    },
   {
        question: "images/lemon.jpg",
        a: "lemon",
        b: "banana",
        c: "pineaple",
        d: "kiwi",
        correct: "a",
    },
    {
        question: "images/apple2.jpg",
        a: "orange",
        b: "apple",
        c: "pineaple",
        d: "kiwi",
        correct: "b",
    },
    {
        question: "images/carrot.jpg",
        a: "guava",
        b: "carrot",
        c: "strawberry",
        d: "apple",
        correct: "b",
    },
    {
        question: "images/guava.jpg",
        a: "guava",
        b: "carrot",
        c: "strawberry",
        d: "apple",
        correct: "a",
    },
     {
        question: "images/orange.jpg",
        a: "orange",
        b: "banana",
        c: "pineaple",
        d: "kiwi",
        correct: "a",
    }, 
    {
        question: "images/pineaple.jpg",
        a: "orange",
        b: "banana",
        c: "pineaple",
        d: "kiwi",
        correct: "c",
    },
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const src = questionEl.getAttribute("src");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.setAttribute("src" , currentQuizData.question);
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
