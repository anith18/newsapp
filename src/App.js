// import './App.css';
// import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News setProgress={this.setProgress}from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="general"/></Route>
//           <Route path="/business"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="business"/></Route>
//           <Route path="/entertainment"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="entertainment"/></Route>
//           <Route path="/general"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="general"/></Route>
//           <Route path="/health"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="health"/></Route>
//           <Route path="/science"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="science"/></Route>
//           <Route path="/sports"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="sports"/></Route>
//           <Route path="/technology"><News setProgress={this.setProgress}pageSize={this.pageSize} country="us" category="technology"/></Route>
          
//         </Switch>
//         </Router>
//       </div>
//     );
//   }
// }


// import './App.css';
// import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({
//       progress:progress
//     })
//   }
//   pageSize=6;
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//           height={3}
//         color="#f11946"
//         progress={this.state.progress}
//       />
          // <Routes>
          //   <Route path="/"  element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} country="us" category="general" />} />
          //   <Route path="/business"  element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} country="us" category="business" />} />
          //   <Route path="/entertainment"  element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
          //   <Route path="/general"  element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} country="us" category="general" />} />
          //   <Route path="/health"  element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} country="us" category="health" />} />
          //   <Route path="/science"  element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} country="us" category="science" />} />
          //   <Route path="/sports"  element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          //   <Route path="/technology"  element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          // </Routes>
//         </Router>
//       </div>
//     );
//   }
// }



import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = '1ab20657aeb0463eba7e1b78e8d2f6f8';
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
            <Route path="/"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route path="/business"  element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route path="/general"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route path="/health"  element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route path="/science"  element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route path="/sports"  element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route path="/technology"  element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
 
}

export default App;