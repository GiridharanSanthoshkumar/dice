var e=document.querySelector(".d");
e.addEventListener("click",function(){
     var rn1=Math.random();
      rn1=Math.floor(rn1*6+1);
      var a=document.querySelector(".img1");
      switch(rn1)
      {
        case 1:
          
          a.setAttribute("src","images/dice1.png");
          break;
        case 2:
          a.setAttribute("src","images/dice2.png",);
          break;
        case 3:
          a.setAttribute("src","images/dice3.png");
          break;
        case 4:
          a.setAttribute("src","images/dice4.png");
          break;
        case 5:
          a.setAttribute("src","images/dice5.png");
        break;
        case 6:
          a.setAttribute("src","images/dice6.png");
          break;
        default:

              
      }
      var rn2=Math.random();
      rn2=Math.floor(rn2*6+1);
      var b=document.querySelector(".img2");
      switch(rn2)
      {
        case 1:
        
       b.setAttribute("src","images/dice1.png");
        break;
        case 2:
          b.setAttribute("src","images/dice2.png");
          break;
        case 3:
          b.setAttribute("src","images/dice3.png");
          break;
        case 4:
          b.setAttribute("src","images/dice4.png");
          break;
        case 5:
          b.setAttribute("src","images/dice5.png");
        break;
        case 6:
          b.setAttribute("src","images/dice6.png");
          break;
        
              
      }
      var c=document.querySelector("h1");
      if(rn1<rn2)
      {
        c.innerHTML="Player 2 wins!!";

      }
      else if(rn1>rn2)
      {
        c.innerHTML="Player 1 wins!!";
      }
      else
      {
        c.innerHTML="match draw!!!";
      }
});    
       
      
