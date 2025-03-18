import express, { Request, Response } from 'express';
const app = express();

import { Todo } from './ToDos';

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

app.get('/', (_: Request, res: Response) => {
    res.send('Hello World')
  })

const todos: Todo[] = [
    new Todo('Gå på promenad'),
    new Todo('Blötlägg ris'),
    new Todo('Värm middag'),
    new Todo('Koka ris'),
    new Todo('Ladda ner TV spel'),
    new Todo('Gör klart skolarbete'),
]

app.get('/todos', (req: Request, res: Response) => {
    res.json(todos)

    // const search = req.query.search
    // const sort = req.query.sort

    // let filteredToDos = todos;

    // if (search) {
    //     filteredToDos = filteredToDos.filter((t) => t.content.includes(search.toString()))
    // }
})