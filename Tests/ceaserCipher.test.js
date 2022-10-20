import cC from '../ceaserCipher'

test(("attack at dawn! for 5 shit"), () => {
    expect(cC("attack at dawn!", 5)).toBe("fyyfhp fy ifbs!");
})


test(("long"), () => {
    expect(cC("First we translate all of our characters to numbers, 'a'=0, 'b'=1, 'c'=2, ... , 'z'=25. We can now represent the caesar cipher encryption function, e(x), where x is the character we are encrypting, as:", 5))
    .toBe("knwxy bj ywfsxqfyj fqq tk tzw hmfwfhyjwx yt szrgjwx, 'f'=0, 'g'=1, 'h'=2, ... , 'e'=25. bj hfs stb wjuwjxjsy ymj hfjxfw hnumjw jshwduynts kzshynts, j(c), bmjwj c nx ymj hmfwfhyjw bj fwj jshwduynsl, fx:");
})