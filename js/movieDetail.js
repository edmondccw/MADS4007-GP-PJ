const animeCard = [
    {
        imageUrl: "./assets/imgs/myHeroAcademia.jpg",
        title: "My Hero Academia",
        imgAlt: "An image of My Hero Academia",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },
    {
        imageUrl: "./assets/imgs/chainsawMan.png",
        title: "Chainsaw Man",
        imgAlt: "An image of Chainsaw Man",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },
    {
        imageUrl: "./assets/imgs/onepiece.jpg",
        title: "One Piece",
        imgAlt: "An image of One Piece",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },
    {
        imageUrl: "./assets/imgs/deathNote.jpeg",
        title: "Death-Note",
        imgAlt: "An image of Death-Note",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },
    {
        imageUrl: "./assets/imgs/demonSlayer.jpg",
        title: "Demon Slayer",
        imgAlt: "An image of Demon Slayer",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },
    {
        imageUrl: "./assets/imgs/naruto.jpg",
        title: "Naruto",
        imgAlt: "An image of Naruto",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },
    {
        imageUrl: "./assets/imgs/jujutsuKaisen.jpg",
        title: "Jujutsu kaisen",
        imgAlt: "An image of Jujutsu kaisen",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    }, {
        imageUrl: "./assets/imgs/promiseNeverland.jpg",
        title: "Promise Neverland",
        imgAlt: "An image of Promise Neverland",
        date: "Tuesday, sept 4th 2023",
        location: "Dundas Street",
        openingTime: "7:00 PM",
        startTime: "8:00 PM"
    },

];


let animeData = ``;

for (anime of animeCard) {
    animeData += `\
    <li>\
        <div class="animeCard">\
            <img src="${anime.imageUrl}"\
                alt="${anime.imgAlt}" class="animePic">\
            <div class="animeInfo">\
                <p class="animeName"">${anime.title}</p>\
                <p>${anime.date}</p>\
                <p>${anime.location}</p>\
                <p>Doors: ${anime.openingTime} | Show: ${anime.startTime}</p>\
                <br>\
                <p>Hurry up, Only few left!!</p>\
                <br>\
                <a href="#" class="buyTicketBtn">Buy Tickets</a>\
            </div>\
        </div>\
    </li>`
}

document.getElementById("animeList").innerHTML = animeData;

