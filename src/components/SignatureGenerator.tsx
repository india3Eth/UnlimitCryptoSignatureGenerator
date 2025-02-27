import { useState, useMemo } from "react"
import { apiEndpoints, generateSignature, type ApiEndpoint } from "../utils/apiUtils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy } from "lucide-react"

type ApiType = "normal" | "whitelabel"

export default function SignatureGenerator() {
  const [secret, setSecret] = useState("")
  const [selectedApiType, setSelectedApiType] = useState<ApiType | "">("")
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null)
  const [pathParams, setPathParams] = useState<Record<string, string>>({})
  const [signature, setSignature] = useState("")
  const [currentPath, setCurrentPath] = useState("")
  const [copied, setCopied] = useState(false)

  const filteredEndpoints = useMemo(() => {
    if (!selectedApiType) return []
    return apiEndpoints.filter((endpoint) => endpoint.type === selectedApiType)
  }, [selectedApiType])

  const handleApiTypeChange = (value: string) => {
    setSelectedApiType(value as ApiType)
    setSelectedEndpoint(null)
    setPathParams({})
    setCurrentPath("")
    setSignature("")
  }

  const handleEndpointChange = (value: string) => {
    const endpoint = apiEndpoints.find((e) => e.name === value)
    if (endpoint) {
      setSelectedEndpoint(endpoint)
      setPathParams({})
      setCurrentPath(endpoint.path)
    }
  }

  const handlePathParamChange = (param: string, value: string) => {
    setPathParams((prev) => {
      const newPathParams = { ...prev, [param]: value }
      let updatedPath = selectedEndpoint!.path
      for (const [paramName, paramValue] of Object.entries(newPathParams)) {
        updatedPath = updatedPath.replace(`{${paramName}}`, paramValue || `{${paramName}}`)
      }
      setCurrentPath(updatedPath)
      return newPathParams
    })
  }

  const handleGenerateSignature = () => {
    if (selectedEndpoint) {
      let path = selectedEndpoint.path
      for (const [param, value] of Object.entries(pathParams)) {
        path = path.replace(`{${param}}`, value)
      }
      const generatedSignature = generateSignature(selectedEndpoint.method, path, secret)
      setSignature(generatedSignature)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(signature)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#6A0572', '#AB83A1']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className="min-h-screen bg-[#ffde59] flex items-center justify-center p-6 font-mono">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-black mb-8 text-center">
          <span className="bg-[#FF5E5B] px-4 py-2 border-2 border-black">UNLIMIT</span>
          <span className="bg-[#00CECB] px-4 py-2 border-2 border-black">SIGNATURE</span>
          <span className="bg-[#FFED66] px-4 py-2 border-2 border-black">GENERATOR</span>
        </h1>

        <div className="mb-8">
          <div className="space-y-2 mb-6">
            <Label htmlFor="secret" className="text-xl font-bold">API Secret</Label>
            <Input
              id="secret"
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter your Secret Key"
              className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg p-4 font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="apiType" className="text-xl font-bold">API Type</Label>
            <Select onValueChange={handleApiTypeChange} value={selectedApiType}>
              <SelectTrigger className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg h-14">
                <SelectValue placeholder="Select API type" />
              </SelectTrigger>
              <SelectContent className="border-4 border-black">
                <SelectItem value="normal" className="text-lg cursor-pointer hover:bg-[#00CECB]">Normal API</SelectItem>
                <SelectItem value="whitelabel" className="text-lg cursor-pointer hover:bg-[#FF5E5B]">White Label API</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {selectedApiType && (
            <div className="space-y-2">
              <Label htmlFor="endpoint" className="text-xl font-bold">API Endpoint</Label>
              <Select onValueChange={handleEndpointChange}>
                <SelectTrigger className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg h-14">
                  <SelectValue placeholder="Select endpoint" />
                </SelectTrigger>
                <SelectContent className="border-4 border-black max-h-80">
                  {filteredEndpoints.map((endpoint) => (
                    <SelectItem 
                      key={endpoint.name} 
                      value={endpoint.name}
                      className="text-lg cursor-pointer hover:bg-[#FFED66]"
                    >
                      {endpoint.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {selectedEndpoint && (
          <div className="mb-6 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold mb-2 bg-[#FFED66] px-2 border-2 border-black inline-block">
              Endpoint Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              <div className="bg-[#00CECB] p-2 border-2 border-black">
                <span className="font-bold">Method: </span>
                {selectedEndpoint.method}
              </div>
              <div className="md:col-span-2 bg-[#FF5E5B] p-2 border-2 border-black overflow-auto">
                <span className="font-bold">Path: </span>
                <code className="break-all font-mono">{currentPath}</code>
              </div>
            </div>
          </div>
        )}

        {selectedEndpoint && selectedEndpoint.pathParams.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 bg-[#FF5E5B] px-2 border-2 border-black inline-block">
              Path Parameters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedEndpoint.pathParams.map((param) => (
                <div key={param} className="space-y-2">
                  <Label 
                    htmlFor={param} 
                    className="text-lg font-bold px-2 border-2 border-black inline-block"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {param}
                  </Label>
                  <Input
                    id={param}
                    type="text"
                    value={pathParams[param] || ""}
                    onChange={(e) => handlePathParamChange(param, e.target.value)}
                    placeholder={`Enter ${param}`}
                    className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg p-4 font-mono"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={handleGenerateSignature}
          disabled={
            !selectedEndpoint ||
            !secret ||
            (selectedEndpoint.pathParams.length > 0 &&
              Object.keys(pathParams).length !== selectedEndpoint.pathParams.length)
          }
          className="w-full h-16 mb-6 text-xl font-black bg-[#00CECB] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          GENERATE SIGNATURE
        </Button>

        {signature && (
          <div className="p-6 bg-[#FFED66] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-black border-b-4 border-black">SIGNATURE</h2>
              <Button 
                onClick={copyToClipboard} 
                variant="outline" 
                className="bg-white border-2 border-black hover:bg-gray-100"
              >
                {copied ? "COPIED!" : <Copy className="h-5 w-5" />}
              </Button>
            </div>
            <p className="break-all font-mono text-lg bg-white p-4 border-2 border-black">{signature}</p>
          </div>
        )}
      </div>
    </div>
  )
}