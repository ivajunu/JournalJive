import styled from "styled-components";

const StyledP = styled.p`
  font-weight: 700;
  text-transform: lowercase;
`;

const StyledHeadline = styled.h2`
  font-size: 1rem;
  text-decoration: underline;
  font-weight: 900;
  color: #57452b;
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 0.5rem;
  text-align: left;
`;

export default function GdprText() {
  return (
    <div>
      <h1>Terms and Conditions</h1>
      <StyledHeadline>Being a member of Journal Jive</StyledHeadline>
      <StyledP>
        We at Journal Jive thrive to be open and honest about our work. The data
        that we need to collect about you is necessery for many reasons.
      </StyledP>
      <StyledHeadline>The How's and Why's:</StyledHeadline>
      <ul>
        <StyledLi>
          We need to store and process personal information about you, such as
          firstname, lastname, phonenumber and email. The purpose of such
          processing is to know who is making the blogposts and connect the
          blogposts to the right account. That's why we need your first- and
          lastname. We need your email and phone number for verification
          purposes. We also need to be ably to contact you if your account has
          been compromised. We at Journal Jive will be sending updates and
          advertisement to your email. This is so you're always in the know with
          our new features.
        </StyledLi>
        <StyledLi>
          We have received your information from the registration form at our
          website/app (Journal Jive). We adhere to the current privacy
          legislation at all times when processing personal data. The legal
          basis for processing your personal data is:
        </StyledLi>
        <StyledLi>
          Consent. By tapping or clicking the checkbox you are consenting to
          Journal Jive saving your information for purposes listed above. You
          can delete your account at any time and if you decide to delete the
          account we will delete any stored information about you from our
          database.
        </StyledLi>
        <StyledLi>
          This is not a contract. You're not entering any type of contract with
          us by agreeing to the terms and conditions. and you can at any time
          request to have your data removed. Please note that if you do decide
          to delete your data, we will have to delete your account.
        </StyledLi>
        <StyledLi>
          You have the right by law to know where your data is stored and how we
          use it. You also have the right to know what kind of data we collect.
        </StyledLi>
        <StyledLi>
          We will not share your data to any third party companies. The only
          company that will have access to your data is Journal Jive.
        </StyledLi>
        <StyledLi>
          If you do not want to give your personal information to us then please
          note that you cannot have an account at Journal Jive. We need to be
          able to know who is writing the posts to keep the website running as
          intended. You can still access the website/app to see the blogposts,
          but you will not be able to write any posts yourself.
        </StyledLi>
        <StyledLi>
          The personal data we process about you is shared with the team at
          Journal Jive. We may also share your personal data with a third party,
          provided that we are obligated to do so by law. However, we will never
          give or transfer your data to a country or company inside and outside
          the EU.
        </StyledLi>
        <StyledLi>
          The data controller is Journal Jivesson. You have the right to contact
          us if you want information about the data we have about you, to
          request correction, transfer, or to request that we restrict
          processing, make objections, or request deletion of your data. You can
          do this most easily by contacting us at
          journal.jivesson@journaljive.com. Our Data Protection Officer can be
          reached at Journal Jive street 6, Cat Land.
        </StyledLi>
        <StyledLi>
          If you have complaints about our processing of your personal data, you
          have the right to lodge a complaint with the supervisory authority,
          the Swedish Authority for Privacy Protection
          (Integritetsskyddsmyndigheten, IMY).
        </StyledLi>
      </ul>
    </div>
  );
}
