import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import axios from 'axios';
import './Users.css';
import User from '../User/User';
import Spinner from '../Spinner/Spinner';
import ModalCont from '../Modal/ModalCont';
import Delete from '../Delete/Delete';

const Users = () => {
  const [{ users, modal, user }, dispatch] = useStateValue();

  useEffect(() => {
    // API Call to get array of 10 users
    axios
      .get('https://mocki.io/v1/f7ffa6d6-d795-418a-acb2-ce0aaa665ea2')
      .then((data) => {
        dispatch({
          type: 'SAVE_USER',
          data: data.data,
        });
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {users?.length > 0 ? (
        <div>
          <div className='usersCont'>
            {/* Mapping through the user card child component */}
            {users.map((user) => (
              <User key={user.id} data={user} />
            ))}
          </div>
          {/* Update Form Modal Component */}
          {modal && <ModalCont modal={modal} user={user} />}
          {/* Delete Modal Component */}
          <Delete />
        </div>
      ) : (
        <div className='spinnerDiv'>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Users;
