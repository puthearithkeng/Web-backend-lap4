import express from 'express';
import router from './routes/route.js' 

const app = express();

app.use(express.json());
const PORT = 3000;

app.use('/',router);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/journalists`);
});