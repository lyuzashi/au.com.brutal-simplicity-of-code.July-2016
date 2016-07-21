export default class Oppish {

  static fix = `opp`;

  static generate(text) {

    return text.replace(/(\b\w{1,2}\b)/g,`😸$&😹`).replace(/((?![eiou])[b-z])(?!\1)(?!\w😹)/ig, `$&😼`).replace(/😼😹/g, `😹`).replace(/😼(?!\W|$)/g, `-${Oppish.fix}-`).replace(/😼(?!😹)/g, `-${Oppish.fix}`).replace(/😼/g, ``).replace(/😸(\w{1,2})😹/g, `${Oppish.fix}-$1`);

  }
}
