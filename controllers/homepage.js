var Member = require('../models/member');

var HomepageController = {

  CreateMember: (request, response) => {

    var member = new Member({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address
    });

    member.save((err) => {
      if (err) { console.log(err) }
      // sendFlashMessage(response, request, '/', 'Member saved!');
    });
  },

  DriverList: (memberModel) => (request, response) => {
    let drivers = [];

    memberModel.find((err, result) => {
      result.forEach((member) => {

        if(member.role === 'driver'){
          drivers.push(member);
        }
      });
      response.send(drivers);
    });
  },

  GuestList: (memberModel) => (request, response) => {
    let guests = [];

    memberModel.find((err, result) => {
      result.forEach((member) => {

        if(member.role === 'guest'){
          guests.push(member);
        }
      });
      response.send(guests);
    });
  },
}

// var sendFlashMessage = (response, request, route, message) => {
//   request.session.errorMessage = message;
//   response.redirect(route);
// };

module.exports = HomepageController;
