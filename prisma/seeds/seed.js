import { PrismaClient } from '../client/index.js';
import { users } from './seed.data.js';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.createMany({ data: users });
  console.log('%d new users are created.', user.count);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {

    console.log(JSON.stringify({
      name: err.name,
      message: err.message.split('\n').at(-1),
      meta: err.meta,
      code: err.code
    }, null, 2));

    await prisma.$disconnect();
    process.exit(1);
  });
