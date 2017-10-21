import React from 'react';
// import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={HomePage} />
//       <Route exact path="/users" component={UsersListPage} />
//       <Route exact path="/test" component={() => 'This is a test page'} />
//     </div>
//   );
// };

//服务器端渲染 根据react-router-config配置
export default [
  {
    path: '/',
    exact: true,
    ...HomePage
  },
  {
    path: '/users',
    ...UsersListPage
  }
];
