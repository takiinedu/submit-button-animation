const myDiv = document.getElementById("cycle-in");
const text = document.getElementById("text");
const tick = document.getElementById("tick");
let degree = 0;

function degreeadd() {
    degree += 1;
    if (degree > 360) {
        text.style.fontSize = "10px";
        text.style.opacity = "0";
        myDiv.style.width = "0px";
        myDiv.style.height = "0px";
        myDiv.style.border = "0px solid transparent";
        tick.style.opacity = "1";
        setTimeout(function(){
            tick.style.width = "70px";
            tick.style.height = "70px";
        },500)
        setTimeout(function(){
            tick.style.transition = "0.8s";
            tick.style.width = "0px";
            tick.style.height = "0px";
            tick.style.opacity = "0";
        },1200)
        return; // Dừng lại khi đạt 360 độ
    } else {
        // Cập nhật màu nền của text và myDiv
        text.style.background = `linear-gradient(to left ,deepskyblue ${degree / 360 * 100}%, white ${degree / 360 * 100}%)`;
        text.style.backgroundClip = "text"; // Sửa lại thuộc tính backgroundClip
        text.style.color = "transparent"; // Đặt màu chữ là transparent để thấy gradient
        myDiv.style.background = `linear-gradient(peachpuff 0 0) padding-box, conic-gradient(deepskyblue ${degree}deg, white 0deg) border-box`;
        setTimeout(function() {
            degreeadd();
        }, 5);
    }
}

// Thêm sự kiện mouseenter để bắt đầu thay đổi màu nền khi chuột di vào
myDiv.addEventListener("mouseenter", function() {
    myDiv.style.borderRadius = "50%";
    myDiv.style.width = "100px";
    myDiv.style.height = "100px";
    degree = 0; // Đặt lại degree về 0 mỗi khi di chuột vào
    myDiv.style.background = `linear-gradient(peachpuff 0 0) padding-box, conic-gradient(deepskyblue ${degree}deg, white 0deg) border-box`;
    text.style.background = `linear-gradient(to left ,deepskyblue 0%, white ${degree / 360 * 100}%)`;
    text.style.backgroundClip = "text"; // Sửa lại thuộc tính backgroundClip
    text.style.color = "transparent"; 
    setTimeout(function() {
        degreeadd();
    }, 1000);
});

// Thêm sự kiện mouseleave để khôi phục màu nền khi chuột thoát
myDiv.addEventListener("mouseleave", function() {
    degree = 0; // Đặt lại degree về 0 khi thoát chuột
    myDiv.style.backgroundColor = "deepskyblue"; // Khôi phục màu nền
});
