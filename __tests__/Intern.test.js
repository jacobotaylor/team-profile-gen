const { expect } = require("@jest/globals");
const { Obj } = require("prelude-ls");
const Intern = require("../lib/Intern");

const intern = new Intern('jacob', 25, "jacobtaylorclt@gmail.com", "UNCC");

describe(
    'Intern', () => {

        
        
        it('returns intern object', () => {
            expect(typeof intern).toBe(expect.any(Object))
        });
        it('returns intern name', () => {
            expect(manager.getName()).toEqual(expect.any(String))
        });
        
        it('returns intern id', () => {
            expect(intern.getId()).toEqual(expect.any(Number))
        });
        
        it('returns intern email', () => {
            expect(intern.getEmail()).toEqual(expect.any(String))
        });

        it('returns intern school', () => {
            expect(intern.getSchool()).toEqual(expect.any(String))
        });

        it('returns intern job', () => {
            expect(intern.getRole()).toEqual("Intern")
        });
    
    });