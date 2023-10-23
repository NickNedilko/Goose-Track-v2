import { SvgButton, SvgIcon } from 'components/OneTask/OneTask.styled';
import Icon from '../../images/cartIcon.svg';
import { Wrapper } from './TaskStatusModal.styled';




export const TaskStatusModal = ()=>{

    return(
        <Wrapper>
            
                     <SvgButton>
                        <SvgIcon>
                          <use href={Icon + '#arrow'}  />
                        </SvgIcon>
                      </SvgButton> 

                      <SvgButton>
                        <SvgIcon>
                          <use href={Icon + '#arrow'}  />
                        </SvgIcon>
                      </SvgButton> 
        </Wrapper>
    )
}