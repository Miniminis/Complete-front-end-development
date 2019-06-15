/*버전04 - jquery*/

//2. 회원데이터 저장 목적으로 하는 생성자 함수 정의 
//id: 회원 아이디, 이메일 주소 
//pw: 비밀번호 
//name: 회원의 이름 
function Member(id, pw, name) {
    this.userid = id;
    this.userpw = pw;
    this.username = name;
}

//3. 저장소 변수 선언
//localStorage 에서 데이터 유무에 다라 배열 선언 
var members;
if(localStorage.getItem('members') == null) { //ver members 변수에 담긴 데이터가 없다면 --> 프로그램을 최초 실행한다면 

    members=[]; //최초 실행 - 1. members 배열을 생성해주고 
    localStorage.setItem('members', JSON.stringify(members)); //2. 그 객체 배열에 json stirng 형식으로 데이터를 넣어준다. 
    } else { //members 배열에  이미 담긴 데이터가 있다면 
        members = JSON.parse(localStorage.getItem('members')); //members 배열에 json type 으로 저장된 데이터를 객체 타입으로 변환한 후, 
        setList();  //list 를 로드하여 화면에 띄워준다. 
    }

//4. members 배열의 요소들을 출력기능 
//- 매 화면 로드시 보여줄 회원리스트
function setList() {
    var nhtml ='';
    for(var i=0; i<members.length; i++) {
        nhtml += '<tr>';
        nhtml += '  <td>'+i+'</td>';
        nhtml += '  <td>'+members[i].userid+'</td>';
        nhtml += '  <td>'+members[i].userpw+'</td>';
        nhtml += '  <td>'+members[i].username+'</td>';
        nhtml += '  <td><a onclick="editMember('+i+')">수정 </a>'+ '|'+'<a onclick="deleteMember('+i+')"> 삭제</a></td>';
        nhtml += '</tr>';
        //수정과 삭제 - onclick을 통해서 각각의 함수로 이동: editMember(), deleteMember()
    }
    $('#listRow').html(nhtml);
};
    
/*5. 데이터 저장: 등록, 수정, 취소 폼 각각에 정의된 id를 통해서 jquery 문서객체생성 */
//form에 정의된 id 값을 통해서 가져옴 

//$(document).ready(function(){}) : 웹 페이지가 로드된 상태에서 실행됨
// - 페이지가 완전히 로드된 상태에서 실행되므로 오류의 가능성을 줄여준다.
$(document).ready(function(){
    
    //5-1. 등록버튼 클릭 --> 초기입력폼 정보 저장
    $('#regForm').submit(function(){
        var uId = $('#uId');
        var uPw = $('#uPw');
        var uName = $('#uName');        
        
        //유효성검사 - 아이디 길이
        if(uId.val().length<1) {
            alert('아이디를 입력해주세요!');
            uId.focus(); //아이디 input 칸에 focus 로 표시
            return false; //조건 충족하지 않은 항목 진행 막기
        }
        
        //유효성검사 - 중복 아이디
        for(var i=0; i<members.length; i++) {
            if(uId.val()== members[i].userid) {
                alert('이미 존재하는 아이디입니다.');
                uId.val(''); //아이디 입력란 비우기
                uId.focus();
                return false;
            }
        }
        
        //유효성검사 - 비밀번호 입력
        if(uPw.val().length<1) {
            alert('비밀번호를 입력해주세요!');
            uPw.focus();
            return false;
        }
        
        //유효성검사 - 비밀번호 길이
        if(uPw.val().length>16) {
            alert('비밀번호는 16자 이내만 가능합니다.');
            uPw.val(''); //비밀번호 입력란 비우기
            uPw.focus();
            return false;
        }
        
        //유효성검사 - 이름입력
        if(uName.val().length<1) {
            alert('이름을 입력해주세요!');
            uName.focus();
            return false;
        }


        //등록폼으로 입력받은 정보로 새로운 멤버객체 생성
        var newMember = new Member(uId.val(), uPw.val(), uName.val());

        //members []에 새로운 맴버객체 저장 
        members.push(newMember);
        
        //json 으로 브라우저에 저장 
        localStorage.setItem('members', JSON.stringify(members));

        alert('정상적으로 등록되었습니다.');

        //저장된 회원리스트 재로딩
        setlist();

        //등록폼 리셋
        $('#regForm').reset();

        return false;
    });
    
    /*6-2. 수정 버튼 클릭 --> 수정 폼 submit 재정의*/
    //form에 정의된 id 값을 통해서 가져옴 
    $('#editform').submit(function(){
        var nid = $('#newUId');
        var npw = $('#newUPw');
        var nname = $('#newUName');
        var nindex = $('#newIndex').val();
        
        //수정된 데이터 유효성검사
        if(nid.val().length<1) {
            alert('아이디를 입력해주세요!');
            nid.focus();
            return false;
        }
        if(npw.val().length<1) {
            alert('비밀번호를 입력해주세요!');
            npw.focus();
            return false;
        }
        if(nname.val().length<1) {
            alert('이름을 입력해주세요!');
            nname.focus();
            return false;
        }
        
        //alert(nid.val());
        //alert(npw.val());
        //alert(nname.val());
        //alert(nindex);
        
        //검사 끝난 데이터들은 원래의 배열 속 객체에 삽입
        members[nindex] = new Member(nid.val(), npw.val(), nname.val());
              
        alert('정보가 성공적으로 수정되었습니다.');
        
        //수정된 정보를 저장함 
        localStorage.setItem('members', JSON.stringify(members));
        
        setList(); //객체정보 재로딩
        $('#editTable').hide(); //수정창 숨기기
        $(this).reset(); //수정창 리셋
        
        return false;
    });
 
    
    //6-3. 수정폼에서 취소 버튼 --> 수정창 숨기기 
    $("#cancelBtn").click(function(){
        $('#editTable').hide();
    });
});

//6-1. 데이터 수정: members 배열의 요소를 수정하는 기능
function editMember(index){
    
    //main page 뒤에있던 수정폼 띄우기
    $('#editTable').show();
    
    //수정폼에서 입력된 새로운 id, pw, name, index 받기
    var nid = $('#newUId');
    var npw = $('#newUPw');
    var nname = $('#newUName');
    var nindex = $('#newIndex');
    
    //alert(members[index].userid);
    //수정폼에 기존 데이터 띄워주기 //val() setter 이용
    nid.val(members[index].userid);
    npw.val(members[index].userpw);
    nname.val(members[index].username);
    
    //수정하고자하는 배열속 객체의 index를 수정폼에 전달
    //input 형태이므로 단순히 index가 아니라 index의 value값에 현재의 index값을 대입할 수 있도록 한다.
    nindex.val(index);
};

//7. members 배열의 요소를 삭제하는 기능
function deleteMember(index) {
    var result = confirm('정말 삭제하시겠습니까?');
    if(result) {
        /*splice(삭제위치, 해당 위치부터의 삭제 개수, 삭제된 자리를 대체할 요소) 매서드를 이용*/
        members.splice(index, 1);
       
        //삭제후 저장소 업데이트
        localStorage.setItem('members', JSON.stringify(members));

        alert('성공적으로 삭제되었습니다.');
        setList(); //삭제된 정보반영한 리스트 재로딩
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
*/