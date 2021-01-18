module.exports = {
    doctors: [
        {
            _id: "d1",
            name: "William Hartnell",
            seasons: [1, 2, 3, 4]
        },
        {
            _id: "d2",
            name: "Patrick Troughton",
            seasons: [4, 5, 6]
        },
        {
            _id: "d3",
            name: "Jon Pertwee",
            seasons: [7, 8, 9, 10, 11]
        },
        {
            _id: "d4",
            name: "Tom Baker",
            seasons: [12, 13, 14, 15, 16, 17, 18]
        },
        {
            _id: "d5",
            name: "Peter Davison",
            seasons: [19, 20, 21]
        },
        {
            _id: "d6",
            name: "Colin Baker",
            seasons: [22, 23]
        },
        {
            _id: "d7",
            name: "Sylvester McCoy",
            seasons: [24, 25, 26]
        },
        {
            _id: "d8",
            name: "Paul McGann",
            seasons: []
        },
        {
            _id: "d9",
            name: "Christopher Eccelson",
            seasons: [27]
        },
        {
            _id: "d10",
            name: "David Tennant",
            seasons: [28, 29, 30]
        },
        {
            _id: "d11",
            name: "Matt Smith",
            seasons: [31, 32, 33]
        },
        {
            _id: "d12",
            name: "Peter Capaldi",
            seasons: [34, 35, 36]
        },
        {
            _id: "d13",
            name: "Jodie Whittaker",
            seasons: [37, 38, 39]
        }
    ],
    companions: [
        {
            _id: "c1_1",
            name: "Carole Ann Ford",
            character: "Susan Foreman",
            doctors: ["d1"],
            seasons: [1, 2],
            alive: true
        },
        {
            _id: "c1_2",
            name: "Jacqueline Hill",
            character: "Barbara Wright",
            doctors: ["d1"],
            seasons: [1, 2],
            alive: true
        },
        {
            _id: "c1_3",
            name: "William Russell",
            character: "Ian Chesterton",
            doctors: ["d1"],
            seasons: [1, 2],
            alive: true
        },
        {
            _id: "c2_1",
            name: "Anneke Wills",
            character: "Polly",
            doctors: ["d2"],
            seasons: [4],
            alive: true
        },
        {
            _id: "c2_2",
            name: "Michael Craze",
            character: "Ben Jackson",
            doctors: ["d2"],
            seasons: [4],
            alive: true
        },
        {
            _id: "c2_3",
            name: "Frazer Hines",
            character: "Jamie McCrimmon",
            doctors: ["d2"],
            seasons: [4, 5, 6, 22],
            alive: true
        },
        {
            _id: "c3_1",
            name: "Caroline John",
            character: "Liz Shaw",
            doctors: ["d3"],
            seasons: [7],
            alive: true
        },
        {
            _id: "c3_2",
            name: "Katy Manning",
            character: "Jo Grant",
            doctors: ["d3"],
            seasons: [8, 9, 10],
            alive: true
        },
        {
            _id: "c3_3__4_1",
            name: "Elisabeth Sladen",
            character: "Sarah Jane Smith",
            doctors: ["d3", "d4"],
            seasons: [11, 12, 13, 14],
            alive: true
        },
        {
            _id: "c4_2",
            name: "Ian Merter",
            character: "Harry Sullivan",
            doctors: ["d4"],
            seasons: [12, 13],
            alive: true
        },
        {
            _id: "c4_3",
            name: "Louise Jameson",
            character: "Leela",
            doctors: ["d4"],
            seasons: [14, 15],
            alive: true
        },
        {
            _id: "c4_4",
            name: "John Leeson",
            character: "K-9",
            doctors: ["d4"],
            seasons: [15, 16, 17, 18],
            alive: false
        },
        {
            _id: "c4_5__5_1",
            name: "Matthew Waterhouse",
            character: "Adric",
            doctors: ["d4", "d5"],
            seasons: [18, 19],
            alive: false
        },
        {
            _id: "c4_6__5_2",
            name: "Sarah Sutton",
            character: "Nyssa",
            doctors: ["d4", "d5"],
            seasons: [18, 19, 20],
            alive: true
        },
        {
            _id: "c4_7__5_3",
            name: "Janet Fielding",
            character: "Tegan Jovanka",
            doctors: ["d4", "d5"],
            seasons: [18, 19, 20, 21],
            alive: true
        },
        {
            _id: "c5_4",
            name: "Mark Strickson",
            character: "Vislor Turlough",
            doctors: ["d5"],
            seasons: [20, 21],
            alive: true
        },
        {
            _id: "c5_5__6_1",
            name: "Nicola Bryant",
            character: "Peri Brown",
            doctors: ["d5", "d6"],
            seasons: [21, 22, 23],
            alive: true
        },
        {
            _id: "c6_2__7_1",
            name: "Bonnie Langford",
            character: "Mel Bush",
            doctors: ["d6", "d7"],
            seasons: [23, 24],
            alive: true
        },
        {
            _id: "c7_2",
            name: "Sophie Aldred",
            character: "Ace",
            doctors: ["d7"],
            seasons: [24, 25, 26],
            alive: true
        },
        {
            _id: "c8_1",
            name: "Daphne Ashbrook",
            character: "Grace Holloway",
            doctors: ["d8"],
            seasons: [],
            alive: true
        },
        {
            _id: "c9_1__10_1",
            name: "Billie Piper",
            character: "Rose Tyler",
            doctors: ["d9", "d10"],
            seasons: [27, 28, 30],
            alive: true
        },
        {
            _id: "c9_2",
            name: "Bruno Langley",
            character: "Adam Mitchell",
            doctors: ["d9"],
            seasons: [27],
            alive: true
        },
        {
            _id: "c9_3__10_5__13_4",
            name: "John Barrowman",
            character: "Captain Jack Harkness",
            doctors: ["d9", "d10", "d13"],
            seasons: [27, 29, 30, 38],
            alive: true
        },
        {
            _id: "c10_2",
            name: "Noel Clarke",
            character: "Mickey Smith",
            doctors: ["d10"],
            seasons: [28, 30],
            alive: true
        },
        {
            _id: "c10_3",
            name: "Catherine Tate",
            character: "Donna Noble",
            doctors: ["d10"],
            seasons: [30],
            alive: true
        },
        {
            _id: "c10_4",
            name: "Freema Agyeman",
            character: "Martha Jones",
            doctors: ["d10"],
            seasons: [29, 30],
            alive: true
        },
        {
            _id: "c11_1",
            name: "Karen Gillan",
            character: "Amy Pond",
            doctors: ["d11"],
            seasons: [31, 32, 33],
            alive: false
        },
        {
            _id: "c11_2",
            name: "Arthur Davill",
            character: "Rory Williams",
            doctors: ["d11"],
            seasons: [31, 32, 33],
            alive: false
        },
        {
            _id: "c11_3__12_1",
            name: "Alex Kingston",
            character: "River Song",
            doctors: ["d11", "d12"],
            seasons: [32, 35],
            alive: true
        },
        {
            _id: "c11_4__12_2",
            name: "Jenna Coleman",
            character: "Clara Oswald",
            doctors: ["d11", "d12"],
            seasons: [33, 34, 35],
            alive: false
        },
        {
            _id: "c12_3",
            name: "Matt Lucas",
            character: "Nardole",
            doctors: ["d12"],
            seasons: [36],
            alive: true
        },
        {
            _id: "c12_4",
            name: "Pearl Mackie",
            character: "Bill Potts",
            doctors: ["d12"],
            seasons: [36],
            alive: false
        },
        {
            _id: "c13_1",
            name: "Bradley Walsh",
            character: "Graham O'Brien",
            doctors: ["d13"],
            seasons: [37, 38],
            alive: true
        },
        {
            _id: "c13_2",
            name: "Tosin Cole",
            character: "Ryan Sinclair",
            doctors: ["d13"],
            seasons: [37, 38],
            alive: true
        },
        {
            _id: "c13_3",
            name: "Mandip Gill",
            character: "Yasmin Khan",
            doctors: ["d13"],
            seasons: [37, 38, 39],
            alive: true
        }
    ]
};
