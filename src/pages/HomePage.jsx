import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h2>home</h2>

      <NavLink to="/pricing">pricing</NavLink>
    </div>
  );
}

export default HomePage;
