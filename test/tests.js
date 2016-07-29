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

    it('should handle apostrophes correctly', () => {
        expect(Oppish.generate("It's")).to.equal("It-opp-'s-opp");
    });

    it('should handle two letter apostrophe words correctly', () => {
        expect(Oppish.generate("I'm")).to.equal("opp-I'm");
    });

    it('should handle only numbers correctly', () => {
        expect(Oppish.generate('98')).to.equal('98');
    });

    it('should handle mixed sentences correctly', () => {
        expect(Oppish.generate('Time for 10 beers!!!')).to.equal('T-opp-im-opp-e f-opp-or-opp 10 b-opp-eer-opp-s-opp!!!');
    });

    it('should handle underscores correctly', () => {
        expect(Oppish.generate('_Rex_.')).to.equal('_R-opp-ex-opp_.');
    });

    it('should handle ordinals correctly', () => {
        expect(Oppish.generate('8498465153513505th')).to.equal('opp-8498465153513505th');
    });

});
