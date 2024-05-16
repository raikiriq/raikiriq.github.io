<template>
  <v-card
      class="home mx-auto pa-2"
      max-width="800"
      rounded
  >
    <v-card-title class="text-h4">Cорта пшеницы в Удмуртии</v-card-title>
    <v-card-text class="body-1">
      На сегодняшний день существует большое количество сортов пшеницы. Они делятся по видам: озимые и яровые, мягкие и
      твёрдые, отличаются по срокам и условиям созревания. Их списки не перестают пополняться новыми разработками
      селекционеров. Более подробно ознакомиться с распространенными сортами можно в данной статье.
    </v-card-text>
    <v-carousel
        show-arrows-on-hover
        cycle
        hide-delimiters
        height="300"
    >
      <v-carousel-item
          v-for="(item, i) in carouselItems"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-card-title class="text-h5">Озимая</v-card-title>
    <v-card-text class="body-1">
      Озимые сорта пшеницы менее чувствительны к холоду. Их рекомендуется высевать в начале сентября и до конца октября.
      Как правило, показывают высокую урожайность.
      <v-expansion-panels class="mt-2">
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Антоновка
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) высота растений не превышает 95 см; <br>
            2) имеет колоски белого цвета, без признаков опушения;<br>
            3) приспосабливается к разным погодным условиям;<br>
            4) устойчивый к засухам и многим распространённым заболеваниям.<br>
            Период созревания относительно короткий – 280 суток.
            <v-img class="mt-2"
                   src="https://ferma.expert/wp-content/uploads/2018/10/b3ea3fdfa3a591fcffeca63fd4d60e41.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Безенчукская
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) вес, который для 1000 семян может достигать около 45г;<br>
            2) зёрна приятного янтарного оттенка;<br>
            3) плотный по структуре колос;<br>
            4) устойчивость ко многим распространённым заболеваниям.<br>
            Сбор урожая начинается спустя 320 дней после посева.
            <v-img class="mt-2"
                   src="https://ferma.expert/wp-content/uploads/2018/10/top68.ru-nalivaisya-polnyi-kolos-39113.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Леннокс
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) колос небольшой, его длина редко превышает 20 см;<br>
            2) в 1 колосе можно обнаружить до 200 зёрен;<br>
            3) устойчив ко многим заболеваниям;<br>
            4) урожайность достигает 90 ц/га.<br>
            Полностью созревает в течение 300 дней.
            <v-img class="mt-2"
                   src="https://ferma.expert/wp-content/uploads/2018/10/ozimaya-pshenitsa-lennoks-1722380.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Таня
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) 1000 зёрен могут весить до 45 г;<br>
            2) имеет высокую пищевую ценность;<br>
            3) не подвержен осыпанию;<br>
            4) отличается хорошей устойчивостью к неблагоприятным внешним условиям и многим заболеваниям.<br>
            Созревает в течение 300 дней.
            <v-img class="mt-2" src="https://ferma.expert/wp-content/uploads/2018/10/89656385_w640_h640_dsc4308.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-title class="text-h5">Яровая</v-card-title>
    <v-card-text class="body-1">
      Сорта яровой пшеницы принято сеять в начале весны. Для их выращивания не требуется особой обработки почвы. Они
      более чувствительны к погодным условиям и лучше созревают в условиях тёплого климата.
      <v-expansion-panels class="mt-2">
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Ирень
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) зёрна крупные, масса 1000 штук может составить 40 г; <br>
            2) имеет высокую пищевую ценность;<br>
            3) в плодах содержится много белка и клетчатки, также они богаты витаминами;<br>
            4) как правило, используется для приготовления выпечки.<br>
            Плодоношение сорта начинается через 90 дней после посева.
            <v-img class="mt-2"
                   src="https://ferma.expert/wp-content/uploads/2018/10/pshenitsa-sort-iren-6-1024x576.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Уралосибирская
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) растения высокие, могут превышать 1 м;<br>
            2) 1000 зёрен могут весить 40 г;<br>
            3) максимальная урожайность сорта достигает 50 ц/га;<br>
            4) устойчив ко многим распространённым заболеваниям.<br>
            Зреет около 85 дней.
            <v-img class="mt-2" src="https://ferma.expert/wp-content/uploads/2018/10/uralosibirskaya-3.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-title class="text-h5">Мягкая</v-card-title>
    <v-card-text class="body-1">
      Колос у мягких сортов короче и тоньше, чем у твёрдых. В плодах содержится больше клетчатки, а также витамины Е и
      D. Тесто из муки данного сорта более рыхлое и менее эластичное. Поэтому пшеницу используют для изготовления
      кондитерских изделий.
      <v-expansion-panels class="mt-2">
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Илиас
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) высота растений не превышает 1 м;<br>
            2) колос безостый;<br>
            3) не подвержен полеганию;<br>
            4) урожайность составляет 75 ц/га;<br>
            Плодоношение начинается через 200 дней после посева.
            <v-img class="mt-2" src="https://ferma.expert/wp-content/uploads/2018/10/dsc0150.webp" height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Ларс
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) вес 1000 зёрен, который может достигать 50 г;<br>
            2) высокое содержание протеина;<br>
            3) устойчивость к морозам;<br>
            4) хорошую урожайность, которая превышает 70 ц/га.<br>
            Для созревания пшеницы необходимо подождать около 320 суток.
            <v-img class="mt-2" src="https://ferma.expert/wp-content/uploads/2018/10/1199999-5.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Фаворитка
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) в плодах может содержаться около 35% клетчатки;<br>
            2) устойчив к условиям сильных заморозков;<br>
            3) не выдерживает засуху и требует своевременного полива;<br>
            4) урожайность составляет 90 ц/га.<br>
            Созревание происходит на протяжении 280 дней.
            <v-img class="mt-2" src="https://ferma.expert/wp-content/uploads/2018/10/90976.webp" height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6 font-weight-regular">
            Шестопаловка
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            1) высота растений редко превышает 90 см;<br>
            2) колоски имеют бледно-зелёный цвет;<br>
            3) не подвержен полеганию и осыпанию;<br>
            4) можно получить до 80 ц/га урожая.<br>
            Период вызревания сорта, в среднем, – 285 суток.
            <v-img class="mt-2"
                   src="https://ferma.expert/wp-content/uploads/2018/10/semena-ozimoy-pshenitsy-shestopavlovka-elita-1774341.webp"
                   height="250"></v-img>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AppHome",
  data() {
    return {
      carouselItems: [
        {
          src: "https://avatars.dzeninfra.ru/get-zen_doc/5130440/pub_63d7a84152ad3b1035690beb_63d7a85a52ad3b1035694d1d/scale_1200"
        },
        {
          src: "https://avatars.dzeninfra.ru/get-zen_doc/4457971/pub_63d7a84152ad3b1035690beb_63d7a85a5811022ca190bc08/scale_1200"
        },
        {
          src: "https://avatars.dzeninfra.ru/get-zen_doc/5352530/pub_63d7a84152ad3b1035690beb_63d7a85c2af77813caf5c914/scale_1200"
        },
        {
          src: "https://glavagronom.ru/media/uploads/mbmCvOMEs-omskaya-36.jpg"
        },
        {
          src: "https://i.ytimg.com/vi/OWX926b_n40/maxresdefault.jpg"
        }
      ]
    }
  }
}
</script>
