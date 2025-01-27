import CryptoJS from "crypto-js"

export interface ApiEndpoint {
  name: string
  path: string
  method: string
  pathParams: string[]
  type: "normal" | "whitelabel"
}

export const apiEndpoints: ApiEndpoint[] = [
  {
    name: "Get Configuration",
    path: "/onramp/v1/configuration",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  {
    name: "Create KYC customer",
    path: "/v1/external/customers/{CustomerId}/kyc",
    method: "GET",
    pathParams: ["CustomerId"],
    type: "whitelabel",
  },
  {
    name: "Get Customer KYC",
    path: "/v1/external/customers/{CustomerId}/kyc",
    method: "GET",
    pathParams: ["CustomerId"],
    type: "whitelabel",
  },
  // Add more API endpoints here
]

export function generateSignature(method: string, path: string, secret: string): string {
  const dataToVerify = method + path
  const hash = CryptoJS.HmacSHA256(dataToVerify, secret)
  return CryptoJS.enc.Hex.stringify(hash)
}
