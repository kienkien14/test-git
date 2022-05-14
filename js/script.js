// // biểu thức Hàm
// const ham = function() {
//     console.log("I am a function");
// }

// ham();

// //2.1 sử dụng hàm KO TÊN để định nghĩa PHƯƠNG THỨC của ĐỐI TƯỢNG
// let Student = {
//     studentID: "2051060569",
//     studentName: "Nguyen Van A",
//     getStudentInfo: function(){
//         console.log(this.studentID + ".."+ this.studentName);
//     }
// }

// Student.getStudentInfo();


// //2.2 Hàm tự GỌI (tự THỰC THI)
// (function(n){
//     console.log("I am a function: " + n);
// })(10)  //sẽ được giải thích cho tiết trong xử lý sự kiện JS DOM

// // 3. Arrow Function
// let x = (a,b) => {
//     product = a * b * 100;
//     console.log(product);
// };
// x(8);


// // 4.THIS
// function otherFunction(){
//     console.log(this.location.href);
//     console.log(window.location.href);
//     //window.location.href =2vn";
// }
// otherFunction();


// //chạy call , apply, 


// //Javascript DOM 
// //Window là đối tượng CHA của document location..
// // document.getElementById("class").textContent = "index"
// // document.getElementById("class").innerHTML = "index2"

// // let doanVan =  document.getElementById('doanVan');
// // console.log(doanVan);
// // doanVan.textContent = "New";

// // let paragraphs = document.getElementsByName("Doan van")



// // Bước 01: Xác định các phân tử tương tách
// let doanVan = document.querySelector('p');
// let nutNhan = document.querySelector('button');

// // Bước 02: Bắt sự kiện
// nutNhan.addEventListener('click', function(){
//     doanVan.style.color = 'blue';
// });



// let nutNhan = document.querySelector('button');



let fruit = document.getElementById('txtFruit');
let button = document.getElementById('btnShow');
let im


