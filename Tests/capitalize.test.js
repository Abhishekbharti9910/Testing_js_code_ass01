import cap from '../capitalize'


test('capital check one', () => { 
    expect(cap("abhishek bharti")).toBe("ABHISHEK BHARTI");
 })

 test("just a snetence ", () => {
    expect(cap('don\'t talk bullshit')).toBe("DON\'T TALK BULLSHIT");
 } )