import React, { useState, useEffect } from "react";

const Home = () => {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		//logica
		fetch("https://assets.breatheco.de/apis/fake/todos/user/IvanGonzalezRecruiter", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log("STATUS");
				console.log(resp.status);
				return resp.json();
			})
			.then((data) => {
				setTodoList(data);
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, []);

	return (
		<div>
			<h1 className="text-center mt-5">Fetch</h1>
			{todoList.map((item, index) => (
				<div key={index}>
					<p>{item.label}</p>
				</div>
			))}
		</div>
	);
};

export default Home;import React, { useState, useEffect } from "react";

const Home = () => {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		//logica
		fetch("https://assets.breatheco.de/apis/fake/todos/user/IvanGonzalezRecruiter", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log("STATUS");
				console.log(resp.status);
				return resp.json();
			})
			.then((data) => {
				setTodoList(data);
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, []);

	return (
		<div>
			<h1 className="text-center mt-5">Fetch</h1>
			{todoList.map((item, index) => (
				<div key={index}>
					<p>{item.label}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
