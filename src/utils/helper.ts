export const checkLengthText = (text: string) => {
  if (text.length > 90) return `${text.slice(0, 90)}...`;
  return text;
};

export const randomDate = () => {
  const resDate = new Date(
    new Date(2012, 0, 1).getTime() +
      Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime())
  );
  const stringDate = resDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return stringDate;
};
