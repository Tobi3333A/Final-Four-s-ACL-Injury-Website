function checkAnswers() {
        // Correct answers
        const answers = {
            q1: "2",
            q2: "1",
            q3: "2",
            q4: "3",
            q5: "1",
            q6: "2",
            q7: "2",
            q8: "2",
            q9: "2",
            q10: "1",
            q11: "2",
            q12: "2",
            q13: "1",
            q14: "3",
            q15: "3"
        };

        let score = 0;
        let total = Object.keys(answers).length;
        let wrongAnswers = [];

        for (let q in answers) {
            let selected = document.querySelector(`input[name="${q}"]:checked`);
            if (selected) {
                if (selected.value === answers[q]) {
                    score++;
                } else {
                    wrongAnswers.push({
                        question: q,
                        correct: answers[q],
                        chosen: selected.value
                    });
                }
            } else {
                wrongAnswers.push({
                    question: q,
                    correct: answers[q],
                    chosen: "Nothing"
                })
                }
        }

        // Display result
        let message = ""
        const resultBox = document.getElementById("resultBox");
        if (score === total) {
            message = `Perfect! 🎉 You scored ${score} out of ${total}.`;
        } else {
            message = `You scored ${score} out of ${total}.`;
        }

        if (wrongAnswers.length > 0) {
            message += "<br><br><strong>Questions you got wrong:</strong><ul>";
            wrongAnswers.forEach(item => {
                message += `<li>${item.question.toUpperCase()}: You chose <strong>${item.chosen}</strong>, correct answer was <strong>option ${item.correct}</strong>.</li>`;
            });
            message += "</ul>";
        }
        resultBox.innerHTML = message;
    }