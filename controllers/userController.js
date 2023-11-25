const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


async function getUsers (req, res) {
    const users = await prisma.user.findMany()
    res.send(users)
};

async function getUserById (req, res)  {
    const  id = parseInt(req.params.id)
      try {
          const users = await prisma.user.findUnique({
              where: {id:id},
          });
  
  
          
          res.send(users)
      } catch (error) {
  
      }
  };


  async function createUser (req, res)  {
   
      try {
          const newUser = await prisma.user.create({
              data: req.body,
          });
          res.send(newUser)
      } catch (error) {
        console.log(error)
      }
  };

  async function updateUser (req, res)  {
    const  id = parseInt(req.params.id)
      try {
          const updateUser = await prisma.user.update({
              where: {id:id}
          });
          res.json(updateUser)
      } catch (error) {
  
      }
  };

module.exports = {getUsers,getUserById,createUser,updateUser}