export class Post {
    id: number = 0;
    title: string = "";
    content: string = "";
    author: string = "";

    constructor (title: string, content: string, author: string) {
        this.id = Math.round(Math.random() * 1000);
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

export const posts: Post[] = [
    new Post('Första posten', 'Hej hej, detta är min första post!', 'Agnes Wilson'),
    new Post('Andra posten', 'Idag har vi nått ett stort milstolpe i projektet.', 'Johan Svensson'),
    new Post('Morgonmöte', 'Glöm inte morgonmötet klockan 9:00.', 'Agnes Wilson'),
    new Post('Ny funktion', 'Vi har lagt till en ny funktion som förbättrar användarupplevelsen.', 'Johan Svensson'),
    new Post('Frågor om API:et', 'Har någon haft problem med det senaste API-anropet?', 'Sara Eriksson'),
    new Post('Kodgranskning', 'Dags för en gemensam kodgranskning av den senaste releasen.', 'Johan Svensson'),
    new Post('Veckans uppdateringar', 'Här är en sammanfattning av veckans arbete.', 'Agnes Wilson'),
    new Post('Förslag på förbättringar', 'Jag har några förslag på hur vi kan förbättra flödet i appen.', 'Agnes Wilson'),
]