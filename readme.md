# unSplash
unSplash is an application that renders a gallery based on a users search term. 

unSplash uses a HTTP client called Axios to initiate a request to the Unsplash API. 

An onClick event handler triggers the request, which fetches images based on the users search term. The search term is managed by an onChange event handler.

Throughout the build of this project, I adhered to TDD and used [pull requests](https://github.com/RichEwin/unSplash/commits/master) to manage the workflow.

Check it out => https://usplash.herokuapp.com/

## How to run

### Clone repository
```
git clone https://github.com/RichEwin/unSplash
```
*[API Key](https://unsplash.com/developers) required. Create a .env file at the project root and include REACT_APP_UNSPLASH_KEY=key*

### Installation 
```
npm install
npm start

http://localhost:8080/
```
### Run with docker
```
docker compose up -d

http://localhost:8080/
```
### Cleardown image and container
```
sh scripts/cleardown.sh
```
### Run test suite
```
npm run test
```
### Run ESLint
```
npm run lint
```
