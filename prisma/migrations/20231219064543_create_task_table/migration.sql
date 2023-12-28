-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    "label" VARCHAR(16) NOT NULL,
    "priority" VARCHAR(8) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_code_key" ON "Task"("code");
