const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 27 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
var myArray = []

// 01_ Sors-moi la liste des titres des livres du CDI
console.log('>>>> 01_ Sors-moi la liste des titres des livres du CDI');
books.forEach(element => {
    console.log(element.title);
});

// 02_ Est-ce que tous les livres ont été empruntés au moins une fois ?
console.log('\n>>>> 02_ Est-ce que tous les livres ont été empruntés au moins une fois ?')
reponse = "oui";
books.every(element => {
    if (element.rented == 0) {
        reponse = "non"
        return false;
    }
    return true;
})
console.log(reponse);

// 03_ Quel est le livre le plus emprunté ?
console.log('\n>>>> 03_ Quel est le livre le plus emprunté ?')
let timesRented = 0;
let bookMaxRented = " ";
books.forEach(element => {
    if (element.rented > timesRented) {
        bookMaxRented = element.title;
        timesRented = element.rented;
    }
});
console.log(`Livre le plus emprunté: ${bookMaxRented}`);

// 04_ Quel est le livre le moins emprunté ?
console.log('\n>>>> 04_ Quel est le livre le moins emprunté ?')
timesRented = Infinity;
let bookMinRented = " ";
books.forEach(element => {
    if (element.rented < timesRented) {
        bookMinRented = element.title;
        timesRented = element.rented;
    }
});
console.log(`Livre le moins emprunté: ${bookMinRented}`);

// 05_ Supprime le livre avec l'ID 133712
console.log('\n>>>>05_ Supprime le livre avec l\'ID 133712')
let pos = 0
books.forEach(function(element, index) {
    if (element.id == 133712) {
        pos = index;
    }
});
var removedItem = books.splice(pos, 1);
console.log(books.length);
