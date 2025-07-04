import { ApiEndpoint } from "../types/api"

export const apiEndpoints: ApiEndpoint[] = [
  // Onramp Sandbox endpoints
  {
    name: "Onramp - Config",
    path: "/onramp/v1/configuration",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  {
    name: "Onramp - Quotes",
    path: "/onramp/v1/quotes",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  {
    name: "Onramp - Orders",
    path: "/onramp/v1/orders",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  {
    name: "Onramp - Order Status by ID",
    path: "/onramp/v1/orders/{orderId}",
    method: "GET",
    pathParams: ["orderId"],
    type: "normal",
  },
  {
    name: "Onramp - Buy an asset",
    path: "/onramp/v1/buy",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  
  // Offramp Sandbox endpoints
  {
    name: "Offramp - Config",
    path: "/offramp/v1/configuration",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  {
    name: "Offramp - Quotes",
    path: "/offramp/v1/quotes",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  {
    name: "Offramp - Order details",
    path: "/offramp/v1/orders/{orderId}",
    method: "GET",
    pathParams: ["orderId"],
    type: "normal",
  },
  {
    name: "Offramp - Sell",
    path: "/offramp/v1/sell",
    method: "GET",
    pathParams: [],
    type: "normal",
  },
  
  // White Label Sandbox endpoints
  {
    name: "White Label - Create KYC customer",
    path: "/v1/external/customers",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - KYC Requirements",
    path: "/v1/external/kyc/requirements",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Submit KYC Info level 1",
    path: "/v1/external/customers/{customerId}/kyc",
    method: "POST",
    pathParams: ["customerId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Submit KYC for review",
    path: "/v1/external/customers/{customerId}/kyc/{submissionId}/submit",
    method: "POST",
    pathParams: ["customerId", "submissionId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Liveness check KYC level 2+3",
    path: "/v1/external/customers/{customerId}/kyc/widgetUrl",
    method: "POST",
    pathParams: ["customerId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Update KYC Info level 1",
    path: "/v1/external/customers/{customerId}/kyc",
    method: "PUT",
    pathParams: ["customerId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Get Auth for Customer",
    path: "/v1/external/auth-token",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Quotes",
    path: "/v1/external/quotes",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - All Config",
    path: "/v1/external/allConfigs",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Retrieve Quotes",
    path: "/v1/external/quotes/{quoteId}",
    method: "GET",
    pathParams: ["quoteId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Onramp Required Fields",
    path: "/v1/external/onramp/requirements",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Onramp Order Card",
    path: "/v1/external/onramp",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Get Onramp Orders",
    path: "/v1/external/onramp",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Add Fiat Account",
    path: "/v1/external/fiatAccounts",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Fiat Account Requirements",
    path: "/v1/external/fiatAccounts/requirements",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Get Fiat Accounts",
    path: "/v1/external/customers/{customerId}/fiatAccounts",
    method: "GET",
    pathParams: ["customerId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Offramp Order",
    path: "/v1/external/offramp",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Offramp Order List",
    path: "/v1/external/offramp",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Offramp Order Details",
    path: "/v1/external/offramp/{transactionId}",
    method: "GET",
    pathParams: ["transactionId"],
    type: "whitelabel",
  },
  {
    name: "White Label - Support Tickets",
    path: "/v1/external/supportTickets",
    method: "POST",
    pathParams: [],
    type: "whitelabel",
  },
  {
    name: "White Label - Retrieve Support Ticket",
    path: "/v1/external/supportTickets/{ticketId}",
    method: "GET",
    pathParams: ["ticketId"],
    type: "whitelabel",
  },
  {
    name: "White Label - List Support Tickets",
    path: "/v1/external/supportTickets",
    method: "GET",
    pathParams: [],
    type: "whitelabel",
  }
]