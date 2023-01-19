import { PrismaClient } from '@prisma/client';

export default function test() {
  const prisma = new PrismaClient();
  prisma.user.createMany({
    data: {
      name: 'asjdagshdagsdhasgdhs',
    },
  });
  console.log(';dfghfdjghsdfjhgdfshfgdshgh');
}
