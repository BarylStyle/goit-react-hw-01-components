import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";


function App() {
  return (
    <>
      <h1>1 - Profil w sieci społecznościowej</h1>
      <Profile
      username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  
      
      />
      <Statistics title="2-Upload stats" stats={data} />
      <h1>3 - Lista znajomych</h1>
      <FriendList friends={friends} />
      <h1>4 - Historia transakcji</h1>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;


