export function formatDateTime(dateTimeApi: string) {
  const arrayDateTime = dateTimeApi.split(' ')

  const arrayDate = arrayDateTime[0].split('-')
  const date = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`

  return {
    date,
    time: arrayDateTime[1]
  }
}