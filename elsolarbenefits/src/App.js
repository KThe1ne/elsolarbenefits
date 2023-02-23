import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="textContainer">
          <h1>Elsolar Benefits</h1>
          <div>
            <div className='text'>⚠️ This website is under construction.</div>
            <div className="contact">For more information please contact us at <a href='mailto:support@elsolarbenefits.com'>support@elsolarbenefits.com</a></div>
          </div>
        </div>
        <div className="imgContainer" style={{
           backgroundImage: "url('/solar-panel-installation.jpg')",
           backgroundColor: "#ffffffff",
           backgroundPosition: "center",
           backgroundSize: "cover",
           filter: "blur(1px)"
        }}>
          <div className="overlay">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
