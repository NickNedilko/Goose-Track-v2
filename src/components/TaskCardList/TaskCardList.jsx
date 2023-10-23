import { useSelector } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

import {
  TaskListContainer,
  MainContainer,
} from './TaskCardList.styled';

import { TaskModal } from '../TaskModal/TaskModal';
import { OneTask } from 'components/OneTask/OneTask';

const TaskCardList = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskStatus, setTaskStatus] = useState('');
  const load = useSelector(state => state.calendar.isLoading);
  
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = e => {
    setIsOpen(true);
    setTaskStatus(e.currentTarget.name);
  };
 
  return (
    <MainContainer>
      {!load && (
        <TaskListContainer>
          <ul>
            {props.task.map((props) => (
              <OneTask  key={props._id} props={props} open={onOpen}/>
            ))}
          </ul>
          {isOpen &&
                    ReactDOM.createPortal(
                      <TaskModal
                        onClose={onClose}
                        status={taskStatus}
                        props={props.task}
                      />,
                      document.querySelector('#modal-root')
                    )}
        </TaskListContainer>
      )}
    </MainContainer>
  );
};

export default TaskCardList;
