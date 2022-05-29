const services = require('../services/services');
jest.mock('../services/services');


describe('Aprendendo sobre mocks', () => {
  it('Tesamos se a função randomHundredNumber é chamada', () => {
    services.randomHundredNumber.mockReturnValue(10);
    const result = services.randomHundredNumber();
    expect(services.randomHundredNumber).toHaveBeenCalled();
    expect(result).toBe(10);
    expect(services.randomHundredNumber).toHaveBeenCalledTimes(1)
  });

  it('Teste de sobrescrição', () => {
    services.randomHundredNumber.mockClear();
    services.randomHundredNumber.mockImplementation((a , b) => a / b)
    const result = services.randomHundredNumber(10, 5);
    expect(services.randomHundredNumber).toHaveBeenCalledTimes(1);
    expect(result).toBe(2);
  });

  it('Teste de sobrescrição 2', () => {
    services.randomHundredNumber.mockClear();
    services.randomHundredNumber.mockImplementation((a , b, c) => ( a * b * c ));
    const result = services.randomHundredNumber(10, 5, 10);
    expect(services.randomHundredNumber).toHaveBeenCalledTimes(1);
    expect(result).toBe(500);

    services.randomHundredNumber.mockReset();
    services.randomHundredNumber.mockImplementation((a) => ( a * 2));
    const result2 = services.randomHundredNumber(4);
    expect(services.randomHundredNumber).toHaveBeenCalledTimes(1);
    expect(result2).toBe(8);
  });
})

