import Header from '../landing/Header.tsx'
import Introduction from '../landing/Introduction.tsx';
import Features from '../landing/Features.tsx'
import '../../styles/global.css';
import '../../styles/index.css';

function LandingPage() {
    
  return (
    <>
      <Header />
      <Introduction />
      <Features />
    </>
  )
}

export default LandingPage
