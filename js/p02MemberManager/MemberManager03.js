//Member 객체들을 저장하기 위한 배열 생성 
//var members = [];

//저장소 변수 선언
//localStorage 에서 데이터 유무에 다라 배열 선언 
var members;

//2. 회원데이터 저장 목적으로 하는 생성자 함수 정의 
//id: 회원 아이디, 이메일 주소 
//pw: 비밀번호 
//name: 회원의 이름 
function Member(id, pw, name) {
    this.userid = id;
    this.userpw = pw;
    this.username = name;
}

//3. 생성자 함수의 method: 사용자의 데이터를 가지고 html 텍스트를 완성하는 매서드
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

//window.onload function : 웹 페이지가 로드된 상태에서 실행됨
// - 페이지가 완전히 로드된 상태에서 실행되므로 오류의 가능성을 줄여준다.
window.onload = function() {
    
    //json 이용하여 웹 브라우저에 데이터 객체 저장해주기
    if(localStorage.getItem('members') == null) { //ver members 변수에 담긴 데이터가 없다면 --> 프로그램을 최초 실행한다면 

        members=[]; //최초 실행 - 1. members 배열을 생성해주고 
        localStorage.setItem('members', JSON.stringify(members)); //2. 그 객체 배열에 json stirng 형식으로 데이터를 넣어준다. 
        } else { //members 배열에  이미 담긴 데이터가 있다면 
            members = JSON.parse(localStorage.getItem('members')); //members 배열에 json type 으로 저장된 데이터를 객체 타입으로 변환한 후, 
            setList();  //list 를 로드하여 화면에 띄워준다. 
        }   
    
    /*4. 데이터 저장: 입력폼 각각에 정의된 id를 통해서 데이터를 js 내부로 캐스팅 하여 객체에 저장해준다. */
    /*등록 폼을 캐스팅 */
    //form에 정의된 id 값을 통해서 가져옴 
    var regForm = document.getElementById('regForm');
    
    //등록 버튼 클릭 --> 초기입력폼 정보 저장 
    regForm.onsubmit = function() {
        var uId = document.getElementById('uId');
        var uPw = document.getElementById('uPw');
        var uName = document.getElementById('uName'); 
        
        if(uId.value.length <1) {
            alert('아이디를 입력해주세요');
             uId.focus();
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
        
        /* 4. 입력받은 데이터로 객체 생성 */
        var newMember = new Member(uId.value, uPw.value, uName.value);
        
        //newMember.showData(); //확인용
        
        /*4. 새롭게 생성된 데이터를 members 배열에 저장 */
        members.push(newMember); //배열의 요소 추가--> 변경
        
        //json 으로 브라우저에 저장 
        localStorage.setItem('members', JSON.stringify(members));
        
        alert('정상적으로 입력되었습니다.');
        setList(); //배열을 다시 읽어들이는 작업 (추가, 삭제 모두 처리 가능 - 매 로드시마다 배열을 처음부터 로드하므로 )

        regForm.reset();

        return false;
    
    };
    
    /*수정 버튼 클릭 --> 수정 폼 submit 재정의*/
    //form에 정의된 id 값을 통해서 가져옴 
    var editform = document.getElementById('editform');
    var editTable = document.getElementById('editTable');
    
    editform.onsubmit = function() {
        
        //공백을 체크하는 유효성 검사 
        //1. 케스팅 
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
        
        //기존 members[index] 위치 = 수정하고자 하는 데이터의 배열 위치 
        //해당 위치 객체의 아이디, 비밀번호, 이름에 새로 수정받은 아이디, 비밀번호 이름을 넣어준다. 
        members[nIndex].userid = nUId.value;
        members[nIndex].userpw = nUPw.value;
        members[nIndex].username = nUName.value;
        
        //정보 수정 완료를 알리는 메시지 
        alert('정보가 수정되었습니다.');
        
        //수정된 정보를 저장함 
        localStorage.setItem('members', JSON.stringify(members));
        
        //수정내용을 포함한 리스트 다시 출력 
        setList();
        
        //수정 폼은 다시 비워주기
        editform.reset();
        
        //수정 완료 후, 수정 창 다시 숨겨주기
        editTable.style.display = 'none';
        
        //페이지 창 유지
        return false;
    };
    
    //수정폼에서 취소 버튼에 대한 처리 
    var cancelBtn = document.getElementById('cancelBtn');
        cancelBtn.onclick = function() {
           editTable.style.display = 'none';
        }
};

//members 배열의 요소들을 출력기능 
function setList () {
    var newHtml = '';
    for(var i=0; i<members.length; i++) {
        //newHtml += members[i].makeHtml(i);
        newHtml += '<tr>\n';
        newHtml += '<td>' + i +'</td>\n';
        newHtml += '<td>'+members[i].userid  +'</td>\n';
        newHtml += '<td>'+members[i].userpw   +'</td>\n';
        newHtml += '<td>'+members[i].username  +'</td>\n';
        newHtml += '<td><a onclick="editMember('+i+')"> 수정 |</a><a onclick="deleteMember('+i+')"> 삭제 </a></td></tr>\n';
        //수정과 삭제 - onclick을 통해서 각각의 함수로 이동: editMember(), deleteMember() 
        
    }
    document.getElementById('listRow').innerHTML = newHtml;
}

//5. 데이터 수정: members 배열의 요소를 수정하는 기능
function editMember(index) {
    
    /*var editTable = document.getElementById('editTable');
    editTable.style.display = 'block';*/
    
    //수정 링크를 클릭하면 메인 페이지 뒤에있던 팝업창 위로 보여짐 
    document.getElementById('editTable').style.display = 'block';
    
    //alert('정보를 수정합니다.'); 
    
    //수정, 폼의 아이디, 비밀번호, 이름, hidden index의 input을 캐스팅 
    var newUId = document.getElementById('newUId');
    var newUPw = document.getElementById('newUPw');
    var newUName = document.getElementById('newUName');
    var newIndex = document.getElementById('newIndex');

    /*Member 배열에 있는 id, pw, username 을 수정 폼 input value에 표시*/
    newUId.value = members[index].userid;
    newUPw.value = members[index].userpw;
    newUName.value = members[index].username;
    
    newIndex.value = index; 
    //js 파일 내부에서 전달받은 index 값을 html hidden input 으로 전달 
    //--> 향후에 수정 버튼을 누를 때, 해당 index 값의 데이터만 골라서 변화해주기 위함임!
}


//members 배열의 요소를 삭제하는 기능
function deleteMember(index) {
    var result = confirm('정말 삭제하시겠습니까?');
    if(result) {
        
        /*splice(삭제위치, 해당 위치부터의 삭제 개수, 삭제된 자리를 대체할 요소) 매서드를 이용*/
        members.splice(index, 1);
       
        localStorage.setItem('members', JSON.stringify(members));
        
        /*for문 이용 - 에러 미해결*/
        /*for(var i=index; members.length-1; i++) {
            members[i] = members[i+1];
        }*/
        alert('성공적으로 삭제되었습니다.');
        setList();
    }
}


/* 데이터 저장 
1. local storage
- key, value -- 둘 다 string type
    - json 형태 string type 으로 변경 
- setItem(key, value) : 데이터 저장하기 
- getItem(key) : 데이터 가져오기 
- removeItem(key) : 데이터 삭제 
- clear() :전체삭제 

2. session storage
- 서버와 연결된 동안 데이터가 저장됨 
- 서버 종료 후 일정시간이 지나면 데이터가 삭제됨

3. 

*/
