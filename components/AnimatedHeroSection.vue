<template>
	<div class="grid lg:grid-flow-col lg:grid-cols-2 items-center gap-4">
		<div class="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
			<div class="mx-auto max-w-3xl text-center lg:text-start">
				<h1
					class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
				>
					Craft Winning Resumes.

					<span class="sm:block"> Boost Career Success. </span>
				</h1>

				<p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
					Your journey to the perfect resume begins here. Stand out with
					expertly crafted designs and content tailored to your goals.
				</p>

				
					<ReusableButton link="/get-started">
						Get Started
					</ReusableButton>
				
			</div>
		</div>
		<!-- <div class="grid justify-items-end">
			<img
				src="~/assets/images/home-page.jpg"
				class="object-cover"
				alt=""
			/>
		</div> -->
		<ImageView />
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ReusableButton from '~/components/blocks/ReusableButton.vue';
const words = ["Resume", "Portfolio", "Career"];
const currentWord = ref(words[0]);
let currentIndex = 0;

onMounted(() => {
	setInterval(() => {
		currentIndex = (currentIndex + 1) % words.length;
		currentWord.value = words[currentIndex];
	}, 3000);
});
</script>

<style scoped></style>
