let correctAnswers = 0;

function checkAnswer(answer, questionNumber) {
    const resultAnswer = document.getElementById(`resultAnswer${questionNumber}`);
    if (questionNumber === 1) {
        if (answer === 'a') {
            resultAnswer.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
            resultAnswer.style.color = 'green';
            correctAnswers++;
        } else {
            resultAnswer.textContent = "Incorrect! Try again.";
            resultAnswer.style.color = 'red';
        }

        // document.getElementById('question1').style.display = 'none';
        // document.getElementById('question2').style.display = 'block';

        setTimeout(function() {
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
        }, 1000); // หน่วงเวลา 1 วินาที

    } else if (questionNumber === 2) {
        if (answer === 'b') {
            resultAnswer.textContent = "Correct, Very Good";
            resultAnswer.style.color = 'green';
            correctAnswers++;
        }else {
            resultAnswer.textContent = "Incorrect! Try again.";
            resultAnswer.style.color = 'red';
        }

        // showResult();

        setTimeout(function() {
            showResult();
        }, 1000); // หน่วงเวลา 1 วินาที
    }
}

function showResult() {
    const result = document.getElementById('result');
    const score = document.getElementById('score');
    const question2 = document.getElementById('question2');

    document.querySelector("h1").innerHTML = "ผลการตอบ";
    document.querySelector("h1").style.color = 'black';
    
    score.textContent = `คุณตอบถูก ${correctAnswers} ข้อ`;
    score.insertAdjacentHTML('beforeend', '<br>จากทั้งหมด 2 ข้อ');
    score.style.color = 'red';
    score.style.fontSize = "16px";

    result.style.display = 'block';
    question2.style.display = 'none';
}

function reloadQuiz() {
    window.location.reload();
}
