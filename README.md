## To install the dependencies, run the following command: `npm install`


## To start the server, run the following command: `node server.js`


#### The server will listen on port :  `8080`.

## Usage

## To connect to the server, use the following code:
`var ws = new WebSocket("ws://localhost:8080");`

## The `ws` object will emit the following events:

* `open`: The connection has been opened.
* `close`: The connection has been closed.
* `message`: A message has been received from the server.

To send a message to the server, use the following code: `ws.send("Hello, world!");`
