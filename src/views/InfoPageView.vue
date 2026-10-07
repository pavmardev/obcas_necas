<script>
export default {
  name: 'InfoPageView',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contentMap: {
        kontakt: {
          title: 'Kontakt',
          subtitle: 'Spoj sa s redakciou magazínu Občas nečas.',
          type: 'contact',
        },
        'o-nas': {
          title: 'O nás',
          subtitle: 'Kto sme a čo robíme na pôde Univerzity Konštantína Filozofa v Nitre.',
          type: 'about',
        },
        'ochrana-sukromia': {
          title: 'Ochrana súkromia',
          subtitle: 'Informácie o spracúvaní a ochrane osobných údajov.',
          type: 'privacy',
        },
        univerzita: {
          title: 'Univerzita (UKF)',
          subtitle: 'Všetko podstatné o Univerzite Konštantína Filozofa v Nitre.',
          type: 'university',
        },
      },
    }
  },
  computed: {
    currentInfo() {
      return (
        this.contentMap[this.slug] || {
          title: 'Neznáma stránka',
          subtitle: 'Požadovaná stránka nebola nájdená.',
          type: 'default',
        }
      )
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

      <!-- Hlavička -->
      <header class="mb-12">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">UKF Magazín</p>
        <h1 class="mt-3 font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
          {{ currentInfo.title }}
        </h1>
        <p class="mt-4 text-lg text-slate-900/70">
          {{ currentInfo.subtitle }}
        </p>
      </header>

      <!-- Dynamický obsah -->
      <div
        class="bg-slate-50 border border-slate-900/10 p-8 sm:p-12 font-serif text-slate-900/80 leading-relaxed space-y-4"
      >
        <!-- Obsah pre Kontakt -->
        <div v-if="currentInfo.type === 'contact'" class="space-y-4">
          <p>
            <strong>Redakcia Občas nečas</strong><br />Univerzita Konštantína Filozofa v Nitre<br />Tr.
            A. Hlinku 1, 949 01 Nitra
          </p>
          <p><strong>E-mail:</strong> redakcia@obcasnecas.sk</p>
          <p><strong>Šéfredaktor:</strong> seredaktor@obcasnecas.sk</p>
        </div>

        <!-- Obsah pre O nás -->
        <div v-else-if="currentInfo.type === 'about'" class="space-y-4">
          <p>
            Občas nečas je nezávislý študentský magazín, ktorý pôsobí na Univerzite Konštantína
            Filozofa v Nitre už úctihodných niekoľko rokov.
          </p>
          <p>
            Prinášame necenzurovaný pohľad na študentský život, akademické prostredie, kultúrne
            dianie v meste pod Zoborom a dávame priestor mladým začínajúcim autorom, redaktorom a
            fotografom.
          </p>
        </div>

        <!-- Obsah pre Ochrana súkromia -->
        <div v-else-if="currentInfo.type === 'privacy'" class="space-y-4 text-sm font-sans">
          <p>
            Ochrana vášho súkromia je pre nás dôležitá. Všetky osobné údaje poskytnuté
            prostredníctvom formulárov na tomto webe spracúvame v súlade s platnými predpismi EÚ
            (GDPR).
          </p>
          <p>
            Údaje využívame výhradne na účely komunikácie s čitateľmi, spracovania tipov do redakcie
            či náboru nových členov a neposkytujeme ich tretím stranám.
          </p>
        </div>

        <!-- Obsah pre Univerzita -->
        <div v-else-if="currentInfo.type === 'university'" class="space-y-4">
          <p>
            Univerzita Konštantína Filozofa v Nitre (UKF) je moderná vzdelávacia a výskumná
            inštitúcia, ktorá nadviazala na bohaté historické tradície vzdelávania v Nitre – centre
            Veľkej Moravy.
          </p>
          <p>
            Skladá sa z piatich fakúlt (Fakulta prírodných vied a informatiky, Filozofická fakulta,
            Pedagogická fakulta, Fakulta sociálnych vied a zdravotníctva a Fakulta stredoeurópskych
            štúdií).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
