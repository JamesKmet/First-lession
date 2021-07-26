console.log('poggers');

// java object
// var student = [
//   {
//     id: 101,
//     name: 'David'
//   },
//   {
//     id: 102,
//     name: 'Jeff'
//   },
//   {
//     id: 103,
//     name: 'Artoria'
//   }
// ];
// //display objects
// var i;
// for (i=0; i<student.length; i++){
//   console.log(student[0].id, student[i].name);
// }
//JSON
// var student =[
// {
//   "id":101,
//   "name": "Artoria"
// },
// {
//   "id":102,
//   "name": "Rin"
// },
//
// ];

//display objects
// var i;
// for (i=0; i<student.length; i++){
//   console.log(student[i].id, student[i].name);
//   document.getElementById('objects').innerHTML +=
//   //'<p  class="text-light"> '+ student[i].id + '   '+ student[i].name +'</p>'
// '<div class="col-12 col-lg-6 col-xl-6"> ' +
//   '<div class="card mt-3 ml-5" style="width: 18rem;">' +
//     '<div class="card-body">'+
//         '<h5 class="card-title">'+ student[i].name +'</h5>'+
//
//         '<p class="card-text"> '+ student[i].id+'</p>'+
//
//       '</div>'+
//   '</div>'+
// '</div>';
// }

// //display objects
// var i;
// var myData = JSON.parse(myData);
// console.log(myData);
// for (i=0; i<student.length; i++){
//   console.log(student[i].id, student[i].name);
//   document.getElementById('objects').innerHTML +=
//   //'<p  class="text-light"> '+ student[i].id + '   '+ student[i].name +'</p>'
//   '<div class="col-12 col-lg-6 col-xl-6"> ' +
//     '<div class="card mt-3 ml-5" style="width: 18rem;">' +
//       '<div class="card-body">'+
//         '<h5 class="card-title">'+ student[i].name +'</h5>'+
//
//         '<p class="card-text"> '+ student[i].id+'</p>'+
//
//       '</div>'+
//     '</div>'+
//   '</div>';
// }

  // url : 'https://api.unsplash.com/photos?page=1&client_id=',

  console.log('script');

  //Accessing key from config.json
  var myKey=JSON.parse(myKey);//convert json into js object
  console.log(myKey[0].key);
  var key = myKey[0].key;


  $.ajax({
    url : 'https://api.unsplash.com/photos?page=1&client_id='+ key,
    data: 'json',
    success: function(data){
      console.log(data);
       var i;
      for (i=0;i<data.length;i++){
         document.getElementById('objects').innerHTML +=
         '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
            '<div class="card mt-3 ml-5" style="width: 18rem;">' +
              '<div class="card-body">'+
              '<img src="'+ data[i].urls.thumb +'" class="card-img-top" alt="...">' +
                '<h5 class="card-title">'+ data[i].alt_description +'</h5>'+

               '<p class="card-text"> Color: '+ data[i].color+ '<br>' +
                'Height: '+ data[i].height + '<br>'+
                 'Width: '+ data[i].width + '<br>' +
                  'Likes:  ' + data[i].likes+'</p>'+

             '</div>'+
            '</div>'+
         '</div>';
      } //for loop
    },  //success
    error : function(){
      console.log('error');
    } //error
  }); //ajax
