export const isLoggedIn = ()=>!!localStorage.getItem('user');

export const login = (data)=>localStorage.setItem('user', data);

export const logout = ()=>localStorage.removeItem('user');