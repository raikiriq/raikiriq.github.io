<template>
	<v-app-bar class="header" app fixed color="green lighten-3">
		<div class="header__title font-weight-black">
			<router-link to="/">
				<div class="d-flex justify-center">
					<v-icon size="48" color="black">
						mdi-cow
					</v-icon>
					<span class="ml-2 d-none d-sm-block">Baza</span>
				</div>
			</router-link>
		</div>

		<v-spacer></v-spacer>

		<router-link class="header__item" to="/">
			<div class="d-flex justify-center">
				<v-icon size="24" color="black">
					mdi-barley
				</v-icon>
				<span class="ml-1">Культуры</span>
			</div>
		</router-link>

		<v-menu
				offset-y
				transition="slide-y-transition"
				bottom
				open-on-hover
				rounded="lg"
		>
			<template v-slot:activator="{ on }">
				<div v-on="on" class="header__item d-flex justify-center">
					<v-icon size="24" color="black">
						mdi-cow
					</v-icon>
					<span class="ml-1">Животные</span>
				</div>
			</template>
			<v-list>
				<v-list-item to="/cows">
					<v-list-item-icon class="mr-0">
						<v-icon>mdi-cow</v-icon>
					</v-list-item-icon>
					<v-list-item-content class="ml-1">
						<v-list-item-title>Коровы</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
					<v-list-item to="/pigs">
					<v-list-item-icon class="mr-0">
						<v-icon>mdi-pig-variant-outline</v-icon>
					</v-list-item-icon>
					<v-list-item-content class="ml-1">
						<v-list-item-title>Свиньи</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item to="/chicken">
					<v-list-item-icon class="mr-0">
						<v-icon>mdi-food-drumstick-outline</v-icon>
					</v-list-item-icon>
					<v-list-item-content class="ml-1">
						<v-list-item-title>Курицы</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-menu>

	</v-app-bar>
</template>

<script>
export default {
	name: "AppHeader",
	data: () => ({
		isDropMenu: false,
	}),
}
</script>

<style scoped lang="scss">
.header {
	color: black;

	&__title {
		font-size: 30px;
	}

	&__item {
		padding: 15px 20px;
		//margin: 0 10px;

		@media  (max-width: 599px) {
			padding: 15px 10px;
		}
	}
}
</style>