
let startButton = document.querySelector("#startButton");
let endButton = document.querySelector(".endButton");
let messageElement = document.querySelector("#message");

let greeting = document.querySelector("#greeting");

let output = document.querySelector(".output");
let copyButton = document.querySelector("#copyButton");

//startButton을 누르면 자동으로 실행합니다.
//이벤트핸들러 또는 이벤트 처리 함수
function startGame(){
	//메세지 창을 띄웁니다. 그 창을 닫아야 다른 작업이 가능.
	alert("게임을 시작합니다."); //대화창알림
}
function endGame(){
	alert("게임을 종료합니다.");
}
function copy(){
	let message1 = greeting.value;
	alert("인사말" + message1);
	output.textContent = message1;
}

startButton.addEventListener("click",startGame);
endButton.addEventListener("click",endGame);
messageElement.textContent = "버튼을 눌렀습니다!";
greeting.addEventListener("keydown",function(event){
	if(event.key === "Enter"){
		let playername = greeting.value;
		alert(playername);
		output.textContent = playername;
	}
}
);
copyButton.addEventListener("click",copy);

//---------------클릭 점수 게임


let score = 0;
const scoreElement = document.querySelector("#score");
const clickButton = document.querySelector("#clickButton");
const resetButton = document.querySelector("#resetButton");
const messageElement1 = document.querySelector("#message1");

//클릭버튼을 누르면 score + 1
function addScore(){
	score = score + 1;
	scoreElement.textContent = score
	messageElement1.textContent = "좋아요! 한 점을 얻었습니다.";
	
}
//reset버튼을 누르면 score 초기화
function resetScore(){
	score = 0;
	scoreElement.textContent = score;
	messageElement1.textContent = "점수가 초기화 되었습니다.";
}

clickButton.addEventListener("click", addScore);
resetButton.addEventListener("click", resetScore);
