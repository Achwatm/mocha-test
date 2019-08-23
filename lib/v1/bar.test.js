const assert = require('assert');

describe('file test', ()=>{

    context('function test', ()=>{
        // before(()=>{
        //     console.log('====before');
        // });
        // after(()=>{
        //     console.log('====after');
        // });
        // beforeEach(()=>{
        //     console.log('=====beforeEach');
        // });
        // afterEach(()=>{
        //     console.log('=====afterEach');
        // });
        it('should test equal', ()=>{
            assert.equal(1,1);
            console.log('ENV: ' + process.env.Node_ENV);

            if(process.env.Node_ENV === 'developement'){
                console.log('DEVELOPEMENT MODE');
            }
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
    });
    context('function2 test', ()=>{
        it('should test nothing');
    });
});