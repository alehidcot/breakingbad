# Breaking Bad

## Features

- Frontend

  - [ ] Login
  - [x] Multilanguage support
  - [x] Integrate [Material UI](https://mui.com/getting-started/usage/)
  - [x] Pages / Sections
    - [x] A list of all characters
    - [x] Character detail
      - [x] Change author's quote
      - [x] Back to the main list

[RFC 952](https://www.ietf.org/rfc/rfc952.txt)

## Environment Variables

### Only for development

| Variable                 | Concept            | Default     |
| ------------------------ | ------------------ | ----------- |
| **NODE_ENV**             | Set enviroment     | development |
| **REACT_APP_SKIP_LOGIN** | Not login required | off         |

## Run frontend project

### Install dependencies

Go to the project path and run:

```bash
$ yarn
```

### Run

```bash
$ yarn start
```

Then, access `http://localhost:3000` for the running app

## Development Dockerization

### Build frontend container

```bash
$ yarn dev:docker:build
```

### Run frontend

#### Install dependencies

```bash
$ yarn dev:docker:yarn
```

#### Run frontend project

```bash
$ yarn dev:docker:run
```

Then, access `http://localhost:3000` for the running app

## Generic conventions

The following conventions have been taken depending on the requirements of the test, those that are not detailed here is because they are not conditioned by them.

- React components have been implemented as functional components. Due to the few components and the simplicity in its content, it is a fast and effective way to implement them.

- Using states: In my opinion, the use of states here is not necessary. I have used useContext as a testimonial for the user who logs into the application (which is not implemented).

- I have done the data passing between components through the Props, using inheritance.
