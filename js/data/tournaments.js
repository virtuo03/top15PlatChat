import playersToronto from './playersToronto.js';
import playersChampions2024 from './playersChampions2024.js';
import playersBangkok from './playersBangkok.js';

const tournaments = {
    "master-toronto": {
        name: "Masters Toronto",
        year: 2025,
        location: "Toronto, Canada",
        players: playersToronto, // Imported from playersToronto.js
        rankings: {
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
        }
    },
    "champions-2024": {
        name: "VALORANT Champions",
        year: 2024,
        location: "Seoul, Korea",
        players: playersChampions2024, // Imported from playersChampions2023.js
        rankings: {
            "plat-chat": [
                { playerId: "aspas", rank: 1 },
                { playerId: "t3xture", rank: 2 },
                { playerId: "karon", rank: 3 },
                { playerId: "alfajer", rank: 4 },
                { playerId: "zekken", rank: 5 },
                { playerId: "chronicle", rank: 6 },
                { playerId: "wo0t", rank: 7 },
                { playerId: "sayf", rank: 8 },
                { playerId: "mazino", rank: 9 },
                { playerId: "f0rsaken", rank: 10 },
            ],
        }
    },
    "master-bangkok": {
        name: "Masters Bangkok ",
        year: 2025,
        location: "Bangkok, Thailand",
        players: playersBangkok, // Imported from playersChampions2023.js
        rankings: {
            "plat-chat": [
                { playerId: "derke", rank: 1 },
                { playerId: "zmjjkk", rank: 2 },
                { playerId: "leaf", rank: 3 },
                { playerId: "free1ng", rank: 4 },
                { playerId: "trent", rank: 5 },
                { playerId: "zekken", rank: 6 },
                { playerId: "keiko", rank: 7 },
                { playerId: "jawgemo", rank: 8 },
                { playerId: "sayf", rank: 9 },
                { playerId: "hyunmin", rank: 10 },
            ],
        }
    }
    // Add more tournaments as needed
};

export default tournaments;