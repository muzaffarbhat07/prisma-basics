import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //prisma queries

    //create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'muzaffar bhat',
    //         email: 'muzaffar@gmail.com'
    //     },
    // });
    // console.log(user);

    //get users
    // const users = await prisma.user.findMany();
    // console.log(users);

    //create article and associate it with a user
    const article = await prisma.article.create({
        data: {
            title: 'Muzaffars first article',
            body: 'This is muzaffars first article',
            author: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    console.log(article);
}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })