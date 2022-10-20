import rev from '../rev'


test(("test word hello"), () => {
    expect(rev("hello")).toBe("olleh");
})

test(("test word abhishek"), () => {
    expect(rev("ABHISHEK")).toBe("KEHSIHBA");
})

test(("test word kavita"), () => {
    expect(rev("KAVITA")).toBe("ATIVAK");
})