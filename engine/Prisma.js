import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

if (process.env.NODE_ENV === 'production') {
  // console.log(process.env.DATABASE_URL)
  prisma = new PrismaClient();
} else {
  // console.log(process.env.DATABASE_URL)
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  
  prisma = global.prisma;
}

export default prisma;