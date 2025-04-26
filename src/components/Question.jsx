import Option from './Option'

function Question() {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">What is the capital of France?</h2>
      <div className="space-y-2">
        <Option text="Paris" />
        <Option text="London" />
        <Option text="Berlin" />
        <Option text="Rome" />
        <h2 className="text-xl font-semibold mb-4">What is the capital of India?</h2>
      <div className="space-y-2">
        <Option text="Delhi" />
        <Option text="Mumbai" />
        <Option text="Kolkata" />
        <Option text="Andhra pradesh" />
      </div>
      <h2 className="text-xl font-semibold mb-4">Java is ___</h2>
      <div className="space-y-2">
        <Option text="Food-Item" />
        <Option text="Exercise" />
        <Option text="Programming Language" />
        <Option text="Song" />
      </div>
      </div>
    </div>
  )
}

export default Question
