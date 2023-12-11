'use client'

import { Payment } from '@/types/payment'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
]
