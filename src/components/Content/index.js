import React from "react";
import {
  ContentContainer,
  ContentWrapper,
  ContentRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
} from "./ContentElements";

const Content = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightTxt,
  darkTxt,
  img,
  alt,
  headLine,
  description,
}) => {
  return (
    <ContentContainer lightBg={lightBg} id={id}>
      <ContentWrapper>
        <ContentRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightTxt={lightTxt}>{headLine}</Heading>
              <SubTitle darkText={darkTxt}>{description}</SubTitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </ContentRow>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
