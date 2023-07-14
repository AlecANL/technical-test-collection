export function willMakeIt(newFunctionPerDar, deletedFunctionPerDay, daysToDeadline, totalFunctionsWillBe) {
	const functionPerDay	= newFunctionPerDar - deletedFunctionPerDay
	const totalFunctions	= functionPerDay * daysToDeadline
	return	totalFunctions >= totalFunctionsWillBe
}