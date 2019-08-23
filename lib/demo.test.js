const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var demo = require('./demo');
describe('demo test', ()=>{
    context('add', ()=>{
        it('should add two numbers',()=>{
            expect(demo.add(2,3)).to.equal(5);
        })
    });
    context('collback add', ()=>{
        it('should test the callback',(done)=>{
           demo.addCallback(1, 2, (err,result)=>{
               expect(err).to.not.exist;
               expect(result).to.equal(3);
               done();
           })
        })
    });
    context('test Promise', ()=>{
        it('should test a promise',(done)=>{
           demo.addPromise(1,2).then((result)=>{
               expect(result).to.equal(3);
               done();
            }).catch((ex)=>{
               console.log('cought an error');
               done(ex);
            })
        });
        it('should test a promise with return',()=>{
            return demo.addPromise(1,2).then((result)=>{
                expect(result).to.equal(3);

            });

        });
        it('should test a promise with async await',async()=>{
           let result = await demo.addPromise(1,2);
           expect(result).to.equal(3);
        });
        it('should test a promise with chai-as-promised',async()=>{
            await expect(demo.addPromise(1,2)).to.eventually.equal(3);
        });
    });


});