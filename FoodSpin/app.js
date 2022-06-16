// $(function start(){
//     let currentPosition = 0;
//     let photo = $('.photo');
//     let photoNums = photo.length; 
    
//     let speed = 1500;
//     let timeout = 6550; 
//     $('.photo').eq(0).show();
    
//     function move(){
//       let nextPhoto = (currentPosition + 1) % photoNums;
//       photo.eq(currentPosition).fadeOut(speed);
//       photo.eq(nextPhoto).fadeIn(speed);
//       currentPosition = nextPhoto;
//     }
//     setInterval(move,timeout);

//     function change1() {
//     $('h1').css('color', '#54BF29');
//     $('h3').html('Asian Cucumber Salad').css('letter-spacing', '0')
//     $('p').html('Asian Cucumber Salad Recipe Made With Crunchy Cucumber, Onion, Rice Wine Vinegar, And A Few Secret Ingredients!')
//     $('.arrow-down').css("background-image", 'url(./public/arrow-down-green.png)')
//     $('.arrow-up').css("background-image", 'url(./public/arrow-down-green.png)')
//     $('.btnn').css('background-color', '#54BF29').css('box-shadow', '0px 20px 40px #DBF4D1');
//     $('body').css("background-image", "url(./public/body2.png)");
//     }
//     setInterval(change1,timeout);

//     function change2() {
//       $('h1').css('color', '#FF922C');
//       $('h3').html('Green Goddess Chicken Salad')
//       $('p').html('It Is A Non Vegetarian Salad Which Consists Of The Green Goddess Dressing Mixed With Chicken, Peppers, Olives And Celery. ')
//       $('.arrow-down').css("background-image", 'url(./public/arrow-down-orange.png)')
//       $('.arrow-up').css("background-image", 'url(./public/arrow-down-orange.png)')
//       $('.btnn').css('background-color', '#FF922C').css('box-shadow', '0px 20px 40px #F4E2D1');
//       $('body').css("background-image", "url(./public/body1.png)");
//       }
//       setInterval(change2,timeout*2);
  

//       $(document).ready(function() {
//         $(".prev").click(function() {
//           $('h1').css('color', '#54BF29');
//           $('body').css("background-image", "url(./public/body2.png)");
//     $('h3').html('Asian Cucumber Salad');
//     $('.btnn').css('background-color', '#54BF29').css('box-shadow', '0px 20px 40px #DBF4D1');
//         })
//       })

//     })

    
