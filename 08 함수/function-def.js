// 함수 선언문으로 정의한 함수는 호출문이 그보다 앞에 위치해도 호출할 수 있다.
// 자바스크립트 엔진이 함수 선언문을 프로그램의 첫머리 또는 함수의 첫머리로 끌어올리기 때문이다.
// 함수 선언문이 함수 호출문 다음에 위치하고 있지만 호출할 수 있다.
console.log(square(2));
function square(x) {return x*x; }
