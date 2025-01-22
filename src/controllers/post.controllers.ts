import { Request, Response } from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost, searchPosts } from '../services/post.service';

export const create = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const post = await createPost(title, content, author);
  res.status(201).json(post);
};

export const getAll = async (_req: Request, res: Response) => {
  const posts = await getPosts();
  res.json(posts);
};

export const search = async (req: Request, res: Response): Promise<any> => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Post not found erro 1' });
  }

  try {
    const posts = await searchPosts(query as string);

    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found' });
    }

    return res.json({ results: posts });
  } catch (error) {
    console.error('Error searching posts:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const getOne = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const post = await getPostById(Number(id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.status(200).json(post);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await updatePost(Number(id), title, content);
  res.json(post);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deletePost(Number(id));
  res.status(204).send();
};

