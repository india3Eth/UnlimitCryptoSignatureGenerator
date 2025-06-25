import { memo, useMemo } from "react"
import FlowStep from "./FlowStep"
import FlowConnector from "./FlowConnector"
import { ApiEndpoint, PathParams } from "../../types/api"

interface SignatureFlowGraphProps {
  method?: string
  path?: string
  pathParams?: PathParams
  secret?: string
  signature?: string
  selectedEndpoint?: ApiEndpoint | null
  isGenerating?: boolean
}

interface FlowStepData {
  title: string
  content: string
  isActive: boolean
  isComplete: boolean
  bgColor: string
}

function SignatureFlowGraph({
  method = "",
  path = "",
  pathParams = {},
  secret = "",
  signature = "",
  selectedEndpoint,
  isGenerating = false
}: SignatureFlowGraphProps) {
  const steps: FlowStepData[] = useMemo(() => {
    // Step 1: Input Collection
    const inputsComplete = method && path && secret
    const step1Content = inputsComplete 
      ? `✓ Method: ${method}\n✓ Path: ${path}\n✓ Secret: ${"*".repeat(Math.min(secret.length, 8))}...`
      : "⏳ Waiting for method, path, and secret..."

    // Step 2: Path Parameter Substitution
    const hasParams = selectedEndpoint?.pathParams.length && selectedEndpoint.pathParams.length > 0
    const paramsComplete = !hasParams || (hasParams && Object.keys(pathParams).length === selectedEndpoint?.pathParams.length)
    
    let finalPath = path
    if (hasParams && paramsComplete) {
      finalPath = path
      for (const [param, value] of Object.entries(pathParams)) {
        finalPath = finalPath.replace(`{${param}}`, value)
      }
    }
    
    const step2Content = hasParams 
      ? (paramsComplete 
          ? `✓ Original: ${path}\n✓ Substituted: ${finalPath}`
          : `⏳ Parameters needed:\n${selectedEndpoint?.pathParams.map(p => `  • ${p}: ${pathParams[p] || 'missing'}`).join('\n')}`)
      : "✓ No parameters needed"

    // Step 3: Data Concatenation
    const dataToVerify = method && finalPath ? `${method}${finalPath}` : ""
    const step3Content = dataToVerify 
      ? `✓ Concatenated data:\n"${dataToVerify}"`
      : "⏳ Waiting for method and path..."

    // Step 4: HMAC-SHA256 Processing
    const step4Content = isGenerating 
      ? "⚡ Computing HMAC-SHA256 hash...\nUsing secret key + data"
      : (signature ? "✓ HMAC-SHA256 computed successfully\nHash algorithm: SHA-256" : "⏳ Ready to compute hash")

    // Step 5: Final Signature
    const step5Content = signature 
      ? `✓ Generated signature:\n${signature}`
      : "⏳ Signature will appear here..."

    return [
      {
        title: "1. Input Collection",
        content: step1Content,
        isActive: Boolean(!inputsComplete && !isGenerating),
        isComplete: Boolean(inputsComplete && !isGenerating),
        bgColor: "#FF5E5B"
      },
      {
        title: "2. Path Construction",
        content: step2Content,
        isActive: Boolean(inputsComplete && !paramsComplete && !isGenerating),
        isComplete: Boolean(inputsComplete && paramsComplete && !isGenerating),
        bgColor: "#00CECB"
      },
      {
        title: "3. Data Concatenation",
        content: step3Content,
        isActive: Boolean(isGenerating && !signature),
        isComplete: Boolean(inputsComplete && paramsComplete && !isGenerating),
        bgColor: "#FFED66"
      },
      {
        title: "4. HMAC-SHA256",
        content: step4Content,
        isActive: Boolean(isGenerating),
        isComplete: Boolean(signature),
        bgColor: "#FF6B6B"
      },
      {
        title: "5. Final Signature",
        content: step5Content,
        isActive: false,
        isComplete: Boolean(signature),
        bgColor: "#4ECDC4"
      }
    ]
  }, [method, path, pathParams, secret, signature, selectedEndpoint, isGenerating])

  return (
    <div className="mb-8 p-6 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl font-black mb-6 bg-[#FFED66] px-2 border-2 border-black inline-block">
        SIGNATURE GENERATION FLOW
      </h2>
      
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={index}>
            <FlowStep
              title={step.title}
              content={step.content}
              isActive={step.isActive}
              isComplete={step.isComplete}
              stepNumber={index + 1}
              bgColor={step.bgColor}
            />
            {index < steps.length - 1 && (
              <FlowConnector 
                isActive={step.isComplete || steps[index + 1].isActive}
                animated={steps[index + 1].isActive}
              />
            )}
          </div>
        ))}
      </div>
      
      {isGenerating && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border-2 border-blue-500 font-bold text-blue-700">
            <div className="animate-spin mr-2 w-4 h-4 border-2 border-blue-700 border-t-transparent rounded-full"></div>
            GENERATING SIGNATURE...
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(SignatureFlowGraph)