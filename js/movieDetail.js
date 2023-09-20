let animeCard = [
    {
        image: "https://wallpapercave.com/wp/wp1874036.jpg",
        title: "My Hero Academia",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "2:00 PM",
        startTime: "3:00 PM",
        director: "Kenji Nagasaki",
        genre: "Shonen manga, Comedy drama, Action, Science fantasy, Superhero comics, Comedy"
    },  
    {
        image: "https://theblazerrhs.com/wp-content/uploads/2023/03/Chainsaw_Man_.Promo_Poster.png",
        title: "Chainsaw Man",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "5:00 PM",
        startTime: "6:00 PM",
        director: "Ryū Nakayama",
        genre: "Action, Comedy horror, Dark fantasy"
    },
    {
        image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/one-piece-anime.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
        title: "One Piece",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "8:00 PM",
        startTime: "9:00 PM",
        director: "Konosuke Uda",
        genre: "Comedy, Fantasy"
    },
    {
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0607d7b0-ef26-49e6-ada1-fb7489058208/d89pknz-93526a3c-342d-4334-b953-61d28a14b90c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2MDdkN2IwLWVmMjYtNDllNi1hZGExLWZiNzQ4OTA1ODIwOFwvZDg5cGtuei05MzUyNmEzYy0zNDJkLTQzMzQtYjk1My02MWQyOGExNGI5MGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PwVjb7myUQj0JMupGQMbp39QaIF11zv53BxIfn8LhHY",
        title: "Death-Note",
        date: "Tuesday, sept 26th 2023",
        location: "George brown college casa loma campus",
        openingTime: "2:00 PM",
        startTime: "3:00 PM",
        director: "Tetsurō Araki",
        genre: "Mystery, Psychological thriller, Thriller"
    },
{
    image: "https://images.immediate.co.uk/production/volatile/sites/3/2023/08/13840820-Cropped-9e8765c.jpg?quality=90&resize=980,654",
     title: "Demon Slayer",
    date: "Tuesday, sept 26th 2023",
    location: "George brown college casa loma campus",
    openingTime: "5:00 PM",
    startTime: "6:00 PM",
    director: "Haruo Sotozaki",
    genre: "Action, Fantasy"
},
{
    image: "https://c4.wallpaperflare.com/wallpaper/283/451/601/anime-naruto-kakashi-hatake-naruto-uzumaki-wallpaper-preview.jpg",
    title: "Naruto",
    date: "Tuesday, sept 26th 2023",
    location: "George brown college casa loma campus",
    openingTime: "8:00 PM",
    startTime: "9:00 PM",
    director: "Masashi Kishimoto",
    genre: "Action, Fantasy"
},
{
    image: "https://i.ytimg.com/vi/xoCUSgO6mGQ/maxresdefault.jpg",
     title: "Jujutsu kaisen",
    date: "Wednesday, sept 27th 2023",
    location: "George brown college casa loma campus",
    openingTime: "5:00 PM",
    startTime: "6:00 PM",
    director: "Sunghoo Park",
    genre: "Adventure fiction, Dark fantasy, Supernatural fiction"
},{
    image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6619/1096619-h-8964c29692e2",
     title: "Promise Neverland",
    date: "Wednesday, sept 27th 2023",
    location: "George brown college casa loma campus",
    openingTime: "8:00 PM",
    startTime: "9:00 PM",
    director: "Mamoru Kanbe",
    genre: " Dark fantasy, Science fiction, Thriller"
},

];


let animeData = ``;

    for(anime of animeCard){
        animeData += `
        <li>
                <div class="animeCard">
                    <img src="${anime.image}"
                        alt="onePiece" class="animePic">
                    <div class="animeInfo">
                        <p class="animeName" style="color: whitesmoke;">${anime.title}</p>
                        <p>${anime.date}</p>
                        <p>${anime.location}</p>
                        <p>Doors: ${anime.openingTime} | Show: ${anime.startTime}</p>
                        <p>Directed by: ${anime.director}
                        <p>Genre: ${anime.genre}
                        <br>
                        <p>Hurry up, Only few left!!</p>
                        <br>
                        <a href="./purchaseTicket.html" class="buyTicketBtn">Buy Tickets</a>
                    </div>
                    </div>
            </li>`
    }

    document.querySelector("ul").innerHTML = animeData;
    