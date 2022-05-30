<template>
	<v-app-bar class="header" app fixed color="green lighten-3">
		<div class="header__title font-weight-black">
			<router-link to="/">
				<div class="d-flex justify-center">
					<v-icon size="48" color="black">
						mdi-cow
					</v-icon>
					<span class="ml-2">Baza</span>
				</div>
			</router-link>
		</div>

		<v-spacer></v-spacer>

		<router-link class="header__item" to="/">
			<div class="d-flex justify-center">
				<v-icon size="24" color="black">
					mdi-barley
				</v-icon>
				<span class="ml-1">Пшеница</span>
			</div>
		</router-link>

		<router-link class="header__item" to="/cows">
			<div class="d-flex justify-center">
				<v-icon size="24" color="black">
					mdi-cow
				</v-icon>
				<span class="ml-1">Коровы</span>
			</div>
		</router-link>

	</v-app-bar>
</template>

<script>
export default {
	name: "AppHeader"
}
</script>

<style scoped lang="scss">
.header {
	color: azure;
	&__title {
		font-size: 30px;
	}
	&__item {
		padding: 15px 20px;
		//margin: 0 10px;
	}
}
</style>