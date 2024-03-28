import brandlogo from "../../../assets/brand.jpeg";
export function HomePage() {

  return (
    <div className="row">
      <div className="col-md-3">
        <h2>Welcome</h2>
        <p>Select an option from the menu above</p>
      </div>
      <div className="col">
        <img src={brandlogo} alt="Logo" width="600" height="450" />
      </div>
    </div>
  );
}
