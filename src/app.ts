import express from 'express';
import router from './routes/calculatorRoutes';
import path from 'path';
import "dotenv/config";

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor online na porta ${process.env.PORT}`);
    
});