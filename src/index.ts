import { PrismaClient } from '../prisma/client/index.js';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'New User X',
      email: 'nux@gmail.com',
    },
  });

  console.log('New user is created:');
  console.log('User:', user);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
