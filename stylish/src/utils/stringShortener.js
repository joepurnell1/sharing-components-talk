export default (title, limit) => {
  if (title.length < limit) return title;
  return `${title.substring(0, limit - 2)}...`;
}