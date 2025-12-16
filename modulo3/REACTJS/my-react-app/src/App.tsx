/*import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/HelloWorld';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SimpleFormSuma from './components/SimpleFormSuma';
import ToggleMessage from './components/ToggleMessage';
import { LanguageContext } from './useContext/LanguageContext';
import LanguageToggle from './useContext/LanguageToggle';
import { LoginContext } from './useContext/LoginContext';
import LoginStatus from './useContext/LoginStatus';
import CirculoColorido from './useRef/CirculoColorido';
import FocoAutomatico from './useRef/FocoAutomatico';
import AccessWithLimit from './useState/AccessWithLimit';
import CheckboxSummary from './useState/CheckboxSummary';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import HoverFont from './useState/HoverFont';
import LoginWithLimit from './useState/LoginWithLimit';
import MultiSwitch from './useState/MultiSwitch';
import PostLikes from './useState/PostLikes';

function App() {
  return (
    <>
      <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
      </LanguageContext.Provider>

       <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
    
      <HelloWorld/>
      <WelcomeUser/>
      <ButtonCounter/>
      <WelcomeUser/>
      <ToggleMessage/>
      <ShowDate/>
      <ColorBox/>
      <ConditionalText/>
      <EmojiList/>
      <SimpleForm/>
      <SimpleFormSuma/>
      <AccessWithLimit/>
      <HoverFont/>
      <PostLikes/>
      <MultiSwitch/>
      <LoginWithLimit/>
      <DocumentTitleChanger/>
      <CheckboxSummary/>
      <FocoAutomatico/>
      <CirculoColorido/>
      
      
    </>
  );
}

export default App;*/
import ScrollDemo from "./useRef/ScrollDemo";

function App(){
  return (
    <>
      <ScrollDemo/>
       
    </>
  );
}
export default App;
