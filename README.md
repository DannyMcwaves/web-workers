# WEB WORKERS
This is a functioning exmaple of web workers containing static scripts, images, markup files, and stylesheets.

### SETUP   
Web workers do not work on static standalone scripts. 
As such, you need to start a server that responds to requests made by the worker object.

### STARTING A PYTHON SERVER.
if you are running python, you can start a simple server from the commandline.

**First of all all you will have to `cd` into the project directory before starting the server.**

```sh
cd some/project/dir
python -m SimpleHTTPServer
```

This will start a server on a default port of `8000` that responds to requests by sending static files from the project directory

### STARTING A NODE SERVER
If on the other hand you have a functioning node.js setup with npm, you can also be able to start a sample http server from the commandline.

**You'd also need to cd into the project directory**

```sh
cd some/project/dir
npm i serve -g
serve
```

An HTTP server is started on port 5000.


### OPEN
You can go on ahead and open the url in the browser.


### BEHIND THE SCENES
The worker simulates calls being made to the server and responds to the main parent thread with tweets and username
whilst the main thread updates the UI with the new tweets and the username.

Looks like tweets that keep changing with time, every 10seconds.

:+1:
