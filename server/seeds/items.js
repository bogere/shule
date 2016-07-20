Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

  //Backdoor for creating the users when meteor is starting.
  //Adding the users to Roles..when the meteor app is just starting.
   if(Meteor.users.find().count() === 0){ //no users in da db
   	//create 2 default users in the meteor web app... ur backdoor

   	   var users = [
         {name: "goldsoft", email: "goldsoft25@gmail.com", roles:['admin']},
         {name: "cherlotte", email: "cherlotte@gmail.com", roles:['moderator']},
         {name: "lisa"  , email: "lisa@gmail.com" , roles:['moderator'] }

   	   ];
       //define a function.. ES5... iterates through array ...of elements
       _.each(users, function(user){  //what about for each.. or the for loop n see the results.
            var id;
            id = Accounts.createUser({
               email: user.email,
               password: "Bob100?",
               profile:{name: user.name}

            });

            if (user.roles.length >0) {
       	    // Need _id of existing user record so this call must come
            // after `Accounts.createUser` or `Accounts.onCreate`
              Roles.addUsersToRoles(id, user.roles, 'default-group');
          }
          //Roles.addUsersToRoles call needs to come after Accounts.createUser or Accounts.onCreate 
          //or else the roles package won't be able to find the user record (since it hasn't been created yet). 
       });

   }

});
