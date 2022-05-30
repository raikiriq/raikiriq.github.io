<template>
  <v-app>
		<AppHeader/>
		<v-main class="grey lighten-2">
			<v-container fluid >
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app padless absolute color="green lighten-3">
			<v-col
					class="text-center"
					cols="12"
			>
				{{ new Date().getFullYear() }} — <strong>Кирилл Долгачев, Денис Токмашов</strong>
			</v-col>
		</v-footer>
  </v-app>
</template>

<script>

import AppHeader from "@/components/AppHeader";

export default {
  name: 'App',
	components:{
		AppHeader
	},

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application a {
	color: inherit !important;
	text-decoration: none;
}
</style>
