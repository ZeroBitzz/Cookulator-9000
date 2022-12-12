
simple server for searching images from serpapi.com API

## server setup steps
1. install dependencies `npm i` (shorthand for `npm install`)
2. make your .env file `cp .env.defaults .env` and set api key `SERP_API_KEY=`
3. start server `node app`

## API
to get the api key, go to serpapi.com, scroll down to easy integration, and in the uri grab the api key portion 

`ctrl + c` to stop server

## development
use `npx nodemon` while developing instead of `node app`
`nodemon` restarts node on file change