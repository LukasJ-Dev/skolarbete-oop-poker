class Card {
    constructor(value, color) {
        this.name = value + " of " + color;
        this.value = value;
        this.color = color;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createCardForAllColors(value) {
        this.cards.push(new Card(value, "clubs"));
        this.cards.push(new Card(value, "diamonds"));
        this.cards.push(new Card(value, "hearts"));
        this.cards.push(new Card(value, "spades"));
    }

    getCards() {
        return this.cards;
    }

    shuffle() {
        this.cards.sort((a,b) => 0.5 - Math.random());
    }

    takeCard() {
        const card = this.cards[this.cards.length-1];
        this.cards.pop();
        return card;
    }
}

class Dealer {
    constructor() {
        this.deck = new Deck();
        this.pile = [];
    }

    createDeck() {
        for(let i = 2; i <= 10; i++) {
            this.deck.createCardForAllColors(i,i);
        }
        
        this.deck.createCardForAllColors("Queen");
        
        this.deck.createCardForAllColors("King");
        
        this.deck.createCardForAllColors("Ace");
        
        this.deck.createCardForAllColors("Joker");

        this.deck.shuffle();
    }

    getDeckCards() {
        return this.deck.cards;
    }

    throwPlayerCard(player, value, color) {
        this.pile.push(player.throwCard(value, color));

        this.givePlayerCards(player, 1);
    }

    givePlayerCards(player, amount) {
        for(let i = 0; i < amount; i++) {
            player.addCard(this.deck.takeCard());
        }
    }
}

class Game {

    constructor() {
        this.gameStarted = false;
        this.dealer = new Dealer();
    }

    start() {
        this.gameStarted = true;
        const slim = new Player("Slim", 0);
        const luke = new Player("Luke", 0);

        this.dealer.createDeck();
        console.log("Kortlek")
        console.log(this.dealer.getDeckCards());

        this.dealer.givePlayerCards(slim, 5);
        this.dealer.givePlayerCards(luke, 5);
        console.log("Ger varje spelare 5 kort")

        console.log("Slim kort: ")
        console.log(slim.getCards());
        console.log("Lukes kort: ");
        console.log(luke.getCards());
        //this.dealer.throwPlayerCard(luke, 'A', 'clubs');
        console.log("Kortlek");
        console.log(this.dealer.getDeckCards());
    }
}

class Player {
    constructor(name, bet) {
        this.name = name;
        this.bet = bet;
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    throwCard(value, color) {
        const card = this.cards.find(card => card.value == value && card.color == color);
        //console.log(this.cards.findIndex(c => c == card));
        this.cards.splice(this.cards.findIndex(c => c == card),1);
        return card;
    }

    throwRandomCards(amount) {

    }

    getCards() {
        return this.cards;
    }
}


const game = new Game();
game.start();

