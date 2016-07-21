require('babel-register')();
require('babel-polyfill');

import Oppish from "../oppish.js";

var chai = require('chai');
var expect = chai.expect;


describe('Oppish Generator', function() {

    it('should generate Hello World correctly', () => {
        expect(Oppish.generate('Hello World')).to.equal('H-opp-ell-opp-o W-opp-or-opp-l-opp-d-opp');
    });

    it('should handle small words correctly', () => {
        expect(Oppish.generate('This is to small')).to.equal('T-opp-h-opp-is-opp opp-is opp-to s-opp-m-opp-all-opp');
    });

    it('should generate BSC correctly', () => {
        expect(Oppish.generate('Brutal Simplicity of Code')).to.equal('B-opp-r-opp-ut-opp-al-opp S-opp-im-opp-p-opp-l-opp-ic-opp-it-opp-y-opp opp-of C-opp-od-opp-e');
    });

    it('should generate greeting correctly', () => {
        expect(Oppish.generate('Hello, Kevin.')).to.equal('H-opp-ell-opp-o, K-opp-ev-opp-in-opp.');
    });

    it('should generate self-referential words correctly', () => {
        expect(Oppish.generate('Oppish is hard.')).to.equal('Opp-opp-is-opp-h-opp opp-is h-opp-ar-opp-d-opp.');
    });

    it('should handle small consonant words correctly', () => {
        expect(Oppish.generate('Fer rn tot')).to.equal('F-opp-er-opp opp-rn t-opp-ot-opp');
    });

});
