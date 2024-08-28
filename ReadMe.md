## Snake Game Validator API

### Installation 
`npm install`. NodeJS version 18.18.0 used

### Run application
`npm run dev`


### [POST] /validate payload example
`
    {
    "GameId": "22",
    "Width": 100,
    "Height": 400,
    "Score": 0,
    "Fruit": {
        "x": 11,
        "y": 23
    },
    "Snake": {
        "x": 11,
        "y": 22,
        "velX": 0,
        "velY": 0
    },
    "ticks": [
        {
            "velX": 0,
            "velY": 1
        }
    ]
    }
`

### Running tests
`npm run test`