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

        // Loop through answers and check
        for (let q in answers) {
            let selected = document.querySelector(`input[name="${q}"]:checked`);
            if (selected) {
            if (selected.value === answers[q]) {
                score++;
            }
            }
        }

        // Display result
        const resultBox = document.getElementById("resultBox");
        if (score === total) {
            resultBox.innerHTML = `Perfect! 🎉 You scored ${score} out of ${total}.`;
            resultBox.className = "result correct";
        } else {
            resultBox.innerHTML = `You scored ${score} out of ${total}.`;
            resultBox.className = "result incorrect";
        }
    }