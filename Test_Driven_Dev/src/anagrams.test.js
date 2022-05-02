import { expect } from "chai";
import { isAnagrams } from "./anagrams";

describe("return true when both string is same letter", ()=>{
    it("return true when bothe para are empty", ()=>{
       const expected = true;
       const actual = isAnagrams('','')
       expect(actual).to.equal(expected);
    })
    it("return true when string para are the same", ()=>{
        const expected = true;
        const actual = isAnagrams('listen','silent')
        expect(actual).to.deep.equal(expected);
        
     })
     /*
     'listen' 'silent'
    'elbow' 'below'
    'elbows' 'below' Not anagrams
    'listens' 'silent' Not anagrams
    'conversation' 'voices rant on' Are anagrams
    'STATE' 'taste Are anagrams
     */
})