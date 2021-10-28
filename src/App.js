import Header from './Header';
import SearchContainer from './SearchContainer';
import MonsterList from './MonsterList';
import Container from "./Container";
import Encounter from "./Encounter";

import './App.css';
import { useReducer } from 'react';

const initialState = {};

function monsterReducer(state, action) {
  let nextState = {};
  switch(action.type) {
    case 'new_monster':
      if (!state[action.payload.slug]) {
        state[action.payload.slug] = {count: 1, monster: action.payload.monster};
      }
      return {...state};
    case 'increment_monster':
      for (let slug in state) {
        if (slug === action.payload.slug) {
          nextState[slug] = {count: state[slug].count + 1, monster: state[slug].monster}
        } else {
          nextState[slug] = state[slug];
        }
      }
      return nextState;
    case 'decrement_monster':
      for (let slug in state) {
        if (slug === action.payload.slug) {
          if (state[slug].count !== 1) {
            nextState[slug] = {count: state[slug].count - 1, monster: state[slug].monster}
          }
        } else {
          nextState[slug] = state[slug]
        }
      }
      return nextState;
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
      <div className='flex-column'>
        <SearchContainer addNewMonster={(monster) => dispatch({type: 'new_monster', payload: {slug: monster.slug, monster: monster}})}/>
        <MonsterList 
            monsters={state} 
            add={(slug) => dispatch({type: 'increment_monster', payload: {slug}})} 
            remove={(slug) => dispatch({type: 'decrement_monster', payload: {slug}})}/>
      </div>
      <div className='flex-column'>
        <Encounter monsters={state}/>
      </div>
      </Container>
    </div>
  );
}

export default App;
