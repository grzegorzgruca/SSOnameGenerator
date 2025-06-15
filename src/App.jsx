import Header from "./components/Header"
import FormContainer from "./components/FormContainer/FormContainer"
import HelloLackApi from "./components/HelloLackApi";
import { getApiKeyCookie } from "./utilis/cookies";

function App() {
  const apiKey = getApiKeyCookie();

  if (!apiKey) {
    return <HelloLackApi />;
  }

  return (
    <div className='bg-pink-100 w-1/2 mx-auto my-20 p-12 rounded-4xl'>
      <Header />
      <FormContainer />
    </div>
  )
}

export default App;
