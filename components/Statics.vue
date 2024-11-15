<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="stat in stats" 
             :key="stat.id" 
             class="text-center">
          <div class="text-4xl font-bold text-blue-600 mb-2">
            <animated-counter 
              :end-value="stat.value"
              :suffix="stat.suffix"
              :format="stat.format"
            />
          </div>
          <p class="text-gray-600">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// AnimatedCounter component
const AnimatedCounter = defineComponent({
  name: 'AnimatedCounter',
  props: {
    endValue: {
      type: Number,
      required: true
    },
    suffix: {
      type: String,
      default: ''
    },
    format: {
      type: Function,
      default: value => value
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  setup(props) {
    const currentValue = ref(0)
    const animationFrame = ref(null)

    const animate = (timestamp) => {
      if (!animationFrame.value.startTime) {
        animationFrame.value.startTime = timestamp
      }

      const progress = timestamp - animationFrame.value.startTime
      const percentage = Math.min(progress / props.duration, 1)

      currentValue.value = Math.floor(percentage * props.endValue)

      if (percentage < 1) {
        requestAnimationFrame(animate)
      } else {
        currentValue.value = props.endValue
      }
    }

    onMounted(() => {
      animationFrame.value = { startTime: null }
      requestAnimationFrame(animate)
    })

    return () => h('span', null, [
      props.format(currentValue.value),
      props.suffix
    ])
  }
})

const stats = [
  {
    id: 1,
    value: 50000,
    suffix: '+',
    label: 'Resumes Created',
    format: val => val.toLocaleString()
  },
  {
    id: 2,
    value: 92,
    suffix: '%',
    label: 'Success Rate'
  },
  {
    id: 3,
    value: 24,
    suffix: 'h',
    label: 'Average Response Time'
  },
  {
    id: 4,
    value: 4.8,
    suffix: '/5',
    label: 'User Rating',
    format: val => val.toFixed(1)
  }
]
</script>