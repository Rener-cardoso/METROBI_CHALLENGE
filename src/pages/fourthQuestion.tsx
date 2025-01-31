import { useEffect } from "react";

export function FourthQuestion() {
  function isValidBrackets(string: string) {
    const stack = [];
    const pairs: Record<string, string> = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (const char of string) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char in pairs) {
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  useEffect(() => {
    const result = isValidBrackets("{([])}")
    console.log(result)
  }, [])

  return (
    <h1 className="text-green-500 text-lg font-semibold">isValidBrackets function</h1>
  )
}