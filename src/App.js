import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Main></Main>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
