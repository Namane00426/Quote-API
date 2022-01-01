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

- It has a GET **/api/quotes/random** route.
  It will send back a random quote from the quotes data.
- It has a GET **/api/quotes** route.
  It will return all quotes from the data if the request has no query.

  If there is a query string with a person attribute, the route will returns all quotes said by the same person.

- It has a POST **/api/quotes** route.
  This is for adding new quotes to the data.
  It receives 2 properties(quote, person) and sends a 400 response if these properties doesn't exist.

---

### Project Link

- under constructing..

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
