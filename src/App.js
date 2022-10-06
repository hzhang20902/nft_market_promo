import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your store of personal NFT masterpieces. 
        Start Selling & Growing"

        description="Buy, store, and collect NFTs. Exchange and earn crypto.
        Join 25+ MILLION people using ProNef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper 
        title="Intelligent NFT Bidding"

        description="Experience the cutting-edge platform of ProNef NFT Marketplace. Smooth, fluent UI design create an innovative customer experience."

        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper 
        title="Deployment"

        description="ProNef is built using Expo, which runs natively on any mobile device. 
        Get your mobile app into people's hands with the ease of Expo."

        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper 
        title="Intuitive way to showcase a Web 3.0 store"

        description="The ProNef Marketplace contains two screens that render multiple asset pages. 
        The home page lists all available NFTs with the current bid price. The individual NFT asset pages showcase the details and bid history of that particular work."

        mockupImg={assets.mockup}
        banner='banner02'
      />

      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`
        ${styles.pText}
        ${styles.whiteText}`}>Made with love, sweat, and fears by {" "}<span className="bold">Henry Zhang</span></p>
      </div>
    </>
  );
}

export default App;
