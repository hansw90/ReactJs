import React, {Component} from 'react';
import TOC from "./components/TOC.js"
import Subject from "./components/Subject.js"



class App extends Component {
  constructor(props) {
    super(props);
    // 컴포넌트가 실행될때 컨스터럭트가 있으면 그게 가장 먼저 실행되어 초기화를 실행한다.
    this.state = 
    {
      // react 에서는 state 가 변경이 되면 아래 render가 다시 호출 된다.
      mode : 'welcome',
      subject : {title:'WEB',desc:'world wide web'},
      contents : [
        {id:1 , title:'html', desc: 'html is...'},
        {id:2 , title:'js' , desc :'js is...'},
        {id:3 , title:'css', desc : 'css is...'}
    ]
        
      
    }
  }
  
  render() {

    // render 안에서 this는 conponent 자체를 가르킨다. 
    var _title = null
    if (this.state.mode === 'welcome') {
      _title = this.state.mode;
    }
    else{
      _title = this.state.mode;
    }

    return (
    <div className="App">
      Hello, React!! 
      <h1><a href ="/" onClick ={
        function(e){
          console.log(e);
          e.preventDefault() ;
          // this.state.mode = 'read' 이렇게 바꾸면 리엑트에서 바뀐걸 인식 못한다.
          this.setState({
            mode : 'read'
          })
        }.bind(this)  // 이걸 bind 안해주면 render 안에서 this가 conponent 인식이 안되고 에러 발생
      }
      >{_title}</a></h1>
      <Subject title= {this.state.subject.title} desc={this.state.subject.desc}></Subject>
      <Subject title= "react" desc="for ui"></Subject>
      <TOC data = {this.state.contents}></TOC>
    </div>
    )
  }
}

export default App;
