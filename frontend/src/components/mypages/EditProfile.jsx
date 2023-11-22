import FormButton from "../Forms/FormButton";
import Input from "../Forms/Input";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const RegisterForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 20px;
  /* width: 95%; */
  height: 100%;
  margin: 0.5rem;
`;

const EditProfile = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabledInput, setDisabledInput] = useState(true);

  const [editMode, setEditMode] = useState(true);
  const UserDisabled = true;

  const navigate = useNavigate();

  function saveChanges() {
    setDisabledInput(true);
    setEditMode(true);

    const editedValues = {
      username: userName,
      firstname: firstName,
      lastname: lastName,
      phonenumber: phoneNumber,
      email: email,
      password: password,
    };

    console.log("Ändrade värden: ", { editedValues });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>My pages</h1>
      </div>
      <RegisterForm>
        <Input
          placeholder={"Username"}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          disabled={UserDisabled}
        />
        <div>
          <p>First & Lastname</p>
          <Input
            placeholder={"Change firstname"}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            disabled={disabledInput}
          />
          <Input
            placeholder={"Change lastname"}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            disabled={disabledInput}
          />
        </div>
        <div>
          <p>Contact Information</p>
          <Input
            placeholder={"Change phone number"}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            disabled={disabledInput}
          />
          <Input
            placeholder={"Change email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={disabledInput}
          />
        </div>
        <div>
          <p>Password</p>
          <Input
            type={"password"}
            placeholder={"Change password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={disabledInput}
          />
          <Input
            type={"password"}
            placeholder={"Repeat changed password"}
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            disabled={disabledInput}
          />
        </div>
        {editMode ? (
          <FormButton
            label={"Edit my pages"}
            onClick={() => {
              setDisabledInput(false);
              setEditMode(false);
            }}
          />
        ) : (
          <FormButton label={"Save Changes"} onClick={saveChanges} />
        )}
      </RegisterForm>
      <div>
        <FormButton
          label={"Back"}
          onClick={() => {
            navigate("/landing-page");
          }}
        ></FormButton>
      </div>
    </div>
  );
};

export default EditProfile;
