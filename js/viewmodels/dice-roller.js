define(['knockout', 'lodash'], function(ko) {

function diceRoller(nbDice)
{
  var self = this;

  self.totalDice = ko.observable(nbDice);
  self.currentDice = ko.observable(nbDice);
  self.nbRoll = ko.observable(0);
  self.nbDiceReset = ko.observable(nbDice);

  self.dice = ko.observableArray([]);
  self.usedDice = ko.observableArray([]);

  self.initDice = function() {

    self.dice([]);
    for(var i = 0; i < self.currentDice(); i++) {
      self.dice.push({ text: '?', val: null, cssValue: 'unset' });
    }
  }
  self.initDice();

  self.roll = function() {
    self.dice([]);

    for(var d = 0; d < self.currentDice(); d++) {
      var val = _.random(1, 6);
      self.dice.push({ text: val.toString(), val: val, cssValue: 'val' + val });
    }

    self.nbRoll(self.nbRoll() + 1);
  }

  self.store = function() {

    var nbStored = 0;
    for(var d = 0; d < self.dice().length; d++) {

      if (self.dice()[d].val === 1) {
        self.usedDice.push(self.dice()[d]);
        nbStored++;
      }
    }

    self.currentDice(self.currentDice() - nbStored);
    self.initDice();
  }

  self.reset = function() {

    var nbDiceToReset = 100;
    const parsed = parseInt(self.nbDiceReset(), 10);
    if (!isNaN(parsed)) {
      nbDiceToReset = self.nbDiceReset();
     }

    self.totalDice(nbDiceToReset);
    self.currentDice(nbDiceToReset);
    self.nbRoll(0);

    self.dice([]);
    self.usedDice([]);

    self.initDice();
  }
}

return {
    newDiceRoller: function(nbDice)
      { return new diceRoller(nbDice); }
  }
});
