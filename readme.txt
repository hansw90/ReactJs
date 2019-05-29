//reflow : 여기서 레이아웃을 새로 구성하면서 계산하는것
//repaint : 색상변경과 같은 레이아웃에 관계없는 것들읃 처리하는것



var style = document.body.style; // 캐싱

style.padding = "20px"; // reflow, repaint
style.border = "10px solid red"; reflow, repaint

style.color = "blue"; // repaint (레이아웃이 변경되진 않았기 때문에 reflow 안함)
style.backgroundColor = "#ffa"; // repaint

style.fontSize = "1em"; // reflow, repaint

// reflow, repaint
document.body.appendChild(document.createTextNode('hello world!'));

//element.offsetLeft, element.clientWidth, element.getClientRects() !!reflow!!!
// Virtual DOM 을 사용합니다
//JSX: JSX 는 JavaScript 의 확장 문법입니다. 
//     DOM 엘리먼트들을 만들 때 JavaScript 형식으로 작성해야 하는 것을, 
//     XML 과 비슷한 형태로 작성할 수 있게 해줍니다. 
//     이를 사용하는것은 권장사항이고 필수는 아닙니다. 
//     하지만 사용하지 않으면 좀 불편합니다.

//Components React는 모두 Component 에 대한 것 입니다. 
//React 개발을 할 때는 모든 것을 Component 로서 생각해야 합니다. 


