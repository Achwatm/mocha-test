const chai = require('chai');
const expect = chai.expect;

describe('chai test', ()=>{
    context('test function', ()=>{
        it('should test values', ()=>{
            expect(1).to.equal(1);
        });
        it('should do some tests', ()=>{
            expect({foo:'bar'}).to.deep.equal({foo:'bar'});
            expect({foo:'bar'}).to.have.property('foo').to.equal('bar');
            expect(5>8).to.be.false;
            expect({foo:'bar'}).to.be.a('object');
            expect('foo').to.be.a('string')
            expect(3).to.be.a('number');
            expect('bar').to.be.a('string').with.lengthOf(3);
            expect([1,2,3].length).to.equal(3);
            expect(null).to.be.null;
            expect(undefined).to.not.exist;
            expect(1).to.exist;
        });
    });
});