import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="flex flex-col gap-4 text-lg">
        <li><Link to="/firstQuestion">Question 1</Link></li>
        <li><Link to="/secondQuestion">Question 2</Link></li>
        <li><Link to="/thirdQuestion">Question 3</Link></li>
        <li><Link to="/fourthQuestion">Question 4</Link></li>
        <li><Link to="/fifthQuestion">Question 5</Link></li>
        <li><Link to="/sixthQuestion">Question 6</Link></li>
        <li><Link to="/seventhQuestion">Question 7</Link></li>
      </ul>
    </div>
  )
}