// Player data - update this array to add/remove players or mark them as eliminated
// Player data organized by talent
const playerRankings = {
    "plat-chat": [
        {
            id: 1,
            name: "Aspas",
            team: "MIBR",
            rank: 1,
            image: "playerImages/aspas.avif",
            stats: {
                rating: 1.19,
                kd: 1.35,
                kast: "74%",
                adr: 152.3
            },
            eliminated: false,
        },
        {
            id: 2,
            name: "Trent",
            team: "G2",
            rank: 2,
            image: "playerImages/trent.png",
            stats: {
                rating: 1.24,
                kd: 1.29,
                kast: "79%",
                adr: 145.8
            },
            eliminated: false
        },
        {
            id: 3,
            name: "Jemkin",
            team: "RRQ",
            rank: 3,
            image: "playerImages/jemkin.png",
            stats: {
                rating: 1.22,
                kd: 1.30,
                kast: "73%",
                acs: 253.9,
            },
            eliminated: true, // Example of an eliminated player,
            placement: 12,
        },
        {
            id: 4,
            name: "Kaajak",
            team: "FNC",
            rank: 4,
            image: "playerImages/kaajak.png",
            stats: {
                rating: 1.25,
                kd: 1.30,
                kast: "78%",
                adr: 205
            },
            eliminated: false
        },
        {
            id: 5,
            name: "Leaf",
            team: "G2",
            rank: 5,
            image: "playerImages/leaf.png",
            stats: {
                rating: 1.22,
                kd: 1.28,
                kast: "77%",
                adr: 200
            },
            eliminated: false
        },
        {
            id: 6,
            name: "Riens",
            team: "TH",
            rank: 6,
            image: "playerImages/riens.png",
            stats: {
                rating: 1.20,
                kd: 1.25,
                kast: "76%",
                adr: 195
            },
            eliminated: false
        },
        {
            id: 7,
            name: "Rarga",
            team: "XLG",
            rank: 7,
            image: "playerImages/rarga.png",
            stats: {
                rating: 1.18,
                kd: 1.22,
                kast: "75%",
                adr: 190
            },
            eliminated: false
        },
        {
            id: 8,
            name: "f0rsaken",
            team: "Team H",
            rank: 8,
            image: "playerImages/f0rsaken.png",
            stats: {
                rating: 1.15,
                kd: 1.20,
                kast: "74%",
                adr: 185
            },
            eliminated: false
        },
        {
            id: 9,
            name: "Nats",
            team: "TL",
            rank: 9,
            image: "playerImages/nats.png",
            stats: {
                rating: 1.12,
                kd: 1.18,
                kast: "73%",
                adr: 180
            },
            eliminated: false
        },
        {
            id: 10,
            name: "Zekken",
            team: "SEN",
            rank: 10,
            image: "playerImages/zekken.png",
            stats: {
                rating: 1.15,
                kd: 1.23,
                kast: "73%",
                adr: 150.9,
            },
            eliminated: false
        },
        {
            id: 11,
            name: "Player 11",
            team: "Team K",
            rank: 11,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.08,
                kd: 1.12,
                kast: "71%",
                adr: 170
            },
            eliminated: false
        },
        {
            id: 12,
            name: "Player 12",
            team: "Team L",
            rank: 12,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.05,
                kd: 1.10,
                kast: "70%",
                adr: 165
            },
            eliminated: false
        },
        {
            id: 13,
            name: "Player 13",
            team: "Team M",
            rank: 13,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.02,
                kd: 1.08,
                kast: "69%",
                adr: 160
            },
            eliminated: false
        },
        {
            id: 14,
            name: "Player 14",
            team: "Team N",
            rank: 14,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.00,
                kd: 1.05,
                kast: "68%",
                adr: 155
            },
            eliminated: false
        },
        {
            id: 15,
            name: "Player 15",
            team: "Team O",
            rank: 15,
            image: "playerImages/deafult.png",
            stats: {
                rating: 0.98,
                kd: 1.02,
                kast: "67%",
                adr: 150
            },
            eliminated: false
        }
    ],
    "sideshow": [
        {
            id: 1,
            name: "EGG",
            team: "BALD",
            rank: 1,
            image: "assets/egg.png",
            stats: {
                rating: 1.32,
                kd: 1.38,
                kast: "81%",
                adr: 220
            },
            eliminated: false
        },
        // ... all 15 players for Sideshow
    ],
    "bren": [
        {
            id: 1,
            name: "Aspas",
            team: "MIBR",
            rank: 2,
            image: "playerImages/aspas.avif",
            stats: {
                rating: 1.19,
                kd: 1.35,
                kast: "74%",
                adr: 152.3
            },
            eliminated: false
        },
        {
            id: 2,
            name: "Trent",
            team: "G2",
            rank: 1,
            image: "playerImages/trent.png",
            stats: {
                rating: 1.24,
                kd: 1.29,
                kast: "79%",
                adr: 145.8
            },
            eliminated: false
        },
        {
            id: 3,
            name: "Jemkin",
            team: "RRQ",
            rank: 3,
            image: "playerImages/jemkin.png",
            stats: {
                rating: 1.22,
                kd: 1.30,
                kast: "73%",
                acs: 253.9,
            },
            eliminated: true,
            placement: 12,
        },
        {
            id: 4,
            name: "Kaajak",
            team: "FNC",
            rank: 4,
            image: "playerImages/kaajak.png",
            stats: {
                rating: 1.25,
                kd: 1.30,
                kast: "78%",
                adr: 205
            },
            eliminated: false
        },
        {
            id: 5,
            name: "Leaf",
            team: "G2",
            rank: 5,
            image: "playerImages/leaf.png",
            stats: {
                rating: 1.22,
                kd: 1.28,
                kast: "77%",
                adr: 200
            },
            eliminated: false
        },
        {
            id: 6,
            name: "Riens",
            team: "TH",
            rank: 6,
            image: "playerImages/riens.png",
            stats: {
                rating: 1.20,
                kd: 1.25,
                kast: "76%",
                adr: 195
            },
            eliminated: false
        },
        {
            id: 7,
            name: "Rarga",
            team: "XLG",
            rank: 7,
            image: "playerImages/rarga.png",
            stats: {
                rating: 1.18,
                kd: 1.22,
                kast: "75%",
                adr: 190
            },
            eliminated: false
        },
        {
            id: 8,
            name: "f0rsaken",
            team: "Team H",
            rank: 8,
            image: "playerImages/f0rsaken.png",
            stats: {
                rating: 1.15,
                kd: 1.20,
                kast: "74%",
                adr: 185
            },
            eliminated: false
        },
        {
            id: 9,
            name: "Nats",
            team: "TL",
            rank: 9,
            image: "playerImages/nats.png",
            stats: {
                rating: 1.12,
                kd: 1.18,
                kast: "73%",
                adr: 180
            },
            eliminated: false
        },
        {
            id: 10,
            name: "Zekken",
            team: "SEN",
            rank: 10,
            image: "playerImages/zekken.png",
            stats: {
                rating: 1.15,
                kd: 1.23,
                kast: "73%",
                adr: 150.9,
            },
            eliminated: false
        },
        {
            id: 11,
            name: "Player 11",
            team: "Team K",
            rank: 11,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.08,
                kd: 1.12,
                kast: "71%",
                adr: 170
            },
            eliminated: false
        },
        {
            id: 12,
            name: "Player 12",
            team: "Team L",
            rank: 12,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.05,
                kd: 1.10,
                kast: "70%",
                adr: 165
            },
            eliminated: false
        },
        {
            id: 13,
            name: "Player 13",
            team: "Team M",
            rank: 13,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.02,
                kd: 1.08,
                kast: "69%",
                adr: 160
            },
            eliminated: false
        },
        {
            id: 14,
            name: "Player 14",
            team: "Team N",
            rank: 14,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.00,
                kd: 1.05,
                kast: "68%",
                adr: 155
            },
            eliminated: false
        },
        {
            id: 15,
            name: "Player 15",
            team: "Team O",
            rank: 15,
            image: "playerImages/deafult.png",
            stats: {
                rating: 0.98,
                kd: 1.02,
                kast: "67%",
                adr: 150
            },
            eliminated: false
        }
    ],
    "mimi": [
        {
            id: 1,
            name: "Aspas",
            team: "MIBR",
            rank: 1,
            image: "playerImages/aspas.avif",
            stats: {
                rating: 1.19,
                kd: 1.35,
                kast: "74%",
                adr: 152.3
            },
            eliminated: false
        },
        {
            id: 2,
            name: "Trent",
            team: "G2",
            rank: 2,
            image: "playerImages/trent.png",
            stats: {
                rating: 1.24,
                kd: 1.29,
                kast: "79%",
                adr: 145.8
            },
            eliminated: false
        },
        {
            id: 3,
            name: "Jemkin",
            team: "RRQ",
            rank: 3,
            image: "playerImages/jemkin.png",
            stats: {
                rating: 1.22,
                kd: 1.30,
                kast: "73%",
                acs: 253.9,
            },
            eliminated: true,
            placement: 12,
        },
        {
            id: 4,
            name: "Kaajak",
            team: "FNC",
            rank: 4,
            image: "playerImages/kaajak.png",
            stats: {
                rating: 1.25,
                kd: 1.30,
                kast: "78%",
                adr: 205
            },
            eliminated: false
        },
        {
            id: 5,
            name: "Leaf",
            team: "G2",
            rank: 5,
            image: "playerImages/leaf.png",
            stats: {
                rating: 1.22,
                kd: 1.28,
                kast: "77%",
                adr: 200
            },
            eliminated: false
        },
        {
            id: 6,
            name: "Riens",
            team: "TH",
            rank: 6,
            image: "playerImages/riens.png",
            stats: {
                rating: 1.20,
                kd: 1.25,
                kast: "76%",
                adr: 195
            },
            eliminated: false
        },
        {
            id: 7,
            name: "Rarga",
            team: "XLG",
            rank: 7,
            image: "playerImages/rarga.png",
            stats: {
                rating: 1.18,
                kd: 1.22,
                kast: "75%",
                adr: 190
            },
            eliminated: false
        },
        {
            id: 8,
            name: "f0rsaken",
            team: "Team H",
            rank: 8,
            image: "playerImages/f0rsaken.png",
            stats: {
                rating: 1.15,
                kd: 1.20,
                kast: "74%",
                adr: 185
            },
            eliminated: false
        },
        {
            id: 9,
            name: "Nats",
            team: "TL",
            rank: 9,
            image: "playerImages/nats.png",
            stats: {
                rating: 1.12,
                kd: 1.18,
                kast: "73%",
                adr: 180
            },
            eliminated: false
        },
        {
            id: 10,
            name: "Zekken",
            team: "SEN",
            rank: 10,
            image: "playerImages/zekken.png",
            stats: {
                rating: 1.15,
                kd: 1.23,
                kast: "73%",
                adr: 150.9,
            },
            eliminated: false
        },
        {
            id: 11,
            name: "Player 11",
            team: "Team K",
            rank: 11,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.08,
                kd: 1.12,
                kast: "71%",
                adr: 170
            },
            eliminated: false
        },
        {
            id: 12,
            name: "Player 12",
            team: "Team L",
            rank: 12,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.05,
                kd: 1.10,
                kast: "70%",
                adr: 165
            },
            eliminated: false
        },
        {
            id: 13,
            name: "Player 13",
            team: "Team M",
            rank: 13,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.02,
                kd: 1.08,
                kast: "69%",
                adr: 160
            },
            eliminated: false
        },
        {
            id: 14,
            name: "Player 14",
            team: "Team N",
            rank: 14,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.00,
                kd: 1.05,
                kast: "68%",
                adr: 155
            },
            eliminated: false
        },
        {
            id: 15,
            name: "Player 15",
            team: "Team O",
            rank: 15,
            image: "playerImages/deafult.png",
            stats: {
                rating: 0.98,
                kd: 1.02,
                kast: "67%",
                adr: 150
            },
            eliminated: false
        }
    ],
    "tmv": [
        {
            id: 3,
            name: "Aspas",
            team: "MIBR",
            rank: 3,
            image: "playerImages/aspas.avif",
            stats: {
                rating: 1.19,
                kd: 1.35,
                kast: "74%",
                adr: 152.3
            },
            eliminated: false
        },
        {
            id: 2,
            name: "Trent",
            team: "G2",
            rank: 1,
            image: "playerImages/trent.png",
            stats: {
                rating: 1.24,
                kd: 1.29,
                kast: "79%",
                adr: 145.8
            },
            eliminated: false
        },
        {
            id: 1,
            name: "Jemkin",
            team: "RRQ",
            rank: 2,
            image: "playerImages/jemkin.png",
            stats: {
                rating: 1.22,
                kd: 1.30,
                kast: "73%",
                acs: 253.9,
            },
            eliminated: true,
            placement: 12,
        },
        {
            id: 4,
            name: "Kaajak",
            team: "FNC",
            rank: 4,
            image: "playerImages/kaajak.png",
            stats: {
                rating: 1.25,
                kd: 1.30,
                kast: "78%",
                adr: 205
            },
            eliminated: false
        },
        {
            id: 5,
            name: "Leaf",
            team: "G2",
            rank: 5,
            image: "playerImages/leaf.png",
            stats: {
                rating: 1.22,
                kd: 1.28,
                kast: "77%",
                adr: 200
            },
            eliminated: false
        },
        {
            id: 6,
            name: "Riens",
            team: "TH",
            rank: 6,
            image: "playerImages/riens.png",
            stats: {
                rating: 1.20,
                kd: 1.25,
                kast: "76%",
                adr: 195
            },
            eliminated: false
        },
        {
            id: 7,
            name: "Rarga",
            team: "XLG",
            rank: 7,
            image: "playerImages/rarga.png",
            stats: {
                rating: 1.18,
                kd: 1.22,
                kast: "75%",
                adr: 190
            },
            eliminated: false
        },
        {
            id: 8,
            name: "f0rsaken",
            team: "Team H",
            rank: 8,
            image: "playerImages/f0rsaken.png",
            stats: {
                rating: 1.15,
                kd: 1.20,
                kast: "74%",
                adr: 185
            },
            eliminated: false
        },
        {
            id: 9,
            name: "Nats",
            team: "TL",
            rank: 9,
            image: "playerImages/nats.png",
            stats: {
                rating: 1.12,
                kd: 1.18,
                kast: "73%",
                adr: 180
            },
            eliminated: false
        },
        {
            id: 10,
            name: "Zekken",
            team: "SEN",
            rank: 10,
            image: "playerImages/zekken.png",
            stats: {
                rating: 1.15,
                kd: 1.23,
                kast: "73%",
                adr: 150.9,
            },
            eliminated: false
        },
        {
            id: 11,
            name: "Player 11",
            team: "Team K",
            rank: 11,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.08,
                kd: 1.12,
                kast: "71%",
                adr: 170
            },
            eliminated: false
        },
        {
            id: 12,
            name: "Player 12",
            team: "Team L",
            rank: 12,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.05,
                kd: 1.10,
                kast: "70%",
                adr: 165
            },
            eliminated: false
        },
        {
            id: 13,
            name: "Player 13",
            team: "Team M",
            rank: 13,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.02,
                kd: 1.08,
                kast: "69%",
                adr: 160
            },
            eliminated: false
        },
        {
            id: 14,
            name: "Player 14",
            team: "Team N",
            rank: 14,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.00,
                kd: 1.05,
                kast: "68%",
                adr: 155
            },
            eliminated: false
        },
        {
            id: 15,
            name: "Player 15",
            team: "Team O",
            rank: 15,
            image: "playerImages/deafult.png",
            stats: {
                rating: 0.98,
                kd: 1.02,
                kast: "67%",
                adr: 150
            },
            eliminated: false
        }
    ],
    "chobra": [
        {
            id: 1,
            name: "Aspas",
            team: "MIBR",
            rank: 1,
            image: "playerImages/aspas.avif",
            stats: {
                rating: 1.19,
                kd: 1.35,
                kast: "74%",
                adr: 152.3
            },
            eliminated: false
        },
        {
            id: 2,
            name: "Jemkin",
            team: "RRQ",
            rank: 2,
            image: "playerImages/jemkin.png",
            stats: {
                rating: 1.22,
                kd: 1.30,
                kast: "73%",
                adr: 220,
            },
            eliminated: false,
            placement: 12,
        },
        {
            id: 3,
            name: "Trent",
            team: "G2",
            rank: 3,
            image: "playerImages/trent.png",
            stats: {
                rating: 1.24,
                kd: 1.29,
                kast: "79%",
                adr: 145.8
            },
            eliminated: false,

        },
        {
            id: 4,
            name: "Kaajak",
            team: "FNC",
            rank: 4,
            image: "playerImages/kaajak.png",
            stats: {
                rating: 1.25,
                kd: 1.30,
                kast: "78%",
                adr: 205
            },
            eliminated: false
        },
        {
            id: 5,
            name: "Leaf",
            team: "G2",
            rank: 5,
            image: "playerImages/leaf.png",
            stats: {
                rating: 1.22,
                kd: 1.28,
                kast: "77%",
                adr: 200
            },
            eliminated: false
        },
        {
            id: 6,
            name: "f0rsaken",
            team: "PRX",
            rank: 6,
            image: "playerImages/f0rsaken.png",
            stats: {
                rating: 1.20,
                kd: 1.25,
                kast: "76%",
                adr: 195
            },
            eliminated: false
        },
        {
            id: 7,
            name: "Zekken",
            team: "SEN",
            rank: 7,
            image: "playerImages/zekken.png",
            stats: {
                rating: 1.15,
                kd: 1.23,
                kast: "73%",
                adr: 150.9,
            },
            eliminated: false
        },
        {
            id: 8,
            name: "crshies",
            team: "FNC",
            rank: 8,
            image: "playerImages/crashies.png",
            stats: {
                rating: 1.15,
                kd: 1.20,
                kast: "74%",
                adr: 185
            },
            eliminated: false
        },
        {
            id: 9,
            name: "Riens",
            team: "TH",
            rank: 9,
            image: "playerImages/riens.png",
            stats: {
                rating: 1.12,
                kd: 1.18,
                kast: "73%",
                adr: 180
            },
            eliminated: false
        },
        {
            id: 10,
            name: "Bang",
            team: "SEN",
            rank: 10,
            image: "playerImages/bang.png",
            stats: {
                rating: 1.13,
                kd: 1.18,
                kast: "76%",
                adr: 131.9,
            },
            eliminated: false
        },
        {
            id: 11,
            name: "Player 11",
            team: "Team K",
            rank: 11,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.08,
                kd: 1.12,
                kast: "71%",
                adr: 170
            },
            eliminated: false
        },
        {
            id: 12,
            name: "Player 12",
            team: "Team L",
            rank: 12,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.05,
                kd: 1.10,
                kast: "70%",
                adr: 165
            },
            eliminated: false
        },
        {
            id: 13,
            name: "Player 13",
            team: "Team M",
            rank: 13,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.02,
                kd: 1.08,
                kast: "69%",
                adr: 160
            },
            eliminated: false
        },
        {
            id: 14,
            name: "Player 14",
            team: "Team N",
            rank: 14,
            image: "playerImages/deafult.png",
            stats: {
                rating: 1.00,
                kd: 1.05,
                kast: "68%",
                adr: 155
            },
            eliminated: false
        },
        {
            id: 15,
            name: "Player 15",
            team: "Team O",
            rank: 15,
            image: "playerImages/deafult.png",
            stats: {
                rating: 0.98,
                kd: 1.02,
                kast: "67%",
                adr: 150
            },
            eliminated: false
        }
    ]
};

// Current active talent
let currentTalent = "plat-chat";