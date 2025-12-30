import './App.css'

const Box = ({children}) => {
  return (
    <div className="custom-box">
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <h2>Todo App</h2>
      <div className='App'>
        <Box>
          <p> This is inside the box!asdfadfasdfasdf</p>
        </Box>
      </div>
    </>
  )
}

export default App
