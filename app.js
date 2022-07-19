document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "Naruto",
      img: "assets/Naruto.png",
    },
    {
      name: "Naruto",
      img: "assets/Naruto.png",
    },
    {
      name: "Sakura",
      img: "assets/Sakura.png",
    },
    {
      name: "Sakura",
      img: "assets/Sakura.png",
    },
    {
      name: "Sasuke",
      img: "assets/Sasuke.png",
    },
    {
      name: "Sasuke",
      img: "assets/Sasuke.png",
    },
    {
      name: "Akaumaru",
      img: "assets/Akamaru.png",
    },
    {
      name: "Akaumaru",
      img: "assets/Akamaru.png",
    },
    {
      name: "Chôji",
      img: "assets/Chôji.png",
    },
    {
      name: "Chôji",
      img: "assets/Chôji.png",
    },
    {
      name: "Gaara",
      img: "assets/Gaara.png",
    },
    {
      name: "Gaara",
      img: "assets/Gaara.png",
    },
    {
      name: "Ino",
      img: "assets/Ino.png",
    },
    {
      name: "Ino",
      img: "assets/Ino.png",
    },
    {
      name: "Rock",
      img: "assets/Rock.png",
    },
    {
      name: "Rock",
      img: "assets/Rock.png",
    },
    {
      name: "Hinata",
      img: "assets/Hinata.png",
    },
    {
      name: "Hinata",
      img: "assets/Hinata.png",
    },
    {
      name: "Kakashi",
      img: "assets/Kakashi.png",
    },
    {
      name: "Kakashi",
      img: "assets/Kakashi.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const finalmessage = document.querySelector("#final_message");

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];



  
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "assets/cover.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // correspondances
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "assets/cover.jpg");
      cards[optionTwoId].setAttribute("src", "assets/cover.jpg");
      //   alert("Tu as cliqué sur le même image");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      //   alert("Correspondance");
      cards[optionOneId].setAttribute("src", "assets/white.png");
      cards[optionTwoId].setAttribute("src", "assets/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "assets/cover.jpg");
      cards[optionTwoId].setAttribute("src", "assets/cover.jpg");
      //   alert("Essaye encore");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = cardsWon.length;
      finalmessage.textContent = ("Bien joué !");
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 300);
    }
  }

 
  createBoard();
});
