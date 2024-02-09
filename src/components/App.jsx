import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Layout } from './Layout';
import { GlobalStyle } from './Globalstyle';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile {...user} />
    </Layout>
  );
};
