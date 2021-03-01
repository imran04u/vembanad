const CONFIG = {
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:2000/api' : '/api',
};
export default CONFIG;