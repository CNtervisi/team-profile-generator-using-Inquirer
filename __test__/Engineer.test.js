import Engineer from "../lib/Engineer.js";

test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "CNtervisi",
    12,
    "c.ntervisi@outlook.com",
    "CNtervisi"
  );
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer github value", () => {
  const engineer = new Engineer(
    "CNtervisi",
    12,
    "c.ntervisi@outlook.com",
    "CNtervisi"
  );
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets role of employee", () => {
  const engineer = new Engineer(
    "CNtervisi",
    12,
    "c.ntervisi@outlook.com",
    "CNtervisi"
  );
  expect(engineer.getRole()).toEqual("Engineer");
});
