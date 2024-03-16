import { PrismaClient } from '@prisma/client'
import type { Course } from '@prisma/client';
import type { Chapter } from '@prisma/client';
import type { Lesson } from '@prisma/client';


// const { PrismaClient } = require('@prisma/client');
// const { Course, Chapter, Lesson} = require('@prisma/client');
const prisma = new PrismaClient();

export { prisma }
export type { Course, Chapter, Lesson}


// module.exports = { prisma, };
