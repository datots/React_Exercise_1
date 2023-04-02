import './App.css';

import{InformationSection} from "./InformationSection"; 

function App() {

  const handleOnThisClick= (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      
      {/* <h1 className='header' onClickGetCharacter={handleOnThisClick}>The Lord of the Rings</h1> */}
      <InformationSection data = {['The Lord of the Rings']} onClickGetCharacter={handleOnThisClick}/>
      <img src={require('./lotr-lord-of-the-rings-30918021-1280-1024.jpg')} height={250}/>
      <p className='description'>The Lord of the Rings is an epic<br/> 
      high-fantasy novel by English author and scholar J. R. R. Tolkien.<br/>
       Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit,<br/>
       but eventually developed into a much larger work.<br/>
        Written in stages between 1937 and 1949, <br/>
        The Lord of the Rings is one of the best-selling books ever written,
        <br/> with over 150 million copies sold.</p>
        <h2>Characters</h2>
        <InformationSection data = {['Aragon','Thingol','Beleg','Beren','Luthien','Gil-galad','Glorfindel','Gandalf','Finrod Felagund','Elendil','Tuor','Earendil','Turin Turambar','Fingolfin','Hurin','Feanor ']} onClickGetCharacter={handleOnThisClick} />
        
    </div>
  );
}

export default App;
