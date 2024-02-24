-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "preferenceLevel" TEXT NOT NULL DEFAULT 'regular';

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "avatar" TEXT,
ALTER COLUMN "altNumber" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "avatar" TEXT;
