class LocalStorage {
	constructor() {
		this.localStorage = window.localStorage;
	}

	get(key) {
		return this.localStorage.getItem(key);
	}

	set(key, value) {
		this.localStorage.setItem(key, value);
	}

	clear() {
		this.localStorage.clear();
	}
}

// export const loadState = () => {
//     try {
//         const ls = new LocalStorage();
//         const cartState = ls.get("cart");

//         if(cartState === null) {
//             return undefined;
//         }

//         const cart = JSON.parse(cartState);

//         return {
//             cart: Array.isArray(cart) ? cart : [],
//         };
//     } catch (err) {
//         return undefined;
//     }
// }

// export const saveState = ({ cart }) => {
//     try {
//         const ls = new LocalStorage();
//         const serializedCart = JSON.stringify(cart);
//         ls.set('cart', serializedCart);
//     } catch (err) {
//         console.log(err);
//     }
// }

export default LocalStorage;
