// Inizializza la pagina

function initPage() {
    $("#candidato_nome").text(candidato_nome);
    $("#bio_short").attr('w3-include-html',bio_short_url);
    $("#bio_long_text").attr('w3-include-html',bio_long_url);
    show_issues(issues_url);
    
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