function Contacts() {
    return <div className="Contacts" ><h1>hello</h1></div>
  }
  
  function Chat() {
    return <div className="Chat" ><h1>welcome</h1></div>;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function App1() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }
  
 export default App1;
  