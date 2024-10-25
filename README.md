# Login-Chatting-App

## Overview
This is a plan for Login-Chatting web app.

## Fundamental User Story:
- a user can login with their credential
- a user can create an account
- a user can login -> create a room
- a user can login -> join a room
- users can communicate real-time

## Tech Stacks
#### Frontend
- HTML/CSS/Javascript
- React (Typescript)
#### Backend
- Node
- Express
- Typescript
- Websocket.io
- JWT Session (maybe later)
#### Database
- MySQL
#### Server
- host server, maybe cloud, but for now test on ngrok
- what is nginx

## API Endpoints + Socket communication
#### login (username=String, password=String)
- check with db
- return 200 and token session for later header?
- else 400
#### create_account (username=String, password=String)
- save it to the db
- return 200 if success else 400
#### create_room (Websocket vs Socket io)
- io.on(connect)...
- create room in db
- socket.join()
- send msg
#### join_room
- io.on(connect)... 
- socket.join()
- send msg
- if room is full -> msg:”room is full!”

## Fronend Pages
#### Login Page
- greeting, "Welcome!"
- username input field
- password input field
- login button
- create new account button
#### Creating New Account Page
- new username field
- new password field
- re-enter password field
- register button
#### Board Page (Successfully Log-in)
- creating a room option button
- join a room option button
#### Creating a Room Page
- room number(name) input field
- create a room button
#### Joining a Room Page
- room number input field
- join a room button
#### Chatting Room
- friend's chat on left side
- my chat on right side
- message preview bar (typed inputs)
- message sending button

## TODO Documenting:
- ~~Documenting use story and tech stacks~~
- ~~create github project and push~~
- ~~create and design API end-points~~
- ~~database design~~
- ~~pages for frontend~~

## TOdO Coding:
- Frontend
- Backend
- Database

