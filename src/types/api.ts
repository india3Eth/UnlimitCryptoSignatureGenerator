export interface ApiEndpoint {
  name: string
  path: string
  method: string
  pathParams: string[]
  type: "normal" | "whitelabel"
}

export type ApiType = "normal" | "whitelabel"

export interface PathParams {
  [key: string]: string
}

export interface SignatureGeneratorState {
  secret: string
  selectedApiType: ApiType | ""
  selectedEndpoint: ApiEndpoint | null
  pathParams: PathParams
  signature: string
  currentPath: string
  copied: boolean
}