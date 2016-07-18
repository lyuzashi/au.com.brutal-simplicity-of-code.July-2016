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
        expect(Oppish.generate('This is small')).to.equal('T-opp-h-opp-is-opp opp-is s-opp-m-opp-all-opp');
    });
});
