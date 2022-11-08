# String Challenge

Have the function StringChallenge(strArr) take the strArr parameter being passed, which will only contain a single element, and return the string true if it is a valid number that contains only digits with properly placed decimals and commas, otherwise return the string false. For example: if strArr is ["1,093,222.04"] then your program should return the string true, but if the input were ["1,093,22.04"] then your program should return the string false. The input may contain characters other than digits.

```bash
Input: ["0.232567"]
Output: true
```

```bash
Input: ["2,567.00.2"]
Output: false
```

```JavaScript
function StringChallenge(strArr) { 

  // code goes here  
  return strArr; 

}
   
// keep this function call here 
console.log(StringChallenge(readline()));
```
