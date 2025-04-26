import { useState } from 'react'
import Option from './Option'

const questions = [
  {
    id: 1,
    type: 'multiple',
    question: 'Which of the following are programming languages?',
    options: ['Python', 'Pizza', 'Java', 'Burger'],
    answer: ['Python', 'Java'],
  },
  {
    id: 2,
    type: 'multiple',
    question: 'Select the colors:',
    options: ['Red', 'Dog', 'Blue', 'Car'],
    answer: ['Red', 'Blue'],
  },
  {
    id: 3,
    type: 'truefalse',
    question: 'The Earth is flat.',
    options: ['True', 'False'],
    answer: 'False',
  },
  {
    id: 4,
    type: 'truefalse',
    question: 'JavaScript can run in the browser.',
    options: ['True', 'False'],
    answer: 'True',
  },
]

function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const handleSelect = (questionId, option, type) => {
    if (isSubmitted) return // prevent selecting after submit

    setSelectedAnswers((prev) => {
      if (type === 'multiple') {
        const prevSelected = prev[questionId] || []
        if (prevSelected.includes(option)) {
          return {
            ...prev,
            [questionId]: prevSelected.filter((item) => item !== option),
          }
        } else {
          return {
            ...prev,
            [questionId]: [...prevSelected, option],
          }
        }
      } else if (type === 'truefalse') {
        return {
          ...prev,
          [questionId]: option,
        }
      }
    })
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
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

  const totalCorrect = questions.filter((q) => checkCorrect(q)).length

  return (
    <div className="p-4 border rounded-lg shadow-md space-y-8">
      {!isSubmitted ? (
        <>
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestionIndex + 1}/{questions.length}
            </h2>
            <h3 className="text-lg mb-4">{currentQuestion.question}</h3>
            <div className="space-y-2">
              {currentQuestion.options.map((option) => {
                const isSelected =
                  currentQuestion.type === 'multiple'
                    ? selectedAnswers[currentQuestion.id]?.includes(option)
                    : selectedAnswers[currentQuestion.id] === option

                return (
                  <Option
                    key={option}
                    text={option}
                    isSelected={isSelected}
                    onClick={() => handleSelect(currentQuestion.id, option, currentQuestion.type)}
                    showResult={false}
                  />
                )
              })}
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        // After Submit => Review screen
        <div>
          <h2 className="text-2xl font-bold mb-6">Quiz Completed!</h2>
          <h3 className="text-lg mb-6">
            Your Score: {totalCorrect}/{questions.length}
          </h3>

          <div className="space-y-8">
            {questions.map((q) => (
              <div key={q.id}>
                <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
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
                        showResult={true}
                        isCorrect={isCorrect}
                        onClick={() => {}} // disabled click
                      />
                    )
                  })}
                  <p className="mt-2 text-sm">
                    {checkCorrect(q) ? (
                      <span className="text-green-600">✅ Correct</span>
                    ) : (
                      <span className="text-red-600">
                        ❌ Wrong (Correct Answer: {q.type === 'multiple' ? q.answer.join(', ') : q.answer})
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Question
