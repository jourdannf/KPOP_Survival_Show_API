//Import performances

import stages from "./performances.js";

const contestants = [
    {
        name: "Lee Sooyoung",
        gender: "Female",
        birthday: new Date("2002-12-16"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 3,
                    points: 949.88
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Hwang Seyoung",
        gender: "Female",
        birthday: new Date("1994-11-08"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire", "Produce 101"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 2,
                    points: 975.88
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            },
            {
                showTitle: "Produce 101",
                finalEp: {
                    made: false,
                    winner: false,
                    ranking: NaN,
                    points: NaN
                },
                eliminated: {
                    loser: true,
                    episode: 5
                }
            }
        ]
    },
    {
        name: "Cho Yein",
        gender: "Female",
        birthday: new Date("2006-12-23"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: false,
                    ranking: 7,
                    points: 748.60
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Jung Yuri",
        gender: "Female",
        birthday: new Date("2006-04-20"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire", "Blossom With Love"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: false,
                    ranking: 9,
                    points: 687.13
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Khan Amina",
        gender: "Female",
        birthday: new Date("2002-04-09"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: false,
                    ranking: 10,
                    points: 674.83
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Park Seojeong",
        gender: "Female",
        birthday: new Date("2004-07-11"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: false,
                    ranking: 8,
                    points: 699.31
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Kim Kyuri",
        gender: "Female",
        birthday: new Date("2004-02-18"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: false,
                    ranking: 6,
                    points: 759.86
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Kang Yunjeong",
        gender: "Female",
        birthday: new Date("1998-04-14"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 4,
                    points: 858.80
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Yang Drea Irae",
        gender: "Female",
        birthday: new Date("2005-07-27"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 5,
                    points: 835.95
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Lee Nayoung",
        gender: "Female",
        birthday: new Date("2002-04-17"),
        nationality: ["Korean", "French"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire", "Dream Academy"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 1,
                    points: 990.90
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Choi Aim",
        gender: "Female",
        birthday: new Date("1998-09-09"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: false,
                    winner: false,
                    ranking: NaN,
                    points: NaN
                },
                eliminated: {
                    loser: true,
                    episode: 9,
                }
            }
        ]
    },
    {
        name: "Lee Arumsoul",
        gender: "Female",
        birthday: new Date("1991-08-18"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: false,
                    winner: false,
                    ranking: NaN,
                    points: NaN
                },
                eliminated: {
                    loser: true,
                    episode: 9,
                }
            }
        ]
    },
    {
        name: "Lim Okyeon",
        gender: "Female",
        birthday: new Date("2005-01-10"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: false,
                    winner: false,
                    ranking: NaN,
                    points: NaN
                },
                eliminated: {
                    loser: true,
                    episode: 9,
                }
            }
        ]
    },
    {
        name: "Yoon Minseo",
        gender: "Female",
        birthday: new Date("2002-04-28"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire", "CAP-TEEN"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: false,
                    winner: false,
                    ranking: NaN,
                    points: NaN
                },
                eliminated: {
                    loser: true,
                    episode: 9,
                }
            }
        ]
    },
    {
        name: "RETA",
        gender: "Female",
        birthday: new Date("2001-09-22"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire", "Youth With You - Season 2"],
        performances: [],
        results: [
            {
                showTitle: "Girls On Fire",
                finalEp: {
                    made: false,
                    winner: false,
                    ranking: NaN,
                    points: NaN
                },
                eliminated: {
                    loser: true,
                    episode: 9,
                }
            }
        ]
    },
    {
        name: "Jeon Somi",
        gender: "Female",
        birthday: new Date("2001-04-09"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Produce 101",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 1,
                    points: 1204
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Kim Sejeong",
        gender: "Female",
        birthday: new Date("1996-08-28"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Produce 101",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 2,
                    points: 1180
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Choi Yoojung",
        gender: "Female",
        birthday: new Date("1999-11-12"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Produce 101",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 3,
                    points: 438778
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Kim Chungha",
        gender: "Female",
        birthday: new Date("1996-02-09"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Produce 101",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 4,
                    points: 403633
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
    {
        name: "Kim Sohye",
        gender: "Female",
        birthday: new Date("1999-07-19"),
        nationality: ["Korean"],
        img: "",
        bio: "So seas. Beginning seas they're subdue living meat land evening green. For own beast fowl. Whose moving. Of fruitful i sea divided cattle land they're from. All great green female god doesn't, their grass deep bearing stars behold form have divide together divided called female, image i of. Us fly.",
        show: ["Girls On Fire"],
        performances: [],
        results: [
            {
                showTitle: "Produce 101",
                finalEp: {
                    made: true,
                    winner: true,
                    ranking: 5,
                    points: 229732
                },
                eliminated: {
                    loser: false,
                    episode: NaN,
                }
            }
        ]
    },
];

//Add performances for each contestant

contestants.forEach((c) => {
    stages.forEach((s)=> {
        if (s.participants.includes(c.name)){
            c.performances.push(s.name);
        }
    })
});

// module.exports = contestants;
export default contestants;