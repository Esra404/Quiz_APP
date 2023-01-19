const quizData = [{
    question: "Türkiye'nin başkenti neresidir ?",
    a: "adana",
    b: "ankara",
    c: "izmir",
    d: "istanbul",
    correct: "b",
},
{
    question: "Dünyanın en büyük çölü hangisidir?",
    a: "Gobi Çölü",
    b: "Büyük Havza Çölüra",
    c: "Büyük Sahra Çölü",
    d: "Büyük Havza Çölü",
    correct: "c",
},
{
    question: "Suç ve Ceza eseri kiminir?",
    a: "Orhan Pamuk",
    b: "Sait Faik Abasıyanık",
    c: "Lev Tolstoy",
    d: "Fyodor Dostoyevski",
    correct: "d",
},
{
    question: "2020 yılında en çok kullanılan programlama dili hangisidir?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "C",
    correct: "c",
},
{
    question: "Dünyanın en tehlikeli canlısı nedir?",
    a: "Insan",
    b: "Kaplan",
    c: "Aslan",
    d: "Timsah",
    correct: "a",
}
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;