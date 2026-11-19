/**
 * 
 */
const resetButton = document.querySelector("#resetButton");

function resetButton_click(){
	alert("리셋되었습니다.");
}
resetButton.addEventListener("click",resetButton_click);

// resetButton 태그와 resetButton_click를 연결해주는 것을
// 이벤트 핸들러