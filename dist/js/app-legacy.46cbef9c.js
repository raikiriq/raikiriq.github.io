(function(){"use strict";var t={8731:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var s=a(144),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppHeader"),a("v-main",{staticClass:"grey lighten-2"},[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("AppFooter")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"header",attrs:{app:"",fixed:"",color:"green lighten-3"}},[a("div",{staticClass:"header__title font-weight-black"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"d-flex justify-center"},[a("v-icon",{attrs:{size:"48",color:"black"}},[t._v(" mdi-cow ")]),a("span",{staticClass:"ml-2 d-none d-sm-block"},[t._v("Baza")])],1)])],1),a("v-spacer"),a("router-link",{staticClass:"header__item",attrs:{to:"/"}},[a("div",{staticClass:"d-flex justify-center"},[a("v-icon",{attrs:{size:"24",color:"black"}},[t._v(" mdi-barley ")]),a("span",{staticClass:"ml-1"},[t._v("Культуры")])],1)]),a("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:"","open-on-hover":"",rounded:"lg"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("div",t._g({staticClass:"header__item d-flex justify-center"},s),[a("v-icon",{attrs:{size:"24",color:"black"}},[t._v(" mdi-cow ")]),a("span",{staticClass:"ml-1"},[t._v("Животные")])],1)]}}])},[a("v-list",[a("v-list-item",{attrs:{to:"/cows"}},[a("v-list-item-icon",{staticClass:"mr-0"},[a("v-icon",[t._v("mdi-cow")])],1),a("v-list-item-content",{staticClass:"ml-1"},[a("v-list-item-title",[t._v("Коровы")])],1)],1),a("v-list-item",{attrs:{to:"/pigs"}},[a("v-list-item-icon",{staticClass:"mr-0"},[a("v-icon",[t._v("mdi-pig-variant-outline")])],1),a("v-list-item-content",{staticClass:"ml-1"},[a("v-list-item-title",[t._v("Свиньи")])],1)],1),a("v-list-item",{attrs:{to:"/chicken"}},[a("v-list-item-icon",{staticClass:"mr-0"},[a("v-icon",[t._v("mdi-food-drumstick-outline")])],1),a("v-list-item-content",{staticClass:"ml-1"},[a("v-list-item-title",[t._v("Курицы")])],1)],1)],1)],1)],1)},c=[],o={name:"AppHeader",data:function(){return{isDropMenu:!1}}},l=o,v=a(1001),p=a(3453),d=a.n(p),_=a(426),u=a(6428),h=a(6816),x=a(7620),b=a(5398),m=a(459),C=a(9196),f=a(9762),g=(0,v.Z)(l,i,c,!1,null,"0bb96796",null),w=g.exports;d()(g,{VAppBar:_.Z,VIcon:u.Z,VList:h.Z,VListItem:x.Z,VListItemContent:b.km,VListItemIcon:m.Z,VListItemTitle:b.V9,VMenu:C.Z,VSpacer:f.Z});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:"",app:"",absolute:""}},[a("v-card",{staticClass:"text-center green lighten-3",attrs:{flat:"",tile:"",width:"100%"}},[a("v-card-text",t._l(t.contacts,(function(e){return a("v-btn",{key:e.icon,staticClass:"mx-4",attrs:{icon:""}},[a("a",{attrs:{href:e.src,target:"_blank"}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)])})),1),a("v-divider"),a("v-card-text",[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Кирилл Долгачев")])])],1)],1)},Z=[],V={name:"AppFooter",data:function(){return{contacts:[{icon:"mdi-account-circle",src:"https://vk.com/raikiriq"},{icon:"mdi-phone-classic",src:"tel:+79043158273"},{icon:"mdi-email",src:"mailto:kirill.dolgachev@mail.ru"}]}}},k=V,A=a(680),j=a(2628),z=a(7118),E=a(1418),T=a(899),I=(0,v.Z)(k,y,Z,!1,null,null,null),O=I.exports;d()(I,{VBtn:A.Z,VCard:j.Z,VCardText:z.ZB,VDivider:E.Z,VFooter:T.Z,VIcon:u.Z});var S={name:"App",components:{AppFooter:O,AppHeader:w}},B=S,P=a(7524),D=a(8050),$=a(7877),M=(0,v.Z)(B,r,n,!1,null,null,null),F=M.exports;d()(M,{VApp:P.Z,VContainer:D.Z,VMain:$.Z});var H=a(8345),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"home mx-auto pa-2",attrs:{"max-width":"800",rounded:""}},[a("v-card-title",{staticClass:"text-h4"},[t._v("Cорта пшеницы в Удмуртии")]),a("v-card-text",{staticClass:"body-1"},[t._v(" На сегодняшний день существует большое количество сортов пшеницы. Они делятся по видам: озимые и яровые, мягкие и твёрдые, отличаются по срокам и условиям созревания. Их списки не перестают пополняться новыми разработками селекционеров. Более подробно ознакомиться с распространенными сортами можно в данной статье. ")]),a("v-carousel",{attrs:{"show-arrows-on-hover":"",cycle:"","hide-delimiters":"",height:"300"}},t._l(t.carouselItems,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src}})})),1),a("v-card-title",{staticClass:"text-h5"},[t._v("Озимая")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Озимые сорта пшеницы менее чувствительны к холоду. Их рекомендуется высевать в начале сентября и до конца октября. Как правило, показывают высокую урожайность. "),a("v-expansion-panels",{staticClass:"mt-2"},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Антоновка ")]),a("v-expansion-panel-content",[t._v(" 1) высота растений не превышает 95 см; "),a("br"),t._v(" 2) имеет колоски белого цвета, без признаков опушения;"),a("br"),t._v(" 3) приспосабливается к разным погодным условиям;"),a("br"),t._v(" 4) устойчивый к засухам и многим распространённым заболеваниям."),a("br"),t._v(" Период созревания относительно короткий – 280 суток. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/b3ea3fdfa3a591fcffeca63fd4d60e41.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Безенчукская ")]),a("v-expansion-panel-content",[t._v(" 1) вес, который для 1000 семян может достигать около 45г;"),a("br"),t._v(" 2) зёрна приятного янтарного оттенка;"),a("br"),t._v(" 3) плотный по структуре колос;"),a("br"),t._v(" 4) устойчивость ко многим распространённым заболеваниям."),a("br"),t._v(" Сбор урожая начинается спустя 320 дней после посева. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/top68.ru-nalivaisya-polnyi-kolos-39113.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Леннокс ")]),a("v-expansion-panel-content",[t._v(" 1) колос небольшой, его длина редко превышает 20 см;"),a("br"),t._v(" 2) в 1 колосе можно обнаружить до 200 зёрен;"),a("br"),t._v(" 3) устойчив ко многим заболеваниям;"),a("br"),t._v(" 4) урожайность достигает 90 ц/га."),a("br"),t._v(" Полностью созревает в течение 300 дней. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/ozimaya-pshenitsa-lennoks-1722380.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Таня ")]),a("v-expansion-panel-content",[t._v(" 1) 1000 зёрен могут весить до 45 г;"),a("br"),t._v(" 2) имеет высокую пищевую ценность;"),a("br"),t._v(" 3) не подвержен осыпанию;"),a("br"),t._v(" 4) отличается хорошей устойчивостью к неблагоприятным внешним условиям и многим заболеваниям."),a("br"),t._v(" Созревает в течение 300 дней. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/89656385_w640_h640_dsc4308.webp",height:"250"}})],1)],1)],1)],1),a("v-card-title",{staticClass:"text-h5"},[t._v("Яровая")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Сорта яровой пшеницы принято сеять в начале весны. Для их выращивания не требуется особой обработки почвы. Они более чувствительны к погодным условиям и лучше созревают в условиях тёплого климата. "),a("v-expansion-panels",{staticClass:"mt-2"},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Ирень ")]),a("v-expansion-panel-content",[t._v(" 1) зёрна крупные, масса 1000 штук может составить 40 г; "),a("br"),t._v(" 2) имеет высокую пищевую ценность;"),a("br"),t._v(" 3) в плодах содержится много белка и клетчатки, также они богаты витаминами;"),a("br"),t._v(" 4) как правило, используется для приготовления выпечки."),a("br"),t._v(" Плодоношение сорта начинается через 90 дней после посева. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/pshenitsa-sort-iren-6-1024x576.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Уралосибирская ")]),a("v-expansion-panel-content",[t._v(" 1) растения высокие, могут превышать 1 м;"),a("br"),t._v(" 2) 1000 зёрен могут весить 40 г;"),a("br"),t._v(" 3) максимальная урожайность сорта достигает 50 ц/га;"),a("br"),t._v(" 4) устойчив ко многим распространённым заболеваниям."),a("br"),t._v(" Зреет около 85 дней. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/uralosibirskaya-3.webp",height:"250"}})],1)],1)],1)],1),a("v-card-title",{staticClass:"text-h5"},[t._v("Мягкая")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Колос у мягких сортов короче и тоньше, чем у твёрдых. В плодах содержится больше клетчатки, а также витамины Е и D. Тесто из муки данного сорта более рыхлое и менее эластичное. Поэтому пшеницу используют для изготовления кондитерских изделий. "),a("v-expansion-panels",{staticClass:"mt-2"},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Илиас ")]),a("v-expansion-panel-content",[t._v(" 1) высота растений не превышает 1 м;"),a("br"),t._v(" 2) колос безостый;"),a("br"),t._v(" 3) не подвержен полеганию;"),a("br"),t._v(" 4) урожайность составляет 75 ц/га;"),a("br"),t._v(" Плодоношение начинается через 200 дней после посева. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/dsc0150.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Ларс ")]),a("v-expansion-panel-content",[t._v(" 1) вес 1000 зёрен, который может достигать 50 г;"),a("br"),t._v(" 2) высокое содержание протеина;"),a("br"),t._v(" 3) устойчивость к морозам;"),a("br"),t._v(" 4) хорошую урожайность, которая превышает 70 ц/га."),a("br"),t._v(" Для созревания пшеницы необходимо подождать около 320 суток. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/1199999-5.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Фаворитка ")]),a("v-expansion-panel-content",[t._v(" 1) в плодах может содержаться около 35% клетчатки;"),a("br"),t._v(" 2) устойчив к условиям сильных заморозков;"),a("br"),t._v(" 3) не выдерживает засуху и требует своевременного полива;"),a("br"),t._v(" 4) урожайность составляет 90 ц/га."),a("br"),t._v(" Созревание происходит на протяжении 280 дней. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/90976.webp",height:"250"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-regular"},[t._v(" Шестопаловка ")]),a("v-expansion-panel-content",[t._v(" 1) высота растений редко превышает 90 см;"),a("br"),t._v(" 2) колоски имеют бледно-зелёный цвет;"),a("br"),t._v(" 3) не подвержен полеганию и осыпанию;"),a("br"),t._v(" 4) можно получить до 80 ц/га урожая."),a("br"),t._v(" Период вызревания сорта, в среднем, – 285 суток. "),a("v-img",{staticClass:"mt-2",attrs:{src:"https://ferma.expert/wp-content/uploads/2018/10/semena-ozimoy-pshenitsy-shestopavlovka-elita-1774341.webp",height:"250"}})],1)],1)],1)],1)],1)},X=[],q={name:"AppHome",data:function(){return{carouselItems:[{src:"https://avatars.dzeninfra.ru/get-zen_doc/5130440/pub_63d7a84152ad3b1035690beb_63d7a85a52ad3b1035694d1d/scale_1200"},{src:"https://avatars.dzeninfra.ru/get-zen_doc/4457971/pub_63d7a84152ad3b1035690beb_63d7a85a5811022ca190bc08/scale_1200"},{src:"https://avatars.dzeninfra.ru/get-zen_doc/5352530/pub_63d7a84152ad3b1035690beb_63d7a85c2af77813caf5c914/scale_1200"},{src:"https://glavagronom.ru/media/uploads/mbmCvOMEs-omskaya-36.jpg"},{src:"https://i.ytimg.com/vi/OWX926b_n40/maxresdefault.jpg"}]}}},W=q,Y=a(2695),G=a(4062),J=a(6845),K=a(2443),N=a(1192),Q=a(5630),R=a(7047),U=(0,v.Z)(W,L,X,!1,null,null,null),tt=U.exports;d()(U,{VCard:j.Z,VCardText:z.ZB,VCardTitle:z.EB,VCarousel:Y.Z,VCarouselItem:G.Z,VExpansionPanel:J.Z,VExpansionPanelContent:K.Z,VExpansionPanelHeader:N.Z,VExpansionPanels:Q.Z,VImg:R.Z});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto pa-2",attrs:{"max-width":"800",rounded:""}},[a("v-card-title",{staticClass:"text-h4"},[t._v("Виды коров в Удмуртии")]),a("v-card-text",{staticClass:"body-1"},[t._v(" В этой статье мы собрали 5 лучших пород коров, которые выгодно выращивать для собственных нужд и реализации, чтобы получать хорошую прибыль. Список составлен на основе статистических данных из опроса предпочтений фермеров. ")]),a("v-parallax",{attrs:{src:"https://media.az/file/articles/2019/09/23/1569240989_stado-korov1.jpg",height:"300"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("1. Голландская")]),a("v-card-text",{staticClass:"body-1"},[t._v(" За счет отличной наследственности, голландские коровы долгие годы сохраняют высокие продуктивные качества в молочной направленности."),a("br"),a("br"),t._v(" Голландские коровы преобладают черно-пестрой мастью, пропорциональным туловищем, с низкими, крепкими конечностями и широкой грудной клеткой. "),a("br"),a("br"),t._v(" Продуктивность породы: ")]),a("v-simple-table",{staticClass:"mx-auto body-1",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{attrs:{bgcolor:"#A5D6A7"}},[a("th",{staticClass:"text-center"},[t._v(" Данные породы ")]),a("th",{staticClass:"text-center"},[t._v(" Показатели ")])])]),a("tbody",[a("tr",[a("td",[t._v("Средний вес коров")]),a("td",{staticClass:"text-center"},[t._v("500-600 кг")])]),a("tr",[a("td",[t._v("Средний вес быков")]),a("td",{staticClass:"text-center"},[t._v("до 1000 кг")])]),a("tr",[a("td",[t._v("Количество молока за лактационный период")]),a("td",{staticClass:"text-center"},[t._v("4400-5000 л")])]),a("tr",[a("td",[t._v("Жирность молока")]),a("td",{staticClass:"text-center"},[t._v("более 4%")])]),a("tr",[a("td",[t._v("Убойный выход")]),a("td",{staticClass:"text-center"},[t._v("60%")])])])]},proxy:!0}])}),a("v-card-text",{staticClass:"body-1"},[t._v(" Голландские коровы требовательны к условиям содержания и питанию. Коровы будут давать большое количество молока только при соблюдении всех рекомендаций относительно питания. ")]),a("v-img",{attrs:{src:"https://ferma.expert/wp-content/uploads/2018/06/2-4-1.webp",height:"350",position:"center "}}),a("v-card-title",{staticClass:"text-h5"},[t._v("2. Англерская порода")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Коровы преобладают красным или красно-вишневым окрасом. Коровы светлее быков. В области носового зеркала и около вымени имеется черная шерсть. Характеризуются широкой грудной клеткой, длинным, массивным телом, небольшой головой. "),a("br"),a("br"),t._v(" Продуктивность породы: ")]),a("v-simple-table",{staticClass:"mx-auto body-1",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{attrs:{bgcolor:"#A5D6A7"}},[a("th",{staticClass:"text-center"},[t._v(" Данные породы ")]),a("th",{staticClass:"text-center"},[t._v(" Показатели ")])])]),a("tbody",[a("tr",[a("td",[t._v("Средний вес коров")]),a("td",{staticClass:"text-center"},[t._v("550 кг")])]),a("tr",[a("td",[t._v("Средний вес быков")]),a("td",{staticClass:"text-center"},[t._v("до 1000 кг")])]),a("tr",[a("td",[t._v("Количество молока за лактационный период")]),a("td",{staticClass:"text-center"},[t._v("до 12000 л")])]),a("tr",[a("td",[t._v("Жирность молока")]),a("td",{staticClass:"text-center"},[t._v("4,49%")])]),a("tr",[a("td",[t._v("Убойный выход")]),a("td",{staticClass:"text-center"},[t._v("60%")])])])]},proxy:!0}])}),a("v-card-text",{staticClass:"body-1"},[t._v(" Молоко богато белком, кальцием, магнием, витаминами группы Е. Фермеры отмечают, что англерские коровы – выносливые животные, которые неприхотливы в питании, не нуждаются в особом уходе. ")]),a("v-img",{attrs:{src:"https://ferma.expert/wp-content/uploads/2018/06/03_zweinutzung_angler_deutsches_rotvieh_830x560.webp",height:"350",position:"center top"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("3. Монбельярдская порода")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Монбельярдская порода коров считается лучшей не только потому, что с нее получают большое количество вкусного постного мяса, но и жирное молоко в огромных объемах. "),a("br"),a("br"),t._v(" Порода отличается белой окраской нижней части туловища и конечностей. Верхняя часть окрашена яркой багряной раскраской. Большая корова с прочным скелетом, длинным корпусом, большой головой. Вокруг глазных яблок и на щеках могут находиться алые пятна. Порода с объемной спиной, горизонтальным основанием вымени. "),a("br"),a("br"),t._v(" Продуктивность породы: ")]),a("v-simple-table",{staticClass:"mx-auto body-1",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{attrs:{bgcolor:"#A5D6A7"}},[a("th",{staticClass:"text-center"},[t._v(" Данные породы ")]),a("th",{staticClass:"text-center"},[t._v(" Показатели ")])])]),a("tbody",[a("tr",[a("td",[t._v("Средний вес коров")]),a("td",{staticClass:"text-center"},[t._v("600 - 820 кг")])]),a("tr",[a("td",[t._v("Средний вес быков")]),a("td",{staticClass:"text-center"},[t._v("до 1000 - 1200 кг")])]),a("tr",[a("td",[t._v("Количество молока за лактационный период")]),a("td",{staticClass:"text-center"},[t._v("8500 л")])]),a("tr",[a("td",[t._v("Жирность молока")]),a("td",{staticClass:"text-center"},[t._v("более 4%")])]),a("tr",[a("td",[t._v("Убойный выход")]),a("td",{staticClass:"text-center"},[t._v("52 - 58%")])])])]},proxy:!0}])}),a("v-card-text",{staticClass:"body-1"},[t._v(" Животные этой породы неприхотливы в питании и уходе. Склонны коровы к быстрой адаптации и смене погодных условий. Рогатый скот хорошо переносит повышенную жаркую погоду. К достоинствам породы причисляют высокую продуктивность, низкий процент жира в молоке. Качество мяса и молока – высокое. Неприхотливость в уходе и кормлении. ")]),a("v-img",{attrs:{src:"https://ferma.expert/wp-content/uploads/2018/06/la_ferme_en_ville_2009_-_montbeliarde.webp",height:"350",position:"center"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("4. Черно-пестрая")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Достаточно молодая порода молочной направленности. Ценится за жирное молоко в большом количестве и возможность получения вкусного мяса. "),a("br"),a("br"),t._v(" Крупный рогатый скот этой породы характеризуется удлиненным корпусом, мощным и пропорциональным телом. У животного небольшая, вытянутая голова, широкая грудь, прямая спина, устойчивые конечности. "),a("br"),a("br"),t._v(" Продуктивность породы: ")]),a("v-simple-table",{staticClass:"mx-auto body-1",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{attrs:{bgcolor:"#A5D6A7"}},[a("th",{staticClass:"text-center"},[t._v(" Данные породы ")]),a("th",{staticClass:"text-center"},[t._v(" Показатели ")])])]),a("tbody",[a("tr",[a("td",[t._v("Средний вес коров")]),a("td",{staticClass:"text-center"},[t._v("до 650 кг")])]),a("tr",[a("td",[t._v("Средний вес быков")]),a("td",{staticClass:"text-center"},[t._v("до 1000 кг")])]),a("tr",[a("td",[t._v("Количество молока за лактационный период")]),a("td",{staticClass:"text-center"},[t._v("5400-8000 л")])]),a("tr",[a("td",[t._v("Жирность молока")]),a("td",{staticClass:"text-center"},[t._v("3,5 - 4,1%")])]),a("tr",[a("td",[t._v("Убойный выход")]),a("td",{staticClass:"text-center"},[t._v("60%")])])])]},proxy:!0}])}),a("v-card-text",{staticClass:"body-1"},[t._v(" Животное нуждается в достаточно просторном жилье. Коров следует регулярно чистить специальными щетками, после каждого доения мыть вымя. Отлично переносят жару и холод, нормально воспринимают продолжительные переходы от одного пастбища к другому. ")]),a("v-img",{attrs:{src:"https://ferma.expert/wp-content/uploads/2018/06/1-607.webp",height:"350",position:"center"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("5. Голштинская")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Голштинская порода коров является результатом длительной селекционной работы. Она славится не только большими удоями, но и массивными тушками бычков и буренок. "),a("br"),a("br"),t._v(" Отличительной чертой породы является массивное туловище со среднеразвитой мускулатурой, длинные конечности с крепкими суставами, глубокая и широкая грудь, узкая шея. "),a("br"),a("br"),t._v(" Продуктивность породы: ")]),a("v-simple-table",{staticClass:"mx-auto body-1",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{attrs:{bgcolor:"#A5D6A7"}},[a("th",{staticClass:"text-center"},[t._v(" Данные породы ")]),a("th",{staticClass:"text-center"},[t._v(" Показатели ")])])]),a("tbody",[a("tr",[a("td",[t._v("Средний вес коров")]),a("td",{staticClass:"text-center"},[t._v("700 кг")])]),a("tr",[a("td",[t._v("Средний вес быков")]),a("td",{staticClass:"text-center"},[t._v("900-1200 кг")])]),a("tr",[a("td",[t._v("Количество молока за лактационный период")]),a("td",{staticClass:"text-center"},[t._v("7500-10000 л")])]),a("tr",[a("td",[t._v("Жирность молока")]),a("td",{staticClass:"text-center"},[t._v("3,1 - 3,8%")])]),a("tr",[a("td",[t._v("Убойный выход")]),a("td",{staticClass:"text-center"},[t._v("50 - 55%")])])])]},proxy:!0}])}),a("v-card-text",{staticClass:"body-1"},[t._v(" Голштины – коровы, которые довольно чувствительны к условиям содержания. Они нуждаются в просторном, чистом, сухом и теплом коровнике без сквозняков. Достоинством породы считают быстрый рост. Достигают половой зрелости уже к году жизни – это значительно сокращает непродуктивный период жизни. ")]),a("v-img",{attrs:{src:"https://ferma.expert/wp-content/uploads/2018/06/golshtinskaya-poroda-korov-1.webp",height:"350",position:"center top"}})],1)},at=[],st={name:"AppCows"},rt=st,nt=a(2622),it=a(3568),ct=(0,v.Z)(rt,et,at,!1,null,"4bdeb9d6",null),ot=ct.exports;d()(ct,{VCard:j.Z,VCardText:z.ZB,VCardTitle:z.EB,VImg:R.Z,VParallax:nt.Z,VSimpleTable:it.Z});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto pa-2",attrs:{"max-width":"800",rounded:""}},[a("v-card-title",{staticClass:"text-h4"},[t._v("Виды куриц в Удмуртии")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Здесь собраны все породы кур, известные на данный момент в Удмуртии. ")]),a("v-parallax",{attrs:{src:"https://vkusvill.ru/upload/resize/368201/368201_1200x600x70_c.webp",height:"300"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("1. Венгерский великан")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Выдающиеся по характеристикам куры: петухи достигают убойного веса в 5 кг, курочки приносят до 200 яиц в год. При этом порода неприхотливая, не боится ни жары, ни морозов. Хорошие несушки. ")]),a("v-img",{staticClass:"align-center",attrs:{src:"https://webferma.com/wp-content/uploads/2017/04/vengerskiy4.jpg",height:"350",position:"top"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("2. Амрокс")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Устойчивая к холодному климату, выносливая мясо-яичная курица. Дают качественную тушку до 4 кг, подходят для общего птичника. С успехом выставляются как декоративная птица ")]),a("v-img",{attrs:{src:"https://webferma.com/wp-content/uploads/2016/08/1-24-250x194.jpg",height:"350",position:"top "}}),a("v-card-title",{staticClass:"text-h5"},[t._v("3. Вельзумер")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Набирающая популярность в России порода. В первую очередь интересна как несушка с яйцами темного в крапинку окраса. Цыплята очень жизнестойкие, выживаемость высокая ")]),a("v-img",{attrs:{src:"https://webferma.com/wp-content/uploads/2016/07/1-58-250x187.jpg",height:"350",position:"center "}}),a("v-card-title",{staticClass:"text-h5"},[t._v("4. Корниш")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Быстрое созревание и отличные мясные качества сделали их знаменитыми на весь мир. Часто используют для получения скороспелых бройлеров. ")]),a("v-img",{attrs:{src:"https://webferma.com/wp-content/uploads/2016/08/1-11-250x190.jpg",height:"350",position:"top "}}),a("v-card-title",{staticClass:"text-h5"},[t._v("5. Брама")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Одна из самых тяжелых мясных пород в мире. Особенно подходит для России из-за плотного и пышного оперения, благодаря которому легко переносит морозы. ")]),a("v-img",{attrs:{src:"https://webferma.com/wp-content/uploads/2016/07/1-23-250x182.jpg",height:"350",position:"top "}})],1)},vt=[],pt={name:"AppChicken"},dt=pt,_t=(0,v.Z)(dt,lt,vt,!1,null,"64bb054b",null),ut=_t.exports;d()(_t,{VCard:j.Z,VCardText:z.ZB,VCardTitle:z.EB,VImg:R.Z,VParallax:nt.Z});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto pa-2",attrs:{"max-width":"800",rounded:""}},[a("v-card-title",{staticClass:"text-h4"},[t._v("Виды свиней в Удмуртии")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Во всем мире насчитывается около ста пород свиней, каждая их которых отбиралась животноводами по вполне определенным, полезным и ценным для человечества признакам. ")]),a("v-parallax",{attrs:{src:"https://zverovod.info/wp-content/uploads/2019/06/pig-640x426.jpg",height:"300"}}),a("v-card-title",{staticClass:"text-h5"},[t._v("1. Беркширская")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Беркширская порода свиней — относится к породам мясо-сального направления продуктивности. Животные этой породы обладают крепкой конституцией, хорошей скороспелостью, высокими откормочными и мясными качествами. Свиньи скороспелые, молодняк используют для мясного (до массы 95-100 кг) и сального (до массы 130-140 кг) откорма. Взрослые племенные хряки весят в среднем 220-250 кг, свиноматки 180-220 кг. Поросята достигают массы 100 кг в возрасте 197 дней. Среднесуточный прирост живой массы 672 грамма. На 1 кг привеса расход корма составляет ориентировочно 4 кормовые единицы. Плодовитость свиноматок не очень высокая, 8-9 поросят за опорос. По убойным качествам беркширы одна из наиболее продуктивных пород свиней. Убойный выход составляет 88%. При убое в молодом возрасте подсвинки дают нежное и вкусное мясо. ")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Беркширы неприхотливы к условиям содержания и кормления, прекрасно используют пастбища и приспособлены к содержанию под открытым небом. ")]),a("v-img",{attrs:{src:"https://zverovod.info/wp-content/uploads/2019/06/img_5845-1024x683.jpg",height:"350",position:"center "}}),a("v-card-title",{staticClass:"text-h5"},[t._v("2. Крупная белая")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Крупная белая порода свиней английского происхождения. В СНГ породу начали завозить в последние годы XIX ст. помещики-заводчики. Разводили этих крупную белую породу свиней в помещецких хозяйствах и практически не использовалась для улучшения поголовья свиней у крестьян. Теперь это основная и наиболее распространенная порода свиней. ")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Крупная белая порода свиней преимущественно мясо-сального типа, но встречаются мясного и сального типов продуктивности. Порода имеет свою генеалогическую структуру: около 100 линий и большое количества семейств. Взрослые свиноматки имеют массу 220-280 кг, кабаны — 320-380, а отдельные — до 500 кг. Для крупной белой породы свиней характерные высокая плодовитость и многоплодность. Взрослые свиноматки дают за один опорос 10-12 здоровых поросят массой 1,0-1,3 кг, часто рождается 14-16 поросят. ")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Рекорд по породе — 32 поросенка. Молочность свиноматок 45-50 кг и больше. Свиньи крупной белой породы скороспелы, массы 100 кг достигают в возрасте 183- 195 дней при приростах свыше 700 г и расходах кормов на 1 кг прироста живой массы 3,6-4,6 корм. ед. У бойный выход откормленных взрослых свиней 80-82%, молодняка — 70-75 %. Крупную белую породу используют для улучшения других пород свиней и создания новых типов. ")]),a("v-img",{attrs:{src:"https://zverovod.info/wp-content/uploads/2019/06/large-white-pig.jpg",height:"350",position:"center "}}),a("v-card-title",{staticClass:"text-h5"},[t._v("3. Брейтовская")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Брейтовская – была создана путем скрещивания местных свиней ярославской области с экземплярами датской породы, средними и крупными белыми, латвийскими и полесскими. ")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Свиньи брейтовской породы это крупные животные — имеют широкую голову среднего размера с изогнутым профилем, мускулистую, широкую и глубокую грудь, прямые правильно поставленные ноги, мускулистую спину и поясницу, плотную кожу с густой щетиной. ")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Обычно брейтовская порода свиней белой масти, но бывают исключения с пигментированной окраской кожи. Высокой воспроизводительной способностью отличаются свиньи брейтовской породы от других – матки могут давать два опороса в год. ")]),a("v-card-text",{staticClass:"body-1"},[t._v(" Отличительная особенность свиней брейтовской породы — высокая воспроизводительная способность: матки, как правило, дают два опороса в год. Вес взрослых особей — хряки до 320 кг, матки – до 240 кг, молочность до 70 кг, многоплодие 11-14. ")]),a("v-img",{attrs:{src:"https://zverovod.info/wp-content/uploads/2019/06/sow_and_five_piglets-1024x679.jpg",height:"350",position:"center "}})],1)},xt=[],bt={name:"AppPigs"},mt=bt,Ct=(0,v.Z)(mt,ht,xt,!1,null,"6f71dd94",null),ft=Ct.exports;d()(Ct,{VCard:j.Z,VCardText:z.ZB,VCardTitle:z.EB,VImg:R.Z,VParallax:nt.Z}),s.Z.use(H.Z);var gt=[{path:"/",name:"AppHome",component:tt},{path:"/cows",name:"cows",component:ot},{path:"/chicken",name:"chicken",component:ut},{path:"/pigs",name:"pigs",component:ft}],wt=new H.Z({routes:gt}),yt=wt,Zt=a(3541);s.Z.use(Zt.Z);var Vt=new Zt.Z({});s.Z.config.productionTip=!1,new s.Z({router:yt,vuetify:Vt,render:function(t){return t(F)}}).$mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,n){if(!s){var i=1/0;for(v=0;v<t.length;v++){s=t[v][0],r=t[v][1],n=t[v][2];for(var c=!0,o=0;o<s.length;o++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[o])}))?s.splice(o--,1):(c=!1,n<i&&(i=n));if(c){t.splice(v--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var v=t.length;v>0&&t[v-1][2]>n;v--)t[v]=t[v-1];t[v]=[s,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,i=s[0],c=s[1],o=s[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(o)var v=o(a)}for(e&&e(s);l<i.length;l++)n=i[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(v)},s=self["webpackChunkkirill"]=self["webpackChunkkirill"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8731)}));s=a.O(s)})();
//# sourceMappingURL=app-legacy.46cbef9c.js.map