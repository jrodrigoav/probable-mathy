import { useState } from "react";
import { AdditionCard } from "../../components/AdditionCard";
const HEADER_NAME="SESSIONID";
export function AdditionsPage() {
  const [problems,setProblems] = useState([]);

  async function handleLoad(e) {
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
            <h2 className="text-center my-4">Additions <button type="button" className="btn btn-primary" onClick={handleLoad}>🔃</button></h2>
            <div className="row">
                {problems.map((item) => <AdditionCard key={item.index} addition={item} />)}
            </div>
        </div>
    </div>
  );
}
