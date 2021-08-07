# tech-content-api
A sample API project, made up of Node.Js and MongoDB. This is a backend app, which provides technical content, stored in DB. Anyone, with the API, can fetch, add, update and delete content to their project. This app is powered by MongoDB Atlas Cloud Cluster service and is deployed under Heroku cloud hosting services.

View the live API, [here](https://techcontentapi.herokuapp.com/)

## API Usage
As this is a RESTful API, it supports the basic four [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) that allows a developer, using this API, to fetch, add, update and remove content from DB. <br>

#### The basic 4 HTTP request methods are:
> - [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
> - [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
> - [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
> - [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)

Know more on API: [What is an API?](https://www.mulesoft.com/resources/api/what-is-an-api)

#### In this project, the routes are:
- GET All
  - `https://techcontentapi.herokuapp.com/`
- GET (Particular Content)
  - `https://techcontentapi.herokuapp.com/get/:id`
- POST
  - `https://techcontentapi.herokuapp.com/create/content`
- PUT
  - `https://techcontentapi.herokuapp.com/update/:id`
- DELETE
  - `https://techcontentapi.herokuapp.com/del/:id`
- SEARCH (Based on 'Author'): CASE-SENSITIVE
  - `https://techcontentapi.herokuapp.com/search/:author`
- SEARCH (Based on 'Author'): CASE-INSENSITIVE
  - `https://techcontentapi.herokuapp.com/search/any/:author`
  
## Project setup
1. `git clone https://github.com/SamarjeetBanik/tech-content-api.git` or you can simply download the whole project in a zip folder.
2. If you have cloned repo through git or any other terminal, then `Drag-and-drop the folder in your desired code editor` or `extract the files and folders from zip and open the project in a code editor of your choice`.
3. Run `npm install` through terminal, to install and bring all dependencies into your local project.

### Compiles and hot-reloads for development
```
npm start
```

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [README.md Template](https://github.com/othneildrew/Best-README-Template#acknowledgements)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Heroku: Cloud Application Platform](https://www.heroku.com/)

#### Hope, you liked this project. Don't forget to 🌟 the repo, if you liked it.
If you feel, anything can be better in this project, then you can just pull a request [here](https://github.com/SamarjeetBanik/github-users-finder/issues/new) or <a href="mailto:samarjeetbanik@gmail.com"><b>email</b></a> me.🙂

# Thank You!
