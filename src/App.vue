<script>
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HomeView,
    Footer,
  },
}
</script>

<template>
  <div id="app" class="min-h-screen bg-white text-slate-900">
    <Navbar />

    <RouterView />

    <Footer />
  </div>
</template>
