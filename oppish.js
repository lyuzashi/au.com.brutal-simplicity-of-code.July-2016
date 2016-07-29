export default class Oppish {

  static fix = `opp`;
  static join = `-`;
  static wordBoundaries = new RegExp(`\\b[0-9a-z']+\\b|[0-9a-z]+`, `ig`);
  static nonRepeatingConsonants = new RegExp(`((?![eiou])[0-9b-z])(?!\\1)`, `ig`);
  static lettersThatCount = new RegExp(`[a-z]`, `ig`);

  static generate(text) {
    return text.replace(Oppish.wordBoundaries, word => {
      const letters = word.match(Oppish.lettersThatCount);
      let output = word;
      if (letters && letters.length <= 2) {
        output = [Oppish.fix, word].join(Oppish.join);
      } else if (letters) {
        output = word.replace(Oppish.nonRepeatingConsonants, (match, p, offset, string) => {
          const eow = offset >= string.length - 1 ? `` : Oppish.join;
          return `${p[0]}-${Oppish.fix}${eow}`;
        });
      }
      return output;
    });
  }
}
