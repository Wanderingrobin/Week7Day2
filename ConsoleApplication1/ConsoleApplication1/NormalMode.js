var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var res = sentence.split(" ");

for (var i = res.length - 1; i > 0; i--)
{
    if (res[i].length === 6)
    {
        document.write(res[i]);
    }
    
    document.write('<br/>')
}

var movies = [];
movies.push({
    title: "Forest Gump",
    budget: 55,
    stars: ["Tom Hanks"]
});
movies.push({
    title: "Star Wars",
    budget: 11,
    stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
    title: "Batman Begins",
    budget: 150,
    stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
    title: "Titanic",
    budget: 200,
    stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
    title: "Inception",
    budget: 160,
    stars: ["Leonardo DiCaprio", "JGL"]
});

for (var i = movies.length - 1; i >= 0; i--)
{
    if (movies[i].budget <= 100)
    {
        document.write(movies[i].title);
    }

    document.write('<br/>')
}

for (var i = movies.length - 1; i >= 0; i--)
{
    var str = movies[i].stars;
    
    if (name = str.includes("Leonardo DiCaprio"))
    {
        document.write(movies[i].title);
    }

    document.write('<br/>')
}