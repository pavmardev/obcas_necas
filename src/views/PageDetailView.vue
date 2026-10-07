<script>
export default {
  name: 'PageDetailView',
  props: ['slug'],
  data() {
    return {
      pagesData: {
        'posli-tip-na-clanok': {
          title: 'Pošli tip na článok',
          subtitle: 'Máš zaujímavý tip, tému alebo info o dianí na UKF? Daj nám vedieť.',
          type: 'tip-form',
        },
        'pridaj-sa-do-redakcie': {
          title: 'Pridaj sa do redakcie',
          subtitle: 'Píšeme, fotíme, natáčame a hľadáme nových nadšencov do tímu.',
          type: 'join-form',
        },
        'studentska-inzercia': {
          title: 'Študentská inzercia',
          subtitle: 'Hľadáš spolubývajúceho, predávaš skriptá alebo ponúkaš brigádu?',
          type: 'ads-list',
        },
        'nastenka-podujati': {
          title: 'Nástenka podujatí',
          subtitle: 'Prehľad blížiacich sa študentských akcií, workshopov a párty v Nitre.',
          type: 'events-list',
        },
      },
      // Lokálny stav pre interaktívne formuláre
      form: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
    }
  },
  computed: {
    page() {
      return (
        this.pagesData[this.slug] || {
          title: 'Informácie',
          subtitle: 'Vitajte na stránke univerzitného magazínu.',
          type: 'default',
        }
      )
    },
  },
  methods: {
    submitForm() {
      this.submitted = true
    },
  },
}
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 pt-32 pb-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Navigačný odkaz späť -->
      <router-link
        to="/"
        class="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-slate-900 mb-8"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="size-4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </svg>
        Späť na hlavnú stránku
      </router-link>

      <!-- Hlavička stránky -->
      <header class="mb-12">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">UKF Magazín</p>
        <h1 class="mt-3 font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
          {{ page.title }}
        </h1>
        <p class="mt-4 text-lg text-slate-900/70">
          {{ page.subtitle }}
        </p>
      </header>

      <!-- Dynamický obsah podľa typu stránky -->
      <div class="bg-slate-50 border border-slate-900/10 p-8 sm:p-12">
        <!-- Formulár (pre Tip / Redakciu) -->
        <div v-if="page.type === 'tip-form' || page.type === 'join-form'">
          <div v-if="submitted" class="text-center py-8">
            <h3 class="font-serif text-2xl text-blue-600 font-bold">Ďakujeme za tvoju správu!</h3>
            <p class="mt-2 text-slate-900/70">Ozveme sa ti hneď, ako to bude možné.</p>
          </div>
          <form v-else @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >Meno a priezvisko</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none"
                placeholder="Napr. Ján Mrkvička"
              />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >E-mailová adresa</label
              >
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none"
                placeholder="jan.mrkvicka@student.ukf.sk"
              />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {{
                  page.type === 'tip-form'
                    ? 'Podrobnosti o tipe / Téma'
                    : 'Prečo sa chceš pridať? (Skúsenosti)'
                }}
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full border border-slate-300 bg-white p-4 text-slate-900 focus:border-blue-600 focus:outline-none"
                placeholder="Napíš nám viac..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center gap-3 bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-900"
            >
              Odoslať správu
            </button>
          </form>
        </div>

        <!-- Inzercia / Podujatia (ukážkový výpis) -->
        <div v-else class="space-y-6">
          <div class="border-b border-slate-200 pb-6">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600"
              >Aktuálna ponuka</span
            >
            <h3 class="font-serif text-2xl text-slate-900 mt-1">
              Hľadá sa spolubývajúci na Zobore
            </h3>
            <p class="mt-2 text-slate-900/70">
              Samostatná izba v 3-izbovom byte blízko internátov. Volný od novembra.
            </p>
          </div>
          <div class="border-b border-slate-200 pb-6">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Podujatie</span>
            <h3 class="font-serif text-2xl text-slate-900 mt-1">Imatrikulačná Párty UKF 2026</h3>
            <p class="mt-2 text-slate-900/70">
              Tradičné privítanie prvákov v nitrianskom klubu. Štvrtok od 21:00.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
