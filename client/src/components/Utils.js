export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const dateTweetParser = (time) => {
  const tweetCreation = new Date(time);
  const timestamp = Date.parse(time);
  const now = Date.now();
  const dateDifference = (now - timestamp) / 1000;

  let options =
    tweetCreation.getFullYear() === new Date().getFullYear()
      ? {
          month: "short",
          day: "numeric",
        }
      : {
          year: "numeric",
          month: "short",
          day: "numeric",
        };

  if (dateDifference < 60) return Math.round(dateDifference) + "s";
  else if (dateDifference < 3600)
    return Math.round(dateDifference / 60) + " min";
  else if (dateDifference < 86400)
    return Math.round(dateDifference / 3600) + "h";

  return new Date(timestamp).toLocaleDateString("fr-FR", options);
};

export const dateParser = (time, options) => {
  const timestamp = Date.parse(time);
  return new Date(timestamp).toLocaleDateString("fr-FR", options);
}
