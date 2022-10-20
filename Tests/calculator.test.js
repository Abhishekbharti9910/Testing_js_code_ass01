import cal from '../calculator'

test(("add 2 and 3"), () => {
    expect(cal.add(2, 3)).toBe(5);
})

test(("multiply 2 and 3"), () => {
    expect(cal.mul(2, 3)).toBe(6);
})

test(("subtract 56 and 34"), () => {
    expect(cal.sub(56, 34)).toBe(22);
})

test(("divide 36 by 2"), () => {
    expect(cal.div(36,2)).toBe(18);
})