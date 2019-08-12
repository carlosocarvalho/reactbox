import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const CardStyled = styled(Card)`
  border: none;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    margin-bottom: 30px;
    background-color: #fff;
    .card-header{
      background-color: #fff;
      border-color: rgba(100,100,100,.12)
    }
`;


export default CardStyled;