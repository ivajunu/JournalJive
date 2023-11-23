import styled from "styled-components";
import FormButton from "../Forms/FormButton";
import { useNavigate } from "react-router-dom";
import UserTermsText from "./UserTermsText";

const StyledDiv = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 1.5rem;
  margin: 1rem;
`;

export default function GDPR() {
  const navigate = useNavigate();
  return (
    <div>
      <StyledDiv>
        <UserTermsText />
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
