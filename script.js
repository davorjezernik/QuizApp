let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Jiustin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat CSS erfunden",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Nelson Mandela",
        "answer_3": "Barack Obama",
        "answer_4": "Hakon Wium Lie",
        "right_answer": 4
    },
    {
        "question": "Wer hat javascript erfunden",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Jackie Chan",
        "answer_3": "Brendan Eich",
        "answer_4": "Hakon Wium Lie",
        "right_answer": 3
    },
    {
        "question": "Wer hat den ersten computer erfunden",
        "answer_1": "Charles Babbage",
        "answer_2": "Steve Jobs",
        "answer_3": "Bill Gates",
        "answer_4": "Carl Benz",
        "right_answer": 1
    },
    {
        "question": "Was war die erste programmiersprache",
        "answer_1": "C",
        "answer_2": "Binary",
        "answer_3": "Malbolge",
        "answer_4": "Fortran",
        "right_answer": 4
    },
];

let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_RIGHT = new Audio('./right.mp3')
let AUDIO_WRONG = new Audio('./wrong.mp3')

function init() {
    document.getElementById('question-all').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        progressBar();
        showNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('quiz-End').style = '';
    document.getElementById('quiz-Begin').style = 'display: none;';
    document.getElementById('amount-Of-Questions').innerHTML = questions.length;
    document.getElementById('amount-of-correct-answers').innerHTML = rightAnswers;
}

function showNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionTXT').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function progressBar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_RIGHT.play();
        rightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
    }
    document.getElementById('next-Button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();

    document.getElementById('next-Button').disabled = true;

    reseteAnswerButtons();
}

function reseteAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    window.location.reload();
}