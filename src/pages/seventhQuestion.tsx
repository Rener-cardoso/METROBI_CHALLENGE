import { useEffect } from "react";

interface CarrotProps {
  kg: number;
  price: number;
}

export function SeventhQuestion() {
  function getMaxValue(carrotTypes: CarrotProps[], capacity: number) {
    carrotTypes.sort((a, b) => (b.price / b.kg) - (a.price / a.kg));
    
    let maxValue = 0;
    
    for (const carrot of carrotTypes) {
        if (capacity === 0) break;
        
        const amount = Math.min(carrot.kg, capacity);
        maxValue += (amount / carrot.kg) * carrot.price;
        capacity -= amount;
    }
    
    return maxValue;
}

  useEffect(() => {
    const carrotTypes = [
      {kg: 5, price: 100}, 
      {kg: 7, price: 150}, 
      {kg: 3, price: 70},
    ]

    const capacity = 36

    const result = getMaxValue(carrotTypes, capacity);
    console.log(result)
  }, [])

  return (
    <div className="text-green-500 text-lg font-semibold border h-screen flex items-center justify-center">MaxValueFunction</div>
  )
}