import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import './layout.css';
const Layout = () => {
  
    return (
        <main className="layout-container">
            <div className="layout-links">
                <h1 className="layout-title"> Hey and welcome to Foodie!</h1>
                <p className="layout-sub-title">Here you can search foods delicious foods from around the world! Come take a look</p>
                <div className="link-container">
                    <p className="link-text">Here you can search up recipes in our database! Try it out!</p>
                    <Link to="searchFood"><button className="layout-btn">Enter page</button></Link>
                </div>

                <div className="link-container">
                    <p className="link-text">Having troubles deciding on food? Get a random meal here!</p>
                    <Link to="randomMeal"><button className="layout-btn">Enter page</button></Link>
                </div>

                <div className="link-container">
                    <p className="link-text">You can also search our food by category!</p>
                    <Link to="mealbycategory"><button className="layout-btn">Enter page</button></Link>
                </div>

                <div className="link-container">
                    <p className="link-text">Perhaps you look for a dish containing a specific ingredient?</p>
                    <Link to="mealbyingredients"><button className="layout-btn">Enter page</button></Link>
                </div>
                <div className="link-container">
                    <p className="link-text">How about some exotic food from one of these locations?</p>
                    <Link to="mealbycountry"><button className="layout-btn">Enter page</button></Link>
                </div>
             </div>
            <Outlet/>
        </main>
    )
}
export default Layout;

// Outlet should be used in parent route elements to render their child route elements. This allows 
// for nested UI to show up when child routes are rendered.
