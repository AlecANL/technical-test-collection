

export function maxTaskDuration(teams) {
	return teams.map((team) => {
		const [totalTask, averageTask, minDuration] = team;
		const totalHours = totalTask * averageTask;
		const shortesTaskTotal = minDuration * (totalTask - 1);
		return totalHours - shortesTaskTotal;
	})
}