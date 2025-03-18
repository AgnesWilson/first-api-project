import express, { Request, Response } from 'express';
const app = express();

import { Todo } from './modules/ToDos';
import { Post } from './modules/Posts';

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

// ------------------ START PAGE --------------------- //

app.get('/', (_: Request, res: Response) => {
    res.send('Starting Page')
  })

// -------------------- TO DO ----------------------- //

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

// -------------------- POSTS ----------------------- //

const posts: Post[] = [
    new Post('Första posten', 'Hej hej, detta är min första post!', 'Agnes Wilson'),
    new Post('Andra posten', 'Idag har vi nått ett stort milstolpe i projektet.', 'Johan Svensson'),
    new Post('Morgonmöte', 'Glöm inte morgonmötet klockan 9:00.', 'Agnes Wilson'),
    new Post('Ny funktion', 'Vi har lagt till en ny funktion som förbättrar användarupplevelsen.', 'Johan Svensson'),
    new Post('Frågor om API:et', 'Har någon haft problem med det senaste API-anropet?', 'Sara Eriksson'),
    new Post('Kodgranskning', 'Dags för en gemensam kodgranskning av den senaste releasen.', 'Johan Svensson'),
    new Post('Veckans uppdateringar', 'Här är en sammanfattning av veckans arbete.', 'Agnes Wilson'),
    new Post('Förslag på förbättringar', 'Jag har några förslag på hur vi kan förbättra flödet i appen.', 'Agnes Wilson'),
]

app.get('/posts', (req: Request, res: Response) => {
    res.json(posts)
})