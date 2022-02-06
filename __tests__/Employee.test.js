const { expect } = require("@jest/globals");
const { Obj } = require("prelude-ls");
const Employee = require("../lib/Employee");

const employee = new Employee('jacob', 25, "jacobtaylorclt@gmail.com");

describe(
    'Employee', () => {

        
        
        it('returns employee object', () => {
            expect(typeof employee).toBe(expect.any(Object))
        });
        it('returns employee name', () => {
            expect(employee.getName()).toEqual(expect.any(String))
        });
        
        it('returns employee id', () => {
            expect(employee.getId()).toEqual(expect.any(Number))
        });
        
        it('returns employee email', () => {
            expect(employee.getEmail()).toEqual(expect.any(String))
        });
        
        it('returns employee job', () => {
            expect(employee.getRole()).toEqual("Employee")
        });
    
    });