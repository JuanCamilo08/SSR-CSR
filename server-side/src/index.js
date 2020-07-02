import express from 'express';
import compression from 'compression';
import path from 'path';
import ssr from './routes/ssr';

const app = express();

app.use(compression());
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', ssr);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});