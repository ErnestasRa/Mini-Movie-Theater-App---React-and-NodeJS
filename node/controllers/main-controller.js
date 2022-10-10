const reservations = []

module.exports = { 
    spiderman: (req, res) => {
        const spiderman = {
            "title": "Spider-man",
            "reservations": 32
        }
        console.log(spiderman)
        res.send({spiderman})
    },
    ironman: (req, res) => {
        const ironman = {
            "title": "Iron-man",
            "reservations": 64
        }
        console.log(ironman)
        res.send({ironman})
    },
    blackpanther: (req, res) => {
        const blackpanther = {
            "title": "Black Panther",
            "reservations": 85
        }
        res.send({blackpanther})
    },
    movies:(req,res) => {
        const movies = [
             {
                'title': 'Black Panther',
                'reservations': 85,
                'image': 'https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png',
                'href': 'http://localhost:3000/blackpanther',
                'description': 'Black Panther RIP'
            },
             {
                'title': 'Spider-Man',
                'reservations': 62,
                'image': 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png',
                'href': 'http://localhost:3000/spiderman',
                'description': '*Spoiler* Uncle Ben dies'
            },
             {
                'title': 'Iron Man',
                'reservations': 92,
                'image': 'https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675',
                'href': 'http://localhost:3000/ironman',
                'description': 'Elon Musk Undercover'
            },

        ]
        res.send({movies})
    },
    reservations:(req, res) => {
            console.log(req.body)
            reservations.push(req.body)
            res.send({reservations})
    },
}