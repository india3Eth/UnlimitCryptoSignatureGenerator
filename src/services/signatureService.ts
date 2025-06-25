import CryptoJS from "crypto-js"

export function generateSignature(method: string, path: string, secret: string): string {
  if (!method || !path || !secret) {
    throw new Error("Method, path, and secret are required for signature generation")
  }

  const dataToVerify = method + path
  const hash = CryptoJS.HmacSHA256(dataToVerify, secret)
  return CryptoJS.enc.Hex.stringify(hash)
}