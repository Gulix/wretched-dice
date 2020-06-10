require.config({
    paths: {
        'jQuery': 'vendor/jquery-3.0.0.min',
        'knockout': 'vendor/knockout-3.4.0',
        'lodash': 'vendor/lodash',
        'tinycolor': 'vendor/tinycolor',
        'clipboard': 'vendor/clipboard.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require(['knockout',
         'components/registration',
         'viewmodels/dice-roller',
         'clipboard',
         'domReady!'
       ], function(ko, components, DiceRoller, Clipboard){

  components.register();

  //var viewModel = TeamBuilderVM.newTeamBuilderVM();;
  //new Clipboard('.btncopy');

  var diceRoller = DiceRoller.newDiceRoller(100);

  ko.applyBindings(diceRoller);

});
