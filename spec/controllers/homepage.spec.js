var HomepageController = require('../../controllers/homepage');

describe('Homepage Controller', () => {
  var memberModelMock;
  var res;
  var req;

  beforeEach(() => {
    memberModelMock = {
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

    res = {
      send: jest.fn()
    }
    req = {}
  });

  describe('Driver List', () => {
    it('sends driver data', () => {
      controller = HomepageController.DriverList(memberModelMock);
      controller(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('Guest List', () => {
    it('sends guest data', () => {
      controller = HomepageController.GuestList(memberModelMock);
      controller(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
