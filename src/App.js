import { useForm, FormProvider } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

import './assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from './components/Header';
import Main from './Main';

function App() {
  const methods = useForm();

  return (
    <div className="App">
      <FormProvider {...methods}>
        <Header />
        <Main />
      </FormProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default App;
