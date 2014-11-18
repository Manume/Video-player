$(function(){


//js for multiple slide carousel
 
//ends multiple slide carousel

// playlist buttons 
/* player 1: jukebox, player2:all audio, player3:video, player4:dailybread, player5:radio, player6:audio bible 
  /* myplaylist= audio juke box, myplaylist2= radio, myplaylist3= video */


$.ajax({ 
        type: 'GET',
        url:window.location.pathname ,
        dataType: "json",
        success: function(json){
          $.each(json,function(data){ 
            myPlaylist3.add({title:$(this).attr("video_identifier"),m4v:$(this).attr("video_url")})
             });
              }
           });


/*================radio code==============================*/
 



  $("#jquery_jplayer_3").bind($.jPlayer.event.setmedia, function(event) { 
  $("#jquery_jplayer_3").jPlayer("play");
    });

   

  


 

  var myPlaylist3 = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer_3",
  cssSelectorAncestor: "#jp_container_3"
  }, 
  [
   
  ], 
{
    playlistOptions: {
    autoPlay: true,

},
    supplied: "mp4,m4v",
    preload: "auto",
     size: {
width: "100%",
height: "100%"
}
  });



  



   
    $("#jplayer_inspector_3").jPlayerInspector({jPlayer:$("#jquery_jplayer_3")});
    



   
});


