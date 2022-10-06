import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'
import styles from './styles/Global'

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

      <Features />

      <SectionWrapper 
        title="Deployment"

        description="ProNef is built using Expo, which runs natively on any devices' OS. 
        You can get your mobile app into people's hands."

        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper 
        title="Creative way to showcase the store"

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
