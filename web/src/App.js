import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';


function App() {
  const [keyword, setKeyword] = useState('')
  const params = new URLSearchParams(window.location.search)
  let key = params.get('keyword')

  useEffect( () =>{
    if(key == null){
      setKeyword('')
      console.log("Hello")
    }else{
      setKeyword(key)
      console.log("Bye")
    }
    console.log(keyword)
  },[key])
  
  return (
    <div className="App">
      <Header setKeyword={setKeyword} />
      <Content keyword={keyword} />
    </div>
    
  );
}

export default App;
