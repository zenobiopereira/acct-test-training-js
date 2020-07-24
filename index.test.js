console.log = jest.fn();

describe("Should change button Properties", () => {
  beforeAll(() => {
    document.body.innerHTML =
      ' <button class="button-login">Authenticate</button>';
    require("./index");
  });

  test("Should toggle button text ", () => {
    const button = document.querySelector(".button-login");

    button.click();
    expect(button.textContent).toBe("Authenticating...");

    button.click();
    expect(button.textContent).toBe("Authenticate");
  });

  test("Should toggle button class", () => {
    const button = document.querySelector(".button-login");

    button.click();
    expect(button.className).toBe("button-clicked");

    button.click();
    expect(button.className).toBe("button-login");
  });
});
