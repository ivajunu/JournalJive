// Källa: https://stackoverflow.com/questions/37230555/get-with-query-string-with-fetch-in-react-native

import FormButton from "../Forms/FormButton";
import Input from "../Forms/Input";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

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
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabledInput, setDisabledInput] = useState(true);
  const [sendUser, setSendUser] = useState("");

  const [editMode, setEditMode] = useState(true);
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const userName = localStorage.getItem("userName");
      if (userName) {
        setUsername(JSON.parse(userName));
        setSendUser(JSON.parse(userName));
      }
    } catch (error) {
      console.error("Error fetching user from local storage", error);
    }
  }, []);

  // useEffect(()=> {
  //  setSendUser(JSON.parse(localStorage.getItem("userName")));
  //  console.log(U);
  // }, [])

  useEffect(() => {
    function Autofill() {
      setUpdate(!true);
      console.log("senduser: ", sendUser);
      fetch(
        `http://localhost:3000/editaccount?username=${encodeURIComponent(
          sendUser
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Data från autofill: ", data);
          setFirstName(data[0].person_firstname);
          setLastName(data[0].person_lastname);
          setPhoneNumber(data[0].person_phone_number);
          setEmail(data[0].person_email);
          setPassword(data[0].person_password);
          setRepeatPassword(data[0].person_password);
        })
        .catch((error) => {
          console.error("Error editing person info", error);
        });
    }
    Autofill();
  }, [sendUser, update]);

  // useEffect(() => {
  //   Autofill();
  // }, []);

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

    fetch("/editaccount", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUpdate(!true);
      })
      .catch((error) => {
        console.error("Error editing person info", error);
      });
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
        <h3> Edit personal Information for: {userName} </h3>
        {/* <Input
          placeholder={userName}
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /> */}
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
