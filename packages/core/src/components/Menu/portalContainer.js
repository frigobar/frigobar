/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);

  return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem) {
  document.body.appendChild(rootElem);
}

/**
 * Creates or return the current container DOM element to be the portal root.
 * @param {String} id
 */
const portalContainer = id => {
  const rootElement = createRootElement(id);

  const parent = document.querySelector(`#${id}`);

  if (!parent) {
    addRootElement(rootElement);
  }

  return rootElement;
};

export default portalContainer;
