import React from "react";

const eliminarComponent = () => {
	const eliminarTodo = (e) => {
		const listaVacia = [];
		setListaTareas(listaVacia);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/karenvicent", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(listaVacia),
		})
			.then((resp) => {
				console.log("STATUS");
				console.log(resp.status);
				return resp.json(listaTareas);
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

	return (
		<button
			type="button"
			className="btn btn-danger"
			onClick={() => eliminarTodo()}>
			Eliminar Todo
		</button>
	);
};

export default eliminarComponent;
