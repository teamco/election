Meteor.startup(function () {

    if (!ActiveMenu.find().fetch().length) {
        ActiveMenu.insert(
            {
               'name': 'Dashboard',
               'path': 'dashboard',
               'gif': '',
               'permissions': [
                 "a",
                 "c"
               ]
             }
        );
        ActiveMenu.insert(
            {
              'name': 'Campaign Management',
              'path': 'campaignManagement',
              'gif': '',
              'permissions': [
                "a",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
           {
             'name': 'Home',
             'path': 'home',
             'gif': '',
             'permissions': [
               "b"
             ]
           }
       );
        ActiveMenu.insert(
            {
              'name': 'Candidates',
              'path': 'candidates',
              'gif': '',
              'permissions': [
                "a",
                "b",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Events Management',
              'path': 'eventManagement',
              'gif': '',
              'permissions': [
                "a",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Content Management',
              'path': 'contentManagement',
              'gif': '',
              'permissions': [
                "a",
                "c"
              ],
              'subMenu': [
                {
                  'name': 'Reports',
                  'path': 'reports',
                  'gif': '',
                  'permissions': [
                    "a",
                    "c"
                  ]
                },
                {
                  'name': 'Files',
                  'path': 'repository',
                  'gif': '',
                  'permissions': [
                    "a",
                    "c"
                  ]
                }
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Calendar',
              'path': 'calendar',
              'gif': '',
              'permissions': [
                "a",
                "b",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Messages',
              'path': 'messages',
              'gif': 'fa fa-envelope',
              'permissions': [
                "a",
                "b",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Donations',
              'path': 'donations',
              'gif': '',
              'permissions': [
                "a",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Users',
              'path': 'admin/users',
              'gif': '',
              'permissions': [
                "a"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Dashboard1',
              'path': 'dashboard',
              'gif': '',
              'permissions': [
                "a",
                "c"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Dashboard2',
              'path': 'dashboard',
              'gif': '',
              'permissions': [
                "a",
                "c"
              ]
            }
        );
    }
});

