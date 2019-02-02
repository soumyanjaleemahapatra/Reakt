import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import ImageLoader from './components/imageUploader';
import ImageUploader from 'react-images-upload';



let tick = ()=>{
  const element = (
    <div>
      <h1> Hello, world </h1>
      <p> {new Date().toLocaleTimeString()}</p>
    </div>
  );
  //ReactDOM.render(element, document.getElementById('root'));
}

/*let Clock = ()=>{
  return <p> {new Date().toLocaleTimeString()}</p>;
}*/

{/* class for current time display */}
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount () {
    this.timerId = setInterval(
      ()=>this.tickAgain(),
      1000
    )
    console.log('componentDidMount')
  }
  componentWillUnmount() {
     console.log('componentWillUnmount')
     clearInterval(this.timerID);
  }
  tickAgain(){
     this.setState({
       date: new Date()
     })
  }
  render(){
    //return <p> {this.props.date.toLocaleTimeString()} </p>;
    return <p> {this.state.date.toLocaleTimeString()} </p>;
  }
}
{/* components */}
let Welcome = (props)=>{
  return <h1>{props.name}</h1>;
}
//setInterval(tick, 1000)
let App=()=>{
  return (
    <div className = "welcomeText">
      <Welcome name="Ragnar"/>
      <Welcome name="Lothbrock"/>
      {/*<Clock date={new Date()}/>*/}
      <Clock/>
    </div>
  );
}
const welcomeElement = <Welcome name="Ragnar"/>;
//ReactDOM.render(<App/>, document.getElementById('root'));



{/* class for login control */}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false}
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }
    else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LoginButton(props){
  return (
    <button onClick = {props.onClick}> Login </button>
  )
}
function LogoutButton(props){
  return (
    <button onClick = {props.onClick}> Logout </button>
  )
}

function GreetingMessage(props) {
  return <h1> {props.message} </h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const userGreetingMessage = "Welcome back!"
  const guestGreetingMessage = "Hello, Please sign up"
  return(
    <GreetingMessage message={isLoggedIn ? userGreetingMessage : guestGreetingMessage}/>
  )
}

ReactDOM.render(<LoginControl/>, document.getElementById('root'))


{/* number list examople */}

function NumberList(props){
  const numbers= props.numbers;
  {/*const listItems = numbers.map((number) =>
      // wrong way of asssigning keys
      //<li key={number.toString()}> {number} </li>

      //correct way of asssigning keys
      <Listitem key={number.toString()} value={number}/>
  );*/}
  return (
      //<ul className="listItems">{listItems}</ul>
      <ul className="listItems">{numbers.map((number) =>
          <Listitem key={number.toString()} value={number}/>
      )}
      </ul>
  );
}

function Listitem(props){
  return <li> {props.value} </li>
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'))

export default class ImageLoader extends React.Component {
  constructor(props){
    super(props);
    this.handleUploader = this.handleUploader.bind(this)
    this.state = {
      isUploaderVisible: false
    }
  }
   handleUploader(props){
     const isUploaderVisible = this.state.isUploaderVisible;
    if(isUploaderVisible===true){
      this.setState({
        isUploaderVisible: false
      });
    }
    else {
      this.setState({
        isUploaderVisible: true
      });
    }

   }
  render(){
    return (
      <div>
        <h1> Image uploader </h1>
        <Add/>
        <input id="fileInput" type="file" accept="image/*" multiple/>
        <button onClick={this.handleUploader}> upload image </button>
        <ShowUploader isVisible={this.state.isUploaderVisible} caption="sample caption"/>
      </div>
    );
  }
}
function ShowUploader(props){
  if(document.getElementById('fileInput')) {
    let imageFiles = [...document.getElementById('fileInput').files];
    /*for(var i=0;i<imageFiles.length;i++){
      return(
        <ImageWrapper isVisible={props.isVisible}
                    imgSrc={imageFiles[i].webkitRelativePath + "/" + imageFiles[i].name}
                    alt=""
                    caption={props.caption}/>
      );
    }*/
    return(
      <div>
        {imageFiles.map((imageFile) =>
          <figure className={props.isVisible === true  ? "imageUplaoder--visible" : "imageUplaoder"} key={"fig" + imageFile.name}>
            <img src={imageFile.webkitRelativePath + "/" + imageFile.name} alt=""/>
            <figcaption>{props.caption}</figcaption>
          </figure>
        )}
      </div>
    );
  }
  return null;
}
function ImageWrapper(props){
  return(
    <figure className={props.isVisible === true  ? "imageUplaoder--visible" : "imageUplaoder"}>
      <img src={props.imgSrc} alt={props.alt}/>
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
}




ReactDOM.render(<ImageLoader/>, document.getElementById('root'))
