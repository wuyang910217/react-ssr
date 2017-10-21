import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
// 用户直接从路由进入/users，会执行，前台渲染后，会再次执行
// 但是不能取消，如果取消，用户从前台切换链接，不会执行服务器端渲染，会导致没有数据
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
