import { useEffect } from "react";

export function FifthQuestion() {
  function isBroken(floor: number) {
    const highestSafeFloor = 67; // If the safe limit is 67
    return floor > highestSafeFloor;
}

  function findHighestSafeFloor(totalFloors = 100) {
    const step = 10;
    let egg1 = 10;
    let drops = 0;
    
    while (egg1 <= totalFloors) {
        drops++;
        if (isBroken(egg1)) {
            egg1 -= step;
            break;
        }
        egg1 += step;
    }
    
    while (egg1 <= totalFloors) {
        drops++;
        if (isBroken(egg1)) {
            return egg1 - 1; // return the last secure floor
        }
        egg1++;
    }
    
    return totalFloors;
}
  
  useEffect(() => {
    const result = findHighestSafeFloor()
    console.log(result);
  }, [])

  return (
    <div className="text-green-500 text-lg font-semibold border h-screen flex items-center justify-center">Question about the Building</div>
  )
}