export function validateSecret(secret: string): { isValid: boolean; error?: string } {
  if (!secret.trim()) {
    return { isValid: false, error: "API secret is required" }
  }
  
  if (secret.length < 8) {
    return { isValid: false, error: "API secret must be at least 8 characters long" }
  }
  
  return { isValid: true }
}

export function validatePathParam(value: string, paramName: string): { isValid: boolean; error?: string } {
  if (!value.trim()) {
    return { isValid: false, error: `${paramName} is required` }
  }
  
  // Basic validation for common parameter patterns
  if (paramName.toLowerCase().includes('id') && !/^[a-zA-Z0-9_-]+$/.test(value)) {
    return { isValid: false, error: `${paramName} must contain only letters, numbers, hyphens, and underscores` }
  }
  
  return { isValid: true }
}