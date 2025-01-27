import { useState, useMemo } from "react"
import { apiEndpoints, generateSignature, type ApiEndpoint } from "../utils/apiUtils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ApiType = "normal" | "whitelabel"

export default function SignatureGenerator() {
  const [apiKey, setApiKey] = useState("")
  const [secret, setSecret] = useState("")
  const [selectedApiType, setSelectedApiType] = useState<ApiType | "">("")
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null)
  const [pathParams, setPathParams] = useState<Record<string, string>>({})
  const [signature, setSignature] = useState("")
  const [currentPath, setCurrentPath] = useState("")

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center p-4 font-mono">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-purple-600 text-center">Signature Generator</h1>

        <div className="mb-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API Key"
              className="border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secret">Secret</Label>
            <Input
              id="secret"
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter your Secret"
              className="border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiType">Select API Type</Label>
            <Select onValueChange={handleApiTypeChange}>
              <SelectTrigger className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <SelectValue placeholder="Select API type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal API Integration</SelectItem>
                <SelectItem value="whitelabel">White Label APIs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {selectedApiType && (
            <div className="space-y-2">
              <Label htmlFor="endpoint">Select API Endpoint</Label>
              <Select onValueChange={handleEndpointChange}>
                <SelectTrigger className="border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                  <SelectValue placeholder="Select an API endpoint" />
                </SelectTrigger>
                <SelectContent>
                  {filteredEndpoints.map((endpoint) => (
                    <SelectItem key={endpoint.name} value={endpoint.name}>
                      {endpoint.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {selectedEndpoint && (
          <div className="mb-4 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold mb-2 text-purple-600">Current Endpoint:</h2>
            <p className="font-mono mb-2">
              <span className="font-bold text-purple-600">Method: </span>
              {selectedEndpoint.method}
            </p>
            <p className="break-all font-mono">
              <span className="font-bold text-purple-600">Path: </span>
              {currentPath}
            </p>
          </div>
        )}

        {selectedEndpoint && selectedEndpoint.pathParams.length > 0 && (
          <div className="mb-4 space-y-2">
            {selectedEndpoint.pathParams.map((param) => (
              <div key={param} className="space-y-2">
                <Label htmlFor={param}>{param}</Label>
                <Input
                  id={param}
                  type="text"
                  value={pathParams[param] || ""}
                  onChange={(e) => handlePathParamChange(param, e.target.value)}
                  placeholder={`Enter ${param}`}
                  className="border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            ))}
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
          className="w-full mb-4 bg-purple-600 text-white font-bold rounded-md px-4 py-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Signature
        </Button>

        {signature && (
          <div className="p-4 bg-gray-100 rounded-md border border-gray-300">
            <h2 className="text-2xl font-bold mb-2 text-purple-600">Generated Signature:</h2>
            <p className="break-all">{signature}</p>
          </div>
        )}
      </div>
    </div>
  )
}
