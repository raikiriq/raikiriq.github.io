<template>
  <v-footer
      padless
      app
      absolute
  >
    <v-card
        class="text-center green lighten-3"
        flat
        tile
        width="100%"
    >
      <v-card-text>
        <v-btn
            v-for="contact in contacts"
            :key="contact.icon"
            class="mx-4"
            icon
        >
          <a :href="contact.src" target="_blank">
            <v-icon size="24px">
              {{ contact.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-divider/>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Кирилл Долгачев</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      contacts: [
        {
          icon: "mdi-account-circle",
          src: "https://vk.com/raikiriq"
        },
        {
          icon: "mdi-phone-classic",
          src: "tel:+79043158273"
        },
        {
          icon: "mdi-email",
          src: "mailto:kirill.dolgachev@mail.ru"
        },
      ]
    }
  }
}
</script>

