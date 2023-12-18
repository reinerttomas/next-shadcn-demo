-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(16) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_email_key" ON "Payment"("email");
