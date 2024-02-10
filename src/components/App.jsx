import { Layout } from './Layout';
import { GlobalStyle } from './Globalstyle';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import stats from '../data/statistics.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionsHistory } from './Transactions/TransactionsHistory';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile {...user} />
      <Statistics title="Upload stats" items={stats} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />;
    </Layout>
  );
};
