import { useState } from 'react'
import Option from './Option'

const questions = [
  {
    id: 1,
    question: 'Which of the following are programming languages?',
    options: ['Python', 'Pizza', 'Java', 'Burger'],
    answer: ['Python', 'Java'],
  },
  {
    id: 2,
    question: 'Select the colors:',
    options: ['Red', 'Dog', 'Blue', 'Car'],
    answer: ['Red', 'Blue'],
  },
  {
    id: 3,
    question: 'Select the fruits:',
    options: ['Apple', 'Chair', 'Banana', 'Table'],
    answer: ['Apple', 'Banana'],
  },
]

function Question() {
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (questionId, option) => {
    setSelectedAnswers((prev) => {
      const prevSelected = prev[questionId] || []
      if (prevSelected.includes(option)) {
        // Deselect if already selected
        return {
          ...prev,
          [questionId]: prevSelected.filter((item) => item !== option),
        }
      } else {
        // Select new option
        return {
          ...prev,
          [questionId]: [...prevSelected, option],
        }
      }
    })
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const checkCorrect = (questionId, correctAnswers) => {
    const selected = selectedAnswers[questionId] || []
    const sortedSelected = [...selected].sort()
    const sortedCorrect = [...correctAnswers].sort()
    return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect)
  }

  return (
    <div className="p-4 border rounded-lg shadow-md space-y-8">
      {questions.map((q) => (
        <div key={q.id}>
          <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
          <div className="space-y-2">
            {q.options.map((option) => {
              const isSelected = selectedAnswers[q.id]?.includes(option)
              const isCorrect = q.answer.includes(option)

              return (
                <Option
                  key={option}
                  text={option}
                  isSelected={isSelected}
                  onClick={() => handleSelect(q.id, option)}
                  showResult={showResults}
                  isCorrect={isCorrect}
                />
              )
            })}
            {showResults && (
              <p className="mt-2 text-sm">
                {checkCorrect(q.id, q.answer) ? (
                  <span className="text-green-600">✅ Correct</span>
                ) : (
                  <span className="text-red-600">❌ Wrong (Correct: {q.answer.join(', ')})</span>
                )}
              </p>
            )}
          </div>
        </div>
      ))}

      {!showResults && (
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      )}
    </div>
  )
}

export default Question
