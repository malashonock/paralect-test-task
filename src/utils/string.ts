export const toSentenceCase = (text: string): string => {
  if (text.length > 0) {
    return text
      .slice(0, 1)
      .toUpperCase()
      .concat(text.slice(1));
  } else {
    return text;
  }
};