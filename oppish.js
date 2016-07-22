export default class Oppish {

  static fix = `opp`;

  static generate(text) {

    return text.replace(/(?!'.*')(?!".*")\b[\w'"]+\b/g, match => Word.new(match).toOppish());

  }
}

class Word {

  static new(word) {
    return new Word(word);
  }

  constructor(word = '') {
    Object.assign(this, {word});
  }

  toOppish() {
    const letters = this.word.match(/(?![0-9])\w/g);
    if(letters && letters.length <= 2){
      return [Oppish.fix, this.word].join(`-`);
    } else if(letters) {
      return this.word.replace(/((?![eiou])[b-z])(?!\1)/ig, (match, p, offset, string) => {
        const eow = offset >= string.length - 1 ? '' : '-';
        return `${p[0]}-${Oppish.fix}${eow}`;
      });
      
    } else {
      return this.word;
    }
  }

}
