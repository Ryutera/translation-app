-- CreateEnum
CREATE TYPE "public"."Plan" AS ENUM ('FREE', 'year', 'month');

-- CreateEnum
CREATE TYPE "public"."InputType" AS ENUM ('TEXT', 'VOICE', 'IMAGE');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "authUserId" TEXT NOT NULL,
    "plan" "public"."Plan" NOT NULL DEFAULT 'FREE',
    "proUntil" TIMESTAMP(3),
    "languageSetting" TEXT NOT NULL DEFAULT 'Japanese',
    "stripeCustomerId" TEXT,
    "subscriptionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Translation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sourceText" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authUserId_key" ON "public"."User"("authUserId");

-- AddForeignKey
ALTER TABLE "public"."Translation" ADD CONSTRAINT "Translation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("authUserId") ON DELETE CASCADE ON UPDATE CASCADE;
