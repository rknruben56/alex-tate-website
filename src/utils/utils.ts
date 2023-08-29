export const sortByDateDesc = (a, b) => {
  const dateB = new Date(b.createdAt)
  const dateA = new Date(a.createdAt)
  return dateB.getTime() - dateA.getTime()
}
