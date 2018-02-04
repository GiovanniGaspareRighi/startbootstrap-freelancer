// Inizializza la pagina

function initPage() {
    $("#candidato_nome").text(candidato_nome);
    $("#bio_short").attr('w3-include-html',bio_short_url);
    $("#bio_long_text").attr('w3-include-html',bio_long_url);
    show_issues(issues_url);
    load_captcha();
    load_privacy();
    
//    //recupero il captcha
//    $.post("../backend/get_captcha.php",
//	{},
//        function(data,status){
//            //$("#info").append("Data: " + JSON.stringify(data.data.img, null, 4) + "\nStatus: " + status);
//            //data = JSON.parse(data);
//            $("#captcha_img").html("<img id=\"waForm_captcha_img_captcha\"  src=" + data.data.img + ">");
//            $("#captcha_hidden_val").html("<input id=\"captcha_id\" type=\"hidden\" name=\"k_captcha\" value="+ data.data.id + ">");
//        });	
};	

function show_issues(issues_url){
    $("#my_issues").attr('w3-include-html',issues_url); 
    
    
}


//recuperiamo il captcha
function load_captcha(){

    $.post(viva_url+"backend/get_captcha.php",
    {},
    function(data,status){
        $("#waForm_captcha_img_captcha").attr('src',''+viva_url + data.data.img); 
        $("#captcha_hidden_val").html("<input id=\"captcha_id\" type=\"hidden\" name=\"k_captcha\" value="+ data.data.id + ">");
        $("#session_token_hidden_val").html("<input id=\"session_token\" type=\"hidden\" name=\"session_token\" value="+ data.session_token + ">");
    });	
}

//recuperiamo la privacy
function load_privacy() {
    
    $.post(viva_url+"backend/get_privacy_text.php",
    {},
    function(data,status){
        $("#privacy_text").text(data.data.text);
    });	
    
}