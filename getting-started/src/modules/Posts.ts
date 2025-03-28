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
    new Post('Första posten', 
        'Hej hej, detta är min första post! Jag ser verkligen fram emot att arbeta med detta projekt och samarbeta med er alla. Det kommer bli spännande att se hur vi tillsammans utvecklar våra idéer och skapar något riktigt bra. Jag hoppas på ett positivt och lärorikt samarbete!', 
        'Agnes Wilson'),
    
    new Post('Andra posten', 
        'Idag har vi nått ett stort milsteg i projektet. Efter många veckors hårt arbete har vi äntligen färdigställt den första versionen av vår applikation. Det har varit utmanande, men vi har lärt oss mycket på vägen och jag är stolt över vad vi har åstadkommit. Bra jobbat alla!', 
        'Johan Svensson'),
    
    new Post('Morgonmöte', 
        'Glöm inte morgonmötet klockan 9:00. Vi ska diskutera den senaste utvecklingen och planera vad vi ska fokusera på under resten av veckan. Det är viktigt att alla deltar så att vi kan hålla oss på samma spår och hantera eventuella hinder som dykt upp. Ses där!', 
        'Agnes Wilson'),
    
    new Post('Ny funktion', 
        'Vi har lagt till en ny funktion som förbättrar användarupplevelsen markant. Den gör det enklare för användarna att navigera i appen och hitta de viktigaste funktionerna snabbare. Feedback från våra tidiga testare har varit mycket positiv, så jag ser fram emot att få fler användares reaktioner. Bra jobbat alla som var inblandade i utvecklingen!', 
        'Johan Svensson'),
    
    new Post('Frågor om API:et', 
        'Har någon haft problem med det senaste API-anropet? Jag har märkt några inkonsekvenser i hur datan returneras och det påverkar några av våra funktioner negativt. Det vore bra om vi kunde sätta oss ner och felsöka det tillsammans. Hör av er om ni upplever samma sak eller har förslag på lösningar.', 
        'Sara Eriksson'),
    
    new Post('Kodgranskning', 
        'Dags för en gemensam kodgranskning av den senaste releasen. Vi har fått in mycket ny kod och det är viktigt att vi går igenom den noggrant för att säkerställa att allt är i sin ordning. Jag föreslår att vi samlas imorgon eftermiddag och går igenom koden steg för steg. Förbered gärna frågor eller funderingar som ni har innan mötet.', 
        'Johan Svensson'),
    
    new Post('Veckans uppdateringar', 
        'Här är en sammanfattning av veckans arbete. Vi har slutfört utvecklingen av flera viktiga funktioner och gjort förbättringar i användargränssnittet. Testningen går framåt och vi har identifierat några buggar som vi kommer att åtgärda under nästa vecka. Bra jobbat alla och tack för er insats den här veckan!', 
        'Agnes Wilson'),
    
    new Post('Förslag på förbättringar', 
        'Jag har några förslag på hur vi kan förbättra flödet i appen. För det första tycker jag att vi kan göra vissa delar av gränssnittet mer intuitiva genom att omstrukturera navigationsmenyn. För det andra skulle en förbättring av laddningstiderna på vissa sidor göra användarupplevelsen smidigare. Låt oss diskutera detta på nästa möte.', 
        'Agnes Wilson'),
]