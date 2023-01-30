import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.airports.createMany({
    data: [
      {
        name: 'Santos Dumont',
        acronym: 'SDU',
      },
      {
        name: 'Galeão',
        acronym: 'GIG',
      },
    ],
  });
}

main()
  .then(() => {
    console.log('Successfully registered');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
