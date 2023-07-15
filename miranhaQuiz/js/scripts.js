// Declaração de variáveis
const question = document.getElementById("question");
const answersBox = document.getElementById("answers-box");
const quizzContainer = document.getElementById("quizz-container");
const scoreContainer = document.getElementById("score-container");
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;


const questions = [
  {
    "question": "Qual é o nome do personagem principal em 'Homem-Aranha no Aranhaverso'?",
    "answers": [
    {
    "answer": "Miles Morales",
    "correct": true
    },
    {
    "answer": "Peter Parker",
    "correct": false
    },
    {
    "answer": "Gwen Stacy",
    "correct": false
    },
    {
    "answer": "Peni Parker",
    "correct": false
    }
    ]
    },
    
    {
    "question": "Qual é o nome do mentor de Miles Morales no filme?",
    "answers": [
    {
    "answer": "Peter Parker",
    "correct": true
    },
    {
    "answer": "Nick Fury",
    "correct": false
    },
    {
    "answer": "Tony Stark",
    "correct": false
    },
    {
    "answer": "Peter B. Parker",
    "correct": false
    }
    ]
    },
    
    {
    "question": "Quantos Homens-Aranha de diferentes universos aparecem no filme?",
    "answers": [
    {
    "answer": "1",
    "correct": false
    },
    {
    "answer": "2",
    "correct": false
    },
    {
    "answer": "3",
    "correct": false
    },
    {
    "answer": "4",
    "correct": true
    }
    ]
    },
    
    {
    "question": "Qual é o apelido dado ao Homem-Aranha de Peter Parker no Aranhaverso?",
    "answers": [
    {
    "answer": "Teioso",
    "correct": true
    },
    {
    "answer": "Aranha Superior",
    "correct": false
    },
    {
    "answer": "Amigão da Vizinhança",
    "correct": false
    },
    {
    "answer": "Cabeça de Teia",
    "correct": false
    }
    ]
    },
    
    {
    "question": "Qual é o nome da versão do Homem-Aranha com traços de porco?",
    "answers": [
    {
    "answer": "Homem-Aranha Noir",
    "correct": false
    },
    {
    "answer": "Homem-Aranha Porco",
    "correct": true
    },
    {
    "answer": "Homem-Aranha Peni",
    "correct": false
    },
    {
    "answer": "Homem-Aranha Gwen",
    "correct": false
    }
    ]
    },
    
    {
    "question": "Qual é o nome da versão do Homem-Aranha com traços japoneses e um robô chamado SP//dr?",
    "answers": [
    {
    "answer": "Homem-Aranha Noir",
    "correct": false
    },
    {
    "answer": "Homem-Aranha Porco",
    "correct": false
    },
    {
    "answer": "Homem-Aranha Peni",
    "correct": true
    },
    {
    "answer": "Homem-Aranha Gwen",
    "correct": false
    }
    ]
    },
    
    {
    "question": "Quem é o vilão principal do filme 'Homem-Aranha no Aranhaverso'?",
    "answers": [
    {
    "answer": "Duende Verde",
    "correct": false
    },
    {
    "answer": "Doutor Octopus",
    "correct": false
    },
    {
    "answer": "Rei do Crime",
    "correct": false
    },
    {
    "answer": "Wilson Fisk (Rei do Crime)",
    "correct": true
    }
    ]
    },
    
    {
    "question": "Qual é o nome da versão do Homem-Aranha com traços femininos?",
    "answers": [
    {
    "answer": "Homem-Aranha Noir",
    "correct": false
    },
    {
    "answer": "Homem-Aranha Porco",
    "correct": false
    },
    {
    "answer": "Homem-Aranha Peni",
    "correct": false
    },
    {
    "answer": "Mulher-Aranha (Gwen Stacy)",
    "correct": true
    }
    ]
    },
    
    {
    "question": "Qual é o nome do evento que causa a abertura dos portais para diferentes universos no filme?",
    "answers": [
    {
    "answer": "O Colapso",
    "correct": true
    },
    {
    "answer": "A Convergência",
    "correct": false
    },
    {
    "answer": "O Multiverso",
    "correct": false
    },
    {
    "answer": "A Separação",
    "correct": false
    }
    ]
    },
    
    {
    "question": "Qual é o nome do pai de Miles Morales?",
    "answers": [
    {
    "answer": "Jefferson Davis",
    "correct": true
    },
    {
    "answer": "Wilson Fisk",
    "correct": false
    },
    {
    "answer": "Peter Parker",
    "correct": false
    },
    {
    "answer": "Aaron Davis",
    "correct": false
    }
    ]
    }
]

const startGame = () => {
  createQuestion(0)
}

const createQuestion = (i) => {

  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach(function(answer, i) {
    
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    answersBox.appendChild(answerTemplate);

  });

  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      checkAnswer(this, buttons);
    });
  });

  actualQuestion++;

}

const checkAnswer = (btn, buttons) => {
  
  buttons.forEach(function(button) {

    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      if(btn === button) {
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }

  });

  nextQuestion();

}

const nextQuestion = () => {

  setTimeout(function() {

    if(actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion)

  }, 1500);

}

function showSuccessMessage() {

  hideOrShowQuizz();

  // calc score
  const score = ((points / questions.length) * 100).toFixed(2);
  const scoreDisplay = document.querySelector("#display-score span");

  scoreDisplay.textContent = score.toString();

  // alterar número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // alterar total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  startGame();
});

const  hideOrShowQuizz = () => {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

startGame();


