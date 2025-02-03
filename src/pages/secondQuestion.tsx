import { useEffect } from "react";

export function SecondQuestion() {
  async function printWithDelay(array: unknown[]) {
    for (let i = 0; i < array.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 2 ** i * 1000))
      console.log(array[i])
    }
  }
  
  useEffect(() => {
    printWithDelay(["a", "b", "c", "d"]);
  }, [])

  return (
    <div className="text-green-500 text-lg font-semibold border h-screen flex items-center justify-center">Async function with delay</div>
  )
}