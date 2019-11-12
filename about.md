---
layout: default
title: about
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

# About Me

I am a Sydney native who has always had a passion for technology. I've been programming since highschool and graduated from the University of Sydney with a Comp Sci/Math double major.

Since Graduating I've worked at a number of companies across many problem areas from Stock Photography at Canva to Mapping at Google. I enjoy learning about new areas when working and applying my technological knowledge to help solve real world problems.

## Principles

Working across many areas on projects of various sizes I've developed a set of principles that help technology projects succeed. I like to make sure my principles, my work and the people I work with align.

### Humans First

Technology is a tool to solve problems for people, not an ends itself. When considering technology solutions we should make sure they are solving human problems first and foremost.

### KISS

(aka Keep it simple, stupid) Unneeded complexity creates unecessary burdans on users, developers and maintaners. A simple and elegant solution is the benchmark on which other solutions should be measured.

### Open Technology

The world is built on open technology. Everyone benefits from the unpaid work of open source contributers and I strongly believe in acknowledging that work and giving back to the open source community.
