# To-do List REST API
###### Start Date: 8 May 2021

## Introduction
This to-do list was created to understand better how REST API can be created with node.js and MongoDB.

It is made by following [Codementor RESTful API Tutorial](https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd).

## System Used
- Ubuntu 20.04 (Focal) LTS
- VS Code

## Prerequisites
The following must be installed:
- Node.js\
with modules:
    - nodemon
    - express
    - mongoose

- MongoDB

## Quick Reference
### Terminal commands
#### Create new directory
```
$ mkdir <directory name here>
```

Example:
```
$ mkdir example-folder
```
The code will create a folder named "example-folder".

#### Change directory (moving into a directory)
```
$ cd <directory name here>
```

Example:
```
$ cd example-folder
```
This will result in you moving into the folder.

#### Create a new file
```
$ touch <file name here>
```

Example:
```
$ touch script.js
```

This will create an empty file named "script.js".

#### List items
```
$ ls
```
If you are in the "example-folder" and had created "script.js", you would see "index.js" listed. 

#### Change directory (moving out of a directory)
```
$ cd ..
```
If you are currently in "example-folder", you will be moved one level before "example-folder".
### Node.js
Run server:
```
npm run start
```
To stop server, just press `ctrl + c` into the Terminal. 

## Troubleshooting
When running `mongod`, returns error "/data/db" not found.
[/data/db not found error](https://askubuntu.com/questions/1264528/nonexistentpath-data-directory-data-db-not-found-terminating-error-occurs)