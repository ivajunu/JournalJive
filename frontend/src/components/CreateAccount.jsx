import Input from "./Forms/Input";
import styled from "styled-components";

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

function CreateAccount() {
  return (
    <RegisterForm>
      <form action="">
        <Input placeholder={"Username"} />
        <Input placeholder={"Firstname"} />
        <Input placeholder={"Lastname"} />
        <Input placeholder={"Personal number"} />
        <Input placeholder={"Phone number"} />
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"} />
        <Input placeholder={"Repeat Password"} />
      </form>
    </RegisterForm>
  );
}

export default CreateAccount;
