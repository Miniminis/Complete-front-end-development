/*xml */

//var xml 문자열 생성 
var xml ='';
xml += '<Sites>';
xml += '    <site>';
xml += '        <name>naver</name>';
xml += '        <url>http://www.naver.com</url>';
xml += '    </site>';
xml += '    <site>';
xml += '        <name>daum</name>';
xml += '        <url>http://www.daum.net</url>';
xml += '    </site>';
xml += '    <site>';
xml += '        <name>google</name>';
xml += '        <url>http://www.google.com</url>';
xml += '    </site>';
xml += '</Sites>';

//var xml 에 정의된 문자열 --> xml 문서형태로 변환
var xmlDoc = $.parseXML(xml); 

//xml문서를 jquery객체로 변환 
//find() 를 통해서 태그를 찾음 
//each (callback()) 통해서 반복 --> 3개의 site tag 가 배열생성됨
//text()를 통해서 데이터 축출 
$(xmlDoc).find('site').each(function(index){
    
    var name = $(this).find('name').text();
    var url = $(this).find('url').text();
    
    var output = '';
    output += '<div>';
    output += ' <h1 class ="title">'+ name+'</h1>';
    output += ' <h3>'+ url+'</h3>';
    output += '</div>';
    
    //xml -->html : 파싱 
    document.body.innerHTML += output;
    
    //5초 후에 h1에 title 속성을 삭제 
    //사용자나 시스템의 이벤트에 따라서 기존에 미리 정의된 css 스타일을 동적으로 적용할 수 있다. 
    setTimeout(function(){
        $('h1').removeClass('title');
    }, 5000);
    

});


    