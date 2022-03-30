const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

let ulElement = document.querySelector('[data-ul]')

// erstellen new Card , aus Books Objecte 
// (wohin): wohin soll dieses Card festgestellt wird 

function addBookCard(bookObj , wohin) {
  // neues Card erstellen :
  const card = `<div class="card" style="width: 18rem;">
  <img src="${bookObj.img}" class="card-img-top book-cover" alt="img">
  <div class="card-body">
  <h5 class="card-title">${bookObj.title}</h5>
  <p class="card-text">${bookObj.author}</p>
  <span class="badge rounded-pill 
  ${bookObj.alreadyRead ? "bg-success" : "bg-secondary"}">
  ${bookObj.alreadyRead ? "Read" : "To read"}</span>
  </div>
  </div>`

 // Inhalt von (wohin) element in Html ändern ,und das Card zum Inhalt hinzufügen .

  wohin.innerHTML += card ;
}

// Function auf Books(Objecte) aufrufen und ausfÜhren :
// wir bekommen 4 verschiedene Cards in einem Platz (ulElement)

books.forEach(bookObj => addBookCard(bookObj , ulElement))

