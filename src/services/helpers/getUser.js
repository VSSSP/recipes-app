const USER = 'user';

const getUser = () => JSON.parse(localStorage.getItem(USER));

export default getUser;
