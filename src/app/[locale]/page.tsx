import { HeaderComponent } from "../components/header/header";
import { FooterComponent } from "../components/footer/footer";
import { MainComponent } from "../components/main/main";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}
