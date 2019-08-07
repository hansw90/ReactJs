import React, {Component} from 'react';
class Subject extends Component {
  render() { // 클래스 안에 함수는 function 을 안써도 돌아간다 .
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.desc}
      </header>
      //<body></body> 하나의 최상위 태그만 사용해야 한다. 
    )
    
  }
}

class TOC extends Component {
  render () {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">css</a></li>
          <li><a href="3.html">JS</a></li>
          
        </ul>

      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div className="App">
      Hello, React!!  
      <Subject title= "HTML" desc="하이퍼택스트마크업랭기쥐"></Subject>
      <Subject title= "react" desc="for ui"></Subject>
      <TOC></TOC>
    </div>
    )
  }
}

export default App;
