import { Getters } from "./types";

export default {
	challengesLength: (state) => state.allChallenges.length,
	currentXpPercentage: (state) => {
		const percentage = (state.xp.current / state.xp.end) * 100;
		return Number(percentage.toFixed(2));
	},
	currentChallenge: (state) =>
		typeof state.curretnChallengeIndex === "number"
			? state.allChallenges[state.curretnChallengeIndex]
			: null,
} as Getters;
