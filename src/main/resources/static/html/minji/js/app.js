//함수 정의
//function 함수명(입력 매개변수){
//	입력매개변수를 사용한 처리문	
//}
//이벤트를 만드는 태그
// 1. html태그를 자바스크립트에서 쓰려면
// 2. html태그를 찾는 querySelector(셀렉터이름)
// 3. 모든 HTML태그 Document Object Model이라는
//	  자바 스크립트에 들어있음.
// 4. document 객체를 DOM이라는 약자로 부름
const helloButton = document.querySelector("#helloButton");

//내가 만든 처리함수 이벤트가 발생하면 실행될 함수
function sayHello(){
	alert("안녕하세요");
}

// html객체와 이벤트(실제 마우스 클릭 같은) 이벤트 연결
// 이벤트 연결등록 그러면 이벤트를 감시
// 이벤트가 발생하면 (예로 click 이벤트) 실행할 함수 등록
helloButton.addEventListener("click",sayHello);
/*
// 배열과 객체
// 1. 컬러 배열 선언
const buttoncolor = [
	"pink", 
	"green", 
	"yellow", 
	"white", 
	"red"
];

// 2. HTML 태그 button1, button2, button3 찾기
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

// 3. 버튼을 누르면 처기(실행)할 함수정의
function button1Click(){
	alert("버튼 1이 눌렸다." + buttoncolor[0]);
}
function button2Click(){
	alert("버튼 2이 눌렸다." + buttoncolor[1]);
}
function button3Click(){
	alert("버튼 3이 눌렸다." + buttoncolor[2]);
}
function button4Click(){
	alert("버튼 4이 눌렸다." + buttoncolor[3]);
}
function button5Click(){
	alert("버튼 5이 눌렸다." + buttoncolor[4]);
}
// 4. event ("click")가 발생하면 처리할 함수가 실행
//    되도록 모니터링 등록
button1.addEventListener("click",button1Click);
button2.addEventListener("click",button2Click);
button3.addEventListener("click",button3Click);
button4.addEventListener("click",button4Click);
button5.addEventListener("click",button5Click);

*/
//toList 제어하기
// 1. 추가버튼 찾기
const addButton = document.querySelector("#addButton");

// 2. #addButton 요소를 눌렀는가.
addButton.addEventListener("click", function(){
		alert("버튼을 눌렀습니다.!");	
		// 3. 입력창에서 글자 가져오기
		const txtinput = document.querySelector("#taskInput");
		//alert("입력내용: " + txtinput.value);	
		
		// 3.5 입력창에 값이 없을때 실행 X
		if (txtinput.value.trim() === "") {
			// 입력값 없음 알림
			alert("입력한게 없어요! 할 일을 제대로 넣으세요")
			return;
		}
		
		// 4. ul에 추가할 내용을 등록하기 위해
		// 	  li태그 필요. 자바 스크립트로 새로 만들어야함.
		
		const item = document.createElement("li");

		// 5. li item에 input값을 저장
		item.textContent = txtinput.value;
		// 6. dom으로 "#taskList" ul요소를 찾기
		const taskList = document.querySelector("#taskList"); 
		taskList.append(item);
		// 6.5 추가된 할 일을 완료표시 하기(취소선으로 완료)
		// 아이템 list를 마우스로 클릭하는 경우.
		item.addEventListener("click", function(){
			//혁 혼자 추가
			//6.5.1만약 줄이그어져있으면 지우고 아니면 다시 그리는 부분
			if(item.style.textDecoration === "line-through"){
				item.style.textDecoration = "none";
			}
			else{
				item.style.textDecoration = "line-through";
			}
		});
		// item항목 더블클릭했을때 삭제버튼
		item.addEventListener("dblclick", function(){
			item.remove();
			
		});
		
		// 7. 입력창 비우기
		txtinput.value = "";
});

// loadStroge를 이용한 행운 뽑기
// 1. 포춘종류 배열을 만든다.
const fortunes = [
	"오늘은 행운이 가득해!🍀",
	"멋진 일이 생길 거야!✨",
	"오늘은 맛있는 걸 먹자!🍖",
	"새로운 도전을 시작해 봐!🛫",
	"너는 충분히 잘하고 있어!❤"
]
// 2. 선택된 포춘을 저장하는 포춘 변수를 초기화
let currentFortune = "";
// 3. 실제 포춘을 뽑는 함수 정의 drawFortune()
function drawFortune(){
	// 1. 포춘 배열에서 난수로 인덱스 번호를 가져오면 된다.
	// 2. 난수 만들기 -> 임의의 정수 생성
	// Math.floor(숫자의 범위) :
	// 수학 라이브러리.주어진 범위 에서 가징 작은 정수를 뽑는 함수
	// 숫자의 범위는 난수를 발생시킨 값 * 배열의 갯수
	// 0 <= 난수 <= 배열의 갯수 사이의 실수
	// floor(3.5) : 3을 리턴
	// Math.random(); 0.0 <= 난수 < 1.0 작은 실수 
	const index = Math.floor(
		Math.random() * fortunes.length
	); //배열.length : 배열의 크기
	
	//현재 랜덤 행운 뽑기
	currentFortune = fortunes[index];
	// 현재 운세의 내용을 result 태그에 출력
	document.querySelector("#result").textContent =
			currentFortune;
			alert(currentFortune);
}
// 4. 포춘을 저장하는 함수 정의 saveFortune()
function saveFortune(){
	alert("버튼2클릭");
}
// 5. 저장된 포춘을 불러오는 함수 정의 loadFortune()
function loadFortune(){
	alert("버튼3클릭");
}
// 6. 저장된 포춘을 삭제하는 함수 정의 deleteFortune()
function deleteFortune(){
	alert("버튼4클릭");
}




