import express from 'express'
import cors from 'cors' //Controle de acesso ao backend
import { routes } from './routes';


const app = express();
app.use(cors({}));
app.use(express.json()); //Verifica se a requisição contem json
app.use(routes);

app.listen(3333, () => {  {/** Definir a porta que o servidor utilizará */}
    console.log('HTTP Rodando');
});