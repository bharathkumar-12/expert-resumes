<template>
  <div>
    <!-- Original Gradient -->
    <section class="gradient-showcase">
      <div class="text-white p-8 from-blue-900 via-indigo-600 to-purple-500 bg-gradient-to-r min-h-[200px] rounded-lg mb-4 flex items-center justify-center">
        <div>
          <h2 class="text-2xl font-bold mb-2">Original Gradient</h2>
          <p class="opacity-90">from-blue-900 via-indigo-600 to-purple-500</p>
        </div>
      </div>

      <!-- Alternative Gradients -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <!-- Professional & Trust -->
        <div class="from-slate-900 via-blue-600 to-blue-400 bg-gradient-to-r min-h-[200px] rounded-lg p-8 text-white flex items-center justify-center">
          <div>
            <h2 class="text-2xl font-bold mb-2">Professional & Trust</h2>
            <p class="opacity-90">from-slate-900 via-blue-600 to-blue-400</p>
          </div>
        </div>

        <!-- Modern & Creative -->
        <div class="from-violet-600 via-purple-600 to-indigo-800 bg-gradient-to-r min-h-[200px] rounded-lg p-8 text-white flex items-center justify-center">
          <div>
            <h2 class="text-2xl font-bold mb-2">Modern & Creative</h2>
            <p class="opacity-90">from-violet-600 via-purple-600 to-indigo-800</p>
          </div>
        </div>

        <!-- Success & Growth -->
        <div class="from-blue-700 via-blue-800 to-gray-900 bg-gradient-to-r min-h-[200px] rounded-lg p-8 text-white flex items-center justify-center">
          <div>
            <h2 class="text-2xl font-bold mb-2">Success & Growth</h2>
            <p class="opacity-90">from-blue-700 via-blue-800 to-gray-900</p>
          </div>
        </div>

        <!-- Premium & Elegant -->
        <div class="from-gray-900 via-purple-900 to-violet-600 bg-gradient-to-r min-h-[200px] rounded-lg p-8 text-white flex items-center justify-center">
          <div>
            <h2 class="text-2xl font-bold mb-2">Premium & Elegant</h2>
            <p class="opacity-90">from-gray-900 via-purple-900 to-violet-600</p>
          </div>
        </div>
      </div>

      <!-- Example Implementation -->
      <div class="from-blue-700 via-blue-800 to-gray-900 bg-gradient-to-r min-h-[400px] rounded-lg p-12">
        <div class="max-w-4xl mx-auto text-white">
          <h1 class="text-5xl font-bold mb-6">Create Your Professional Resume</h1>
          <p class="text-xl mb-8 opacity-90">Land your dream job with our AI-powered resume builder. Professional templates and expert suggestions to make your resume stand out.</p>
          <div class="flex gap-4">
            <button class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Get Started Free
            </button>
            <button class="bg-blue-900 bg-opacity-30 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-40 transition-colors">
              View Templates
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional logic needed
</script>