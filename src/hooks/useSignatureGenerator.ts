import { useState, useMemo, useCallback } from "react"
import { ApiEndpoint, ApiType, PathParams } from "../types/api"
import { apiEndpoints } from "../data/apiEndpoints"
import { generateSignature } from "../services/signatureService"
import { validateSecret, validatePathParam } from "../utils/validation"

export function useSignatureGenerator() {
  const [secret, setSecret] = useState("")
  const [selectedApiType, setSelectedApiType] = useState<ApiType | "">("")
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null)
  const [pathParams, setPathParams] = useState<PathParams>({})
  const [signature, setSignature] = useState("")
  const [currentPath, setCurrentPath] = useState("")
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const filteredEndpoints = useMemo(() => {
    if (!selectedApiType) return []
    return apiEndpoints.filter((endpoint) => endpoint.type === selectedApiType)
  }, [selectedApiType])

  const handleApiTypeChange = useCallback((value: string) => {
    setSelectedApiType(value as ApiType)
    setSelectedEndpoint(null)
    setPathParams({})
    setCurrentPath("")
    setSignature("")
  }, [])

  const handleEndpointChange = useCallback((value: string) => {
    const endpoint = apiEndpoints.find((e) => e.name === value)
    if (endpoint) {
      setSelectedEndpoint(endpoint)
      setPathParams({})
      setCurrentPath(endpoint.path)
    }
  }, [])

  const handlePathParamChange = useCallback((param: string, value: string) => {
    setPathParams((prev) => {
      const newPathParams = { ...prev, [param]: value }
      let updatedPath = selectedEndpoint!.path
      for (const [paramName, paramValue] of Object.entries(newPathParams)) {
        updatedPath = updatedPath.replace(`{${paramName}}`, paramValue || `{${paramName}}`)
      }
      setCurrentPath(updatedPath)
      return newPathParams
    })
  }, [selectedEndpoint])

  const handleGenerateSignature = useCallback(async () => {
    if (!selectedEndpoint || !secret) return

    setIsLoading(true)
    setErrors({})

    try {
      // Validate secret
      const secretValidation = validateSecret(secret)
      if (!secretValidation.isValid) {
        setErrors(prev => ({ ...prev, secret: secretValidation.error! }))
        return
      }

      // Validate path parameters
      const paramErrors: Record<string, string> = {}
      for (const param of selectedEndpoint.pathParams) {
        const value = pathParams[param] || ""
        const validation = validatePathParam(value, param)
        if (!validation.isValid) {
          paramErrors[param] = validation.error!
        }
      }

      if (Object.keys(paramErrors).length > 0) {
        setErrors(prev => ({ ...prev, ...paramErrors }))
        return
      }

      // Generate signature
      let path = selectedEndpoint.path
      for (const [param, value] of Object.entries(pathParams)) {
        path = path.replace(`{${param}}`, value)
      }
      
      const generatedSignature = generateSignature(selectedEndpoint.method, path, secret)
      setSignature(generatedSignature)
    } catch (error) {
      console.error("Error generating signature:", error)
      setErrors(prev => ({ ...prev, general: "Failed to generate signature. Please try again." }))
      setSignature("")
    } finally {
      setIsLoading(false)
    }
  }, [selectedEndpoint, secret, pathParams])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(signature)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [signature])

  const isGenerateDisabled = useMemo(() => {
    return !selectedEndpoint ||
           !secret ||
           (selectedEndpoint.pathParams.length > 0 &&
            Object.keys(pathParams).length !== selectedEndpoint.pathParams.length)
  }, [selectedEndpoint, secret, pathParams])

  return {
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
  }
}