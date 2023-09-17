import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}
function Header() {
	// const styling = {
	// 	color: "red",
	// 	fontSize: "48px",
	// 	textTransform: "upperCase",
	// };
	return (
		<header className="header">
			<h1>Fast React Pizaa Co.</h1>
		</header>
	);
}
function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const pizzaNum = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu</h2>
			<ul className="pizzas">
				{pizzaNum > 0 ? (
					pizzas.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)
				) : (
					<p>We're still working on our menu. Please come back later.</p>
				)}
			</ul>
		</main>
	);
}
function Pizza({ pizzaObj }) {
	// if (props.pizzaObj.soldOut) return null;
	console.log(pizzaObj);
	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt="{pizzaObj.name}" />
			<h3>{pizzaObj.name}</h3>
			<p>{pizzaObj.ingredients}</p>
			{/* {pizzaObj.soldOut ? <span>SOLD Out</span> : <span>{pizzaObj.price}</span>} */}
			<span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
		</li>
	);
}
function Footer() {
	const hour = new Date().getHours();
	const openningHour = 12;
	const closingHour = 22;
	const isOpen = hour >= openningHour && hour <= closingHour;
	console.log(isOpen);
	return (
		<footer className="footer">
			{isOpen ? (
				<Order closingHour={closingHour} openningHour={openningHour} />
			) : (
				<p>
					We're closed now, come visit us between {openningHour}:00 and{" "}
					{closingHour}:00.
				</p>
			)}
		</footer>
	);
}
function Order({ closingHour, openningHour }) {
	// console.log(props);
	return (
		<div className="order">
			<p>
				We're open from {openningHour}:00 until {closingHour}:00 come visit us
				or order online!
			</p>
			<button className="btn">Order</button>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
