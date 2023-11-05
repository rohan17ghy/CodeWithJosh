import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const course = {
        title: 'React 18 for Beginners',
        description: 'A step-by-step guide to building web apps with React 18+ and TypeScript',
        duration: 480,
        oldPrice: 149,
        newPrice: 15,
        learningPoints: [
            "Confidently build front-end apps with React and TypeScript",
            "Build reusable function components",
            "Style your components using vanilla CSS, CSS modules, and CSS-in-JS",
            "Manage component state",
            "Build forms with React Hook Forms",
            "Implement form validation using Zod",
            "Connect your React apps to the backend",
            "Deploy your React apps",
            "Use VSCode shortcuts to increase your productivity",
            "Apply the latest techniques and best practices",
            "Troubleshoot errors with ease",
            "Write clean code like a pro"
        ],
        audience:[
            "Beginners who want to learn React from scratch and build real-world apps",
            "React developers who want to fill in the gaps in their knowledge and take their skills to the next level",
            "Anyone who wants to become a confident and proficient React developer"
        ],
        chapters: {
            create: [{
                    title: "Getting Started",
                    lessons: {
                        create: [{
                            title: 'Welcome',
                            isPrevAval: true
                        }]
                    }
                }]
        }
    }
    await prisma.course.create({ data: course }) 
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