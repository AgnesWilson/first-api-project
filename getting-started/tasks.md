# Exercise 01-getting-started
- [x] Follow the guide "Terminalen - Kom igång med Node_Express_TypeScript"
- [x] Create a new Express server with TypeScript
- [x] With correct configurations in both tsconfig.json and package.json

# Exercise 02-express-intro
- [x] Add a new GET endpoint "/posts" that returns a list of posts
- [x] The posts should be an instance of the Post class (modules/Post.ts) with the following properties
- [x] id, title, content, author

## Exercise 03-express-params

### a)
- Build on the previous code, extend the GET endpoint that returns a list of posts
- Filter the list by the “Author” property, depending on the “search” query param value
- Sort the list by the "Title" property, depending on the “sort” query param value (asc or desc)
- The “search” and “sort” query params are retrieved from the Request object.
- Example: /posts?search=John&sort=asc

### b)
- Build on the previous code, create a new GET endpoint “/posts/:id” 
- that returns a specific post depending on the “:id” path param from the URL 
- The “:id” path param is retrieved from the Request object.