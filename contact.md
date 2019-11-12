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
	});
</script>

# Get in touch

I'm currently taking on new work, you can contact me by emailing <a class="email" href="mailto:me@u-u.space">me@u-u.space</a>

I usually reply within 24 hours.
