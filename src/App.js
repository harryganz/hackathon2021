import Container from './Container';
import Header from './Header';
import SearchContainer from './SearchContainer';

import './App.css';

function App() {

  return (
    <div id="page-content">
      <Header title='5e Encounter Creator'/>
      <Container>
        <SearchContainer />
      </Container>
    </div>
  );
}

export default App;
