<script setup>
// wip
import { computed, onMounted, ref, watch } from 'vue'
import { useNewsStore } from "@/stores/news"

definePageMeta({
  middleware: [
    'auth-general',
    'news',
  ],
})

const newsStore = useNewsStore()

const articles = [
  {
    link: "News/holidays-wish",
    title: "Merry Christmas and a good, peaceful New Year",
    perex: "Dear fans and participants of the #FramedinBelarus project, We wish you a Merry Christmas and a good, peaceful New Year and fulfillment of your wishes!",
    imageUrl: "../../assets/media/img/news/holidays-wish/title.jpg",
    tag: "other"
  },
  {
    link: "News/the-little-bird-must-be-caught",
    title: "The little bird must be caught",
    perex: "The group exhibition \"The little bird must be caught\" presents a part of the project #FramedinBelarus on the 13th edition of the international contemporary art festival Survival Kit, which takes place inside an old bank building, in the heart of Dome Square (Pils iela 23, Riga) from 3rd of September to the 16th of October.",
    imageUrl: "../../assets/media/img/news/the-little-bird-must-be-caught/title.jpg",
    tag: "exhibition"
  },
  {
    link: "News/stitched-freedom-framed-in-belarus-project",
    title: "Stitched freedom: “Framed in Belarus” project",
    perex: "Stitchit art group is going to lead a workshop in Riga. On the 1st and 2nd of October at 2 pm EET you are invited to participate in a stitching workshop \"Stitched Freedom: ‘Framed in Belarus’ project\" led by art...",
    imageUrl: "../../assets/media/img/news/news.png",
    tag: "workshop"
  },
  {
    "id": "recIVjHltC0KW3pY5",
    "name": "N42_Group exhibition Soft Power",
    "title_eng": "Group exhibition Soft Power\n",
    "title_rus": "Групповая выставка Soft Power",
    "title_bel": "Групавая выстава Soft Power",
    "description_eng": "On March 8, DAS MINSK Kunsthaus in Potsdam presented the group exhibition **Soft Power**, curated by Daniel Milnes.\n\nThe show positions the art and design of textiles as a means of expression that can question power relations. The exhibition understands textiles not only as handcrafted or industrially-fabricated objects but also as a part of systems. This includes the webs of production and trade that continue to move textiles and people across the globe; the histories, cartographies, and cosmologies that unfold around them; and their use as an integral part of our daily routines and special rituals.\n\nAmong other works by more than 30 artists, the exhibition features Rufina Bazlova's **Saga of Protests**.\n\nRead more [here](https://dasminsk.de/en/exhibitions/4478/soft_power).\n\nAs part of the additional program there will be a **series of the #FramedinBelarus workshops** led by Rufina Bazlova and Sofia Tocar on **19, 20 and 21 of April 2024**.\n",
    "description_rus": "8 марта DAS MINSK Kunsthaus в Потсдаме представил групповую выставку **Soft Power**, куратором которой выступил Дэниел Милнс.\n\nВыставка позиционирует искусство и дизайн текстиля как средство выражения, способное поставить под вопрос отношения власти. Выставка рассматривает текстиль не только как объекты ручной работы или промышленного производства, но и как часть систем. Это включает в себя сети производства и торговли, которые продолжают перемещать текстиль и людей по всему миру; истории, картографии и космологии, которые разворачиваются вокруг него; и его использование в качестве неотъемлемой части нашей повседневной рутины и особых ритуалов.\nСреди других работ более чем 30 художникови художниц на выставке представлена Сага о протестах Руфины Базловой.\n\nПодробнее о выставке [здесь](https://dasminsk.de/en/exhibitions/4478/soft_power).\n\nВ рамках дополнительной программы **19, 20 и 21 апреля 2024** года пройдет **серия мастер-классов #FramedinBelarus** под руководством Руфины Базловой и Софии Токар.\n",
    "description_bel": "8 сакавіка DAS MINSK Kunsthaus у Патсдаме прэзентаваў групавую выставу **Soft Power**, куратарам якой выступіў Дэніэл Мілнс.\n\nВыстава пазіцыянуе мастацтва і дызайн тэкстылю як сродак выразу, здольны паставіць пад пытанне стасунку ўлады. Выстава разглядае тэкстыль не толькі як аб'екты ручной працы ці прамысловай вытворчасці, але і як частка сістэм. Гэта складаецца з сетак вытворчасці і гандлю, якія працягваюць перасоўваць тэкстыль і людзей па ўсім свеце; гісторыі, картаграфіі і касмалогіі, якія разгортваюцца вакол яго; і яго выкарыстанне ў якасці неадымнай часткі нашай штодзённай руціны і адмысловых рытуалаў.\nСярод іншых прац больш чым трыдцаці мастакоў і мастачак на выставе прэзентавана Сага пра пратэсты Руфіны Базловай.\n\nДэталёвей пра выставу [тут](https://dasminsk.de/en/exhibitions/4478/soft_power).\n\nУ межах дадатковай праграмы **19, 20 і 21 красавіка 2024 года** пройдзе **серыя майстар-класаў #FramedinBelarus** пад кіраўніцтвам Руфіны Базловай і Сафіі Такар.\n",
    "category": "Exhibition",
    "photo": "",
    "place": "Das Minsk",
    "city": "Potsdam",
    "country": "Germany",
    "photos": [
      {
        "id": "att1ppQeIDwzKydWj",
        "width": 927,
        "height": 695,
        "url": "https://v5.airtableusercontent.com/v3/u/27/27/1712692800000/2XY9rEahUlZD98b7-2DozA/MR2loHktZ1_OVMfijMrRr1_zO9zvyuADTXEapjjQfVLl9WJYEBGZBOI4SXEltwU-G6O0FQl9pmadFQ0m0ZzHRc_xBXXbyRpSVaPPXNq1v4IgLJfPNYpZ3OTHq5JEBPyqAo0YZhil_14NSG8eAdQXGvrQzEYCoYTGjRviwFhgppU/kd6uK16Ima_X2kVuOTGfpmF-YiM7Jea-tJNry65PxEk",
        "filename": "Installation view of the exhibition Soft Power, DAS MINSK Kunsthaus in Potsdam 2024. © VG Bild-Kunst, Bonn 2024, Hamid Zénati Estate. Photo by Ladislav Zajac.jpg",
        "size": 1001250,
        "type": "image/png",
        "thumbnails": {
          "small": {
            "url": "https://v5.airtableusercontent.com/v3/u/27/27/1712692800000/CN3_6o6Ds5eNkhJjWcQX0A/O0t1grKw4v0FM7xkLN8Uym8vMBNdLXuC3nryCb-ABD_sX2VdimR1WGQNOZitwH_NO4KHa0uMPxUSZSq1JIWJdYUBDYOV_xJyfnvowuaAKVyBzDaevSMk2wf_O1KV0Ul9K4y5lhhBDGPpRpTfBzDk6g/TcV5FhjjKg79NhBpefjVPH2tEQPxH_BpwaSgHXmS7JE",
            "width": 48,
            "height": 36
          },
          "large": {
            "url": "https://v5.airtableusercontent.com/v3/u/27/27/1712692800000/tFroansxZH-hIdZ0I-wQog/f8Ik0ZivErdq--Dgm9_4HBNnJVOPGvPPtepI6-LIlm_2am602iUTw6jwIkGu_YXjBPuxmNdwmsZ7VM2cQFVCKmUqbtVoo_ECOtOa48jF3Z7Bo35NLLeAyAyrZFpye_I9RbA0D1oQY_wF2xNZtPztkw/Cfc6luU5667wPaxiJdxY_tjNuZxoAVYvOV-A5oRCjl0",
            "width": 683,
            "height": 512
          },
          "full": {
            "url": "https://v5.airtableusercontent.com/v3/u/27/27/1712692800000/BkMGFNx-lWvFasC2Vwhfxw/5SlsCSpobVRf69g80Gjzd58zOV3Gz96AypQcVjm6vxrmyuJrojudNBZkStr8bUd8vTWcJniEqOgA2q_k5HWyWjiYZQ_RiV3zLANSCCAImPsBZ9uYL2ialx8M59ak4vhPIXFfyFokqXDlJN-54wMCvg/4QAqakxzl-E-WvB9i44CK4eBJ6jkyZFhDqeAFnKCKRg",
            "width": 927,
            "height": 695
          }
        }
    },
    ],
    "startDate": "2024-03-16",
    "endDate": "2024-08-11"
  }
]

const currentTag = ref(null)

const filteredArticles = computed(() => {
  // const mergedArticles = [...newsStore.articles.value, ...articles]
  const mergedArticles = newsStore.articles.value
  if (!currentTag.value) return mergedArticles
  return mergedArticles.filter((article) => article.category.toLowerCase() === currentTag.value)
})

const updateCurrentTag = (val) => {
  currentTag.value = val
}
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus — News</Title>
      <Meta name="description" content="News"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        {{ $t('newsPage.title') }}
      </h1>
    </div>
    <div class="filterMenuWrapper content">
      <button 
        class="button"
        :class="{'bg_black' : currentTag === null}"
        @click="updateCurrentTag(null)"
      >
        {{ $t('newsPage.filters.allItems') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'workshop'}"
        @click="updateCurrentTag('workshop')"
      >
        {{ $t('newsPage.filters.workshops') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'exhibition'}"
        @click="updateCurrentTag('exhibition')"
      >
        {{ $t('newsPage.filters.exhibitions') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'other'}"
        @click="updateCurrentTag('other')"
      >
        {{ $t('newsPage.filters.other') }}
      </button>
    </div>
    <div class="articlesWrapper content">
      <NewsNewsBox 
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
      />
    </div>
  </main>
</template>

<style src="./News.scss" lang="scss" scoped></style>
