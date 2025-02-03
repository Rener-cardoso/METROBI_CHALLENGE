import { useEffect } from "react";

export function FourthQuestion() {
  function isValidBrackets(string: string) {
    const controlArray = [];
    const pairs: Record<string, string> = {
      ')': '(',
      '}': '{',
      ']': '['
    };

    for (const char of string) {
      if (char === '(' || char === '{' || char === '[') {
        controlArray.push(char);
      } else if (char in pairs) {
        if (controlArray.pop() !== pairs[char]) {
          return false;
        }
      }
    }
  
    return controlArray.length === 0;
  }

  useEffect(() => {
    const result = isValidBrackets("{([])}")
    console.log(result)
  }, [])

  return (
    <div className="text-green-500 text-lg font-semibold border h-screen flex items-center justify-center">isValidBrackets function</div>
  )
}