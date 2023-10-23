import useAuth from 'hooks/useAuth';
import * as ReactDOM from 'react-dom';
import Icon from '../../images/cartIcon.svg';

import { useDispatch } from 'react-redux';
import { IconContainer, StatusContainer, StatusText, SubContainer, SvgButton, SvgIcon, TaskContainer, TaskItem, TaskText, UserContainer, UserFoto } from './OneTask.styled';
import { deleteTaskOperation } from 'redux/calendar/calendar.operations';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { TaskStatusModal } from 'components/TaskStatusModal/TaskStatusModal';



export const OneTask = ({ props:{_id, title, priority}, open }) =>{
    const { user } = useAuth();
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false)
  
    const toggleModal =()=>{
      setModal((prevstate=>!prevstate))
      console.log(modal)
    }


    const colorStatus = status => {
      switch (status) {
        case 'low':
          return ' #72C2F8;';
  
        case 'medium':
          return ' #F3B249;';
  
        case 'high':
          return ' #EA3D65;';
  
        default:
          break;
      }
    };
  
   
  
    const defUser = require('../../images/defUser.jpg');

    return(
        <TaskItem key={_id}>
                <TaskContainer>
                  <TaskText>{title}</TaskText>
                  <SubContainer>
                    <UserContainer>
                      {user.avatarUrl ? (
                        <UserFoto src={user.avatarUrl} alt="userFoto" />
                      ) : (
                        <UserFoto src={defUser} alt="userFoto" />
                      )}
                      <StatusContainer $status={colorStatus(priority)}>
                        <StatusText>{priority}</StatusText>
                      </StatusContainer>
                    </UserContainer>
                    <IconContainer>
                      <SvgButton>
                        <SvgIcon>
                          <use href={Icon + '#arrow'}  onClick={toggleModal}/>
                        </SvgIcon>
                      </SvgButton>

                      <SvgButton name={_id}  onClick={open}>
                        <SvgIcon>
                          <use href={Icon + '#pencil'} />
                        </SvgIcon>
                      </SvgButton>

                      <SvgButton
                        onClick={() => dispatch(deleteTaskOperation(_id))}
                      >
                        <SvgIcon>
                          <use href={Icon + '#trash'} />
                        </SvgIcon>
                      </SvgButton>
                    </IconContainer>
                  </SubContainer>
                </TaskContainer>
                {modal &&
                    ReactDOM.createPortal(
                      <TaskStatusModal/>,
                       
                      document.querySelector('#modal-root')
                    )}
              </TaskItem>
    )
}