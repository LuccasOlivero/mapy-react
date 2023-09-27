import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <div>
      <PageNav />
      <h1>Price</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Pricing;
