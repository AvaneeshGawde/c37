class Game{
    constructor(){
        
    }
    getState(){
        database.ref("gameState").on("value",function(data){gameState=data.val()})
    }
    update(state){
        database.ref("/").update({gameState:state})
    }
    async start(){
        if(gameState==0){

            player= new Player()

            var playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef .exists()){
                playerCount=playerCountRef.val()
                player.getCount();
            }
           
            form= new Form()
            form.display();

        }
    }
    play(){
        form.hide()
        textSize(30)
        text("game start",160,100)
        Player.getPlayerInfo();
        console.log(allPlayers)
        if(allPlayers !== undefined){
            var display_position=130;
            for (var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red")

                }else {
                    fill("black")
                }
                display_position += 20
                textSize (15)
                text (allPlayers[plr].name + " : " + allPlayers[plr].distance,150,display_position)


            }

        }
        if(keyIsDown(UP_ARROW ) && player.index !== null){
            player.distance+=50
            player.update()
        }
    }
}