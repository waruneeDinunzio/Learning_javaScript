import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';
export const isAnagrams = (string1,string2) => {
    // const letters1 = string1.split('');
    // const letters2 = string2.split('');
    // let letterCount1 = {};
    // let letterCount2 = {};
    // if (string1 == '' && string2 ==''){
    //     return true;
    // }
    // letters1.forEach(letter1 => {
    //     //if letterCount doesn't have letter in it
    //     if(!letterCount1[letter1]){
    //         letterCount1[letter1] = 1;
    //     }else {
    //         letterCount1[letter1] += 1;       
    //     }
    // })
    // letters2.forEach(letter2 => {
    //     //if letterCount doesn't have letter in it
    //     if(!letterCount2[letter2]){
    //         letterCount2[letter2] = 1;
    //     }else {
    //         letterCount2[letter2] += 1;       
    //     }
    // })
    // return isEqual(letterCount1, letterCount2);
  const string1LetterCount = getLetterCount(string1);
  const string2LetterCount = getLetterCount(string2);
  return isEqual(string1LetterCount, string2LetterCount)
};
