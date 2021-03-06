﻿var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            var pickedSuit = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

            return { suit: _this.suits[pickedSuit], card: pickedCard };
        };
    }
};

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
window.onload = function () {
    var el = document.querySelector('#content');
    el.innerHTML = "card: " + pickedCard.card + " of " + pickedCard.suit + "<br>";

    var btn = document.querySelector('#new');
    btn.addEventListener('click', function () {
        var btncard = cardPicker();
        el.innerHTML = el.innerHTML + "card: " + btncard.card + " of " + btncard.suit + "<br>";
    });
};
//# sourceMappingURL=app.js.map
