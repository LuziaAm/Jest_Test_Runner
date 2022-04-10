const modulo1 = require('./modulo1')

describe('basic feature', () =>{
    it('should return right value', () =>{
        expect(modulo1.func1(10)).toBe(11)
    }),
    it('should return right value', () =>{
        expect(modulo1.func1(10)).toBe(12)
    }),

    it('func2',() =>{
        const cb = jest.fn()
        cb.mockReturnValue(1)   
        expect(modulo1.func2(10, cb)).toBe(11)
        expect(cb.mock.calls[0][0   ]).toBe(10)
        console.log(cb.mock.calls)
    }),
    it('func2',() =>{
        const cb = jest.fn()
        cb.mockReturnValue(2)
        expect(modulo1.func2(10, cb)).toBe(11)
        expect(cb.mock.calls[0]).toBe(11)//Usando Mock
    })
})