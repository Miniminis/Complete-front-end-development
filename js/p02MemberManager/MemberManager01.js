//Member 객체들을 저장하기 위한 배열 생성 
var members = [];

//회원데이터 저장 목적으로 하는 생성자 함수 정의 
//id: 회원 아이디, 이메일 주소 
//pw: 비밀번호 
//name: 회원의 이름 

function Member(id, pw, name) {
    this.userid = id;
    this.userpw = pw;
    this.username = name;
}

//method: 사용자의 데이터를 가지고 html 텍스트를 완성하는 매서드
Member.prototype.makeHtml = function (index) {

  var nHtml = '';
  nHtml += '<tr>\n';
  nHtml += '<td>' + index +'</td>\n';
  nHtml += '<td>'+this.userid  +'</td>\n';
  nHtml += '<td>'+this.userpw   +'</td>\n';
  nHtml += '<td>'+this.username  +'</td>\n';
  nHtml += '<td><a onclick="editMember('+index+')"> 수정 |</a><a onclick="deleteMember('+index+')"> 삭제 </a></td>\n';

  return nHtml;
}

//데이터 확인을 위한 매서드
/*Member.prototype.showData = function() {
  alert('아이디 :'+ this.userid+'\n비밀번호 : '+this.userpw+'\n이름 : '+this.username);
}*/


/*Member.prototype.toString = function(i) {
  var str = 
  return str; 
}*/

//등록 양식 전달 - 입력된 
window.onload = function() {
    
    var regForm = document.getElementById('regForm');
    
    //입력폼 입
    regForm.onsubmit = function() {
        var uId = document.getElementById('uId');
        var uPw = document.getElementById('uPw');
        var uName = document.getElementById('uName'); 
        
        if(uId.value.length <1) {
            alert('아이디를 입력해주세요');
            return false;
        }
        if(uPw.value.length<1) {
            alert('비밀번호를 입력해주세요');
            uPw.focus();
            return false;
        }
        if(uName.value.length<1) {
            alert('이름을 입력해주세요');
            uName.focus();
            return false;
        }
        
        /*새로운 데이터로 객체 생성 */
        var newMember = new Member(uId.value, uPw.value, uName.value);
        
        //newMember.showData(); //확인용
        
        /*member 배열에 저장 */
        members.push(newMember); //배열의 요소 추가--> 변경
        alert('정상적으로 입력되었습니다.');
        setList(); //배열을 다시 읽어들이는 작업 (추가, 삭제 모두 처리 가능 - 매 로드시마다 배열을 처음부터 로드하므로 )

        regForm.reset();

        return false;
    };
}

//members 배열의 요소들을 출력기능 
function setList () {
    var newHtml = '';
    for(var i=0; i<members.length; i++) {
        newHtml += members[i].makeHtml(i);
    }
    document.getElementById('listRow').innerHTML = newHtml;
}

//members 배열의 요소를 수정하는 기능
function editMember(index) {  
    
    //alert(members[index].userid); //확인용
    
    //수정을 위한 새로운 팝업창 생성
    var editPop = '';
    editPop += '<div id="editTable">';
    editPop += '<h3>회원정보수정</h3><a>닫기</a><hr>';
    editPop += '<form id="editform"><table><tr><td>아이디(이메일)</td><td><input type="text" id="newUId" class="input" value="'+members[index].userid+'"></td></tr>';
    editPop += '<tr><td>비밀번호</td><td><input type="text" id="newUPw" class="input" value="'+members[index].userpw+'"></td></tr>';
    editPop += '<tr><td>이름</td><td><input type="text" id="newUName" class="input" value="'+members[index].username+'"></td></tr>';
    editPop += '<tr><td colspan="2"><input type="button" value="수정" id="edit" onclick="afterEditMember('+index+')"></td></tr></table></form></div>';
    
    document.getElementById('editPopUp').innerHTML = editPop;
    //alert(index+'번 요소 수정');  //index 전달 확인용 
    
    afterEditMember(index);
}

function afterEditMember(index) {

    //수정된 문서를 다시 불러옴 
    var editform = document.getElementById('editform');
    var editPopUp = document.getElementById('editPopUp');
    
    editform.onsubmit = function() {
        
        var newUId = document.getElementById('newUId');
        var newUPw = document.getElementById('newUPw');
        var newUName = document.getElementById('newUName'); 
        
        alert(newUId.value);
        
        if(newUId.value.length <1) {
            alert('아이디를 입력해주세요');
            newUId.focus();
            return false;
        }
        if(newUPw.value.length<1) {
            alert('비밀번호를 입력해주세요');
            newUPw.focus();
            return false;
        }
        if(newUName.value.length<1) {
            alert('이름을 입력해주세요');
            newUName.focus();
            return false;
        }
        
        members[index] = new Member(newUId, newUPw, newUName);
        
        alert('정상적으로 수정되었습니다.');
        //editPopUp.style.display = "none";
        
        setList(); 
        editform.reset();
        return false;
    }
}


//members 배열의 요소를 삭제하는 기능
function deleteMember(index) {
    var result = confirm('정말 삭제하시겠습니까?');
    if(result) {
        /*splice(삭제위치, 해당 위치부터의 삭제 개수, 삭제된 자리를 대체할 요소) 매서드를 이용*/
        members.splice(index, 1);
        
        /*for문 이용 - 에러 미해결*/
        /*for(var i=index; members.length-1; i++) {
            members[i] = members[i+1];
        }*/
        alert('성공적으로 삭제되었습니다.');
    }
    setList();
}

