import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to UrbanTastes</h1>
                <p>Your go-to platform for delicious recipes and food orders!</p>
            </header>

            <section className="home-buttons">
                <button className="nav-button" onClick={() => navigate("/recipe")}>Learn Recipe</button>
                <button className="nav-link" onClick={() => navigate("/explore")}>Explore Menu</button>
            </section>

            <section className="home-cards">
                <div className="card">
                    <h2>For Customers</h2>
                    <p>Browse and order from a variety of delicious meals.</p>
                    <button onClick={() => navigate("/customer-signup")}>Join as Customer</button><br></br>
                    <button onClick={() => navigate("/customer-login")}>login</button>
                </div>
                <div className="card">
                    <h2>For Businesses</h2>
                    <p>Manage orders and dispatch food efficiently.</p>
                    <button onClick={() => navigate("/business-signup")}>Join as Business</button><br></br>
                    <button onClick={() => navigate("/business-login")}>login</button>
                    
                </div>
            </section>
        </div>
    );
};

export default Home;

//<Link to="/menu" className="nav-link">Explore Menu</Link>