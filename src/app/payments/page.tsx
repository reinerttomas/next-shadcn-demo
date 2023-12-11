import { Payment } from '@/types/payment'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import PaymentDataTable from './data-table'
import { columns } from './columns'

export const getData = async (): Promise<Payment[]> => {
  const response = await fetch('http://localhost:8000/payments', {
    cache: 'no-store',
  })
  const payments = await response.json()

  return payments
}

export default async function Payment() {
  const payments = await getData()

  return (
    <main className="container w-full max-w-4xl flex-1 items-start py-6">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Docs
        </div>
        <ChevronRight size={16} />
        <div className="font-medium text-foreground">Payments</div>
      </div>

      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Payments
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <div className="pb-12 pt-8">
        <PaymentDataTable columns={columns} data={payments} />
      </div>
    </main>
  )
}
