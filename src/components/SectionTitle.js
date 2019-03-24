import styled from "styled-components";

const SectionTitle = styled.div`
  width: 100%;
  line-height:30px;
  text-transform: uppercase;
  font-weight: 900;
  background-color: #208ecd;
  border-radius: 3px;
  box-shadow: 0 0 15px #208ecd;
  margin-top: 15px;
  transition: all 1.5s;
  text-align: center;
  &:hover {
    background-color: #17608a;
    color: #fff;
  }
`;

export default SectionTitle;
