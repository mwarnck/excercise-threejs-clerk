import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import "./App.css"

const App = () => {
  return (
    <>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Header />
        <Dashboard />
      </SignedIn>
    </>
  );
}

export default App