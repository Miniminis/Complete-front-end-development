/*jquery
1. 문서 객체 모델과 관련된 처리 
2. 일관된 이벤트 연결 구현 
3. 에니메이션 효과 
4. ajax 어플리케이션 개발*/ 



/*$(document).ready(function(){}) ==== window.onload = function(){}
- 브라우저에 html 이 모두 표시되고 난 후에 실행*/
$(document).ready(function() {
   //alert('jquery ready() 실행'); 
    
    //선택자
    $('h1').css('color', 'red'); //문서객체의 생성.매서드(name, value);
    
    $('h2').css('background-color', 'aqua'); //태그 선택자
    
    $('#title').css('font-size', '50px'); //아이디 선택자
    
    //특정 태그에 들어있는 클래스에게만 스타일 적용 
    $('h1.underline').css('text-decoration','underline'); //태그.클래스 선택자
    
    //val() = get
    var str = $('input[type=text]').val();
    //alert(str);
    //$('input[type=text]').val() //현재 사용자가 입력한 값을 (value)를 가져옴 
    
    //val() = set
    $('input[type=text]').val('안녕하세요!');
    

    
    //필터 선택자 input:type의 속성  
    $('input:submit').val('삭제하기');

    setTimeout(function(){
        var chk = $('input:checkbox:checked').val();  //checked 된 checkbox 를 표시
        //alert(chk); //on
    }, 3000); //3초 이후에 함수 실행 
    
    
    setTimeout(function(){
        var byear = $('select>option:selected').val(); //selected default 되어있는 option 을 get
        //alert(byear);
    }, 3000);
    
    //위치 필터 선택자 
    //jquery 에서는 css 체이닝도 가능하다!
    $('h1:odd').css('color', 'yellow');
    $('h1:even').css('color', 'green');
    $('h1:first').css('background-color', 'pink').css('color', 'purple');
    $('h1:last').css('background-color', 'gray').css('color', 'aqua');
    
});

