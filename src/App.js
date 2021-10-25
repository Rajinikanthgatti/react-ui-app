import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { OuterLayout } from './Styles/Layouts';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import MessagingSection from './Components/MessagingSection';
import PaymentSection from './Components/PaymentSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <OuterLayout>
        <MainSheetStyled>
          <CardSection></CardSection>
          <ChartSection></ChartSection>
          <MessagingSection></MessagingSection>
          <PaymentSection></PaymentSection>
        </MainSheetStyled>
      </OuterLayout>
    </div>
  );
}
const MainSheetStyled = styled.section``;
export default App;
