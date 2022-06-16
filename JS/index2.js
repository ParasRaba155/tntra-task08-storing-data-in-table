// let fname = localStorage.getItem('fname');
// let lname = localStorage.getItem('lname');
// let add = localStorage.getItem('address');
// let add2 = localStorage.getItem('add2');
// let state = localStorage.getItem('state');
// let zip = localStorage.getItem('zipcode');
// let phone = localStorage.getItem('phone');
// let email = localStorage.getItem('email')
// let city = localStorage.getItem('city');
// let feedback = localStorage.getItem('feedback');
// let suggest = localStorage.getItem('suggest');
// let gender = localStorage.getItem('gender');






// $('#displayArea').append(
//             "<tr><td>" + fname + " " + lname +
//             "</td><td>" + add + 
//             "</td><td>" + city +
//             "</td><td>" + state +
//             "</td><td>" + zip +
//             "</td><td>" + phone +
//             "</td><td>" + email +
//             "</td><td>" + feedback +
//             "</td><td>" + suggest +
//             "</td><td>" + gender +
//             "</td></tr>")

debugger
let names = JSON.parse(localStorage.getItem('names'));
let lname = JSON.parse(localStorage.getItem('lname'));
let add = JSON.parse(localStorage.getItem('address'));
let city = JSON.parse(localStorage.getItem('city'));
let state = JSON.parse(localStorage.getItem('state'));
let zip = JSON.parse(localStorage.getItem('zipcode'));
let phone = JSON.parse(localStorage.getItem('phone'));
let email = JSON.parse(localStorage.getItem('email'));
let feedback = JSON.parse(localStorage.getItem('feedback'));
let suggest = JSON.parse( localStorage.getItem('suggest'));
let gender = JSON.parse(localStorage.getItem('gender'));


// console.log(typeof(names));

// console.log(fname);
// console.log(lname);
// console.log(add);
// console.log(state);
// console.log(zip);
// console.log(phone);



// for(let i=0; i< names.length;i++){
    $('#displayArea').
        append(
            "<tr><td>" + names + 
            "</td><td>" + add +
            "</td><td>" + city +
            "</td><td>" + state +
            "</td><td>" + zip +
            "</td><td>" + phone +
            "</td><td>" + email +
            "</td><td>" + feedback + 
            "</td><td>" + suggest +
            "</td><td>" + gender +
            "</td><td>" + "<button class='btn btn-info btn-xs edit onclick='history.back()'>Edit</button><button class='btn btn-danger btn-xs delete'>Delete</button></td></tr>"); 
            $(document).on('click','.delete',function(){
                $(this).parent().parent().remove();
               
            });
            $(document).on('click','.edit',function(event){
              event.preventDefault();
             var url = window.history.go(-1);
             $(".edit").attr('herf',url)
             
             
        //   });
       
    });
//     $(document).on('click','.edit',function(event){
//       event.preventDefault();
//      var url = window.history.go(-1);
//      $(".edit").attr('herf',url)


//     $('#table #displaydata').append('<tr class="child"></td><td>'+fname+'</td><td>'
// +lname+'</td><td>'+address+'</td><td>'
// +address1+'</td><td>'+city+'</td><td>'
// +state+'</td><td>'+code+'</td><td>'
// +phoneno+'</td><td>'+email+'</td><td>'+feedback+'</td><td>'
// +suggestion+'</td><td>'+gender+'</td><td>'+
     
     
//   });
// }

