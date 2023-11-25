const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


async function getProducts (req, res){
    const users = await prisma.user.findMany()
    res.send(users)
}

module.exports = getProducts