export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2020
  const dateParts = dateString
    .split('/') // ['28', '10', '2018']
    .map((value: string): number => {
      return parseInt(value)
    })
  //dateParts[1] - 1 because month in date constructor is zero index
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}