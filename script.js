window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
});
document.addEventListener("DOMContentLoaded", () => {
  let quizData = {
    sections: [
      {
        sectionTitle: "General Knowledge",
        questions: [
          {
            questionType: "mcq",
            question: "What is the tallest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest",
          },
          {
            questionType: "text",
            question: "What is the capital of Italy?",
            answer: "Rome",
          },
          {
            questionType: "number",
            question: "How many continents are there?",
            answer: 7,
          },
          {
            questionType: "mcq",
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            answer: "Pacific",
          },
          {
            questionType: "text",
            question: "Who wrote 'Romeo and Juliet'?",
            answer: "William Shakespeare",
          },
          {
            questionType: "number",
            question: "In what year did the Titanic sink?",
            answer: 1912,
          },
          {
            questionType: "mcq",
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            answer: "Vatican City",
          },
          {
            questionType: "text",
            question: "What is the longest river in the world?",
            answer: "Nile",
          },
          {
            questionType: "number",
            question: "How many planets are in the Solar System?",
            answer: 8,
          },
          {
            questionType: "mcq",
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            answer: "Japan",
          },
        ],
      },
      {
        sectionTitle: "Science",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (Celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the hardest natural substance on Earth?",
            options: ["Iron", "Diamond", "Quartz", "Granite"],
            answer: "Diamond",
          },
          {
            questionType: "text",
            question: "What is the largest planet in our Solar System?",
            answer: "Jupiter",
          },
          {
            questionType: "number",
            question: "How many elements are in the periodic table?",
            answer: 118,
          },
          {
            questionType: "mcq",
            question: "What is the human body's largest organ?",
            options: ["Heart", "Skin", "Liver", "Brain"],
            answer: "Skin",
          },
          {
            questionType: "text",
            question: "What gas do plants absorb during photosynthesis?",
            answer: "Carbon Dioxide",
          },
          {
            questionType: "number",
            question: "How long does Earth take to orbit the Sun (in days)?",
            answer: 365,
          },
          {
            questionType: "mcq",
            question:
              "Which vitamin is produced when the skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D",
          },
        ],
      },
      {
        sectionTitle: "Mathematics",
        questions: [
          {
            questionType: "mcq",
            question: "What is the value of Pi (approximate)?",
            options: ["2.14", "3.14", "4.14", "5.14"],
            answer: "3.14",
          },
          {
            questionType: "text",
            question: "What is the term for a shape with three sides?",
            answer: "Triangle",
          },
          {
            questionType: "number",
            question: "What is the square root of 64?",
            answer: 8,
          },
          {
            questionType: "mcq",
            question: "What is 50% of 200?",
            options: ["100", "150", "200", "250"],
            answer: "100",
          },
          {
            questionType: "text",
            question: "What is the next prime number after 7?",
            answer: "11",
          },
          {
            questionType: "number",
            question: "How many degrees are in a right angle?",
            answer: 90,
          },
          {
            questionType: "mcq",
            question: "What is the sum of angles in a triangle?",
            options: ["180", "360", "270", "90"],
            answer: "180",
          },
          {
            questionType: "text",
            question: "What is the term for a 10-sided polygon?",
            answer: "Decagon",
          },
          {
            questionType: "number",
            question:
              "If a rectangle has a width of 4cm and a length of 10cm, what is its area (in cm\u00b2)?",
            answer: 40,
          },
          {
            questionType: "mcq",
            question: "What is the value of 'x' in the equation 2x + 6 = 14?",
            options: ["2", "3", "4", "5"],
            answer: "4",
          },
        ],
      },
      {
        sectionTitle: "Indian History",
        questions: [
          {
            questionType: "mcq",
            question: "Who was the first Emperor of the Maurya Dynasty?",
            options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Bindusara"],
            answer: "Chandragupta Maurya",
          },
          {
            questionType: "text",
            question: "What was the capital of the Mughal Empire?",
            answer: "Agra",
          },
          {
            questionType: "number",
            question: "In what year did India gain independence?",
            answer: 1947,
          },
          {
            questionType: "mcq",
            question: "Who was the founder of the Gupta Empire?",
            options: [
              "Samudragupta",
              "Chandragupta I",
              "Chandragupta II",
              "Kumaragupta",
            ],
            answer: "Chandragupta I",
          },
          {
            questionType: "text",
            question: "Which city was the capital of the Maratha Empire?",
            answer: "Pune",
          },
          {
            questionType: "number",
            question: "In what century did the Battle of Plassey take place?",
            answer: 18,
          },
          {
            questionType: "mcq",
            question: "Who was the first female ruler of Delhi Sultanate?",
            options: [
              "Razia Sultana",
              "Mumtaz Mahal",
              "Noor Jahan",
              "Jodha Bai",
            ],
            answer: "Razia Sultana",
          },
          {
            questionType: "text",
            question:
              "What was the main language of administration under the Mughal Empire?",
            answer: "Persian",
          },
          {
            questionType: "number",
            question: "How many years did the British Raj last in India?",
            answer: 90,
          },
          {
            questionType: "mcq",
            question:
              "Which year marked the start of the British East India Company's rule in India?",
            options: ["1600", "1757", "1858", "1947"],
            answer: "1757",
          },
        ],
      },
    ],
  };
  initializeSections();

  //function for checking the user answer
  function checkAnswer(userAnswer, correctAnswer, questionType) {
    if (questionType === "mcq") {
      if (userAnswer === correctAnswer) {
        return true;
      }
      return false;
    } else if (questionType === "text") {
      //making sure both the texts match
      userAnswer = userAnswer.trim();
      userAnswer = userAnswer.toLowerCase();
      correctAnswer = correctAnswer.toLowerCase();
      if (userAnswer === correctAnswer) {
        return true;
      }
      return false;
    } else {
      if (userAnswer == correctAnswer) {
        return true;
      }
      return false;
    }
  }

  function initializeSections() {
    //random quiz functionality
    document.querySelector(".randomBtn").addEventListener("click", () => {
      let currentSection = Math.floor(Math.random() * quizData.sections.length);
      document.querySelector("#quiz-container").classList.add("d-none");
      startQuiz(currentSection);
      console.log(currentSection);
    });
    let sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.addEventListener("click", () => {
        currentSection = section.getAttribute("data-section");
        document.querySelector("#quiz-container").classList.add("d-none");
        startQuiz(currentSection);
      });
    });
  }

  function startQuiz(index) {
    document.querySelector("#question-container").classList.remove("d-none");
    let scoreTag = document.querySelector("#scoreValue");
    let nextBtn = document.querySelector(".nextBtn");
    scoreTag.textContent = "";
    let questionBank = quizData.sections[index];
    let questionsObj = questionBank.questions;
    let userScore = 0;
    let j = 0;

    function displayScore(userScore) {
      document.querySelector("#question-container").classList.add("d-none");
      document.querySelector("#score-container").classList.remove("d-none");
      document.querySelector("#finalScoreTag").textContent = userScore;
      document.querySelector(".homeBtn").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload();
      });
    }

    function displayQuestion() {
      let isAnswered = false;
      if (j >= questionsObj.length) {
        displayScore(userScore);
        return;
      }
      let currentQuestionObj = questionsObj[j];
      let currentQuestion = currentQuestionObj.question;
      document.querySelector("#questionTag").textContent = `${currentQuestion}`;
      let currentQuestionType = currentQuestionObj.questionType;
      let correctAnswer = currentQuestionObj.answer;
      nextBtn.disabled = currentQuestionType !== "mcq";

      //generating options depending on the type of question
      if (currentQuestionType === "mcq") {
        let optionsArr = currentQuestionObj.options;
        document.querySelector("#optionsTag").textContent = "";
        document.querySelector("#answerResponse").textContent = "";
        document.querySelector("#optionsTag").insertAdjacentHTML(
          "afterbegin",
          `<div id="answer_1" class="answerElement text-center">
            <p class="mb-0 text-dark p-2">${optionsArr[0]}</p>
          </div>
          <div id="answer_2" class="answerElement text-center mt-3">
            <p class="mb-0 text-dark p-2">${optionsArr[1]}</p>
          </div>
          <div id="answer_3" class="answerElement text-center mt-3">
            <p class="mb-0 text-dark p-2">${optionsArr[2]}</p>
          </div>
          <div id="answer_4" class="answerElement text-center mt-3">
            <p class="mb-0 text-dark p-2">${optionsArr[3]}</p>
          </div>
         `,
        );
        //adding event listener to each option
        let answers = document.querySelectorAll(".answerElement");
        let isSelected = false;
        answers.forEach((answer) => {
          answer.addEventListener("click", (e) => {
            if (isSelected) {
              return;
            }
            isSelected = true;
            e.target.classList.add("text-white", "optionSelected");
            let userChoice = e.target.textContent;
            if (checkAnswer(userChoice, correctAnswer, currentQuestionType)) {
              document
                .querySelector("#answerResponse")
                .insertAdjacentHTML(
                  "afterbegin",
                  `<p class="text-center correctAns">Correct Answer!</p>`,
                );
              userScore++;
              scoreTag.textContent = userScore;
            } else {
              document
                .querySelector("#answerResponse")
                .insertAdjacentHTML(
                  "afterbegin",
                  `<p class="text-center wrongAns">Wrong Answer! ${correctAnswer}</p>`,
                );
            }
          });
        });
      } else if (currentQuestionType === "text") {
        document.querySelector("#optionsTag").textContent = "";
        document.querySelector("#answerResponse").textContent = "";
        document.querySelector("#optionsTag").insertAdjacentHTML(
          "afterbegin",
          `<input type="text" class="userAnswer form-control" required>
        `,
        );
        document
          .querySelector(".userAnswer")
          .addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              if (isAnswered) {
                return;
              } else {
                nextBtn.disabled = false;
                let userChoice = e.target.value;
                isAnswered = true;
                if (
                  checkAnswer(userChoice, correctAnswer, currentQuestionType)
                ) {
                  document
                    .querySelector("#answerResponse")
                    .insertAdjacentHTML(
                      "afterbegin",
                      `<p class="text-center correctAns">Correct Answer!</p>`,
                    );
                  userScore++;
                  scoreTag.textContent = userScore;
                } else {
                  document
                    .querySelector("#answerResponse")
                    .insertAdjacentHTML(
                      "afterbegin",
                      `<p class="text-center wrongAns">Wrong Answer! ${correctAnswer}</p>`,
                    );
                }
              }
            }
          });
      } else {
        document.querySelector("#optionsTag").textContent = "";
        document.querySelector("#answerResponse").textContent = "";
        document
          .querySelector("#optionsTag")
          .insertAdjacentHTML(
            "afterbegin",
            `<input type="number" class="userAnswer form-control" required>`,
          );
        document
          .querySelector(".userAnswer")
          .addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              if (isAnswered) {
                return;
              } else {
                nextBtn.disabled = false;
                let userChoice = e.target.value;
                isAnswered = true;
                if (
                  checkAnswer(userChoice, correctAnswer, currentQuestionType)
                ) {
                  document
                    .querySelector("#answerResponse")
                    .insertAdjacentHTML(
                      "afterbegin",
                      `<p class="text-center correctAns">Correct Answer!</p>`,
                    );
                  userScore++;
                  scoreTag.textContent = userScore;
                } else {
                  document
                    .querySelector("#answerResponse")
                    .insertAdjacentHTML(
                      "afterbegin",
                      `<p class="text-center wrongAns">Wrong Answer! ${correctAnswer}</p>`,
                    );
                }
              }
            }
          });
      }
      // console.log(correctAnswer);
    }
    displayQuestion();
    document.querySelector("#next-button").addEventListener("click", (e) => {
      e.preventDefault();
      j++;
      displayQuestion();
    });
  }
});
