import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    title: 'What is HTML',
    options: ['Hyper Text Markup Language', 'Hyper Text Mkup Language', 'Hyper Text Markup Language', 'Hyper Text Markup Language'],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    title: 'Which religion is followed most in Pakistan?',
    options: ['Christianity', 'Hinduism', 'Islam', 'Mujhe kia pata'],
    correctAnswer: 'Islam',
  },
  {
    title: 'Which is my favourite car?',
    options: ['Honda Civic', 'Toyota Corolla', 'Suzuki Mehran', 'Toyota Mark X 300G'],
    correctAnswer: 'Toyota Mark X 300G',
  },
  {
    title: 'Toyota is from which Country?',
    options: ['Pakistan', 'Germany', 'China', 'Japan'],
    correctAnswer: 'Japan',
  },
];

function App() {
  const [question, setQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinish, setQuizFinish] = useState(false);

  function nextQuestion() {
    if (question < questions.length - 1) {
      setQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      finish(); 
    }
  }

  function updateScore() {
    if (currentAnswer === questions[question].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function checkAnswer() {
    updateScore();
    if (question < questions.length - 1) {
      nextQuestion();
      setCurrentAnswer(''); 
    } else {
      finish();
    }
  }

  function finish() {
    setQuizFinish(true);
  }

  function restart() {
    setQuizFinish(false);
    setQuestion(0);
    setScore(0);
  }

  const options = questions[question].options;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz</h1>
        {quizFinish ? (
          <div>
            <p>Quiz Finished! Your Score: {score}</p>
            <button onClick={restart}>Restart</button>
          </div>
        ) : (
          <div>
            <h2>{questions[question].title}</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <input type="radio" name='answer' value={option} onChange={(e) => setCurrentAnswer(e.target.value)} />
                  {option}
                </li>
              ))}
            </ul>
            <button
              onClick={nextQuestion}
              disabled={question === questions.length - 1}
            >
              Next Question
            </button>
            <button onClick={checkAnswer}>Check Answer</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
