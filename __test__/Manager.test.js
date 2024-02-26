import Manager from "../lib/Manager.js";

test("creates a Manager object", () => {
  const manager = new Manager("Nicole", 90, "nicole.elisaw@gmail", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager("Nicole", 90, "nicole.elisaw@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
