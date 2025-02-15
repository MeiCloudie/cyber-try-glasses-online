import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-purple-950">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
