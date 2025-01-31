import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useEffect } from "react";
import { getCabins } from "./services/apiCabins";

// Styled components
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

// Styling for the App component
const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  useEffect(() => {
    getCabins()
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching cabins:", error));
  }, []);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <img src="https://xhcpivmjvbnsoekfpasw.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" />
        <Button onClick={() => alert("Check In")}>Check In</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
