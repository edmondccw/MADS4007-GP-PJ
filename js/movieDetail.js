const animeCard = [
    {
        imageUrl: "./assets/imgs/myHeroAcademia.jpg",
        title: "My Hero Academia",
        imgAlt: "An image of My Hero Academia",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "2:00 PM",
        startTime: "3:00 PM",
        director: "Kenji Nagasaki",
        genre: "Shonen manga, Comedy drama, Action, Science fantasy, Superhero comics, Comedy"
    },
    {
        imageUrl: "./assets/imgs/chainsawMan.png",
        title: "Chainsaw Man",
        imgAlt: "An image of Chainsaw Man",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "5:00 PM",
        startTime: "6:00 PM",
        director: "Ryū Nakayama",
        genre: "Action, Comedy horror, Dark fantasy"
    },
    {
        imageUrl: "./assets/imgs/onepiece.jpg",
        title: "One Piece",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "8:00 PM",
        startTime: "9:00 PM",
        director: "Konosuke Uda",
        genre: "Comedy, Fantasy"
    },
    {
        imageUrl: "./assets/imgs/deathNote.jpeg",
        title: "Death-Note",
        imgAlt: "An image of Death-Note",
        date: "Tuesday, sept 26th 2023",
        location: "George brown college casa loma campus",
        openingTime: "2:00 PM",
        startTime: "3:00 PM",
        director: "Tetsurō Araki",
        genre: "Mystery, Psychological thriller, Thriller"
    },
    {
        imageUrl: "./assets/imgs/demonSlayer.jpg",
        title: "Demon Slayer",
        imgAlt: "An image of Demon Slayer",
        date: "Tuesday, sept 26th 2023",
        location: "George brown college casa loma campus",
        openingTime: "5:00 PM",
        startTime: "6:00 PM",
        director: "Haruo Sotozaki",
        genre: "Action, Fantasy"
    },
    {
        imageUrl: "./assets/imgs/naruto.jpg",
        title: "Naruto",
        imgAlt: "An image of Naruto",
        date: "Tuesday, sept 26th 2023",
        location: "George brown college casa loma campus",
        openingTime: "8:00 PM",
        startTime: "9:00 PM",
        director: "Masashi Kishimoto",
        genre: "Action, Fantasy"
    },
    {
        imageUrl: "./assets/imgs/jujutsuKaisen.jpg",
        title: "Jujutsu kaisen",
        imgAlt: "An image of Jujutsu kaisen",
        date: "Wednesday, sept 27th 2023",
        location: "George brown college casa loma campus",
        openingTime: "5:00 PM",
        startTime: "6:00 PM",
        director: "Sunghoo Park",
        genre: "Adventure fiction, Dark fantasy, Supernatural fiction"
    }, {
        imageUrl: "./assets/imgs/promiseNeverland.jpg",
        title: "Promise Neverland",
        imgAlt: "An image of Promise Neverland",
        date: "Wednesday, sept 27th 2023",
        location: "George brown college casa loma campus",
        openingTime: "8:00 PM",
        startTime: "9:00 PM",
        director: "Mamoru Kanbe",
        genre: " Dark fantasy, Science fiction, Thriller"
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
                <p>Directed by: ${anime.director}\
                <p>Genre: ${anime.genre}\
                <br>\
                <p style="font-weight:bold; font-size: 1.5em">Hurry up, Only few left!!</p>\
                <br>\
                <a href="./purchaseTicket.html" class="buyTicketBtn">Buy Tickets</a>\
            </div>\
        </div>\
    </li>`
}

document.getElementById("animeList").innerHTML = animeData;

