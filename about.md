---
layout: default
title: about
---

<script>
	window.addEventListener('DOMContentLoaded', (event) => {
		let textCursor = animatedCursor(`.wrapper *`, (t)=>{
				let r = t.split(" ");
				for (let i = 0; i < r.length - 1; i++) r[i]+= " ";
				return r;
			}, 30);
		window.addEventListener('load', (event) => {
  		window.requestAnimationFrame(textCursor.play);
		});
	});
</script>

# About Me

Callan is a Sydney-based programmer who grew up with a passion for technology. He began programming in high school then went on to complete a Bachelor of Science, with a double major in computer science and maths, graduating from the University of Sydney in 2013.

Following his passion, after graduation he moved to Silicon Valley to work at Google on the My Maps team. Looking for a change and a move back to Sydney, he joined the then small team at Canva working on both front and back end software engineering. Since taking some time to explore the world and expand his horizons, Callan is now putting his varied experiences into his freelancing projects.

## Principles

My passion lies in technology, the structures that underpin its development, its conceptual and real-world applications. I thrive working on projects which allow me to utilise a wide range of skills, solve problems and ultimately bring good things into the world.

Working across many areas on projects of various sizes I’ve developed a set of principles that help technological projects succeed. I like to make sure my principles, my work and the people I work with align.

### Humans First

Technology is a tool to solve problems for people, not simply an end in itself. When considering technological solutions, it is crucial to make sure they are solving human problems first and foremost.

### KISS

I believe that the best projects have clean, efficient code and are delivered to clients in a timely, organised and well-documented manner. Unneeded complexity creates unnecessary burdens on users, developers and maintainers. Simple and elegant solutions are the benchmark on which other solutions should be measured.

### Open Technology

The world is built on open technology. Everyone benefits from the unpaid work of open source contributers and I strongly believe in acknowledging that work and giving back to the open source community.
