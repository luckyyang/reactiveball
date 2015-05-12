if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.hball.helpers({
    answer: function () {
      return Session.get('answer');
    }
  });
  Template.hball.events({
    'click button': function () {
      // fade in the text to make it more mysterious
      $('#text').fadeOut('1200', function () {
        Session.set('answer', answers[
          Math.floor(Math.random() * answers.length)
        ]);
        $('#text').fadeIn();
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
