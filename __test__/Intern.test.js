import Intern from "../lib/Intern.js";

test("creates an Intern object", () => {
  const intern = new Intern("CNtervisi", 12, "c.ntervisi@outlook.com", "SFSU");
  expect(intern.school).toEqual(expect.any(String));
});

test("gets employee school", () => {
  const intern = new Intern("CNtervisi", 12, "c.ntervisi@outlook.com", "SFSU");
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets role of employee", () => {
  const intern = new Intern("CNtervisi", 12, "c.ntervisi@outlook.com", "SFSU");
  expect(intern.getRole()).toEqual("Intern");
});
