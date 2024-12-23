import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import States from './components/States';
import { Container } from 'react-bootstrap';
import New from './components/New';
import Home from './components/access/Home';
import Map from './components/Map';
import Products from './components/Products/Products';
import Todo from './components/todoApp/Todo';

function App() {
  // const CheckNumber = ({num}) => {
  //       if (num>0) {
  //           return <h1>Positive Number !</h1>
  //       } else if (num<0) {
  //           return <h1>Negative Number !</h1>
  //       } else {
  //           return <h1>Zero !</h1>
  //       }
  //   }
  
  return(
    <div className='App'>
      {/* <Header />
      <Container>
        <States name={"Kerala"} language={"Malayalam"} population={1000}/>
        <States name={"Tamil Nadu"} language={"Tamil"} population={2000}/>
        <States name={"Karnataka"} language={"Kannada"} population={3000}/>
      </Container>
      <CheckNumber num={434} />
      <New/>
      <Home status={true}/>
      <Container>
      <Map />
      </Container> */}
{/* -----------------PROJECT STARTS HERE------------------------------------------ */}

        <Container>
          <Products />
        </Container>
        <Todo />
        
    </div>
    
  )
}
export default App;
