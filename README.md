# Vacay.io Photo Component

> This is an mock-up airbnb booking component built during the Hack Reactor immersive's Capstone project.

> This project is intended to work as a full-stack microservice integrated with my team's microservices to form a complete airbnb single item page.

## Related Projects

- https://github.com/vacay-io/Photo-Carousel-Service
- https://github.com/vacay-io/Booking-Service
- https://github.com/vacay-io/Calendar-Service
- https://github.com/vacay-io/Reviews-Service
- https://github.com/vacay-io/Product-Info-Service

## Table of Contents

1.  [Usage](#Usage)
1.  [Requirements](#requirements)
1.  [Development](#development)

## Technology stack

> A full stack react app built with the philosophy of continuously-integrated, test-driven development.

- CSS
- HTML5
- React.js
- Node.js
- Express
- MongoDB

- Jest
- Enzyme
- CircleCI

## Requirements

- Node v8.10.0
- npm v3.5.2
- MongoDB v3.6.3

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Development

From within the root directory:

To seed database

```sh
npm db:seed
```

To run server

```sh
npm start
```

To run dev enviroment/webpack

```sh
npm run react-dev
```

To run tests

```sh
npm test
```

## API Documentation:
- GET: '/api/photos/:id': Get all photos of a particular room, where id is the room ID.
- POST: '/api/photos/:id': Post a photo to a particular room
- PUT: '/api/photos/:id': Modify the information of a particular room
- DELETE: '/api/photos/:id': Delete photos of a particular room.
