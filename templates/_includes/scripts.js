// TODO minify in include...
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
  document.querySelectorAll(selector).forEach((el) => {
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

function createUUID() {
  let dt = new Date().getTime();

  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );

  return uuid;
}

{
  const url =
    "https://script.google.com/macros/s/AKfycbwHdowlbeaSQj05QW1dPYrBauzH-G6VfhBHIKP2fxVtKsCWgyQ/exec";
  const location = window.location.href;
  const screenHeight = window.screen.availHeight;
  const screenWidth = window.screen.availWidth;
  const UA = navigator.userAgent;
  const platform = navigator.platform;
  const touchpoints = navigator.maxTouchPoints;
  const referrer = document.referrer;
  const UUID = window.localStorage.getItem("uuid") || createUUID();
  window.localStorage.setItem("uuid", UUID);

  const data = [
    UUID,
    platform,
    touchpoints,
    UA,
    screenHeight,
    screenWidth,
    location,
    referrer,
  ];

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    mode: "no-cors",
  }).then((resp) => console.log(resp.body));
}
