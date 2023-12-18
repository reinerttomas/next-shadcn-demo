import { PrismaClient } from '@prisma/client'
import { payments } from './data'
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.$queryRaw`TRUNCATE "Payment" RESTART IDENTITY`
    console.log('Deleted records in payment table')

    await prisma.payment.createMany({ data: payments })
    console.log('Added payment data.')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
