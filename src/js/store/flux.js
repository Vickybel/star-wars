const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: null,
			planets: null,
			count: null,
			favs: []
		},
		actions: {
			loadSomeData: () => {
				/*
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getCharacters: () => {
				fetch("https://swapi.dev/api/people/?pague=2%2F&page=")
					.then(res => res.json())
					.then(data => setStore({ characters: data }))
					.catch(error => console.error(error));
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data }))
					.catch(error => console.error(error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                fetch().then().then(data => setStore({ "foo": data.bar }))
            */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			enviarFavoritos: nombre => {
				const store = getStore();

				const newFavs = [...store.favs, nombre];
				setStore({ favs: newFavs });
			},

			nextCharacters: () => {
				const store = getStore();
				if (store.count < 9) {
					setStore({ count: store.count + 1 });
					console.log(store.count);

					fetch("https://swapi.dev/api/people/?page=" + store.count)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ characters: data }))
						.catch(error => console.error("error ", error));
				}
			},
			previousCharacters: () => {
				const store = getStore();
				if (store.count > 1) {
					setStore({ count: store.count - 1 });
					console.log(store.count);

					fetch("https://swapi.dev/api/people/?page=" + store.count)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ characters: data }))
						.catch(error => console.error("error ", error));
				}
			},

			nextPlanets: () => {
				const store = getStore();
				if (store.count < 9) {
					setStore({ count: store.count + 1 });
					console.log(store.count);

					fetch("https://swapi.dev/api/planets/?page=" + store.count)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ planets: data }))
						.catch(error => console.error("error ", error));
				}
			},
			previousPlanets: () => {
				const store = getStore();
				if (store.count > 1) {
					setStore({ count: store.count - 1 });
					console.log(store.count);

					fetch("https://swapi.dev/api/planets/?page=" + store.count)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ planets: data }))
						.catch(error => console.error("error ", error));
				}
			}
		}
	};
};
export default getState;
