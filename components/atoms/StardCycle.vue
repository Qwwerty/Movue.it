<template functional>
	<section
		class="flex flex-col items-center justify-center flex-1 p-10 md:p-16"
	>
		<h1 class="text-2xl font-medium text-center">
			Start a new cycle to receive new challenges
		</h1>
		<img
			src="icons/level-up.svg"
			alt="Level up"
			class="mt-10 md:mt-16"
			:style="{ minHeight: '70px' }"
		/>
		<p class="mt-4 text-center text-md">
			Increase your level by completing challenges
		</p>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
