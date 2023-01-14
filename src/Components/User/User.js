import React, { useState } from 'react';
import './User.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStateValue } from '../../StateProvider';

const User = ({ data }) => {
  const [like, setLike] = useState(false);
  const [, dispatch] = useStateValue();

  const editHandler = () => {
    dispatch({
      type: 'SHOW_MODAL',
      data: data,
    });
  };

  const deleteHandler = () => {
    dispatch({
      type: 'SHOW_DELETE',
      id: data.id,
    });
  };

  return (
    <div className='userDiv'>
      {/* User Svg Image block*/}
      <div className='userDiv__img'>
        <img
          style={{
            backgroundColor: '#F5F5F5',
          }}
          src={`https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`}
          alt='Avatar'
        />
      </div>

      {/* User data block */}
      <div className='userDiv__data'>
        <h4>{data.name}</h4>
        <div className='userDiv__data--div'>
          <MailOutlineIcon fontSize='small' />
          <p>{data.email}</p>
        </div>

        <div className='userDiv__data--div'>
          <PhoneEnabledOutlinedIcon fontSize='small' />
          <p>{data.phone}</p>
        </div>

        <div className='userDiv__data--div'>
          <LanguageOutlinedIcon fontSize='small' />
          <p>{data.website}</p>
        </div>
      </div>

      {/* User controller buttons */}
      <div className='userDiv__btn'>
        <div>
          <button onClick={() => setLike(!like)}>
            {like ? (
              <FavoriteIcon color='error' fontSize='small' />
            ) : (
              <FavoriteBorderIcon color='error' fontSize='small' />
            )}
          </button>
        </div>
        <div>
          <button onClick={editHandler}>
            <BorderColorOutlinedIcon fontSize='small' />
          </button>
        </div>
        <div>
          <button onClick={deleteHandler}>
            <DeleteIcon fontSize='small' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(User);
