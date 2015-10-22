Meteor.startup(function() {
  if(LeftMenu.find().count() === 0) {
    var leftMenu = [
      {
        'name': 'leftMenu 1'
      },
      {
        'name': 'leftMenu 2'
      }
    ];
    leftMenu.forEach(function(leftMenu) {
      LeftMenu.insert(leftMenu);
    });
  }
});