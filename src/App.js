import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of nifty NFTs. 
        Start Selling & Growing"
        
        description="Buy, store, collect NFTs- exchange and earn crypto.
        Join 25+ MILLION people using ProNef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
