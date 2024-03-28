import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";

const container = document.getElementById("probably-mathy-frontend");
const root = createRoot(container);
root.render(<React.StrictMode><App/></React.StrictMode>);
/*
    <div class="container">
        <h1>Kid-Friendly Math Game</h1>
        <div class="problem" id="problem"></div>
        <input type="number" class="input-answer" id="answer" placeholder="Enter answer">
        <button onclick="submitAnswer()">Submit</button>
        <div id="results"></div>
    </div>

    <script>
        // Function to fetch addition problems from the backend API
        async function fetchAdditionProblems() {
            try {
                const response = await fetch('/api/addition');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching addition problems:', error);
            }
        }

        // Function to display addition problem and update UI
        async function displayProblem() {
            const randomIndex = Math.floor(Math.random() * problems.length);
            const problem = problems[randomIndex];
            document.getElementById('problem').innerText = `${problem.a} + ${problem.b} = `;
            document.getElementById('answer').value = '';
        }

        // Function to check the answer locally and display result
        function submitAnswer() {
            const problemText = document.getElementById('problem').innerText;
            const [a, b] = problemText.split('+').map(val => parseInt(val.trim()));
            const answer = parseInt(document.getElementById('answer').value);

            const resultDiv = document.getElementById('results');
            const history = document.createElement('p');
            const checkmark = document.createElement('span');
            history.innerText = `${a} + ${b}  = ${answer}`;
            checkmark.innerText = answer === (a + b) ? '✔' : '❌';
            checkmark.classList.add('checkmark');
            history.appendChild(checkmark);
            resultDiv.appendChild(history);
            displayProblem();
        }
        let problems = [];
        fetchAdditionProblems().then(r => {
            problems = r;
            displayProblem();
        });
    </script>
    */