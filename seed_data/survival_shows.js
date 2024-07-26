//Import contestants

// const contestants = require("./contestants.js");
import contestants from "./contestants.js"

const survivalShows = [
    {
        name: "Girls On Fire",
        gender: "Female",
        runtime: {
            startDate: new Date("2024-04-16"),
            endDate: new Date("2024-06-25")
        },
        network: "JTBC",
        description: "A competition consisting of only female main vocalist material to create a new strong vocal group (such as MAMAMOO) dominating a \"NEW KPOP\" genre. Girls On Fire means 'passionate and cool women' and represents so-called 'women who know how to have fun' who enjoy the stage with their own music style.",
        img: "../images/girls_on_fire_poster.jpg",
        contestantsNum: 50,
        winnersNum: 5,
        mc: ["Jang Do-yeon"],
        episodesNum: 11,
        winners: [],
        losers: [],
        winnerName: ""
    },
    {
        name: "Produce 101",
        gender: "Female",
        runtime: {
            startDate: new Date("2016-01-22"),
            endDate: new Date("2016-04-1")
        },
        network: "Mnet",
        description: "The nation's first agency-collaboration unit girl group project, which brings together 101 trainees from different entertainment companies both inside and outside of South Korea. From the 101 trainees, 11 will be selected to form a unit girl group.",
        img: "",
        contestantsNum: 101,
        winnersNum: 11,
        mc: ["Yeo Jin-goo"],
        episodesNum: 11,
        winners: [],
        losers: [],
        winnerName: "I.O.I."
    },
    {
        name: "Girls Planet 999",
        gender: "Female",
        runtime: {
            startDate: new Date("2021-08-06"),
            endDate: new Date("2021-10-22")
        },
        network: "Mnet",
        description: "A program surrounding female Korean, Chinese, and Japanese contestants who have the same dream of debuting in an idol group despite having different languages and cultures. Their growth as they head towards their goal will unfold in the imaginary world named “Girls Planet.”",
        img: "",
        contestantsNum: 99,
        winnersNum: 9,
        mc: ["Jang Do-yeon"],
        episodesNum: 12,
        winners: [],
        losers: [],
        winnerName: "Kep1er"
    },
    {
        name: "SIXTEEN",
        gender: "Female",
        runtime: {
            startDate: new Date("2015-05-05"),
            endDate: new Date("2015-07-07")
        },
        network: "Mnet",
        description: "Sixteen JYP trainees are pitted against one another to secure a spot in the girl group TWICE.",
        img: "",
        contestantsNum: 16,
        winnersNum: 9,
        mc: [],
        episodesNum: 10,
        winners: [],
        losers: [],
        winnerName: "TWICE"
    },
    {
        name: "Idol School",
        gender: "Female",
        runtime: {
            startDate: new Date("2017-07-13"),
            endDate: new Date("2017-09-29")
        },
        network: "Mnet",
        description: "Idol School, as its name suggests, is similar to an actual school wherein for a total of 11 weeks, the participants will receive lessons in not only singing and dancing, but also the history of K-pop and everything that comes with being an idol in South Korea, such as mental training and appearing in public.",
        img: "",
        contestantsNum: 41,
        winnersNum: 9,
        mc: ["Kim Il-jung", "Hee-chul"],
        episodesNum: 11,
        winners: [],
        losers: [],
        winnerName: "Fromis9"
    },
    {
        name: "KARA Project",
        gender: "Female",
        runtime: {
            startDate: new Date("2014-05-27"),
            endDate: new Date("2014-07-1")
        },
        network: "Mnet",
        description: "A show aimed to find the new member of the girl group KARA, putting seven trainees from DSP Media to compete against one another.",
        img: "",
        contestantsNum: 7,
        winnersNum: 1,
        mc: ["Jang Do-yeon"],
        episodesNum: 11,
        winners: [],
        losers: [],
        winnerName: "Heo Young-ji"
    },
    {
        name: "Sing Again - Season 1",
        gender: "Both",
        runtime: {
            startDate: new Date("2020-04-16"),
            endDate: new Date("2021-02-08")
        },
        network: "JTBC",
        description: "There are many unknown singers all over the world, singers who have been short-lived but have been forgotten, and singers who are capable but have not come across an opportunity to debut. These singers are given a second chance to \"sing again\" through the show in this new-concept rebirth talent show.",
        img: "",
        contestantsNum: 49,
        winnersNum: 1,
        mc: ["Lee Seung-gi"],
        episodesNum: 12,
        winners: [],
        losers: [],
        winnerName: "Lee Seung-yoon"
    },
    {
        name: "Girls RE:VERSE",
        gender: "Female",
        runtime: {
            startDate: new Date("2023-01-02"),
            endDate: new Date("2023-05-11")
        },
        network: "KakaoTV",
        description: "A female virtual idol reality competition starring contestants who are idol group members in real life, giving them the opportunity to have a debut in the virtual world.",
        img: "",
        contestantsNum: 30,
        winnersNum: 5,
        mc: ["Pengsoo"],
        episodesNum: 12,
        winners: [],
        losers: [],
        winnerName: "FE:VERSE"
    },
    {
        name: "World Klass",
        gender: "Male",
        runtime: {
            startDate: new Date("2019-10-04"),
            endDate: new Date("2019-12-06")
        },
        network: "Mnet",
        description: "A mix of a reality and survival show that is aiming to form a 10-member boy group called",
        img: "",
        contestantsNum: 20,
        winnersNum: 10,
        mc: ["Jang Do-yeon"],
        episodesNum: 10,
        winners: [],
        losers: [],
        winnerName: "TOO"
    },
    {
        name: "I-LAND",
        gender: "Male",
        runtime: {
            startDate: new Date("2020-06-26"),
            endDate: new Date("2020-09-18")
        },
        network: "Mnet",
        description: "23 young male K-pop trainees, born between 1997 and 2006, attempt to become the hottest new thing in global pop music.",
        img: "",
        contestantsNum: 23,
        winnersNum: 7,
        mc: ["Min Nam-koong"],
        episodesNum: 11,
        winners: [],
        losers: [],
        winnerName: "ENHYPHEN"
    }
];

//Fill up the winners and losers based on the show

contestants.forEach((c) => {
    //Filters out the contestants appearances to the ones currently stored in the database
    const appearances = survivalShows.filter((s) => {
       //Return every show that's in the contestants show

       return c.show.includes(s.name);

    });

    //For each show find if the contestant won or not

    appearances.forEach((a)=> {
        c.results.forEach((r) => {
            if (a.name == r.showTitle && r.finalEp.winner){
                a.winners.push(c.name);
            }else if (a.name == r.showTitle && r.eliminated.loser){
                a.losers.push(c.name);
            }
        })
    })

});

// module.exports = survivalShows;
export default survivalShows;