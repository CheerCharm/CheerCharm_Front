import React, { useState } from "react";
import * as S from "./Footer.style";
import { NanoomSquare } from "../../../css/Font";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Inner>
          <NanoomSquare weight="500" size="12px" margin="0px 0px 0px 0px">
            상호: 소원수리 연구소 | 대표자명: 이화멋사졸프2팀
          </NanoomSquare>
          <S.Border />
          <div style={{ display: "flex" }}>
            <NanoomSquare weight="500" size="12px" margin="0px 0px 0px 0px">
              Copyright ⓒ 소원수리 연구소
            </NanoomSquare>
            <S.Link
              href="https://github.com/CheerCharm/CheerCharm_Front/blob/main/README.md"
              target="_blank"
            >
              <BsGithub size="12" style={{ margin: "0px 0px 0px 5px" }} />
              <NanoomSquare weight="500" size="12px" margin="0px 0px 0px 5px">
                GitHub
              </NanoomSquare>
            </S.Link>
          </div>
        </S.Inner>
      </S.Container>
    </>
  );
};

export default Footer;
