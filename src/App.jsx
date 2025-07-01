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
    <div className="w-full max-w-2xl mx-auto my-8 sm:my-12 md:my-20 animate-fade-in-up">
      <Header />
      <FormContainer />
    </div>
  )
}

export default App;
