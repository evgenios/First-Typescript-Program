var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
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



