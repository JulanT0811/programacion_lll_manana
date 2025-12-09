import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/HelloWorld';
import PromedioTresNotasForm from './components/PromedioTresNotasForm';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SimpleFormSuma from './components/SimpleFormSuma';
import ToggleMessage from './components/ToggleMessage';

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
      <PromedioTresNotasForm/>
      
    </>
  );
}

export default App;
