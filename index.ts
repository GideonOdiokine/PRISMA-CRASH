import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // prisma queries
    // Create a user
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'Gideon Odiokine',
    //         email: 'gideon@mail.co'
    //     }
    // })

    // get all users
    const users = await prisma.user.findMany({
        include: {
            artices: true,
        }
    })

    // Create an article and associate it with a user
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'How to use Prisma Client',
    //         body: 'This is a guide on how to use Prisma Client',
    //         author:{
    //             connect:{
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    // get all articles
    const aritcles = await prisma.article.findMany()
    console.log(aritcles)

    //   Create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Nancy Odiokine',
    //         email: 'nancy@mail.com',
    //         artices: {
    //             create: {
    //                 title: 'How to use Prisma Client',
    //                 body: 'This is a guide on how to use Prisma Client'
    //             }
    //         }
    //     }
    // })

    // Create another article and associate it with a user
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'Nancy use Prisma Client',
    //         body: 'This is on how to use Prisma Food',
    //         author:{
    //             connect:{
    //                 id: 2
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    // loop through the users and users articles
    // users.forEach(user => {
    //     console.log(`User: ${user.name}, Email: ${user.email}`)
    //     user.artices.forEach(article => {
    //         console.log(`Title: ${article.title}, Body: ${article.body}`)
    //     })
    //     console.log('\n')
    // })

    // update a user data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: 'Gidy Odiokine Jnr'
    //     }
    // })
    // console.log(user)

    // delete  article data
    // const ariticle = await prisma.article.delete({
    //     where: {
    //         id: 3
    //     },
    // })
    // console.log(ariticle)

}


main()
    .catch(async e => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
