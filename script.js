/* =====================================
   ENHYPEN Bias Experience
   SCRIPT.JS
===================================== */


/* ==========================
   MEMBER DATA
========================== */

const members = {

    jungwon: {
        name: "Jungwon",
        image: "images/jungwon.jpg",
        talent: "ENHYPEN's Leader",
        description:
            "Jungwon is the leader of ENHYPEN. He is known for his strong leadership, stable vocals, powerful dancing, and caring personality.",
        birthday: "February 9, 2004",
        position: "Leader, Vocalist, Dancer",
        nationality: "Korean",
        zodiac: "Aquarius",
        fact: "He was the youngest trainee among the I-LAND finalists."
    },


    heeseung: {
        name: "Heeseung",
        image: "images/heeseung.jpg",
        talent: "The All-Rounder",
        description:
            "Heeseung is known as an all-rounder because of his amazing vocals, dancing skills, and stage presence.",
        birthday: "October 15, 2001",
        position: "Main Vocalist, Dancer",
        nationality: "Korean",
        zodiac: "Libra",
        fact: "He was a trainee under BigHit Entertainment before joining ENHYPEN."
    },


    jay: {
        name: "Jay",
        image: "images/jay.jpg",
        talent: "The Passionate Performer",
        description:
            "Jay is known for his powerful stage presence, unique voice, confidence, and passion for performing.",
        birthday: "April 20, 2002",
        position: "Rapper, Vocalist, Dancer",
        nationality: "Korean-American",
        zodiac: "Taurus",
        fact: "He was born in Seattle, USA."
    },


    jake: {
        name: "Jake",
        image: "images/jake.jpg",
        talent: "The Charming Performer",
        description:
            "Jake is loved for his warm personality, beautiful vocals, and charming stage energy.",
        birthday: "November 15, 2002",
        position: "Vocalist, Dancer",
        nationality: "Korean-Australian",
        zodiac: "Scorpio",
        fact: "He learned violin before becoming an idol."
    },


    sunghoon: {
        name: "Sunghoon",
        image: "images/sunghoon.jpg",
        talent: "The Ice Prince",
        description:
            "Sunghoon is known for his elegant performances, visuals, and smooth dancing.",
        birthday: "December 8, 2002",
        position: "Vocalist, Dancer",
        nationality: "Korean",
        zodiac: "Sagittarius",
        fact: "He was a professional figure skater before becoming an idol."
    },


    sunoo: {
        name: "Sunoo",
        image: "images/sunoo.jpg",
        talent: "The Bright Energy",
        description:
            "Sunoo brings happiness to fans with his expressive performances, vocals, and bright personality.",
        birthday: "June 24, 2003",
        position: "Vocalist, Performer",
        nationality: "Korean",
        zodiac: "Cancer",
        fact: "He is known for his cheerful and positive energy."
    },


    niki: {
        name: "Ni-Ki",
        image: "images/niki.jpg",
        talent: "The Dance Prodigy",
        description:
            "Ni-Ki is recognized as one of the best dancers in ENHYPEN. His powerful moves and stage control stand out.",
        birthday: "December 9, 2005",
        position: "Main Dancer, Rapper, Vocalist",
        nationality: "Japanese",
        zodiac: "Sagittarius",
        fact: "He was a backup dancer for SHINee before debuting."
    }

};



/* ==========================
   PAGE ELEMENTS
========================== */

const welcomePage = document.getElementById("welcomePage");
const biasPage = document.getElementById("biasPage");
const talentPage = document.getElementById("talentPage");
const profilePage = document.getElementById("profilePage");


const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const restartBtn = document.getElementById("restartBtn");

let selectedMember = null;



/* ==========================
   PAGE SWITCH FUNCTION
========================== */

function showPage(page){

    document.querySelectorAll(".page").forEach(section => {

        section.classList.remove("active");

    });

    page.classList.add("active");

}



/* ==========================
   START BUTTON
========================== */

startBtn.addEventListener("click", ()=>{

    showPage(biasPage);

    const music = document.getElementById("bgMusic");

    if(music){

        music.play().catch(()=>{});

    }

});



/* ==========================
   MEMBER SELECTION
========================== */

document.querySelectorAll(".memberCard").forEach(card=>{


    card.addEventListener("click", ()=>{


        const memberId = card.dataset.member;


        selectedMember = members[memberId];


        showTalentPage();


    });


});



/* ==========================
   TALENT PAGE
========================== */

function showTalentPage(){


    document.getElementById("talentImage").src =
        selectedMember.image;


    document.getElementById("talentHeading").innerText =
        selectedMember.talent;


    document.getElementById("talentDescription").innerText =
        selectedMember.description;


    showPage(talentPage);


}



/* ==========================
   CONTINUE TO PROFILE
========================== */

continueBtn.addEventListener("click", ()=>{


    document.getElementById("profileImage").src =
        selectedMember.image;


    document.getElementById("profileName").innerText =
        selectedMember.name;


    document.getElementById("birthday").innerText =
        selectedMember.birthday;


    document.getElementById("position").innerText =
        selectedMember.position;


    document.getElementById("nationality").innerText =
        selectedMember.nationality;


    document.getElementById("zodiac").innerText =
        selectedMember.zodiac;


    document.getElementById("fact").innerText =
        selectedMember.fact;


    showPage(profilePage);


});



/* ==========================
   RESTART
========================== */

restartBtn.addEventListener("click", ()=>{


    selectedMember = null;


    showPage(biasPage);


});
