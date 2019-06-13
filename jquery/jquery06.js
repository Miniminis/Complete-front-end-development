/*문서 객체의 클래스 속성검사 
1. attr() - gettehr 
2. attr(name, value) - setter 1
3. attr(name, function(){}); - setter 2 : 
4. attr(obcject) - setter3 : 여러개의 속성을 한번에!
*/


$(document).ready(function(){
    
    var imgPath = $('img').attr('src'); //getter 
    //alert(imgPath);
    
    setTimeout(function(){
        //$('img').attr('width', 200); 
        
        /*index 값 잊지 않고 함수 매개변수로 받도록 주의!!!!*/
        /*$('img').attr('width', function(index){
            return (index+1)*100;
        });*/
        
        /*$('img').attr({
            src: '../css/zootopia_1.jpg', 
            width: function(index) {
                return (index+1)*100;
            }
        });*/
        
        
        
        /*html - attr과 js-prop 의 차이*/
        var chk1 = $('input:checkbox').attr('checked');
        var chk2 = $('input:checkbox').prop('checked');

        //alert(chk1); //attr(html문서의 속성) - checked 
        //alert(chk2); //prop(js의 속성) - true

        /*사용자의 체크동작에 따라 다른 메시지가 띄워짐 */
        if(chk2) {
            //alert('동의해주셔서 감사합니다.');
        }
        
        if(!chk2) {
            //alert('개인정보활용에 동의해주세요');
        }
        
        
        //페이지 로딩 후, checkbox를 checked--> true 형태로 변환
        //$('input:checkbox').prop('checked', true);
        
        
        
        /*html - attr과 js-prop 의 차이
        - 태그 내부에 정의되어있는 속성들은 attr : 태그에 명시되어있지 않다면 속성이 변하지 않음 --> 사용자의 움직임을 반영하지 않음 
        - 그 외의 것은 prop 이용 : 사용자의 움직임을 반영 
        */
        var href1 = $('a').attr( 'href'); 
        var href2 = $('a').prop('href');
        //alert(href1); //문서 내부의 주소 - 로컬라이브러리
        //alert(href2); //링크의 주소 - 홈페이지
        
        
        /*css()*/
        //alert($('a').css('color'));
        
    }, 2000);
    
    
    
    
    
    
    
    /*문서객체 내부검사 
    - innerHTML(js) - html(): html 태그를 인식
    - html(): getter - 태그 내부의 값 가져오기 
    - html('') : setter - 태그 내부에 값 넣어주기
    - textContent(js) - text() : html 태그 인식 안하고 글자만 인식 */
    
    var text1 = $('h1').html(); //h1내부에 있는 모든 값을 출력
    var text2 = $('h1').text(); //h1 내부에 있는 텍스트만 출력 
    //alert(text1 + ' ::::::::::::: '+ text2);
    
    //$('h1').html('<i>html() setter</i>'); //내부에서 ''내부에 있는 모든 요소를 html 태그로 인식 //html() setter 으로 변화

    $('h1').text('<i>html() setter</i>') //''내부에 있는 것을 모두 텍스트로 인식 //<i>html() setter</i> 으로 변화
    
});



