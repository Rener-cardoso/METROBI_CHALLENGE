import { useEffect } from "react"

export function FirstQuestion() {
  function findDuplicateItems(arr: unknown[]) {
    const controlArray = new Set();
    const duplicateItems = new Set();
    
    for (const item of arr) {
      if (controlArray.has(item)) {
        duplicateItems.add(item);
      } else {
        controlArray.add(item);
      }
    }
  
    return Array.from(duplicateItems);
  }

  useEffect(() => {
    const result = findDuplicateItems([1, 2, 2, 2, 7, 5, 5]);
    console.log(result)
  }, [])

  return (
    <h1 className="text-green-500 text-lg font-semibold">Find Duplicate Items function</h1>
  )
}