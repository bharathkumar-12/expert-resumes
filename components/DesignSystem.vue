<template>
    <div class="min-h-screen bg-gray-50 p-8">
  <div class="max-w-7xl mx-auto space-y-8">
    <!-- Colors -->
    <section class="bg-white rounded-lg p-6 shadow">
      <h2 class="text-xl font-bold mb-4">Colors</h2>
      
      <!-- Primary Colors -->
      <div class="grid grid-cols-4 gap-4 mb-4">
        <div>
          <span class="block h-12 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded mb-2"></span>
          <code class="text-xs">Primary Gradient</code>
        </div>
        <div>
          <span class="block h-12 bg-blue-800 rounded mb-2"></span>
          <code class="text-xs">Primary</code>
        </div>
        <div>
          <span class="block h-12 bg-purple-800 rounded mb-2"></span>
          <code class="text-xs">Secondary</code>
        </div>
        <div>
          <span class="block h-12 bg-gray-800 rounded mb-2"></span>
          <code class="text-xs">Gray</code>
        </div>
      </div>

      <!-- Status Colors -->
      <div class="grid grid-cols-4 gap-4">
        <div>
          <span class="block h-8 bg-green-600 rounded mb-2"></span>
          <code class="text-xs">Success</code>
        </div>
        <div>
          <span class="block h-8 bg-red-600 rounded mb-2"></span>
          <code class="text-xs">Error</code>
        </div>
        <div>
          <span class="block h-8 bg-yellow-500 rounded mb-2"></span>
          <code class="text-xs">Warning</code>
        </div>
        <div>
          <span class="block h-8 bg-blue-500 rounded mb-2"></span>
          <code class="text-xs">Info</code>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="bg-white rounded-lg p-6 shadow">
      <h2 class="text-xl font-bold mb-4">Typography</h2>
      <div class="space-y-4">
        <h1 class="text-4xl font-bold">Heading 1</h1>
        <h2 class="text-3xl font-bold">Heading 2</h2>
        <h3 class="text-2xl font-semibold">Heading 3</h3>
        <p class="text-base">Regular text</p>
        <p class="text-sm text-gray-600">Small text</p>
      </div>
    </section>

    <!-- Buttons -->
    <section class="bg-white rounded-lg p-6 shadow">
      <h2 class="text-xl font-bold mb-4">Buttons</h2>
      <div class="flex gap-4 flex-wrap">
        <button class="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white px-4 py-2 rounded font-medium">
          Primary
        </button>
        <button class="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded font-medium">
          Secondary
        </button>
        <button class="text-blue-800 font-medium">
          Text Button
        </button>
      </div>
    </section>

    <!-- Form Elements -->
    <section class="bg-white rounded-lg p-6 shadow">
      <h2 class="text-xl font-bold mb-4">Form Elements</h2>
      <div class="space-y-4 max-w-sm">
        <div>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" placeholder="Text input">
        </div>
        <div>
          <select class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
            <option>Select option</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded">
          <span class="text-sm">Checkbox</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" class="w-4 h-4 text-blue-600 border-gray-300">
          <span class="text-sm">Radio</span>
        </div>
      </div>
    </section>
  </div>
</div>
</template>
<script>
</script>