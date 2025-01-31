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
    <h1 className="text-green-500 text-lg font-semibold">Async function with delay</h1>
  )
}