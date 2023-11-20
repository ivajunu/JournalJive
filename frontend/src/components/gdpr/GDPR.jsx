import styled from "styled-components";

const StyledDiv = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 2px #7f6e55;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  padding: 15px;
`;

export default function GDPR() {
  return (
    <div>
      <StyledDiv>
        <h1>Terms and Conditions</h1>
        <h2>Being a member of Journal Jive</h2>
        <p>
          We at Journal Jive thrive for being open and honest abourt our work.
          The data that we need to collect about you is nessery for many
          reasons:
        </p>
        <h2>How and why we collect your data:</h2>
        <ul>
          <li>
            We need to store and process personal information about you, such as
            firstname, lastname, phonenumber and email. The purpose of such
            processing is to know whos making the blogposts and connect the
            blogposts to the right account. Thats why we need your firstname and
            lastname. We need your email and phone number for verification and
            knowing that the person that is writing the blog posts actually is
            the right user and that your account hasn`t been compromised. We
            also need to be ably to contact you if your account has been
            compromised. We at Journal Jive will also be sending updates and
            advertisement to your email. This is so that you always stay updated
            with our new features.
          </li>
          <li>
            <ul>
              We have received your information from the registration form at
              our website/app (Journal Jive). We adhere to the current privacy
              legislation at all times when processing personal data. The legal
              basis for processing your personal data is:
              <li>
                Consent. By tapping or clicking the checkbox you are consenting
                to Journal Jive saving your information for purpuses listed
                above. You can at any time delete your account and if you decide
                to delete the account we will delete any stored information
                about you from our database.
              </li>
              <li>
                You are not in a contract with us by agreeing to the terms and
                conditions and you can at any time request to have your data
                removed. Please note that if you do decide to delete your data,
                we will have to delete your account.
              </li>
              <li>
                You have the right by law to know where your data is stored and
                how we use it. You also have the right to know what kind of data
                we collect.
              </li>
              <li>
                We will not share your data to any third party companies. The
                only company that will have access to your data is Journal Jive.
              </li>
            </ul>
            Your information will be stored at Journal Jive.
            <li>
              If you do not want to give your personal information to us then
              please note that you cannot have an account at Journal Jive. We
              need to be able to know who is writing the posts to keep the
              website running as intended. You can still access the website/app
              to see the blogposts, but you will not be able to write any
              yourself.
            </li>
          </li>
          <li>
            The personal data we process about you is shared with the team at
            Journal Jive. We may also share your personal data with a third
            party, provided that we are obligated to do so by law. However, we
            will never give or transfer your data to a country or company inside
            and outside the EU.
          </li>
          <li>
            The data controller is Journal Jivesson. You have the right to
            contact us if you want information about the data we have about you,
            to request correction, transfer, or to request that we restrict
            processing, make objections, or request deletion of your data. You
            can do this most easily by contacting us at
            journal.jivesson@journaljive.com. Our Data Protection Officer can be
            reached at Journal Jive street 6, Cat Land.
          </li>
          <li>
            If you have complaints about our processing of your personal data,
            you have the right to lodge a complaint with the supervisory
            authority, the Swedish Authority for Privacy Protection
            (Integritetsskyddsmyndigheten, IMY).
          </li>
        </ul>
      </StyledDiv>
    </div>
  );
}
