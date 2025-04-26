import { useState } from 'react'
import Option from './Option'

const questions = [
  {
    id: 1,
    type: 'multiple', // MULTIPLE CHOICE
    question: 'Which of the following are programming languages?',
    options: ['Python', 'Pizza', 'Java', 'Burger'],
    answer: ['Python', 'Java'],
  },
  {
    id: 2,
    type: 'multiple', // MULTIPLE CHOICE
    question: 'Select the colors:',
    options: ['Red', 'Dog', 'Blue', 'Car'],
    answer: ['Red', 'Blue'],
  },
  {
    id: 3,
    type: 'truefalse', // TRUE/FALSE QUESTION
    question: 'The Earth is flat.',
    options: ['True', 'False'], // For consistency, options array
    answer: 'False',
  },
  {
    id: 4,
    type: 'truefalse', // TRUE/FALSE QUESTION
    question: 'JavaScript can run in the browser.',
    options: ['True', 'False'],
    answer: 'True',
  },
]

function Question() {
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (questionId, option, type) => {
    setSelectedAnswers((prev) => {
      if (type === 'multiple') {
        const prevSelected = prev[questionId] || []
        if (prevSelected.includes(option)) {
          // Deselect
          return {
            ...prev,
            [questionId]: prevSelected.filter((item) => item !== option),
          }
        } else {
          // Select new
          return {
            ...prev,
            [questionId]: [...prevSelected, option],
          }
        }
      } else if (type === 'truefalse') {
        // For true/false, only one selection allowed
        return {
          ...prev,
          [questionId]: option,
        }
      }
    })
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const checkCorrect = (q) => {
    const selected = selectedAnswers[q.id]
    if (q.type === 'multiple') {
      const sortedSelected = [...(selected || [])].sort()
      const sortedCorrect = [...q.answer].sort()
      return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect)
    } else if (q.type === 'truefalse') {
      return selected === q.answer
    }
  }

  return (
    <div className="p-4 border rounded-lg shadow-md space-y-8">
      {questions.map((q) => (
        <div key={q.id}>
          <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
          <div className="space-y-2">
            {q.options.map((option) => {
              const isSelected =
                q.type === 'multiple'
                  ? selectedAnswers[q.id]?.includes(option)
                  : selectedAnswers[q.id] === option
              const isCorrect =
                q.type === 'multiple'
                  ? q.answer.includes(option)
                  : q.answer === option

              return (
                <Option
                  key={option}
                  text={option}
                  isSelected={isSelected}
                  onClick={() => handleSelect(q.id, option, q.type)}
                  showResult={showResults}
                  isCorrect={isCorrect}
                />
              )
            })}
            {showResults && (
              <p className="mt-2 text-sm">
                {checkCorrect(q) ? (
                  <span className="text-green-600">✅ Correct</span>
                ) : (
                  <span className="text-red-600">
                    ❌ Wrong (Correct Answer: {q.type === 'multiple' ? q.answer.join(', ') : q.answer})
                  </span>
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
