

import styled from 'styled-components';
import {Form as FormB, FormControl as FormC} from 'react-bootstrap';

export const Form = styled(FormB)`
  
`;

export const FormControl = styled(FormC)`
border-radius: 2px;
border: 0px;
box-shadow: 1px 1px 3px rgba(200,200,200,.6);

&:focus{
    border:0px;
}

`