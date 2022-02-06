const { expect } = require("@jest/globals");
const { Obj } = require("prelude-ls");
const Engineer = require("../lib/Engineer");

const engineer = new Engineer('jacob', 25, "jacobtaylorclt@gmail.com", "jacobotaylor");

describe(
    'Engineer', () => {

        
        
        it('returns engineer object', () => {
            expect(typeof engineer).toBe(expect.any(Object))
        });
        it('returns engineer name', () => {
            expect(engineer.getName()).toEqual(expect.any(String))
        });
        
        it('returns engineer id', () => {
            expect(engineer.getId()).toEqual(expect.any(Number))
        });
        
        it('returns engineer email', () => {
            expect(engineer.getEmail()).toEqual(expect.any(String))
        });

        it('returns engineer Github', () => {
            expect(engineer.getGithub()).toEqual(expect.any(String))
        });

        it('returns engineer job', () => {
            expect(engineer.getRole()).toEqual("Engineer")
        });
    
    });