Meteor.startup(function () {

    if (!ActiveMenu.find().fetch().length) {
        ActiveMenu.insert(
            {
               'name': 'Dashboard',
               'path': 'dashboard',
               'gif': 'fa-dashboard',
               'roles': [
                 "admin",
                 "candidate"
               ]
             }
        );

        ActiveMenu.insert(
            {
              'name': 'Campaign Management',
              'path': 'campaignManagement',
              'gif': 'fa fa-bar-chart-o',
              'roles': [
                "admin",
                "candidate"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Content Management',
              'path': 'contentManagement',
              'gif': 'fa-cogs',
              'roles': [
                "admin",
                "candidate"
              ],
              'subMenu': [
                {
                  'name': 'Reports',
                  'path': 'reports',
                  'gif': '',
                  'roles': [
                    "admin",
                    "candidate"
                  ]
                },
                {
                  'name': 'Files',
                  'path': 'repository',
                  'gif': 'fa fa-picture-o',
                  'roles': [
                    "admin",
                    "candidate"
                  ]
                }
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Events Management',
              'path': 'eventManagement',
              'gif': 'fa-tasks',
              'roles': [
                "admin",
                "candidate"
              ]
            }
        );
        ActiveMenu.insert(
             {
               'name': 'Shop Management',
               'path': 'shopManagement',
               'gif': 'fa fa-shopping-cart',
               'roles': [
                 "admin",
                 "candidate"
               ]
             }
         );
        ActiveMenu.insert(
           {
             'name': 'Timeline',
             'path': 'timeline',
             'gif': 'fa-greas',
             'roles': [
                "admin",
                "candidate",
                "end-user"
             ]
           }
       );
        ActiveMenu.insert(
            {
              'name': 'Volunteer',
              'path': 'volunteer',
              'gif': 'sa-users',
              'roles': [
                "admin",
                "candidate"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Followers',
              'path': 'followers',
              'gif': 'sa-users',
              'roles': [
                "admin",
                "candidate",
                "end-user"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'My Groups',
              'path': 'groups',
              'gif': 'sa-users',
              'roles': [
                "admin",
                "candidate",
                "end-user"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Calendar',
              'path': 'calendar',
              'gif': '',
              'roles': [
                "admin",
                "candidate",
                "end-user"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Messages',
              'path': 'messages',
              'gif': 'fa fa-envelope',
              'roles': [
                "admin",
                "candidate",
                "end-user"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Donations',
              'path': 'donations',
              'gif': 'fa-usd',
              'roles': [
                "admin",
                "candidate"
              ]
            }
        );
        ActiveMenu.insert(
            {
              'name': 'Donate',
              'path': 'donate',
              'gif': 'fa-usd',
              'roles': [
                "admin",
                "end-user"
              ]
            }
        );
        ActiveMenu.insert(
             {
               'name': 'Shop',
               'path': 'shop',
               'gif': 'fa fa-shopping-cart',
               'roles': [
                 "admin",
                 "end-user"
               ]
             }
         );
        ActiveMenu.insert(
            {
              'name': 'Users',
              'path': 'admin/users',
              'gif': 'fa-user',
              'roles': [
                "admin"
              ]
            }
        );
        ActiveMenu.insert(
           {
             'name': 'Settings',
             'path': 'admin/settings',
             'gif': 'fa-cog',
             'roles': [
               "admin"
             ]
           }
        );
        ActiveMenu.insert(
           {
             'name': 'Settings',
             'path': 'accountSettings',
             'gif': 'fa-cog',
             'roles': [
                 "admin",
                 "candidate"
             ]
           }
        );
        ActiveMenu.insert(
           {
             'name': 'Settings',
             'path': 'userSettings',
             'gif': 'fa-cog',
             'roles': [
               "admin",
               "end-user"
             ]
           }
        );
    }
});

