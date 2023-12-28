import { ChevronRight } from 'lucide-react'
import React from 'react'
import DataTable from '../../components/payments/data-table'
import { Columns } from '../../components/payments/columns'
import prisma from '@/libs/prisma'

export default async function Payments() {
  const payments = await prisma.payment.findMany()

  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
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
      <DataTable columns={Columns} data={payments} />
    </main>
  )
}
