/**
	Cool typewriter effect. 
	
	.toshow tracks blocks not yet shown 
	.showing tracks current block being shown
	current character is tracked by a count data attribute

	Here's the flow:
	To start typewriting pass a selector
	Blocks have a next selector
	*/

function createCursors(selector, splitter) {
  // selector selects elements that should only contain text
  // splitter splits that text into a bunch of chunks
  // each chunk gets a cursor

  let styleEl = document.createElement("style");
  document.querySelector("head").appendChild(styleEl);

  let maxChunk = 0;
  // Need to add style node just for this call.
  document.querySelectorAll(selector).forEach(el => {
    // Skip out on non-leaf nodes.
    if (el.firstElementChild) return;
    // TODO (make pass this element)
    let split = splitter(el.innerText);
    let elHTML = "";
    for (i = 0; i < split.length; i++) {
      let chunk = split[i];
      if (chunk.length > maxChunk) maxChunk = chunk.length;
      let chunkHTML = "";
      for (j = 0; j < chunk.length; j++) {
        chunkHTML += `<span>${chunk.charAt(j)}</span>`;
      }
      console.log(el.innerText);
      elHTML += `<span class="curs0r">${chunkHTML}</span>`;
    }
    el.innerHTML = elHTML;
  });

  // TODO pass in styling...
  let blanker = `
			${selector} > .curs0r > * {
				color: black;
				text-shadow: none;
			}
		`;

  let count = 0;
  let tick = () => {
    styleEl.innerHTML = `
				${blanker}
				${selector} > .curs0r > :nth-child(n + 1):nth-child(-n + ${count}) {
					color: white;
					text-shadow: inherit;
				}

				${selector} > .curs0r > :nth-child(${count + 1}){
					background-color: white;
					color: white;
					fill: white;
					box-shadow: 0px 0px 2px aqua, 0px 0px 10px aqua;
					text-shadow: none;
				}
				`;
    count += 1;
    return count > maxChunk;
  };

  let reset = () => {
    count = 0;
    styleEl.innerHTML = `${blanker}`;
  };

  reset();

  return { tick, reset };
}

function animatedCursor(selector, splitter, timeout, doneCallback) {
  let { tick, reset } = createCursors(selector, splitter);
  let oreset = reset;

  let handle = undefined;
  let play = () => {
    if (handle) {
      return;
    }
    handle = window.setInterval(() => {
      if (tick() && handle) {
        window.clearInterval(handle);
        handle = undefined;
        if (doneCallback) doneCallback();
      }
    }, timeout);
  };

  reset = () => {
    if (handle) window.clearInterval(handle);
    handle = undefined;
    oreset();
  };

  return { play, reset };
}