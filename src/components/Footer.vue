<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerNavItems: [
        { name: 'Kontakt', route: '/kontakt' },
        { name: 'O nás', route: '/o-nas' },
        { name: 'Ochrana súkromia', route: '/ochrana-sukromia' },
        { name: 'Univerzita (UKF)', route: '/univerzita' },
      ],
    }
  },
}
</script>

<template>
  <footer class="bg-slate-900 text-white/70">
    <div class="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-12 sm:px-6 lg:px-8">
      <div class="col-span-12 md:col-span-5">
        <p class="font-serif text-xl font-bold text-white">Občas nečas</p>
        <p class="mt-2 text-sm">
          Nezávislý magazín študentov Univerzity Konštantína Filozofa v Nitre.
        </p>
      </div>
      <nav
        class="col-span-12 flex flex-wrap gap-x-8 gap-y-3 text-sm md:col-span-7 md:justify-end"
        aria-label="Footer navigation"
      >
        <router-link
          v-for="item in footerNavItems"
          :key="item.name"
          :to="item.route"
          class="transition-colors hover:text-white"
        >
          {{ item.name }}
        </router-link>
      </nav>
      <p class="col-span-12 mt-6 border-t border-white/15 pt-6 text-xs">
        © 2026 Občas nečas. Všetky práva vyhradené.
      </p>
    </div>
  </footer>
</template>
