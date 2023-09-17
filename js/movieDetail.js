let animeCard = [
    {
        image: "https://wallpapercave.com/wp/wp1874036.jpg",
        title: "My Hero Academia",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "2:00 PM",
        startTime: "3:00 PM",
        director: "Kenji Nagasaki"
    },  
    {
        image: "https://theblazerrhs.com/wp-content/uploads/2023/03/Chainsaw_Man_.Promo_Poster.png",
        title: "Chainsaw Man",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "5:00 PM",
        startTime: "6:00 PM",
        director: "Ryū Nakayama"
    },
    {
        image: "https://www.xtrafondos.com/en/descargar.php?id=4014&resolucion=3840x2160",
        title: "One Piece",
        date: "Monday, sept 25th 2023",
        location: "George brown college casa loma campus",
        openingTime: "8:00 PM",
        startTime: "9:00 PM",
        director: "Konosuke Uda"
    },
    {
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0607d7b0-ef26-49e6-ada1-fb7489058208/d89pknz-93526a3c-342d-4334-b953-61d28a14b90c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2MDdkN2IwLWVmMjYtNDllNi1hZGExLWZiNzQ4OTA1ODIwOFwvZDg5cGtuei05MzUyNmEzYy0zNDJkLTQzMzQtYjk1My02MWQyOGExNGI5MGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PwVjb7myUQj0JMupGQMbp39QaIF11zv53BxIfn8LhHY",
        title: "Death-Note",
        date: "Tuesday, sept 26th 2023",
        location: "George brown college casa loma campus",
        openingTime: "2:00 PM",
        startTime: "3:00 PM",
        director: "Tetsurō Araki"
    },
{
    image: "https://wallpapers.com/images/featured/cool-demon-slayer-gm931obhtuf1v5lo.jpg",
     title: "Demon Slayer",
    date: "Tuesday, sept 26th 2023",
    location: "George brown college casa loma campus",
    openingTime: "5:00 PM",
    startTime: "6:00 PM",
    director: "Haruo Sotozaki"
},
{
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/770abbb5-93da-47e6-a6f6-1d23ab55f4fd/ddzf6mg-77fbfdeb-c694-4cc4-a739-a008d4d298d8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3MGFiYmI1LTkzZGEtNDdlNi1hNmY2LTFkMjNhYjU1ZjRmZFwvZGR6ZjZtZy03N2ZiZmRlYi1jNjk0LTRjYzQtYTczOS1hMDA4ZDRkMjk4ZDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wd1A2h08WFPrLuQ1l5QkcFsU6DRaN6licBPpzI80Qck",
    title: "Naruto",
    date: "Tuesday, sept 26th 2023",
    location: "George brown college casa loma campus",
    openingTime: "8:00 PM",
    startTime: "9:00 PM",
    director: "Masashi Kishimoto"
},
{
    image: "https://i.pinimg.com/originals/3d/d5/a5/3dd5a5681c9fdfe764ec2b3570701b1a.png",
     title: "Jujutsu kaisen",
    date: "Wednesday, sept 27th 2023",
    location: "George brown college casa loma campus",
    openingTime: "5:00 PM",
    startTime: "6:00 PM",
    director: "Sunghoo Park"
},{
    image: "https://c4.wallpaperflare.com/wallpaper/1003/738/330/yakusoku-no-neverland-ray-the-promised-neverland-emma-the-promised-neverland-the-promised-neverland-anime-hd-wallpaper-preview.jpg",
     title: "Promise Neverland",
    date: "Wednesday, sept 27th 2023",
    location: "George brown college casa loma campus",
    openingTime: "8:00 PM",
    startTime: "9:00 PM",
    director: "Mamoru Kanbe"
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
                        <br>
                        <p>Hurry up, Only few left!!</p>
                        <br>
                        <a href="./purchaseTicket.html" class="buyTicketBtn">Buy Tickets</a>
                    </div>
                    </div>
            </li>`
    }

    document.querySelector("ul").innerHTML = animeData;

