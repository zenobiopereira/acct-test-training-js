console.log = jest.fn();

describe("Should change button Properties", () => {
  beforeAll(() => {
    document.body.innerHTML = '<button class="button-test">Contact-Us</button>';
    require('./index.js');
  });

  test('Should toggle button text ', () => {
    const button = document.querySelector(".button-test");

    button.click();
    expect(button.textContent).toBe("Oh no!");

    button.click();
    expect(button.textContent).toBe("Contact-us");
  });

  test('Should toggle button class', () => {
    const button = document.querySelector(".button-test");

    button.click();
    expect(button.className).toBe("button-clicked")

    button.click();
    expect(button.className).toBe("button-test")
  });
})
