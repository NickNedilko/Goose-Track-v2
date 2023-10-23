import styled from 'styled-components';

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.bgColors.bgTaskList};
  height: 334px;
  max-width: 335px;
  // padding: 7px;
  @media (min-width: 768px) {
    height: 372px;
   max- width: 301px;
  }
`;

export const TaskListContainer = styled.div`
  height: 100%;
  width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 7px;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.bgColors.taskScroll};
    border-radius: 12px;
    height: 334px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bgColors.taskScrollThumb};
    border-radius: 12px;
  }
`;
