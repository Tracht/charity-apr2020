var PairController = require('../controllers/pairs');

describe('Pair Controller', () => {
  describe('._generatePairs', () => {
    it('can generate a single pair', () => {
      var data = {
        drivers: [ {name: 'Bradley'} ],
        guests: [ {name: 'Doris' } ]
      }

      var pairs = [
        {id: 1, driver: 'Bradley', guest: 'Doris'}
      ]
      

      expect(PairController._generatePairs(data)).toEqual(pairs);
    });

    it('can generate two pairs', () => {
      var data = {
        drivers: [ {name: 'Bradley'}, {name: 'Zeus'} ],
        guests: [ {name: 'Doris' }, { name: 'Kimothey' } ]
      }

      var mixedData = {
        drivers: [ {name: 'Bradley'}, {name: 'Zeus'} ],
        guests: [ {name: 'Doris' }, { name: 'Kimothey' } ]
      }

      jest.spyOn(PairController, '_mixMembers').mockReturnValue(mixedData);

      var pairs = [
        {id: 1, driver: 'Bradley', guest: 'Doris'},
        {id: 2, driver: 'Zeus', guest: 'Kimothey'}
      ]

      expect(PairController._generatePairs(data)).toEqual(pairs);
    });

    it('can generate multiple pairs', () => {

      var data = {
        drivers: [ {name: 'Bradley'}, {name: 'Zeus'}, {name: 'Kevin'} ],
        guests: [ {name: 'Doris' }, { name: 'Kimothey'}, {name: 'Perry'} ]
      }

      var mixedData = {
        drivers: [ {name: 'Bradley'}, {name: 'Zeus'}, {name: 'Kevin'} ],
        guests: [ {name: 'Kimothey' }, { name: 'Perry'}, {name: 'Doris'} ]
      }

      jest.spyOn(PairController, '_mixMembers').mockReturnValue(mixedData);
      //have a test that checks that _mixMembers calls _shuffleArray

      var pairs = [
        {id: 1, driver: 'Bradley', guest: 'Kimothey'},
        {id: 2, driver: 'Zeus', guest: 'Perry'},
        {id: 3, driver: 'Kevin', guest: 'Doris'}
      ]

      expect(PairController._generatePairs(data)).toEqual(pairs);
    });

    it('Pair controller _mixMembers is called when generating pairs', () => {
      var mixMemberSpy = jest.spyOn(PairController, '_mixMembers');

      var data = {
        drivers: [ {name: 'Bradley'} ],
        guests: [ {name: 'Doris' } ]
      }

      PairController._generatePairs(data);

      expect(mixMemberSpy).toHaveBeenCalled();
    });
  });
});