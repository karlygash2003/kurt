import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/Registration";
import { Flex } from "@chakra-ui/react";
import AuthComp from "./components/Auth";
import OTPComp from "./components/OTP";
import Dashboard from "./components/Dashboard";
import DriverComp from "./components/Dashboard/Driver";
import IdComp from "./components/Dashboard/Id";
import MarriageComp from "./components/Dashboard/Marriage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex w='100vw' h='100vh' alignItems='flex-start' p='1em'>
      <Routes>
        <Route path='/' element={<AuthComp />} />
        <Route path='/otp' element={<OTPComp />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<DriverComp />} />
          <Route path='driver' element={<DriverComp />} />
          <Route path='marriage' element={<MarriageComp />} />
          <Route path='id' element={<IdComp />} />
        </Route>
        <Route path='/form' element={<RegistrationForm />} />
      </Routes>
    </Flex>
  );
}

export default App;
