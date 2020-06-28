var HomepageController = require('../../controllers/homepage');

describe('Homepage Controller', () => {
  describe('Driver List', () => {
    it('sends driver data', () => {
      var memberModelMock = {
        find: (callback) => {
          var result = [{
            name: 'Dec',
            role: 'driver'
          },
          {
            name: 'Cat',
            role: 'guest'
          },
          ]
          var err = {}
          callback(err, result);
        }
      }
      controller = HomepageController.DriverList(memberModelMock);
      var res = {
        send: jest.fn()
      }
      var req = {}
      controller(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});