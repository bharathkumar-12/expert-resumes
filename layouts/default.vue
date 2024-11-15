<template>
	<div class="relative text-[#1D1D1F] flex flex-col mx-auto ">
					
		<Header class="sticky top-0 z-50" />
		<main
			class="h-full max-w-[1440px] lg:px-[121px] px-4 my-4 "
		>	
		<ul class="circles ">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<NuxtPage />
		</main>
		<Footer class="" />
		
	</div>
</template>
<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
<style></style>
