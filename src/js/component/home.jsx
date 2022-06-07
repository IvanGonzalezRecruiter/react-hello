import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	const agregarTareas = (e) => {
		e.preventDefault();
		let tempLista = [...listaTareas];
		tempLista.push({ label: tareas, done: false });
		setListaTareas(tempLista);
		setTareas("");
		console.log(tempLista);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karenvicent", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tempLista),
		})
			.then((resp) => {
				console.log("STATUS");
				console.log(resp.status);
				return resp.json();
			})
			.then((data) => {
				console.log("console de la data");

				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	};
	const eliminarTodo = (e) => {
		const listaVacia = [];
		setListaTareas(listaVacia);
		let tempEliminado = [...listaTareas];
		console.log(listaTareas);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karenvicent", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(listaTareas),
		})
			.then((resp) => {
				console.log("STATUS");
				console.log(resp.status);
				return resp.json();
			})
			.then((data) => {
				console.log("console de la data");

				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	};
	const handleInputChange = (e) => {
		setTareas(e.target.value);
	};

	const eliminarTareas = (indice) => {
		let listaRemovida = listaTareas.filter(
			(item, posicion) => posicion !== indice
		);
		console.log(listaRemovida);
		setListaTareas(listaRemovida);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karenvicent", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(listaRemovida),
		})
			.then((resp) => {
				console.log("STATUS");
				console.log(resp.status);
				return resp.json();
			})
			.then((data) => {
				console.log("console de la data");

				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karenvicent", {
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
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				setListaTareas(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, []);

	return (
		<div className="caja">
			<div className="titulo mx-auto" style={{ width: "50rem" }}>
				<h1 className="text-center display-1">todos</h1>
			</div>
			<div className="card mx-auto" style={{ width: "50rem" }}>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex">
						<form
							className="me-auto p-2 text-muted fs-4 border-0 container-fluid"
							onSubmit={agregarTareas}>
							<input
								className="border-0 text-muted fs-4 container-fluid"
								type="text"
								placeholder="What needs to be done?"
								onChange={handleInputChange}
								value={tareas}></input>
						</form>
					</li>
					{listaTareas.map((element, indice) => (
						<li className="list-group-item d-flex" key={indice}>
							<p className="me-auto p-2 text-muted fs-4">
								{element.label}
							</p>
							<button
								className="btn fs-4 btn-outline-light border-0"
								onClick={() => eliminarTareas(indice)}>
								X
							</button>
						</li>
					))}
				</ul>
			</div>
			<button
				type="button"
				className="btn btn-danger"
				onClick={() => eliminarTodo()}>
				Eliminar Todo
			</button>
		</div>
	);
};

export default Home;
