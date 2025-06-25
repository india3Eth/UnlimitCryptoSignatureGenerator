import SignatureGenerator from "./components/SignatureGenerator"
import ErrorBoundary from "./components/common/ErrorBoundary"

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SignatureGenerator />
      </ErrorBoundary>
    </div>
  )
}

export default App