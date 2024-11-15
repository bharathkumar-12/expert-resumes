<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      
      <div class="relative max-w-4xl mx-auto">
        <!-- Testimonials Slider -->
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out"
               :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="testimonial in testimonials" 
                 :key="testimonial.id"
                 class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-xl p-8 shadow-lg">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    {{ testimonial.initials }}
                  </div>
                  <div class="ml-4">
                    <h3 class="font-semibold">{{ testimonial.name }}</h3>
                    <p class="text-gray-600 text-sm">{{ testimonial.position }}</p>
                  </div>
                </div>
                <div class="mb-6">
                  <div class="flex text-yellow-400 mb-2">
                    <span v-for="i in 5" :key="i" class="mr-1">
                      ★
                    </span>
                  </div>
                  <p class="text-gray-700 italic">{{ testimonial.comment }}</p>
                </div>
                <p class="text-sm text-gray-500">{{ testimonial.date }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <button @click="prevSlide" 
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 
                       rounded-full shadow-lg hover:bg-gray-50 transition-colors">
          ←
        </button>
        <button @click="nextSlide" 
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 
                       rounded-full shadow-lg hover:bg-gray-50 transition-colors">
          →
        </button>
        
        <!-- Dots Navigation -->
        <div class="flex justify-center mt-8 gap-2">
          <button v-for="(_, index) in testimonials" 
                  :key="index"
                  @click="goToSlide(index)"
                  :class="[
                    'w-2 h-2 rounded-full transition-colors',
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  ]">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    position: 'Software Engineer',
    comment: 'The AI-powered suggestions helped me highlight my technical skills perfectly. Got 3 interview calls within a week!',
    date: 'Last week',
  },
  {
    id: 2,
    name: 'Michael Chen',
    initials: 'MC',
    position: 'Marketing Manager',
    comment: 'Clean, professional templates and an intuitive interface. Made creating multiple versions of my resume a breeze.',
    date: '2 weeks ago',
  },
  {
    id: 3,
    name: 'Emma Davis',
    initials: 'ED',
    position: 'UX Designer',
    comment: 'The modern templates really helped my portfolio stand out. Landed my dream job at a top tech company!',
    date: 'Last month',
  },
  {
    id: 4,
    name: 'James Wilson',
    initials: 'JW',
    position: 'Sales Director',
    comment: 'Excellent tool for quantifying achievements. The analytics section really helped showcase my sales performance.',
    date: '1 month ago',
  }
]

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? testimonials.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>