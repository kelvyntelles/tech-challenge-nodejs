import express from 'express';
import cors from 'cors'
import postRoutes from './routes/post.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/posts', postRoutes);

export default app;
