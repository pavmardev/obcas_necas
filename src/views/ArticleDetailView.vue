<script>
export default {
  name: 'ArticleDetailView',
  props: ['id'],
  data() {
    return {
      // Databáza článkov (v praxi by sa načítala z API podľa ID)
      articlesData: {
        1: {
          category: 'Zo školstva',
          title: 'Nové semestrálne harmonogramy prinášajú zmeny pre študentov UKF',
          author: 'Bc. Nina Kováčová',
          date: 'Október 3, 2026',
          image:
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
          content: [
            'Univerzita Konštantína Filozofa v Nitre prichádza s novými semestrálnymi harmonogramami, ktoré reagujú na podnety samotných študentov a akademického senátu.',
            'Zmeny sa dotknú nielen organizácie skúškového obdobia, ale aj efektívnejšieho využívania priestorov univerzity na Zobore a Triede Andreja Hlinku. Vedenie univerzity si od tohto kroku sľubuje lepšiu prehľadnosť a menej stresu počas záverečných týždňov semestra.',
            'Podrobné rozpisy harmonogramov si študenti môžu pozrieť vo svojom Akademickom informačnom systéme (AIS).',
          ],
        },
        2: {
          category: 'Kultúra a umenie',
          title: 'Nitrianske divadelné dosky ožívajú novou študentskou sezónou',
          author: 'Samuel Horváth',
          date: 'September 29, 2026',
          image:
            'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
          content: [
            'Divadelná sezóna v Nitre prináša čerstvý vietor v podobe spolupráce miestnych divadiel s tvorivými študentmi kulturológie a masmediálnych štúdií UKF.',
            'Diváci sa môžu tešiť na experimentálne hry, autorské monodramatické vystúpenia aj otvorené diskusie priamo s tvorcami po predstaveniach.',
          ],
        },
        3: {
          category: 'UKF Life',
          title: 'Život na Zobore: Čo všetko obnáša bývanie v študentských domovoch',
          author: 'Laura Tóthová',
          date: 'September 25, 2026',
          image:
            'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900',
          content: [
            'Bývanie na internáte patrí k nezabudnuteľným zážitkom každého vysokoškoláka. Čo všetko obnáša život pod Zoborom?',
            'Od legendárnych večerných stretnutí na chodbách až po efektívny time-management pri písaní semestrálnych prác. Prinášame pohľad do zákulisia internátneho života.',
          ],
        },
      },
    }
  },
  computed: {
    article() {
      // Vráti článok podľa ID z URL, prípadne fallback na prvý
      return this.articlesData[this.id] || this.articlesData['1']
    },
  },
}
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 pt-32 pb-24">
    <article class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

      <!-- Hlavička článku -->
      <header class="mb-10">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          {{ article.category }}
        </p>
        <h1 class="mt-3 font-serif text-4xl leading-tight text-slate-900 md:text-5xl lg:text-6xl">
          {{ article.title }}
        </h1>
        <p class="mt-6 text-base text-slate-900/60">
          {{ article.author }} <span class="mx-2 text-slate-900/30">·</span> {{ article.date }}
        </p>
      </header>

      <!-- Hlavný obrázok článku -->
      <div class="mb-12 overflow-hidden bg-slate-100 rounded-none shadow-sm">
        <img :src="article.image" :alt="article.title" class="aspect-[16/9] w-full object-cover" />
      </div>

      <!-- Textový obsah -->
      <div
        class="prose prose-slate max-w-none font-serif text-lg leading-relaxed text-slate-900/80 space-y-6"
      >
        <p v-for="(paragraph, index) in article.content" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </article>
  </div>
</template>
