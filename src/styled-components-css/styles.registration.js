import styled from 'styled-components/macro';
import image2 from '../img/wood.svg';
import image from '../img/backgroundwood.svg';
import { Link } from 'react-router-dom';
export const H4Title = styled.h4`
  //position: absolute;
  //width: 338px;
  //height: 59px;
  //left: 703px;
  //top: 212px;

  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 700;
  font-size: clamp(26px, 4.5vw, 42px);
  line-height: 59px;
  margin: 35px 0;
  /* identical to box height */
  margin-top: 16px;
  color: #252525;
  //text-align: center;
  @media (max-width: 660px) {
    line-height: 39px;
  }
`;

export const DivTextBoxSC = styled.div`
  display: grid;
  grid-template-columns: 123px 121px;
  grid-column-gap: 268px;
  //border: 1px solid red;
  width: 100%;
`;
export const DivTextBoxSISC = styled.div`
  display: grid;
  grid-template-columns: 40px auto auto;
  //border: 1px solid red;
  width: 100%;
  max-width: 512px;
  margin-bottom: 20px;
  @media (max-width: 660px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const CheckboxItemInput = styled.input`
  display: grid;
  z-index: 2;
  position: relative;
  width: 30px;
  height: 30px;
  color: black;
  border: 2px solid #85cb33;
  border-radius: 9px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 3px;
    left: 9px;
    width: 7px;
    height: 14px;
    border-style: solid;
    border-color: white;
    border-radius: 2px;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: white;
    border-color: #85cb33;
    background: #85cb33;

    &::before {
      opacity: 1;
    }
  }
`;

export const SpanFirstSC = styled(Link)`
  margin-top: 9px;
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: black;
  justify-self: start;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const SpanSecondSC = styled(Link)`
  margin-top: 9px;
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: black;
  justify-self: end;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const LabelSC = styled.label`
  //position: absolute;
  display: inline-block;
  width: 100%;
  height: 24px;
  left: 0px;
  top: calc(50% - 24px / 2 - 192px);

  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: rgba(37, 37, 37, 0.8);
  margin-bottom: 10px;
`;

export const DivBoxSC = styled.div`
  //position: absolute;
  width: 100%;
  min-height: 92px;
  left: 0px;
  top: 119px;
`;

export const DivBoxRowsSC = styled.div`
  display: grid;
  grid-template-rows: 85px 85px max-content 85px 85px;
  //border: 1px solid red;
  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
  }
`;
export const DivBoxColumnsSC = styled.div`
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '234px 234px')};
  grid-column-gap: 44px;
  grid-template-rows: max-content;
  @media (max-width: 660px) {
    display: block !important;
    width: 100%;
  }
`;

export const InputSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  //position: absolute;
  width: 100%;
  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);

  border: ${({ error }) => (error ? ' 2px solid var(--error)' : '2px solid var(--main-color)')};
  box-sizing: border-box;
  border-radius: 20px;
  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const DivBoxRowSC = styled.div`
  //border: 1px solid red;
  max-width: 512px;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '32px' : 'inherit')};
`;
export const DivBoxRowSISC = styled.div`
  //border: 1px solid red;
  max-width: 512px;

  width: 100%;
  justify-content: space-evenly;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '32px' : 'inherit')};
  @media (max-width: 660px) {
    margin-top: 25px;
  }
`;

export const InputFullWidthSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px 18px 18px;

  //position: absolute;

  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);
  width: 100%;
  border: ${({ error }) => (error ? ' 2px solid var(--error)' : '2px solid var(--main-color)')};
  box-sizing: border-box;
  border-radius: 20px;
  @media (max-width: 660px) {
    width: 100%;
    height: 56px;
    margin-bottom: 35px;
    max-width: none;
  }
`;

export const ButtonSC = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;

  //position: absolute;
  width: 100%;
  max-width: 93%;
  height: 56px;
  left: calc(50% - 514px / 2);
  top: calc(50% - 56px / 2 + 213px);

  background: var(--green-color);
  border-radius: 20px;
  border: none;
  color: var(--white-color);
  margin-top: 20px;
  text-transform: capitalize;
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  opacity: ${(p) => (p.statusOpasity ? 0.5 : 1)};
`;

export const DivBoxTextSC = styled.div`
  margin-top: 35px;
`;

export const SpanQuSC = styled.span`
  color: rgba(37, 37, 37, 0.7);
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const LinkSC = styled(Link)`
  color: var(--green-color);
  font-family: var(--root-font-family);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const DivBoxFormSC = styled.div`
  width: 100%;
  max-width: 552px;
  justify-self: center !important;
  //height: 680px;
  // border: 1px solid red;

  @media (max-width: 660px) {
    width: 90%;
  }
`;
export const DivBoxFormSignInSC = styled.div`
  width: 100%;
  max-width: 552px;
  justify-self: center !important;
  //height: 680px;
  //border: 1px solid red;

  @media (max-width: 660px) {
    width: 90%;
  }
`;

export const DivBoxBoxFormSC = styled.div`
  padding: 50px;
  justify-self: center;
  border-radius: 30px;
  height: fit-content;
  display: grid;
  grid-template-columns: 522px auto;
  position: relative;
  max-width: 1470px;
  width: 80%;
  margin: auto;
  background-color: var(--white-color);
  background-position: right 50px bottom;
  background-size: 620px;
  //min-width: 450px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 660px) {
    padding: 0;
    padding-bottom: 50px;
    padding-top: 50px;
  }
`;

export const DivBackgroundFormSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  justify-items: center;
  //overflow: auto;
`;

export const SpanSC = styled.span`
  margin-bottom: 20px;
  display: inline-block;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const DivRegSC = styled.div`
  //height: calc(100% - 64px);
  //overflow: auto;
  background: url(${image});
  display: grid;
  align-items: center;
  //padding: 0 150px 0px 200px;
  padding-bottom: 20px;
  padding-top: 20px;
  min-height: 750px;
  @media (max-width: 1000px) {
    background: none;
  }
  @media (max-width: 660px) {
    min-height: 0 !important;
  }
`;

export const DivBackgroundPeopleSC = styled.div`
  //position: absolute;
  //background: url(${image2});
`;

export const FormInputErrorSpanSc = styled.span`
  color: #ff3d3d;
  margin: 4px 0;
  display: block;
  //border: 1px solid red;
  @media (max-width: 660px) {
    margin-top: -29px;

    margin-bottom: -16px;
  }
`;
