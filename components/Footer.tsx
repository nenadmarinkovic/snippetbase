import { FooterWrap, BottomText } from "../styles/components/footer";

function Footer() {
  return (
    <FooterWrap>
      <BottomText>{new Date().getFullYear()} © Nenad Marinković</BottomText>
    </FooterWrap>
  );
}

export default Footer;
