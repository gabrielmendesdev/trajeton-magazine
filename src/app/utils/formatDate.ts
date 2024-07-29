// Função para converter a data no formato YYYYMMDD para YYYY-MM-DD
export const formatDate = (dateNumber: number) => {
  const str = dateNumber.toString()
  const year = str.substring(0, 4)
  const month = str.substring(4, 6)
  const day = str.substring(6, 8)
  return `${year}-${month}-${day}`
}
