import FormButton from "./Forms/FormButton";
import Input from "./Forms/Input";
import CheckBox from "./Forms/CheckBox";
// import Date from "./Forms/DatePicker";
import styled from "styled-components";
import { useState, useEffect } from "react";

// TOTO: set validation for document before posting

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 15px;
`;

function CreateAccount() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [disabled, setDisabled] = useState(true);
  // const [formValues, setFormvalues] = useState("");

  useEffect(() => {
    if (accept === true) {
      setDisabled(!accept);
    } else {
      setDisabled(!accept);
    }
  }, [accept]);

  function handleFormValues(e) {
    e.preventDefault();
    const formvalues = {
      name: userName,
      firstname: firstName,
      lastname: lastName,
      personalnumber: personalNumber,
      phonenumber: phoneNumber,
      email: email,
      password: password,
      repeatpassword: repeatPassword,
    };

    console.log("Värden från formuläret: ", { formvalues });
  }

  return (
    <RegisterForm>
      <form>
        <Input
          placeholder={"Username"}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <Input
          placeholder={"Firstname"}
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <Input
          placeholder={"Lastname"}
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Input
          placeholder={"Personal number"}
          value={personalNumber}
          onChange={(e) => {
            setPersonalNumber(e.target.value);
          }}
        />
        {/* <Date /> */}
        <Input
          placeholder={"Phone number"}
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <Input
          placeholder={"Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          type={"password"}
          placeholder={"Repeat Password"}
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        />
        <div style={{ padding: "5px" }}>
          <CheckBox
            label={"I accept the terms and conditions"}
            value={accept}
            onChange={() => {
              setAccept(!accept);
            }}
          />
          <FormButton
            disabled={disabled}
            label={"Register Account"}
            onClick={handleFormValues}
          />
        </div>
      </form>
    </RegisterForm>
  );
}

export default CreateAccount;
