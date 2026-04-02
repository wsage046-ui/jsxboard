export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCase = (str: string): string => {
  return str
    .split('-')
    .map((word, index) =>
      index === 0 ? word : capitalize(word)
    )
    .join('');
};
