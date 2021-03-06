export interface InvoiceResponse {
  payreq: string
  id: string
  description?: string
  createdAt: string
  amount: string | number
  status?: string
  secret?: string
}

/**
 * @description Response returned from ln-service requests for invoices,
 * either after new creation or after checking status
 */
export interface LnServiceInvoiceResponse {
  chain_address: string
  confirmed_at?: string
  created_at: string
  description: string
  description_hash?: string
  expires_at: string
  id: string
  is_canceled?: boolean
  is_confirmed: boolean
  is_held?: boolean
  is_outgoing: boolean
  is_private: boolean
  payments: object[]
  received: number
  received_mtokens: number
  request: string
  secret: string
  tokens: number
}

/**
 * @description This describes the body for a request to create an invoice.
 * It includes optional paymentHash prop needed for hodl invoices
 */
export interface InvoiceBody {
  time?: string
  amount?: string | number
  expiresAt?: string
  description?: string
  paymentHash?: string
  cltvDelta?: string | number
}
