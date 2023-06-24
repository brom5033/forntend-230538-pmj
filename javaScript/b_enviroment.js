// 자바스크립트 개발 환경 설정

//1-1. 텍스트 에디터(vscode) & 구글 크롬

//1-2. 자바스크립트 실행(스크립트 적용)

// <script>태그로 감싼  javascript 코드는 브라우저가 로드 될때 자동 실행
// 웹문서 어디든 위치가능, 위치 그 자리에서 바로실행
// 하나의 웹 문서에 여러개 사용가능
// </body> 직전에 사용하는게 좋음 





let heading = document.querySelector('#heading');
heading.onclick = function() {
    heading.style.color = "red"
}

//오류 확인 방법(Reference error,)

//Uncaught ReferenceError: ** is not defined
//변수가 선언되지 않은 상태에서 사용될때 발생

// let n = 10; let m = 20; // <--권장하지 않음

let n = 10;
let m = 20;
//공백을 사용(가독성)

//let 또는 const를 사용하여 변수를 선언(var 사용 금지)
// 문자열을 만들때 작은 따옴표를 사용 (' ')
// 항상 엄격한 비교를 사용
