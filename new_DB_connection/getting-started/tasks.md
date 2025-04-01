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
- [x] Build on the previous code, extend the GET endpoint that returns a list of posts
- [x] Filter the list by the “Author” property, depending on the “search” query param value
- [x] Sort the list by the "Title" property, depending on the “sort” query param value (asc or desc)
- [x]The “search” and “sort” query params are retrieved from the Request object. Example: /posts?search=John&sort=asc

### b)
- [x] Build on the previous code, create a new GET endpoint “/posts/:id” 
- [x] that returns a specific post depending on the “:id” path param from the URL 
- [x] The “:id” path param is retrieved from the Request object.

## Exercise 04-express-crud
- [ ] Build on the previous code, create new endpoints for POST/PATCH/DELETE posts 
- [x] The POST endpoint should create a new post with the following properties: id, title, content, author. Validate required fields title, content, author
- [x] The PATCH endpoint should update an existing post with the “:id” path param. Should be able to update the title, content and author. Validate required fields title, content, author
- [ ] The DELETE endpoint should delete an existing post with the “:id” path param

## Exercise 05-express-validation-errorhandling
- [ ] Build on the previous code, add error handling with try/catch on all your endpoints
- [ ] Return data with correct HTTP status codes
    - [ ] 200 - OK
    - [ ] 201 - Created
    - [ ] 400 - Bad Request
    - [ ] 404 - Not Found
    - [ ] 500 - Internal Sever Error