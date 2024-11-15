<template>
	<div class="grid lg:grid-flow-col grid-cols-2 gap-6 ">
		<div class="mx-auto text-wrap">
			<h1 class="text-5xl font-semibold mb-4">
				Craft Resumes Transform Careers
			</h1>
			<p class="text-lg mb-6 max-w-2xl tracking-tight">
				Professional resume builder that helps you land your dream job in
				minutes, not hours. AI-powered ATS Friendly templates.
			</p>
			<div class="flex flex-col md:flex-row gap-4">
				<NuxtLink
					to="/create-resume"
					class="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white px-4 py-2 my-auto rounded-lg font-semibold hover:bg-blue-50 transition-colors"
				>
					Get Started
				</NuxtLink>
			</div>
		</div>
		<div class="grid justify-items-end">
			<img
				src="/img/hero-img.webp"
				class="object-cover min-w-[150px] rounded-[12px] h-[350px]"
				alt=""
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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

<style scoped>

</style>
