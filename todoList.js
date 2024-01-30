let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#inputValue");
let listJob = JSON.parse(localStorage.getItem("jobs")) || [];
let ulElement = document.querySelector("#listJob");

function render(){
    let ulHtmls = listJob.map(function(job){
        return `
        <li>
            <span>${job.name}</span>
            <button>Sửa</button>
            <button>Xóa</button>
        </li>
        `;
    });
    // Chuyển đổi từ mảng thành chuỗi HTML
    const ulHtml = ulHtmls.join("");
    
    // Append chuỗi HTML vào trong DOM
    ulElement.innerHTML = ulHtmls;


}
render();
/**
 * Hàm thêm mới công việc
 * Auth: NTTQ (04/01/2005)
 */
function cJob(){
    //Trong JS , có bao nhiêu giá trị mặc định là false: false, null, 0, undefined , NaN, ""
    if(!inputElement.value){
        alert("Tên công việc không để trống");
    }else{
        //Tạo đối tượng newJob
        const newJob ={
            id: Math.ceil(Math.random() * 10000000000),
            name: inputElement.value,
            status: false,
        };
        //Push đối tượng newJob vào trong mảng
        listJob.push(newJob)
        //lưu dữ liệu lên localStorage
        localStorage.setItem("Jobs", JSON.stringify(listJob));
        // Clear giá trị trong input 
        inputElement.value = "";

        // Gọi hàm render lại giao diện 
        render();
    }

}

function dJob(){
}

function uJob(){
}

// Lắng nghe sự kiện submit form
formElement.addEventListener("submit", function(event){
    //Ngăn chặn sự kiện mặc định của form
    event.preventDefault();
    cJob();
});





// tìm hiểu thêm về hàm map(), find(), filter(), findIndex(), forEach()
//Ủy quyền sự kiện trong JS






// Input [1, 2, 3, 4] ==> Output [5, 6, 7, 8]
// const arr = [1, 2, 3, 4];
// const newArr = [];
// for (let i = 0 ; i < arr.length ; i++) {
//     newArr.push(arr[i] * 2);
// }
//map(): Dùng để lập qua các phâng tử của mảng , trả về một mảng mới
// có số lượng phần tử = số lượng phần tử = sl phân tử 

// let newArray = arr.map(function(number){
//     return number * 2;
// });
// console.log("newArray"), newArray;