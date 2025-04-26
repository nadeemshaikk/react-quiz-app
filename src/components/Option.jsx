function Option({ text, isSelected, onClick, showResult, isCorrect }) {
    const baseStyle = "w-full text-left px-4 py-2 rounded cursor-pointer border"
    const selectedStyle = isSelected ? "bg-blue-100 border-blue-500" : "bg-gray-100 hover:bg-gray-200"
  
    let resultStyle = ""
    if (showResult) {
      if (isSelected && isCorrect) resultStyle = "bg-green-200 border-green-500"
      else if (isSelected && !isCorrect) resultStyle = "bg-red-200 border-red-500"
    }
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyle} ${selectedStyle} ${resultStyle}`}
      >
        {text}
      </button>
    )
  }
  
  export default Option
  