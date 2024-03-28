import { useState } from "react";
import { AdditionsComponent } from "../../components/Additions";
const HEADER_NAME="SESSIONID";
export function HomePage() {
  const [problems,setProblems] = useState([]);
  async function handleStart(e) {
    e.preventDefault();
    const response = await fetch("/api/addition", {
      headers: {
        [HEADER_NAME]: sessionStorage.getItem(HEADER_NAME)
      }
    });
    if(response.ok)
    {
      const result = await response.json();
      setProblems(result);
    }
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2>Welcome</h2>
        <button type="button" className="btn btn-primary" onClick={handleStart}>Start</button>        
      </div>
      <AdditionsComponent additions={problems}/>
    </div>
  );
}
