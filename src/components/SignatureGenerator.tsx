import { useSignatureGenerator } from "../hooks/useSignatureGenerator"
import Header from "./signature/Header"
import SecretInput from "./signature/SecretInput"
import ApiTypeSelector from "./signature/ApiTypeSelector"
import EndpointSelector from "./signature/EndpointSelector"
import EndpointDetails from "./signature/EndpointDetails"
import PathParameterInputs from "./signature/PathParameterInputs"
import GenerateButton from "./signature/GenerateButton"
import SignatureDisplay from "./signature/SignatureDisplay"
import SignatureFlowGraph from "./signature/SignatureFlowGraph"

export default function SignatureGenerator() {
  const {
    secret,
    setSecret,
    selectedApiType,
    selectedEndpoint,
    pathParams,
    signature,
    currentPath,
    copied,
    filteredEndpoints,
    isGenerateDisabled,
    errors,
    isLoading,
    handleApiTypeChange,
    handleEndpointChange,
    handlePathParamChange,
    handleGenerateSignature,
    copyToClipboard,
  } = useSignatureGenerator()

  return (
    <div className="min-h-screen bg-[#ffde59] flex items-center justify-center p-6 font-mono">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 w-full max-w-4xl">
        <Header />

        <SecretInput secret={secret} onSecretChange={setSecret} error={errors.secret} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ApiTypeSelector 
            selectedApiType={selectedApiType} 
            onApiTypeChange={handleApiTypeChange} 
          />

          {selectedApiType && (
            <EndpointSelector 
              filteredEndpoints={filteredEndpoints} 
              onEndpointChange={handleEndpointChange} 
            />
          )}
        </div>

        {selectedEndpoint && (
          <EndpointDetails 
            selectedEndpoint={selectedEndpoint} 
            currentPath={currentPath} 
          />
        )}

        {selectedEndpoint && (
          <PathParameterInputs
            selectedEndpoint={selectedEndpoint}
            pathParams={pathParams}
            onPathParamChange={handlePathParamChange}
            errors={errors}
          />
        )}

        <GenerateButton 
          disabled={isGenerateDisabled} 
          onGenerate={handleGenerateSignature}
          isLoading={isLoading}
          error={errors.general}
        />

        <SignatureFlowGraph
          method={selectedEndpoint?.method}
          path={currentPath}
          pathParams={pathParams}
          secret={secret}
          signature={signature}
          selectedEndpoint={selectedEndpoint}
          isGenerating={isLoading}
        />

        <SignatureDisplay 
          signature={signature} 
          copied={copied} 
          onCopyToClipboard={copyToClipboard} 
        />
      </div>
    </div>
  )
}