document.addEventListener("DOMContentLoaded", () => {
    
    const cardsArray = [
        {
            name: "angry",
            image: "/img/angry.jpg"
        },
        {
            name: "angry",
            image: "/img/angry.jpg"
        },
        {
            name: "beagle",
            image: "/img/beagle.jpg"
        },
        {
            name: "beagle",
            image: "/img/beagle.jpg"
        },
        {
            name: "doberman",
            image: "/img/doberman.jpg"
        },
        {
            name: "doberman",
            image: "/img/doberman.jpg"
        },
        {
            name: "lab",
            image: "/img/lab.jpg"
        },
        {
            name: "lab",
            image: "/img/lab.jpg"
        },
        {
            name: "lab2",
            image: "/img/lab2.jpg"
        },
        {
            name: "lab2",
            image: "/img/lab2.jpg"
        },
        {
            name: "ovejero",
            image: "/img/ovejero.jpg"
        },
        {
            name: "ovejero",
            image: "/img/ovejero.jpg"
        }
    ];

    // Fisher-Yates algorithm to shuffle the cards
    const shuffleCards = () => {
        for (let i = cardsArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = cardsArray[i];
          cardsArray[i] = cardsArray[j];
          cardsArray[j] = temp;
        }
      };

    shuffleCards();
    

    // creating the board
    const grid = document.querySelector(".grid");
    
    let chosenCards = [];
    let chosenCardsId = [];
    const cardsCheck = [];
    const result = document.getElementById("result");

    function createBoard(){
        for (let i = 0; i < cardsArray.length; i++){
            let card = document.createElement("img");
            card.setAttribute("src", "/img/back.jpg");
            card.setAttribute("card-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    };
    
    // check if there is a match between the two cards selected
    function checkMatch(){
        let cards = document.querySelectorAll("img");
        let firstPickId = chosenCardsId[0];
        let secondPickId = chosenCardsId[1];
        if (chosenCards[0] == chosenCards[1]){
            cards[firstPickId].setAttribute("src", "/img/check.jpg"); 
            cards[secondPickId].setAttribute("src", "/img/check.jpg");
            cards[firstPickId].removeEventListener("click", flipCard);
            cards[secondPickId].removeEventListener("click", flipCard);
            cardsCheck.push(chosenCards);
        } else {
            cards[firstPickId].setAttribute("src", "/img/back.jpg");
            cards[secondPickId].setAttribute("src", "/img/back.jpg");
        }
        chosenCards = [];
        chosenCardsId = [];
        result.textContent = `Score: ${cardsCheck.length}`;
        if (cardsCheck.length == cardsArray.length/2){
            result.textContent = "Congratulations! You won!!!";
        }
    }
    
    // flipcard function
    function flipCard(){
        let cardId = this.getAttribute("card-id");
        chosenCards.push(cardsArray[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute("src", cardsArray[cardId].image);
        if (chosenCards.length == 2){
            setTimeout(checkMatch, 600);    //ADD TIMEOUT
        }
        
    }


    createBoard();

});

