(function() {
  'use strict';

  angular.module('app', ['irontec.simpleChat']);

  angular.module('app').controller('Shell', Shell);

  function Shell() {

    var vm = this;

    vm.messages = [
      {
        'username': 'Jagruti',
        'content': 'Hi!'
      },
      {
        'username': 'Akshay',
        'content': 'Whats up?'
      },
      {
        'username': 'Jagruti',
        'content': 'Nothing'
      },
      {
        'username': 'Akshay',
        'content': 'Ok!'
      }
    ];

    vm.username = 'Jagruti';

    vm.sendMessage = function(message, username) {
      if(message && message !== '' && username) {
        vm.messages.push({
          'username': username,
          'content': message
        });
      }
    };

  }

})();
