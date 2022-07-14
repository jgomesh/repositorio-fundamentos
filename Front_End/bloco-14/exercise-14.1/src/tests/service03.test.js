const service = require("../services/services");
describe("testando a requisição", () => {
  service.fetchRandomDog = jest.fn();
  afterEach(service.fetchRandomDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchRandomDog.mockResolvedValue("request success");

    service.fetchRandom();
    expect(service.fetchRandomDog).toHaveBeenCalled();
    expect(service.fetchRandomDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchRandomDog()).resolves.toBe("request success");
    expect(service.fetchRandomDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchRandomDog.mockRejectedValue("request failed");

    expect(service.fetchRandomDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchRandomDog()).rejects.toMatch("request failed");
    expect(service.fetchRandomDog).toHaveBeenCalledTimes(1);
  });
});