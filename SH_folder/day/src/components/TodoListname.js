import React from 'react';
import { HiOutlineClock, HiOutlineMenuAlt1,HiOutlineCheckCircle,HiOutlineCalendar} from "react-icons/hi";
import styled from 'styled-components';

const TodoListm = styled.div`

padding-left: 32px;
padding-top: 20px;
padding-bottom: 20px;
border-bottom: 3px solid #e9ecef;
th{
  padding-left: 20px;
  padding-right: 250px;
  font-size: 20px;
  font-weight: nomal;
  color: #808080;
}
tv{
  padding-left: 160px;
  padding-right: 80px;
  font-size: 20px;
  font-weight: bold;
  color: #808080;
} 
`;  

function TodoListname(){
  return (
      <TodoListm>
        <table>
            <thead>
            <tr>
                
                <th><HiOutlineClock/> TIME</th>
                <th><HiOutlineCalendar/> CONTENT</th>
                <th><HiOutlineMenuAlt1/> MEMO</th>
                <tv><HiOutlineCheckCircle/> DONE</tv>
                
            </tr>
            </thead>
        </table>
    
      </TodoListm>
  );

}

export default TodoListname;
