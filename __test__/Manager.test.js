import Manager from "../lib/Manager.js";

test("creates a Manager object", () => {
  const manager = new Manager("CNtervisi", 12, "c.ntervisi@outlook.com", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager("CNtervisi", 12, "c.ntervisi@outlook.com");

  expect(manager.getRole()).toEqual("Manager");
});
