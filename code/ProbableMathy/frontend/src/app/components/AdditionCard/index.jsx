import PropTypes from 'prop-types';
import { useState } from 'react';

export function AdditionCard({ addition }) {
    const [sum, setSum] = useState(null)
    const [finish, setFinish] = useState(false);
    function handleChange(event) {
        event.preventDefault();
        setSum(event.target.value);
    }

    function handleFinish(event) {
        event.preventDefault();
        const finito = addition.a + addition.b == sum;
        setFinish(finito);
    }

    return (
        <div className="card col-sm-4 col-md-3">
            <div className="card-body">
                <h5 className="card-title">{addition.a} + {addition.b}</h5>
                <div className="col-auto">
                    <input type="number" className="form-control" onChange={handleChange} value={sum} min="0" max="1000" step="1" placeholder="Result" />
                </div>
                <div className="col-auto">
                    <button type="button" className={finish ? "btn btn-success" : "btn btn-primary"} onClick={handleFinish}>🟰</button>
                </div>
                <div className="card-footer text-body-secondary">
                    {sum == null ? '❓' : (finish ? '✅' : '❌')}
                </div>
            </div>
        </div>
    );
}

AdditionCard.propTypes = {
    addition: PropTypes.object.isRequired
}