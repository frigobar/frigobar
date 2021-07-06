/**
 * Creates DOM element to be used as React root.
 */
function createRootElement(id: string) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);

  return rootContainer;
}

/**
 * Appends element as last child of body.
 */
function addRootElement(rootElem: HTMLElement) {
  document.body.appendChild(rootElem);
}

/**
 * Creates or return the current container DOM element to be the portal root.
 */
const portalContainer = (id: string): HTMLDivElement => {
  const rootElement = createRootElement(id);

  const parent = document.querySelector(`#${id}`);

  if (!parent) {
    addRootElement(rootElement);
  }

  return rootElement;
};

export default portalContainer;
