
const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the largest mammal on Earth?", answer: "blue whale" },
    { question: "Which language is used to style web pages?", answer: "css" }
];


function runQuiz() {
    let score = 0;  

  
    for (let i = 0; i < quizQuestions.length; i++) {
        const userInput = prompt(quizQuestions[i].question); 
        
        
        if (userInput === null) {
            alert("Quiz cancelled!");
            return;
        }

        const formattedInput = userInput.toLowerCase().trim(); 
        const correctAnswer = quizQuestions[i].answer;

       
        if (formattedInput === correctAnswer) {
            score++;
            alert("Correct! 🎉"); 
        } else {
            alert(`Wrong ❌\nCorrect Answer: ${correctAnswer}`);
        }
    }

   
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}


runQuiz();
