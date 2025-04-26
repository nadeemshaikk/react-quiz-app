import Header from './components/Header'
import Footer from './components/Footer'
import Quiz from './components/Quiz'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow container mx-auto p-4">
          <Quiz />
        </main>
      <Footer/>
    </div>
  )
}

export default App
