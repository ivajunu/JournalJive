import FormButton from "./Forms/FormButton";
import Input from "./Forms/Input";
import CheckBox from "./Forms/CheckBox";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TOTO: set validation for document before posting

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 1rem;
  width: 95%;
  height: 100%;
  margin: 0.5rem;
`;

const buttonStyle = {
  margin: "1rem",
};

function CreateAccount() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [disabled, setDisabled] = useState(true);
  // const [NewPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (accept === true) {
      setDisabled(!accept);
    } else {
      setDisabled(!accept);
    }
  }, [accept]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/createaccount", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  function handleFormValues(e) {
    e.preventDefault();

    const formvalues = {
      username: userName,
      firstname: firstName,
      lastname: lastName,
      phonenumber: phoneNumber,
      email: email,
      password: password,
    };

    console.log("Värden från formuläret: ", { formvalues });

    fetch("http://localhost:3000/createaccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");

        navigate("/success-createuser");
      })
      .catch((error) => {
        console.error("Error creating user", error);
      });
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
          <p
            style={{
              fontWeight: 500,
              fontSize: "14px",
              wordBreak: "break-word",
            }}
          >
            Click on the buttons below, (Terms and conditions and GDPR) to read
            about how we collect data.
          </p>
          <div style={buttonStyle}>
            <FormButton
              label={"GDPR"}
              onClick={() => {
                navigate("/gdpr-info");
              }}
            ></FormButton>
          </div>
          <div style={buttonStyle}>
            <FormButton
              label={"Terms and conditions"}
              onClick={() => {
                navigate("/user-terms");
              }}
            ></FormButton>
          </div>
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
