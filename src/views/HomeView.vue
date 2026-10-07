<script>
export default {
  name: 'HomeView',
  data() {
    return {
      images: {
        hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=2000',
        lab: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
        archaeology:
          'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
        library:
          'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
        editor:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400',
      },
      latest: [
        {
          id: 1,
          category: 'Zo školstva',
          title: 'Nové semestrálne harmonogramy prinášajú zmeny pre študentov UKF',
          author: 'Bc. Nina Kováčová',
          date: 'Október 3, 2026',
          image: null,
        },
        {
          id: 2,
          category: 'Kultúra a umenie',
          title: 'Nitrianske divadelné dosky ožívajú novou študentskou sezónou',
          author: 'Samuel Horváth',
          date: 'September 29, 2026',
          image: null,
        },
        {
          id: 3,
          category: 'UKF Life',
          title: 'Život na Zobore: Čo všetko obnáša bývanie v študentských domovoch',
          author: 'Laura Tóthová',
          date: 'September 25, 2026',
          image: null,
        },
      ],
      topics: [
        { name: 'Pošli tip na článok', icon: 'atom', slug: 'posli-tip-na-clanok' },
        { name: 'Pridaj sa do redakcie', icon: 'book', slug: 'pridaj-sa-do-redakcie' },
        { name: 'Študentská inzercia', icon: 'frame', slug: 'studentska-inzercia' },
        { name: 'Nástenka podujatí', icon: 'columns', slug: 'nastenka-podujati' },
      ],
    }
  },
  created() {
    this.latest[0].image = this.images.lab
    this.latest[1].image = this.images.archaeology
    this.latest[2].image = this.images.library
  },
}
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <!-- Main Content -->
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="relative min-h-[85vh] overflow-hidden bg-slate-900">
        <img
          :src="images.hero"
          alt="Študenti v univerzitnom prostredí"
          class="absolute inset-0 size-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-900/60" />
        <div
          class="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-12 items-center gap-6 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div class="col-span-12 mx-auto max-w-4xl text-center md:col-span-10 md:col-start-2">
            <h1 class="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
              Väčšinou jasno. Občas nečas.
            </h1>
            <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Univerzitný web a magazín študentov UKF v Nitre bez zbytočného filtra.
            </p>
            <router-link
              to="/clanok/1"
              class="mt-9 inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
            >
              Prečítať hlavný článok
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="size-4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="M5 12h14" />
                <path d="m14 7 5 5-5 5" />
              </svg>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Latest Insights Section -->
      <section
        class="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      >
        <div class="col-span-12 border-b border-slate-900/15 pb-5">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Tento týždeň</p>
          <h2 class="mt-2 font-serif text-4xl text-slate-900">Najnovšie články</h2>
        </div>
        <div class="col-span-12 mt-5 grid grid-cols-12 gap-6">
          <article
            v-for="article in latest"
            :key="article.id"
            class="group col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <!-- Klikateľný obrázok -->
            <router-link :to="'/clanok/' + article.id" class="block overflow-hidden bg-slate-100">
              <img
                :src="article.image"
                alt=""
                class="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </router-link>
            <div class="pt-5">
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                {{ article.category }}
              </p>
              <h3 class="mt-3 font-serif text-2xl leading-snug text-slate-900">
                <!-- Klikateľný nadpis -->
                <router-link
                  :to="'/clanok/' + article.id"
                  class="transition-colors hover:text-blue-600"
                >
                  {{ article.title }}
                </router-link>
              </h3>
              <p class="mt-4 text-sm text-slate-900/60">
                {{ article.author }} <span class="mx-2 text-slate-900/30">·</span>
                {{ article.date }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- Editor's Choice Section -->
      <section class="bg-slate-100 py-16 md:py-24">
        <div class="mx-auto grid max-w-7xl grid-cols-12 gap-0 px-4 sm:px-6 lg:px-8">
          <div class="col-span-12 min-h-[400px] overflow-hidden bg-slate-900 md:col-span-6">
            <img
              :src="images.editor"
              alt="Študenti pri spoločnej práci v redakcii"
              class="size-full object-cover"
            />
          </div>
          <article
            class="col-span-12 flex flex-col justify-center border border-slate-900/10 bg-white p-8 md:col-span-6 md:p-12 lg:p-16"
          >
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Výber redakcie
            </p>
            <h2 class="mt-5 font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
              Hlas mladých novinárov: Ako sa mení študentská žurnalistika
            </h2>
            <p class="mt-6 max-w-xl leading-7 text-slate-900/70">
              Ozveny prednášok, festivalová atmosféra v Nitre aj zákulisie tvorby univerzitného
              časopisu. Pozrite sa, čo všetko prináša novinárska práca na pôde UKF očami samotných
              autorov.
            </p>
            <router-link
              to="/clanok/1"
              class="mt-8 inline-flex w-fit items-center gap-3 bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-900"
            >
              Viac z redakcie
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="size-4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="M5 12h14" />
                <path d="m14 7 5 5-5 5" />
              </svg>
            </router-link>
          </article>
        </div>
      </section>

      <!-- Student Community Section -->
      <section
        class="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      >
        <div class="col-span-12 border-b border-slate-900/15 pb-5">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Zapoj sa do diania
          </p>
          <h2 class="mt-2 font-serif text-4xl text-slate-900">Pre študentov a čitateľov</h2>
        </div>
        <div class="col-span-12 mt-5 grid grid-cols-12 gap-6">
          <router-link
            v-for="topic in topics"
            :key="topic.name"
            :to="'/stranka/' + topic.slug"
            class="group col-span-12 flex aspect-[4/3] flex-col items-center justify-center border border-slate-900/15 bg-white text-blue-600 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:col-span-6 lg:col-span-3 text-center p-4"
          >
            <!-- TopicIcon -->
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              class="size-8"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
            >
              <template v-if="topic.icon === 'atom'">
                <circle cx="16" cy="16" r="2" fill="currentColor" />
                <ellipse cx="16" cy="16" rx="13" ry="5" />
                <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
                <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
              </template>
              <template v-else-if="topic.icon === 'book'">
                <path d="M4 7h8a4 4 0 0 1 4 4v15a5 5 0 0 0-5-4H4V7Z" />
                <path d="M28 7h-8a4 4 0 0 0-4 4v15a5 5 0 0 1 5-4h7V7Z" />
              </template>
              <template v-else-if="topic.icon === 'frame'">
                <rect x="5" y="5" width="22" height="22" />
                <path d="m9 23 6-7 4 4 3-4 5 7" />
                <circle cx="11" cy="11" r="2" />
              </template>
              <template v-else-if="topic.icon === 'columns'">
                <path d="M4 11h24L16 4 4 11Z" />
                <path d="M6 27h20M4 30h24M8 11v16M14 11v16M20 11v16M26 11v16" />
              </template>
            </svg>
            <span class="mt-5 font-serif text-xl sm:text-2xl font-bold">{{ topic.name }}</span>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>
