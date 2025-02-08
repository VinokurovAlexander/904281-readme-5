import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const FIRST_USER_ID = '658170cbb954e9f5b905ccf4';
const SECOND_USER_ID = '6581762309c030b503e30512';

const main = async () => {
    const category1 = await prisma.category.create({
        data: {
            title: 'Text',
        },
    });

    const post1 = await prisma.post.create({
        data: {
            title: 'Introduction to Prisma',
            content:
                'Prisma is a modern database toolkit for TypeScript and Node.js.',
            userId: FIRST_USER_ID,
            categoryId: category1.id,
        },
    });

    // Создаем комментарии
    await prisma.comment.create({
        data: {
            text: 'Great article!',
            userId: FIRST_USER_ID,
            postId: post1.id,
        },
    });

    await prisma.like.create({
        data: {
            userId: FIRST_USER_ID,
            postId: post1.id,
        },
    });

    await prisma.repost.create({
        data: {
            userId: SECOND_USER_ID,
            postId: post1.id,
        },
    });

    console.info('🤘️ Database was filled');
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
