# Quote-API

It's a small web app using Express.js to store and serve different quotes about computers, coding, and technology.

## Table of Contents:

- [General_Info](#general-information)
- [Project_Link](#project-link)
- [Technologies](#technologies)
- [Using_the_App](#using-the-app)

---

### General Information

It's a small web app using Express.js web API to store and serve different quotes about computers, coding, and technology.

This is my solution to a challenge project of Codecademy's full-stack engineer skill path course.

---

About this API features

- GET **/api/quotes/random** route will send back a random quote from the quotes data.
- GET **/api/quotes** route will return all quotes from the data if the request has no query.

  - If there is a query string with a person attribute, the route will returns all quotes said by the same person.
  - If there is a query string with an Id, the route will return a quote with that Id.

- POST **/api/quotes** route is for adding new quotes to the data.
  - It receives two properties (quote, person) and sends a 400 response if these properties are not exist.
- PUT **/api/quotes** route is for updating old quotes to the new.
  - It receives an Id, name and quote as properties and update a particular quote by this Id. It sends a 400 response if the Id doesn't exist.

---

### Project images

GET route, POST route:
![GET route, POST route](https://user-images.githubusercontent.com/64364271/151435417-13b8f01c-9055-4afa-96b3-d15713c95117.gif)

PUT route:
![PUT route](https://user-images.githubusercontent.com/64364271/151435752-a78f70ff-0ba2-43a8-9450-51a7eaf09a2a.gif)

---

### Technologies

This API is builled by..

- HTML
- CSS
- JavaScript
- Express.js
- Node JS

---

### Using the App

This app can be used by cloning the project onto your computer, navigating to the project root via the command line, and running **node server.js**.
