import React from 'react';
// import { Route } from 'react-router-dom';

import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/users" component={UsersList} />
//       <Route exact path="/test" component={() => 'This is a test page'} />
//     </div>
//   );
// };

//服务器端渲染 根据react-router-config配置
export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/users',
    loadData,
    component: UsersList
  }
];
