<template>
  <div class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Professional Templates</h2>
      <div class="relative">
        <div class="flex overflow-hidden">
          <div class="flex transition-transform duration-500"
               :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="template in templates" 
                 :key="template.id" 
                 class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl 
                          transition-shadow duration-300">
                <img :src="template.image" :alt="template.name" class="w-full h-64 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">{{ template.name }}</h3>
                  <p class="text-gray-600 mb-4">{{ template.description }}</p>
                  <button class="text-blue-600 font-semibold hover:text-blue-800">
                    Use Template →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="prevSlide" 
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full 
                       shadow-lg hover:bg-gray-50 transition-colors">
          ←
        </button>
        <button @click="nextSlide" 
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full 
                       shadow-lg hover:bg-gray-50 transition-colors">
          →
        </button>
      </div>
      <div class="flex justify-center mt-6 gap-2">
        <button v-for="(_, index) in templates" 
                :key="index"
                @click="goToSlide(index)"
                :class="[
                  'w-3 h-3 rounded-full transition-colors',
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                ]">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const templates = [
  {
    id: 1,
    name: 'Professional',
    description: 'Clean and modern design perfect for corporate positions',
    image: '/api/placeholder/400/320'
  },
  {
    id: 2,
    name: 'Creative',
    description: 'Stand out with a unique layout for creative roles',
    image: '/api/placeholder/400/320'
  },
  {
    id: 3,
    name: 'Executive',
    description: 'Sophisticated design for senior positions',
    image: '/api/placeholder/400/320'
  },
  {
    id: 4,
    name: 'Technical',
    description: 'Optimized for technical roles and developers',
    image: '/api/placeholder/400/320'
  }
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % templates.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? templates.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>