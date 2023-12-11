export type Payment = {
  id: string
  email: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
}
