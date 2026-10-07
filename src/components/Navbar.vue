<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      navItems: [
        'UKF Life',
        'Zo školstva',
        'Šport',
        'Medzi riadkami',
        'On predstavuje',
        'Rande s Nitrou',
        'Kultúra a umenie',
        'Eko',
        'Aby duše rozkvitli',
        'Názory a komentáre',
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/95 backdrop-blur">
    <div class="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Ľavá strana: Logo -->
      <div class="shrink-0">
        <a href="#" aria-label="Občas nečas home" class="inline-flex items-center gap-3">
          <span
            class="flex h-12 px-3 items-center justify-center rounded-lg bg-blue-600 text-center font-serif text-sm font-bold tracking-tight text-white shadow-sm"
          >
            Tu sa zobrazí logo
          </span>
        </a>
      </div>

      <!-- Stred: Navigácia (max 75% šírky, jemne väčšie písmo text-[13px]) -->
      <nav
        class="hidden w-full max-w-[75%] flex-wrap items-center justify-center gap-x-3.5 gap-y-0.5 md:flex"
        aria-label="Primary navigation"
      >
        <a
          v-for="item in navItems"
          :key="item"
          href="#"
          class="border-b-2 border-transparent py-1 text-[13px] font-bold text-slate-900/75 transition-colors hover:border-blue-600 hover:text-blue-600"
        >
          {{ item }}
        </a>
      </nav>

      <!-- Pravá strana: Vyhľadávanie a Subscribe -->
      <div class="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Search"
          class="grid size-10 place-items-center text-slate-900 transition-colors hover:bg-slate-100 hover:text-blue-600"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
        </button>
        <button
          type="button"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="toggleMenu"
          class="grid size-10 place-items-center text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <template v-if="menuOpen">
              <path d="M5 5 19 19" />
              <path d="M19 5 5 19" />
            </template>
            <template v-else>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </template>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobilné menu -->
    <nav
      v-if="menuOpen"
      class="border-t border-slate-900/10 bg-white px-4 py-5 sm:px-6 md:hidden"
      aria-label="Mobile navigation"
    >
      <a
        v-for="item in navItems"
        :key="item"
        href="#"
        class="block border-b border-slate-900/10 py-3 font-serif text-base font-bold text-slate-900 hover:text-blue-600"
      >
        {{ item }}
      </a>
    </nav>
  </header>
</template>
