<template>
	<div class="flex flex-1 w-full mt-8 bg-white rounded-md lg:mt-0 shadow-sm">
		<Challenge v-if="currentChallenge" v-bind="currentChallenge" />
		<StartCycle v-else />
		<LevelUpModel />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex"

import Challenge from "~/components/molecules/Challenge.vue";
import StartCycle from "~/components/atoms/StardCycle.vue";
import LevelUpModel from "~/components/atoms/LevelUpModal.vue";

export default Vue.extend({
	components: {
		Challenge,
		StartCycle,
		LevelUpModel,
	},
	computed: mapGetters('Challenges', ['currentChallenge'])
});
</script>
