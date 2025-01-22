import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (title: string, content: string, author: string) => {
  return prisma.post.create({
    data: { title, content, author },
  });
};

export const getPosts = async () => {
  return prisma.post.findMany();
};

export const getPostById = async (id: number) => {
  return prisma.post.findUnique({ where: { id } });
};

export const updatePost = async (id: number, title: string, content: string) => {
  return prisma.post.update({
    where: { id },
    data: { title, content },
  });
};

export const searchPosts = async (query: string) => {
  return prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
      ],
    },
  });
};

export const deletePost = async (id: number) => {
  return prisma.post.delete({ where: { id } });
};
