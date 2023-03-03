export const isAuthSelector = (state) => Boolean(state.auth.data);
export const errorDataAuth = (state) => state.auth.error;
