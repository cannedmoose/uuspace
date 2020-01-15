function createCursors(t, e) {
  let n = document.createElement("style");
  document.querySelector("head").appendChild(n);
  let r = 0;
  document.querySelectorAll(t).forEach(t => {
    if (t.firstElementChild) return;
    let n = e(t.innerText);
    let l = "";
    for (i = 0; i < n.length; i++) {
      let e = n[i];
      if (e.length > r) r = e.length;
      let o = "";
      for (j = 0; j < e.length; j++) {
        o += `<span>${e.charAt(j)}</span>`;
      }
      console.log(t.innerText);
      l += `<span class="curs0r">${o}</span>`;
    }
    t.innerHTML = l;
  });
  let l = `\n\t\t\t${t} > .curs0r > * {\n\t\t\t\tcolor: black;\n\t\t\t\ttext-shadow: none;\n\t\t\t}\n\t\t`;
  let o = 0;
  let c = () => {
    n.innerHTML = `\n\t\t\t\t${l}\n\t\t\t\t${t} > .curs0r > :nth-child(n + 1):nth-child(-n + ${o}) {\n\t\t\t\t\tcolor: white;\n\t\t\t\t\ttext-shadow: inherit;\n\t\t\t\t}\n\n\t\t\t\t${t} > .curs0r > :nth-child(${o +
      1}){\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tbox-shadow: 0px 0px 2px aqua, 0px 0px 10px aqua;\n\t\t\t\t\ttext-shadow: none;\n\t\t\t\t}\n\t\t\t\t`;
    o += 1;
    return o > r;
  };
  let a = () => {
    o = 0;
    n.innerHTML = `${l}`;
  };
  a();
  return { tick: c, reset: a };
}
function animatedCursor(t, e, n, r) {
  let { tick: l, reset: i } = createCursors(t, e);
  let o = i;
  let c = undefined;
  let a = () => {
    if (c) {
      return;
    }
    c = window.setInterval(() => {
      if (l() && c) {
        window.clearInterval(c);
        c = undefined;
        if (r) r();
      }
    }, n);
  };
  i = () => {
    if (c) window.clearInterval(c);
    c = undefined;
    o();
  };
  return { play: a, reset: i };
}
