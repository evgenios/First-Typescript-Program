var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            var pickedCard = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            var pickedSuit = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

            return { suit: this.suits[pickedSuit], card: pickedCard };
        }
    }
}

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
window.onload = () => {
    var el = <HTMLInputElement>document.querySelector('#content');
    el.innerHTML = "card: " + pickedCard.card + " of " + pickedCard.suit + "<br>";

    var btn = <HTMLInputElement>document.querySelector('#new');
    btn.addEventListener('click', function () {
        var btncard = cardPicker();
        el.innerHTML = el.innerHTML + "card: " + btncard.card + " of " + btncard.suit + "<br>";
    });
};



