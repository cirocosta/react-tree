jest.autoMockOff();

var Memoizer = require('../Memoizer');

describe('memoizer', () => {
  it('be defined', () => {
    expect(Memoizer).toBeDefined();
  });

  it('throw if no function passed', () => {
    expect(() => {new Memoizer()}).toThrow;
  });

  var mock;

  beforeEach(() => {
    mock = jest.genMockFunction();
  });

  describe('_memoize,', () => {
    var mem;

    beforeEach(() => {
      mem = null;
    });

    it('call the funciton as expected', () => {
      mem = new Memoizer(mock);
      mem._memoize(1);

      expect(mock).toBeCalled();
      expect(mock).toBeCalledWith(1);
    });

    it('memoize for one arg', () => {
      var res = false;

      mock.mockReturnValueOnce(true);
      mem = new Memoizer(mock);

      for (var i = 0; i < 5; i++)
        res = mem._memoize(1);

      mem._memoize(1);

      expect(mock).toBeCalledWith(1);
      expect(mock.mock.calls.length).toEqual(1);
      expect(res).toBe(true);
    });
  });

  describe('initializator', () => {
    it('initialize properly', () => {
      var fun = new Memoizer(mock).init();

      fun(1);

      expect(mock).toBeCalled();
      expect(mock).toBeCalledWith(1);
    });
  });

});
