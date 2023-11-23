import styled from "styled-components";

const StyledHeadline = styled.h2`
  font-size: 1.2rem;
  text-decoration: underline;
  font-weight: 900;
  color: #57452b;
`;

const StyledP = styled.p`
  font-weight: 600;
  text-transform: lowercase;
  text-align: left;
  letter-spacing: 1px;
`;

const StyledLi = styled.li`
  padding: 0.5rem;
  text-align: left;
`;
const UserTerms = () => {
  return (
    <div>
      <StyledHeadline>
        Our privacy policy, userterms and conditions
      </StyledHeadline>
      <StyledP>
        Journal Jive provides a platform where users can create a blog, write
        blogs and read other blogs. To be able to create a blog on Journal Jive
        you must approve our terms of use. The terms are considered accepted
        when in connection with creating your account, you chaeck the "I accept
        the terms of use."
      </StyledP>

      <StyledP>
        Membership entitles you to a blog account. Your membership and blog
        account are personal. It is also prohibited to exploit other members
        user information or accounts. As a member, you are responsible for not
        sharing your password. If any unauthorized person gains access to your
        blog account, please report it immediately to us at Journal Jive.
      </StyledP>
      <StyledP>
        As a member you are personally responsible for the content you publish
        on your blog. You have to make sure that the posts are not offensive
        and/or Swedish legislation.
      </StyledP>
      <StyledP>Published posts are not aloud to: </StyledP>
      <ul>
        <StyledLi>
          "Injure, threaten, or defame other individuals or intrude upon the
          privacy of others.
        </StyledLi>
        <StyledLi>Incite or constitute criminal activity.</StyledLi>
        <StyledLi>
          Constitute illegal depictions of violence, pornography, or incitement
          against a specific ethnic or social group.
        </StyledLi>
        <StyledLi>
          Involve the spread of computer viruses, maStyledLicious code or
          so-called spam.
        </StyledLi>
        <StyledLi>
          Include requests for or sale of stolen goods, offers for sexual
          services, or similar.
        </StyledLi>
        <StyledLi>ConfStyledLict with the Marketing or Lottery Act.</StyledLi>
        <StyledLi>
          Violate copyright regulations or otherwise contravene the law.
        </StyledLi>
        <StyledLi>
          Published blog posts must not be of an offensive, violent,
          threatening, abusive, obscene nature, or encourage/incite self-harming
          behavior.
        </StyledLi>
      </ul>
      <StyledP>
        Journal Jive has the right to review all published material and is
        entitled to remove material that violates the terms of use. In cases
        where we suspect that a member is committing a criminal act through
        published material we will be report that to the authorities.
      </StyledP>
      <StyledP>
        As a member you can terminate your membership with Journal Jive at any
        time. Membership is terminated through the "Delete Account" function on
        your blog account.
      </StyledP>
      <StyledP>
        Journal Jive has the right to modify these terms of use. In the case of
        significant changes, we will provide information about it through email.
      </StyledP>
    </div>
  );
};
export default UserTerms;
