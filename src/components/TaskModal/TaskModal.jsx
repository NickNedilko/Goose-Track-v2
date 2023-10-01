import  Modal  from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';


export const TaskModal = ({ onClose, status, props }) => {  
  return (
    <Modal onClose={onClose}>      
      <TaskForm  onClose={onClose} status={status} props={props}/>                      
    </Modal>
  );     
};
