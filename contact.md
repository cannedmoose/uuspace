---
layout: default
title: contact
---

{%- include typewriter.html -%}

<script>
	window.addEventListener('DOMContentLoaded', (event) => {
		let textCursor = animatedCursor(`.wrapper *`, (t)=>{
				let r = t.split(" ");
				for (let i = 0; i < r.length - 1; i++) r[i]+= " ";
				return r;
			}, 30);
		textCursor.play();
		window.addEventListener('load', (event) => {
  		window.requestAnimationFrame(textCursor.play);
		});
	});
</script>

# Get in touch

I'm currently taking on new work.

If you have an idea of your project, please fill in the form below and I will get back to you within 24 hours.
