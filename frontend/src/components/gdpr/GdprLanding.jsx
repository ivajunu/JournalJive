import styled from "styled-components";
import FormButton from "../Forms/FormButton";
import { useNavigate } from "react-router-dom";
import GdprText from "./GdprText";

const StyledDiv = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 15px;
  margin: 1rem;
`;

export default function GDPR() {
  const navigate = useNavigate();
  return (
    <div>
      <StyledDiv>
        <GdprText />
        <FormButton
          label={"Back"}
          onClick={() => {
            navigate("/landing-page");
          }}
        ></FormButton>
      </StyledDiv>
    </div>
  );
}
