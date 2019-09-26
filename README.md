# DREAMBROKER-TheProgrammingAssignment

> An endpoint to analyze text

[Demo](https://documenter.getpostman.com/view/1649848/SVn2Pvoq?version=latest)

Endpoint: https://db-text-analyzing.herokuapp.com

## Features

- Clean code
- Unit testing
- CI

## Language

- JavaScript

## Frameworks & Tools

- Node.js
- Express.js
- Mocha
- Chai
- Travis CI
- Heroku

## Installation

`npm install`

`npm run dev`

## Specification

### /analyze endpoint

This endpoint is an example of text analyzing

```http
POST http://localhost:5000/analyze

Content-type: application/json;

{
  "text": " hi "
}

Response:

{
  "textLength": {
    "withSpaces": 4,
    "withoutSpaces": 2
  },
  "wordCount": 1,
  "characterCount": [
    {
      "h": 1
    },
    {
      "i": 1
    },
  ]
}
```

## Author

- Ngoc Doan (ngocdh236@gmail.com)
