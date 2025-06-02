// Master list of all players
const allPlayers = {
    "aspas": {
        id: 1,
        name: "Aspas",
        team: "MIBR",
        image: "playerImages/aspas.avif",
        stats: {
            rating: 1.19,
            kd: 1.35,
            kast: "74%",
            adr: 152.3
        },
        eliminated: false
    },
    "trent": {
        id: 2,
        name: "Trent",
        team: "G2",
        image: "playerImages/trent.png",
        stats: {
            rating: 1.24,
            kd: 1.29,
            kast: "79%",
            adr: 145.8
        },
        eliminated: false
    },
    "jemkin": {
        id: 3,
        name: "Jemkin",
        team: "RRQ",
        image: "playerImages/jemkin.png",
        stats: {
            rating: 1.22,
            kd: 1.30,
            kast: "73%",
            acs: 253.9
        },
        eliminated: false,
        placement: 12
    },
    "kaajak": {
        id: 4,
        name: "Kaajak",
        team: "FNC",
        image: "playerImages/kaajak.png",
        stats: {
            rating: 1.25,
            kd: 1.30,
            kast: "78%",
            adr: 205
        },
        eliminated: false
    },
    "leaf": {
        id: 5,
        name: "Leaf",
        team: "G2",
        image: "playerImages/leaf.png",
        stats: {
            rating: 1.22,
            kd: 1.28,
            kast: "77%",
            adr: 200
        },
        eliminated: false
    },
    "riens": {
        id: 6,
        name: "Riens",
        team: "TH",
        image: "playerImages/riens.png",
        stats: {
            rating: 1.20,
            kd: 1.25,
            kast: "76%",
            adr: 195
        },
        eliminated: false
    },
    "rarga": {
        id: 7,
        name: "Rarga",
        team: "XLG",
        image: "playerImages/rarga.png",
        stats: {
            rating: 1.18,
            kd: 1.22,
            kast: "75%",
            adr: 190
        },
        eliminated: false
    },
    "f0rsaken": {
        id: 8,
        name: "f0rsaken",
        team: "PRX",
        image: "playerImages/f0rsaken.png",
        stats: {
            rating: 1.15,
            kd: 1.20,
            kast: "74%",
            adr: 185
        },
        eliminated: false
    },
    "nats": {
        id: 9,
        name: "Nats",
        team: "TL",
        image: "playerImages/nats.png",
        stats: {
            rating: 1.12,
            kd: 1.18,
            kast: "73%",
            adr: 180
        },
        eliminated: false
    },
    "zekken": {
        id: 10,
        name: "Zekken",
        team: "SEN",
        image: "playerImages/zekken.png",
        stats: {
            rating: 1.15,
            kd: 1.23,
            kast: "73%",
            adr: 150.9,
        },
        eliminated: false
    },
    "bang": {
        id: 11,
        name: "Bang",
        team: "SEN",
        image: "playerImages/bang.png",
        stats: {
            rating: 1.08,
            kd: 1.12,
            kast: "71%",
            adr: 170
        },
        eliminated: false
    },
    "player12": {
        id: 12,
        name: "Player 12",
        team: "Team L",
        image: "playerImages/deafult.png",
        stats: {
            rating: 1.05,
            kd: 1.10,
            kast: "70%",
            adr: 165
        },
        eliminated: false
    },
    "player13": {
        id: 13,
        name: "Player 13",
        team: "Team M",
        image: "playerImages/deafult.png",
        stats: {
            rating: 1.02,
            kd: 1.08,
            kast: "69%",
            adr: 160
        },
        eliminated: false
    },
    "player14": {
        id: 14,
        name: "Player 14",
        team: "Team N",
        image: "playerImages/deafult.png",
        stats: {
            rating: 1.00,
            kd: 1.05,
            kast: "68%",
            adr: 155
        },
        eliminated: false
    },
    "player15": {
        id: 15,
        name: "Player 15",
        team: "Team O",
        image: "playerImages/deafult.png",
        stats: {
            rating: 0.98,
            kd: 1.02,
            kast: "67%",
            adr: 150
        },
        eliminated: false
    },
    "egg": {
        id: 16,
        name: "Egg",
        team: "BALD",
        image: "assets/egg.png",
        stats: {
            rating: 0.98,
            kd: 1.02,
            kast: "67%",
            adr: 150
        },
        eliminated: true,
        placement: 12,
    },
    "crashies" : {
        id: 17,
        name: "Crashies",
        team: "FNC",
        image: "playerImages/crashies.png",
        stats: {
            rating: 1.15,
            kd: 1.20,
            kast: "75%",
            adr: 180
        },
        eliminated: false,
        placement: 3,
    },
    // Add all other players here...
};

// Rankings by talent (just references to player IDs)
const playerRankings = {
    "plat-chat": [
        { playerId: "aspas", rank: 1 },
        { playerId: "trent", rank: 2 },
        { playerId: "jemkin", rank: 3 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 5 },
        { playerId: "riens", rank: 6 },
        { playerId: "rarga", rank: 7 },
        { playerId: "f0rsaken", rank: 8 },
        { playerId: "nats", rank: 9 },
        { playerId: "zekken", rank: 10 },
        { playerId: "bang", rank: 11 },
        { playerId: "player12", rank: 12 },
        { playerId: "player13", rank: 13 },
        { playerId: "player14", rank: 14 },
        { playerId: "player15", rank: 15 }

    ],
    "sideshow": [
        { playerId: "egg", rank: 1 },

    ],
    "bren": [
        { playerId: "aspas", rank: 2 },
        { playerId: "trent", rank: 1 },
        { playerId: "jemkin", rank: 3 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 5 },
        { playerId: "riens", rank: 6 },
        { playerId: "rarga", rank: 7 },
        { playerId: "f0rsaken", rank: 8 },
        { playerId: "nats", rank: 9 },
        { playerId: "zekken", rank: 10 },
        { playerId: "bang", rank: 11 },
        { playerId: "player12", rank: 12 },
        { playerId: "player13", rank: 13 },
        { playerId: "player14", rank: 14 },
        { playerId: "player15", rank: 15 }
    ],
    "mimi": [
        { playerId: "aspas", rank: 2 },
        { playerId: "trent", rank: 1 },
        { playerId: "jemkin", rank: 3 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 5 },
        { playerId: "riens", rank: 6 },
        { playerId: "rarga", rank: 7 },
        { playerId: "f0rsaken", rank: 8 },
        { playerId: "nats", rank: 9 },
        { playerId: "zekken", rank: 10 },
        { playerId: "bang", rank: 11 },
        { playerId: "player12", rank: 12 },
        { playerId: "player13", rank: 13 },
        { playerId: "player14", rank: 14 },
        { playerId: "player15", rank: 15 }
    ],
    "tmv": [
        { playerId: "aspas", rank: 2 },
        { playerId: "trent", rank: 1 },
        { playerId: "jemkin", rank: 3 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 5 },
        { playerId: "riens", rank: 6 },
        { playerId: "rarga", rank: 7 },
        { playerId: "f0rsaken", rank: 8 },
        { playerId: "nats", rank: 9 },
        { playerId: "zekken", rank: 10 },
        { playerId: "bang", rank: 11 },
        { playerId: "player12", rank: 12 },
        { playerId: "player13", rank: 13 },
        { playerId: "player14", rank: 14 },
        { playerId: "player15", rank: 15 }
    ],
    "chobra": [
        { playerId: "aspas", rank: 1 },
        { playerId: "trent", rank: 3 },
        { playerId: "jemkin", rank: 2 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 5 },
        { playerId: "f0rsaken", rank: 6 },
        { playerId: "riens", rank: 9 },
        { playerId: "crashies", rank: 8 },
        { playerId: "bang", rank: 10 },
        { playerId: "zekken", rank: 7 },
        { playerId: "rarga", rank: 11 },
        { playerId: "player12", rank: 12 },
        { playerId: "player13", rank: 13 },
        { playerId: "player14", rank: 14 },
        { playerId: "player15", rank: 15 }
    ]
    // Add other talent rankings...
};

// Current active talent
let currentTalent = "plat-chat";