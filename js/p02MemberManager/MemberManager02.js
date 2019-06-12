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
};

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
    
    //등록 버튼 클릭 --> 초기입력폼 정보 저장 
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
    
    /*수정 버튼 클릭 --> 수정 폼 submit 재정의*/
    var editform = document.getElementById('editform');
    var editTable = document.getElementById('editTable');
    
    editform.onsubmit = function() {
        //공백을 체크하는 유효성 검사 
        //1. 케스탕 
        //2. 객체.value 값을 검사: 문자열 길이 검사 - 공백여부 검사 
        
        var nUId = document.getElementById('newUId');
        var nUPw = document.getElementById('newUPw');
        var nUName = document.getElementById('newUName');
        var nIndex = document.getElementById('newIndex').value;
        
        /*수정 폼 유효성검사*/
        if(nUId.value.length<1) {
            alert('아이디를 입력해주세요.');
            nUId.focus();
            return false;
        }
        if(nUPw.value.length<1) {
            alert('비밀번호를 입력해주세요');
            nUPw.focus();
            return false;
        }
        if(nUName.value.length<1) {
            alert('이름을 입력해주세요');
            nUName.focus();
            return false;
        }
                
        members[nIndex].userid = nUId.value;
        members[nIndex].userpw = nUPw.value;
        members[nIndex].username = nUName.value;
        alert('정보가 수정되었습니다. ');
        
        setList();
        
        editform.reset();
        
        editTable.style.display = 'none';
        
        return false;
    };
    
    var cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.onclick = function() {
       editTable.style.display = 'none';
    }
};

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
    
    /*var editTable = document.getElementById('editTable');
    editTable.style.display = 'block';*/
    
    document.getElementById('editTable').style.display = 'block';
    
    //alert('정보를 수정합니다.'); 
    
    //수정, 폼의 아이디, 비밀번호, 이름 input을 캐스팅 
    var newUId = document.getElementById('newUId');
    var newUPw = document.getElementById('newUPw');
    var newUName = document.getElementById('newUName');
    var newIndex = document.getElementById('newIndex');

    /*Member 배열에 있는 id, pw, username 을 수정 폼 input value에 표시*/
    newUId.value = members[index].userid;
    newUPw.value = members[index].userpw;
    newUName.value = members[index].username;
    newIndex.value = index;
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

