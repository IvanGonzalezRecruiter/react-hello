import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [todolist, setTodolist] = useState([{ label: "", done: false }]);
	const [isX, setIsX] = useState(false);
	const [nuevatarea, setNuevatarea] = useState("");
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/EL225", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log("get");
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				console.log(resp); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				setTodolist(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, []);
	const handleKeyEnter = (e) => {
		let newTodo = [...todolist, { label: nuevatarea, done: false }];
		if (e.key === "Enter") {
			console.log(newTodo);
			setTodolist(newTodo);
			setNuevatarea("");
			angadido(newTodo);
		}
	};

	const borrado = (indice) => {
		const Ntodo = todolist.filter((item, index) => indice !== index);
		setTodolist(Ntodo);
		angadido(Ntodo);
	};

	const angadido = (nuevoTodolist) => {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/IvanGonzalezRecruiter", {
			method: "PUT",
			body: JSON.stringify(nuevoTodolist),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log("put");
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				console.log(resp); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	};
	const getTareas = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/EL225", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log("get");
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				console.log(resp); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				setTodolist(data);
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	};
	return (
		<div>
			<div style={{ marginTop: "10px" }}>
				<h1 className="text-center">to dos</h1>
			</div>
			<div>
				<input
					type="text"
					placeholder="to do"
					value={nuevatarea}
					onChange={(e) => {
						setNuevatarea(e.target.value);
					}}
					onKeyDown={handleKeyEnter}></input>
			</div>
			<ul className="list-group">
				{todolist.map((item, index) => (
					<li
						onMouseOver={() => setIsX(true)}
						onMouseLeave={() => setIsX(false)}
						key={index}
						className="list-group-item"
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						{item.label}
						{isX && (
							<button
								className="btn btn-danger"
								onClick={() => borrado(index)}>
								X
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
