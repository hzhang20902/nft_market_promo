import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of nifty NFTs. 
        Start Selling & Growing"

        description="Buy, store, and collect NFTs. Exchange and earn crypto.
        Join 25+ MILLION people using ProNef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper 
        title="Smart User Interface Marketplace"

        description="Experience the cutting-edge platform of ProNef NFT Marketplace. Smooth, constant colors create a fluent UI design. "

        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
}

export default App;
