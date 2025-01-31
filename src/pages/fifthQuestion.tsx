import { useEffect } from "react";

export function FifthQuestion() {
  function findHighestFloor(andarSecreto = Math.floor(Math.random() * 100) + 1) {
    let step = 14;
    let currentFloor = step;
    let attempts = 0;

    while (currentFloor <= 100) {
        attempts++;
        if (currentFloor > andarSecreto) break;

        step--;
        currentFloor += step;
    }

    const ultimoSeguro = currentFloor - step;
    for (let i = ultimoSeguro + 1; i <= currentFloor; i++) {
        attempts++;
        if (i >= andarSecreto) return { andarSecreto, attempts };
    }

    return { andarSecreto, attempts };
}
  
  useEffect(() => {
    const result = findHighestFloor()
    console.log(result);
  }, [])

  return (
    <h1 className="text-green-500 text-lg font-semibold">Building Question</h1>
  )
}