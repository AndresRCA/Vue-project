<template>
	<div id="home-view" class="animated fadeInUpBig">
		<section class="section">
			<div class="container">
				<div class="columns is-multiline has-text-centered-mobile">
					<div class="column is-6 content">
						<h1 class="has-text-centered">What is this?</h1>
						<p>
							This is a website that contains things I probably like and things that are currently in my mind, this is also a way to record things I may forget in a way that pleases the eye, this website is basically a storage room.
						</p>
					</div>
					<div class="column is-6 content">
						<h1 class="has-text-centered">Why make this?</h1>
						<p>
							I made this because I was bored and wanted to create a multipage website... And because I think I'm depressed.
						</p>
					</div>
					<div class="column content">
						<h1 class="has-text-centered">What does this "storage room" contain?</h1>
						<p>
							It contains mostly a bunch of lists, it could also contain some definitions or notes I prefer to save inside this website for readability. The lists fall under the following categories:
						</p>
					</div>  
				</div>
			</div>
		</section>
		<section id="main-page">
			<article class="columns level has-text-centered-mobile">
				<div class="column is-4 image-logo">
					<img class="image" src="../assets/gastronomy.jpg" alt="food">
				</div>
				<div class="column content">
					<h2>Cooking</h2>
					<p>
						Cooking has been a passion for me since I was 12, don't forget that, but due to laziness and the situation of the country my ability to practice good gastronomy has been limited, but still, that has never stopped my curiosity for it, when I had free time I liked to investigate the science behind cooking and recipes I could afford, they weren't many but they brought me happiness nonetheless.
					</p>
					<p>
						In this category I will post recipes I like (some of which I might have created) or images containing information about spice combinations, herb data, etc.
					</p>
				</div>
			</article>
			<article class="columns level has-text-centered-mobile" >
				<div class="column is-4 is-hidden-tablet image-logo">
					<img class="image" src="../assets/ssbm.png" alt="ssbm" style="max-height: 230px; margin: 0 auto; display: block">
				</div>
				<div class="column content">
					<h2>Video Games</h2>
					<p>
						This category doesn't need an explanation, lately I've been playing just one game, Super Smash Bros Melee, this game requires high skill for competitive play, which is probably the reason I play it. As a child I've always been good with video games, so it was a matter of time until I found myself bored at "easy" games, so currently I mostly play games with a good story or high difficulty.
					</p>
					<p>
						In this category I will post video game titles I liked in the past and my experience with them.
					</p>
				</div>
				<div class="column is-4 is-hidden-mobile image-logo">
					<img class="image" style="max-height: 230px; margin: 0 auto; display: block" src="../assets/ssbm.png" alt="ssbm">
				</div>
			</article>
			<article class="columns level has-text-centered-mobile">
				<div class="column is-4 image-logo">
					<img class="image" src="../assets/programming.jpg" alt="programming" style="max-height: 360px;">
				</div>
				<div class="column content">
					<h2>Programming</h2>
					<p>
						Programming is something I wish I knew how to do at a very young age, I have loved programming since I started seeing it on my first semester of Telecommunications and lately I found that I'm constantly improving step by step whenever I have free time, however I usually spend my time programming inside my comfort zone, what I mean with this is that on hobby projects I don't try to use new techniques but instead use old knowledge, basically trying to reinvent the wheel with what I know. This is a habit I'm trying to leave behind.
					</p>
					<p>
						This category will be about strict learning, it could contain books about progamming, little tips about things one could forget between programming languages, web-development, etc.
					</p>
				</div>
			</article>
		</section>
	</div>    
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Maybe add the style here? I already have it on a single file so fuck it -->
<style lang="css">
#main-page article {
  padding: 40px;
  border-top: 5px solid #e5e5e5;
  border-bottom: 5px solid #e5e5e5;
}
#main-page article .image-logo {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
#main-page article img {
  border-radius: 8%;
}
#main-page article:first-child {
  background-color: #f6a96e;
  border-color: #f49851;
}
#main-page article:nth-child(2) {
  background-color: #7aafe4;
  border-color: #61a0df;
}
#main-page article:nth-child(3) {
  background-color: #baf286;
  border-color: #aaef6a;
}

.image-logo {
  padding: 10px 0;
}
</style>