console.log = jest.fn();

test('Should change button text ', () => {
    document.body.innerHTML = '<button class="button-test">clique em mim</button>';
    require('./index.js');
    const button = document.querySelector(".button-test");
    button.click();
    expect(button.textContent).toBe("clicado");
})
