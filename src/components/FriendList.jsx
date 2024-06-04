import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/FriendList.css'; 

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;