const { expect } = require("@jest/globals");
const { Obj } = require("prelude-ls");
const Manager = require("../lib/Manager");

const manager = new Manager('jacob', 25, "jacobtaylorclt@gmail.com", "27");

describe(
    'Manager', () => {

        
        
        it('returns manager object', () => {
            expect(typeof manager).toBe(expect.any(Object))
        });
        it('returns manager name', () => {
            expect(manager.getName()).toEqual(expect.any(String))
        });
        
        it('returns manager id', () => {
            expect(manager.getId()).toEqual(expect.any(Number))
        });
        
        it('returns manager email', () => {
            expect(manager.getEmail()).toEqual(expect.any(String))
        });

        it('returns manager office number', () => {
            expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
        });

        it('returns manager job', () => {
            expect(manager.getRole()).toEqual("Manager")
        });
    
    });