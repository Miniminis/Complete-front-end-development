/*버전04 - jquery
1. 회원가입양식 form 유효성 검사 
2. 등록 - submit 부분 처리 수정 
3. setlist 부분 - 코드 수정 
4. html 에서 onclick 이나 id 로 연결된 부분 수정하기 
*/


//저장소 변수 선언
//localStorage 에서 데이터 유무에 따라 배열 선언 
    

//2. 회원데이터 저장 목적으로 하는 생성자 함수 정의 
//id: 회원 아이디, 이메일 주소 
//pw: 비밀번호 
//name: 회원의 이름 
function Member(id, pw, name) {
    this.userid = id;
    this.userpw = pw;
    this.username = name;
}


//$(document).ready(function(){}) : 웹 페이지가 로드된 상태에서 실행됨
// - 페이지가 완전히 로드된 상태에서 실행되므로 오류의 가능성을 줄여준다.
$(document).ready(function(){
    
    //등록버튼 클릭 
    $('#regForm').onsubmit(function(){
        var uId = $('#uId');
        var uPw = $('#uPw');
        var uName = $('#uName');
        
        if(uId.val().length<1) {
            alert('uid ');
            //$('<td></td>').html('아이디를 입력해주세요!').appendTo('#validation');
            
            uId.focus();
            
            return false;
        }
        if(uPw.val().length<1) {
           /* $('<td></td>').html('아이디를 입력해주세요!').appendTo('#validation');
            uPw.focus();*/
            return false;
        }
        if(uName.val().length<1) {
            /*$('<td></td>').html('아이디를 입력해주세요!').appendTo('#validation');
            uName.focus();*/
            return false;
        }
        
        return false;
    });
    
    //수정버튼 클릭
    
    //취소버튼 클릭 
    
});

//
function setlist() {};

//jquery 이용하여 임시적으로 띄울 팝업창 생성 
//수정 버튼 누르면 --> onload 내부로 이동
function editMember(){};

//
function deleteMember(){};

