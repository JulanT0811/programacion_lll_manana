import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/HelloWorld';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SimpleFormSuma from './components/SimpleFormSuma';
import ToggleMessage from './components/ToggleMessage';
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
      
      
    </>
  );
}

export default App;
