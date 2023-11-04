import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    
    //Adding a lesson to a chapter of a course
    await prisma.course.update({
        where: { id: 1 },
        data: {
            chapters: {
                update: {
                    where: {
                        id: 1                        
                    },
                    data: {
                        lessons: {
                            create: [{
                                title: 'Prerequisites',
                                isPrevAval: true
                            },{
                                title: 'Source Code',
                                isFile: true
                            }]
                        }                        
                    }
                }
            }             
            
        }    
    })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })