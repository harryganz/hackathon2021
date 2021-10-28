import Header from './Header';
import SearchContainer from './SearchContainer';
import MonsterList from './MonsterList';
import Container from "./Container";

import './App.css';
import { useReducer } from 'react';

const initialState = {};

function monsterReducer(state, action) {
  switch(action.type) {
    case 'new_monster':
      if (!state[action.payload.slug]) {
        state = {...state};
        state[action.payload.slug] = {count: 1, monster: action.payload.monster};
      }
      return state;
    case 'increment_monster':
      state = {...state};
      state[action.payload.slug].count++;
      return state;
    case 'decrement_monster':
      state = {...state};
      if (state[action.payload.slug].count === 1) {
        delete state[action.payload.slug];
      } else {
        state[action.payload.slug].count--;
      }
      return state;
    default:
      throw new Error('Unexpected action type');
  }
}

function App() {

  const [state, dispatch] = useReducer(monsterReducer, initialState);


  return (
    <div id="page-content">
      <Header title='5e Encounter Creator'/>
      <Container>
      <MonsterList 
          monsters={state} 
          add={(slug) => dispatch({type: 'increment_monster', payload: {slug}})} 
          remove={(slug) => dispatch({type: 'decrement_monster', payload: {slug}})}/>
        <SearchContainer addNewMonster={(monster) => dispatch({type: 'new_monster', payload: {slug: monster.slug, monster: monster}})}/>
      </Container>
    </div>
  );
}

export default App;
