import { useState } from 'react'
import Option from './Option'

const questions = [
    {
        id:1,
        question: 'What is the capital of France?',
        options: ['paris', 'London', 'Berlin', 'Rome'],
        answer: 'paris',
    },
    {
        id:2,
        question: "What is the capital of India?",
        options: ['Andhra', 'Goa', 'UP', 'Delhi'],
        answer: 'Delhi',
    },
    {
        id: 3,
        question: 'Java is ___',
        options: ['Food-Item', 'Exercise', 'Programming Language', 'Song'],
        answer: 'Programming Language',
      },
]
function Question() {
    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)

    const handleSelect = (questionId, option) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: option,
        }))
    }
    const handleSubmit = () =>{
        setShowResults(true)
    }

    return (
        <div className="p-4 border rounded-lg shadow-md space-y-8">
          {questions.map((q) => (
            <div key={q.id}>
              <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
              <div className="space-y-2">
                {q.options.map((option) => {
                  const isSelected = selectedAnswers[q.id] === option
                  const isCorrect = q.answer === option
    
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
                    {selectedAnswers[q.id] === q.answer ? (
                      <span className="text-green-600">✅ Correct</span>
                    ) : (
                      <span className="text-red-600">❌ Wrong (Correct: {q.answer})</span>
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
