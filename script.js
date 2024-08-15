function createDOM(tagName) {
  const newElement = document.createElement(tagName);
  newElement.classList.add("item");
  document.body.appendChild(newElement);
  return newElement;
}
function removeDOM(cssSelector) {
  const unusedElement = document.querySelector(cssSelector);
  if (!unusedElement) {
    console.error(`No element found with CSS selector "${cssSelector}"`);
    return;
  }

  unusedElement.remove();
  return unusedElement;
}
