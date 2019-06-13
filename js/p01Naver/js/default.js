$(document).ready(function(){
    /*1. 전체선택 --> 1-4번선택 */
    
    
    /*1-1. 1-4번 중 하나라도 체크 안되어 있으면 --> 전체선택 취소*/
    /*2. 1-4번선택 --> 전체선택*/
    /*3. 1번과 2번 필수선택항목 --> 체크 안하면 경고메시지*/
    
    
    
});







/*javascript 만을 이용하여 체크항목 유효성 검사*/
/*window.onload = function () {
    var signupCheck = document.getElementById('signupCheck');
    var chk1 = document.getElementById('chk1');
    var chk2 = document.getElementById('chk2');

    //동의 버튼을 눌렀을떄 - 필수 체크항목 2개 검사 
    signupCheck.onsubmit = function () {
        if (!chk1.checked || !chk2.checked) {
            
            alert('네이버 이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.');
            return false;
        }
        return true;
    };
};

//전체 선택 --> 1-4번까지 일괄 체크됨 
//1-4번이 모두 선택되면 - 전체선택 버튼도 선택
function allcheck() {
    var chkAll = document.getElementById('chkAll');
    var chk1 = document.getElementById('chk1');
    var chk2 = document.getElementById('chk2');
    var chk3 = document.getElementById('chk3');
    var chk4 = document.getElementById('chk4');

    //console.log('전체 체크'); //확인

    if (chkAll.checked == true) { //만약 전체 체크 버튼이 checked 이면
        //alert('전체체크 '); //확인
        chk1.checked = true;
        chk2.checked = true;
        chk3.checked = true;
        chk4.checked = true;
    } else { //전체 선택버튼이 checked 가 아니면
        chk1.checked = false;
        chk2.checked = false;
        chk3.checked = false;
        chk4.checked = false;
    }
};

//1-4번중에 하나라도 체크되지 않으면 --> 전체선택버튼 체크 취소 
function uncheck() { //버튼이 checked 되어있지 않으면 
    var chkAll = document.getElementById('chkAll');

    if (chkAll.checked == true) {
        chkAll.checked = false;
    }
}*/


