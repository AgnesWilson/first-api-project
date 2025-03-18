class Todo {
    id: number = 0;
    content: string = "";
    done: boolean = false;
    date: string = "";

    constructor (content: string) {
        this.id = Math.round(Math.random() * 1000);
        this.content = content;
        this.done = false;
        this.date = (new Date().toString()); 
    }
}

export const todos: Todo[] = [
    new Todo('Gå på promenad'),
    new Todo('Blötlägg ris'),
    new Todo('Värm middag'),
    new Todo('Koka ris'),
    new Todo('Ladda ner TV spel'),
    new Todo('Gör klart skolarbete'),
]
