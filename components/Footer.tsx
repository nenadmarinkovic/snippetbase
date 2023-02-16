import { FooterWrap, BottomText } from "../styles/components/footer";

function Footer() {
  return (
    <FooterWrap>
      <BottomText>
        Snippetbase © {new Date().getFullYear()} <br />
        Code snippets for developers and designers.
      </BottomText>
    </FooterWrap>
  );
}

export default Footer;
