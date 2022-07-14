const services = require('../services/services');

describe('Testando 3 novas funções', () => {
  it('Deveria existir 3 funções alteradas com os mocks', () => {
    services.toUpperCaseString = jest.spyOn(services, 'toUpperCaseString');
    services.firstLetter = jest.spyOn(services, 'firstLetter');
    services.concatanateString = jest.spyOn(services, 'concatanateString');
    services.toUpperCaseString.mockImplementation((string) => string.toLowerCase());
    services.firstLetter.mockImplementation((string) => string[string.length - 1]);
    services.concatanateString.mockImplementation((string, string2, string3) => string + string2 + string3);

    const lowerCaseString = services.toUpperCaseString('HEYBOY');
    const lastLetter = services.firstLetter('marcus');
    const gluedStrings = services.concatanateString('marcus', 'was', 'here');
    
    expect(lastLetter).toBe('s');
    expect(lowerCaseString).toBe('heyboy')
    expect(gluedStrings).toBe('marcuswashere')

    expect(services.toUpperCaseString).toHaveBeenCalled();
    expect(services.firstLetter).toHaveBeenCalled();
    expect(services.concatanateString).toHaveBeenCalled();

    expect(services.toUpperCaseString).toHaveBeenCalledTimes(1);
    expect(services.firstLetter).toHaveBeenCalledTimes(1);
    expect(services.concatanateString).toHaveBeenCalledTimes(1);
  });
  it('Deveria restaurar as funções alteradas com os mocks', () => {
    services.toUpperCaseString.mockRestore();
    services.firstLetter.mockRestore();
    services.concatanateString.mockRestore();

    services.toUpperCaseString = jest.spyOn(services, 'toUpperCaseString');;
    services.firstLetter = jest.spyOn(services, 'firstLetter');;
    services.concatanateString = jest.spyOn(services, 'concatanateString');;

    const upperCaseString = services.toUpperCaseString('HetbOY');
    const firstLetter = services.firstLetter('marcus');
    const gluedStrings = services.concatanateString('marcus', 'was');

    
    expect(upperCaseString).toBe('HETBOY');
    expect(firstLetter).toBe('m');
    expect(gluedStrings).toBe('marcuswas');


    expect(services.toUpperCaseString).toHaveBeenCalled();
    expect(services.firstLetter).toHaveBeenCalled();
    expect(services.concatanateString).toHaveBeenCalled();

    expect(services.toUpperCaseString).toHaveBeenCalledTimes(1);
    expect(services.firstLetter).toHaveBeenCalledTimes(1);
    expect(services.concatanateString).toHaveBeenCalledTimes(1);
  });
})

