const assert = require('assert');

describe('file test', ()=>{

    context('function test', ()=>{
        before(()=>{
            console.log('====before');
        });
        after(()=>{
            console.log('====after');
        });
        beforeEach(()=>{
            console.log('=====beforeEach');
        });
        afterEach(()=>{
            console.log('=====afterEach');
        });
        it('should test equal', ()=>{
            assert.equal(1,1);
        });
        it('should test deep equal', ()=>{
            assert.deepEqual({foo: 'bar'}, {foo: 'bar'});
        });
        it('should test equal', ()=>{
            assert.equal(1,1);
        });
        it('should test deep equal', ()=>{
            assert.deepEqual({foo: 'bar'}, {foo: 'bar'});
        });
        it('should test nothing');
    })
});