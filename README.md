
simple server for searching images from serpapi.com API

## server setup steps
1. install dependencies `npm i` (shorthand for `npm install`)(you may also need to install node js from the website if you haven't already)
2. make your .env file `cp .env.defaults .env` and set api key(see below to get key from website) `SERP_API_KEY=`
3. start server `node app`

`ctrl + c` to stop server
## API KEY
To get the api key, go to serpapi.com, scroll down to easy integration, and in the uri grab the api key portion 
An example of the .env file api key: SERP_API_KEY=32;lk2n3;423gv4l22;35k2j53vb;

## development
use `npx nodemon` while developing instead of `node app`
`nodemon` restarts node on file change