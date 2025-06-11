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
        eliminated: true,
        placement: 11,
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
            adr: 161.3,
        },
        eliminated: false,
        placement: 8,
    },
    "kaajak": {
        id: 4,
        name: "Kaajak",
        team: "FNC",
        image: "playerImages/kaajak.png",
        stats: {
            rating: 1.24,
            kd: 1.38,
            kast: "76%",
            adr: 160.6
        },
        eliminated: false
    },
    "leaf": {
        id: 5,
        name: "Leaf",
        team: "G2",
        image: "playerImages/leaf.png",
        stats: {
            rating: 1.14,
            kd: 1.19,
            kast: "74%",
            adr: 153.6,
        },
        eliminated: false
    },
    "riens": {
        id: 6,
        name: "Riens",
        team: "TH",
        image: "playerImages/riens.png",
        stats: {
            rating: 1.09,
            kd: 1.13,
            kast: "78%",
            adr: 139.5
        },
        eliminated: true,
        placement: 12,
    },
    "rarga": {
        id: 7,
        name: "Rarga",
        team: "XLG",
        image: "playerImages/rarga.png",
        stats: {
            rating: 1.25,
            kd: 1.29,
            kast: "73%",
            adr: 168.8,
        },
        eliminated: false
    },
    "f0rsaken": {
        id: 8,
        name: "f0rsaken",
        team: "PRX",
        image: "playerImages/f0rsaken.png",
        stats: {
            rating: 1.11,
            kd: 1.18,
            kast: "73%",
            adr: 142.9
        },
        eliminated: false,
    },
    "nats": {
        id: 9,
        name: "Nats",
        team: "TL",
        image: "playerImages/nats.png",
        stats: {
            rating: 1.08,
            kd: 1.15,
            kast: "70%",
            adr: 141.8,
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
            rating: 1.13,
            kd: 1.18,
            kast: "76%",
            adr: 131.9,
        },
        eliminated: false
    },
    "keiko": {
        id: 12,
        name: "Keiko",
        team: "TL",
        image: "playerImages/keiko.png",
        stats: {
            rating: 1.09,
            kd: 1.10,
            kast: "72%",
            adr: 141.6,
        },
        eliminated: false
    },
    "t3xture": {
        id: 13,
        name: "t3xture",
        team: "GENG",
        image: "playerImages/t3xture.png",
        stats: {
            rating: 1.11,
            kd: 1.21,
            kast: "70%",
            adr: 154.8,
        },
        eliminated: false
    },
    "Jinggg": {
        id: 14,
        name: "Jinggg",
        team: "PRX",
        image: "playerImages/Jinggg.png",
        stats: {
            rating: 1.14,
            kd: 1.18,
            kast: "76%",
            adr: 145.4,
        },
        eliminated: false
    },
    "verno": {
        id: 15,
        name: "Verno",
        team: "MIBR",
        image: "playerImages/verno.png",
        stats: {
            rating: 1.18,
            kd: 1.26,
            kast: "77%",
            adr: 136.7,
        },
        eliminated: true,
        placement: 11,
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
    "bren": {
        id: 16,
        name: "Bren",
        team: "PlatChat",
        image: "assets/bren.jpg",
        stats: {
            rating: 0.98,
            kd: 1.02,
            kast: "67%",
            adr: 150
        },
        eliminated: true,
        placement: 11,
    },
    "mimi": {
        id: 16,
        name: "Mimi",
        team: "PlatChat",
        image: "assets/aevilcat.webp",
        stats: {
            rating: 0.98,
            kd: 1.02,
            kast: "67%",
            adr: 150
        },
        eliminated: true,
        placement: 10,
    },
    "crashies": {
        id: 17,
        name: "Crashies",
        team: "FNC",
        image: "playerImages/crashies.png",
        stats: {
            rating: 1.09,
            kd: 1.14,
            kast: "76%",
            adr: 128.8,
        },
        eliminated: false,
        placement: 3,
    },
    "karon": {
        id: 18,
        name: "Karon",
        team: "GENG",
        image: "playerImages/karon.png",
        stats: {
            rating: 1.08,
            kd: 1.10,
            kast: "75%",
            adr: 134.3,
        },
        eliminated: false,
        placement: 5,
    },
    "whzy": {
        id: 19,
        name: "Whzy",
        team: "BLG",
        image: "playerImages/whzy.png",
        stats: {
            rating: 1.21,
            kd: 1.28,
            kast: "73%",
            adr: 166.9,
        },
        eliminated: false,
        placement: 6,
    },
    "miniboo": {
        id: 19,
        name: "Miniboo",
        team: "TH",
        image: "playerImages/miniboo.png",
        stats: {
            rating: 1.10,
            kd: 1.22,
            kast: "72%",
            adr: 151.3,
        },
        eliminated: true,
        placement: 12,
    },
    "alfajer": {
        id: 20,
        name: "Alfajer",
        team: "FNC",
        image: "playerImages/alfajer.png",
        stats: {
            rating: 0.99,
            kd: 1.08,
            kast: "70%",
            adr: 142.7,
        },
        eliminated: false,
        placement: 4,
    },
    "chronicle": {
        id: 21,
        name: "Chronicle",
        team: "FNC",
        image: "playerImages/chronicle.png",
        stats: {
            rating: 1.06,
            kd: 1.10,
            kast: "76%",
            adr: 131.1,
        },
        eliminated: false,
        placement: 7,
    },
    // Add all other players here...
};

// Rankings by talent (just references to player IDs)
const playerRankings = {
    "plat-chat": [
        { playerId: "aspas", rank: 3 },
        { playerId: "trent", rank: 5 },
        { playerId: "jemkin", rank: 1 },
        { playerId: "kaajak", rank: 2 },
        { playerId: "leaf", rank: 4 },
        { playerId: "riens", rank: 9 },
        { playerId: "rarga", rank: 8 },
        { playerId: "f0rsaken", rank: 7 },
        { playerId: "t3xture", rank: 10 },
        { playerId: "zekken", rank: 6 },
        { playerId: "bang", rank: 11 },
        { playerId: "Jinggg", rank: 12 },
        { playerId: "miniboo", rank: 13 },
        { playerId: "nats", rank: 14 },
        { playerId: "karon", rank: 15 }

    ],
    "sideshow": [
        { playerId: "egg", rank: 1 },

    ],
    "bren": [
        { playerId: "jemkin", rank: 1 },
        { playerId: "aspas", rank: 2 },
        { playerId: "leaf", rank: 3 },
        { playerId: "bang", rank: 4 },
        { playerId: "riens", rank: 5 },
        { playerId: "miniboo", rank: 6 },
        { playerId: "trent", rank: 7 },
        { playerId: "kaajak", rank: 8 },
        { playerId: "t3xture", rank: 9 },
        { playerId: "zekken", rank: 10 },
        { playerId: "bang", rank: 11 },
        { playerId: "crashies", rank: 12 },
        { playerId: "verno", rank: 15 },
        { playerId: "jinggg", rank: 13 },
        { playerId: "nats", rank: 14 },


    ],
    "mimi": [
        { playerId: "mimi", rank: 1 },
    ],
    "tmv": [
        { playerId: "aspas", rank: 3 },
        { playerId: "trent", rank: 1 },
        { playerId: "jemkin", rank: 2 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 5 },
        { playerId: "riens", rank: 6 },
        { playerId: "rarga", rank: 7 },
        { playerId: "f0rsaken", rank: 8 },
        { playerId: "nats", rank: 9 },
        { playerId: "zekken", rank: 10 },
        { playerId: "karon", rank: 11 },
        { playerId: "whzy", rank: 12 },
        { playerId: "t3xture", rank: 13 },
        { playerId: "verno", rank: 14 },
        { playerId: "keiko", rank: 15 }
    ],
    "sliggy": [
        { playerId: "aspas", rank: 1 },
        { playerId: "trent", rank: 5 },
        { playerId: "jemkin", rank: 2 },
        { playerId: "kaajak", rank: 4 },
        { playerId: "leaf", rank: 6 },
        { playerId: "riens", rank: 8 },
        { playerId: "rarga", rank: 14 },
        { playerId: "f0rsaken", rank: 7 },
        { playerId: "bang", rank: 13 },
        { playerId: "zekken", rank: 3 },
        { playerId: "karon", rank: 9 },
        { playerId: "Jinggg", rank: 12 },
        { playerId: "t3xture", rank: 15 },
        { playerId: "chronicle", rank: 10 },
        { playerId: "alfajer", rank: 11 }
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

    ]
    // Add other talent rankings...
};

// Current active talent
let currentTalent = "plat-chat";