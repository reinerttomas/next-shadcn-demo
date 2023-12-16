import {
  AlertCircleIcon,
  CheckCircle2Icon,
  HourglassIcon,
  TimerIcon,
} from 'lucide-react'

export type Payment = {
  id: string
  email: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
}

export const statuses = [
  {
    value: 'pending',
    label: 'Pending',
    icon: HourglassIcon,
  },
  {
    value: 'processing',
    label: 'Processing',
    icon: TimerIcon,
  },
  {
    value: 'success',
    label: 'Success',
    icon: CheckCircle2Icon,
  },
  {
    value: 'failed',
    label: 'Failed',
    icon: AlertCircleIcon,
  },
]
