import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-[#ffde59] flex items-center justify-center p-6 font-mono">
          <div className="bg-white border-4 border-red-500 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-black mb-4 text-red-600">
              Something went wrong!
            </h2>
            <p className="mb-4 text-gray-700">
              An error occurred while generating the signature. Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-4 py-2 border-2 border-black font-bold hover:bg-red-600"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}