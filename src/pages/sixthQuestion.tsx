import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SixthQuestion() {
  const [achillesPos, setAchillesPos] = useState(0);
  const [turtlePos, setTurtlePos] = useState(30);
  const [step, setStep] = useState(30);
  const speedRatio = 0.5;

  useEffect(() => {
    if (step > 0.5) {
      setTimeout(() => {
        setAchillesPos(turtlePos);
        setTurtlePos(turtlePos + step * speedRatio);
        setStep(step * speedRatio);
      }, 1000);
    }
  }, [achillesPos, turtlePos, step]);

  return (
    <div className="relative w-full h-32 bg-gray-200 p-4 flex items-center">
      <motion.div 
        className="absolute bg-blue-500 text-white p-2 rounded" 
        animate={{ x: achillesPos + "%" }}>
        🏃‍♂️ Aquiles
      </motion.div>
      <motion.div 
        className="absolute bg-green-500 text-white p-2 rounded" 
        animate={{ x: turtlePos + "%" }}>
        🐢 Tartaruga
      </motion.div>
    </div>
  );
}
