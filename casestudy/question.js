let Questions = [
    "Câu 1: HTML là viết tắt của gì?",
    "Câu 2: Vòng lặp while sẽ tiếp tục chạy cho đến khi điều kiện kiểm tra trở thành:",
    "Câu 3: Vòng lặp for...in được sử dụng để lặp qua?",
    "Câu 4: JavaScript là gì? ",
    "Câu 5: JavaScript có thể được sử dụng để làm gì?",
    "Câu 6: Cách khai báo biến trong JavaScript là gì?",
    "Câu 7: Trong JavaScript, typeof được sử dụng để làm gì?",
    "Câu 8: Đâu là phương thức để lấy độ dài của một chuỗi trong JavaScript?",
    "Câu 9: Đâu là cách khai báo một mảng trong JavaScript?",
    "Câu 10: Trong JavaScript, === làm gì?",
    "Câu 11: Kết quả của phép toán typeof null là gì?",
    "Câu 12: Đâu là phương thức để chuyển đổi một chuỗi thành số trong JavaScript?",
    "Câu 13: Đâu là phương thức để lấy một phần tử cuối cùng của một mảng trong JavaScript?'",
    "Câu 14: Trong JavaScript, NaN là viết tắt của:?", 
    "Câu 15: Kết quả của phép toán true + 1 trong JavaScript là",
    "Câu 16: Cú pháp đúng để thực hiện vòng lặp 'for' trong JavaScript là gì?",
    "Câu 17: Hàm 'continue' trong vòng lặp được sử dụng để làm gì?",
    "Câu 18: Cú pháp đúng để thực hiện vòng lặp 'while' trong JavaScript là gì?",
    "Câu 19: Cú pháp đúng để thực hiện vòng lặp 'do...while' trong JavaScript là gì?",
    "Câu 20: Vòng lặp nào được đảm bảo thực thi ít nhất một lần, bất kể điều kiện?",
    "Câu 21: Hàm trong JavaScript có thể được gọi bằng cách nào sau đây?",
    "Câu 22: Trong JavaScript, khái niệm 'phạm vi (scope)' của một biến trong một hàm xác định điều gì?",
    "Câu 23: Trong JavaScript, hàm có thể được gán cho một biến để sử dụng sau này. Điều này được gọi là?",
    "Câu 24: Trong JavaScript, hàm có thể được khai báo bên trong một hàm khác. Điều này được gọi là?",
    "Câu 25: Trong JavaScript, từ khóa 'this' trong một hàm được sử dụng để truy cập đối tượng nào?",
    "Câu 26: Làm thế nào để thêm một phần tử mới vào cuối một mảng trong JavaScript?",
    "Câu 27: Trong JavaScript, làm thế nào để xóa một phần tử khỏi một mảng theo chỉ mục?",
    "Câu 28: Làm thế nào để kiểm tra xem một giá trị có tồn tại trong mảng hay không?",
    "Câu 29: Trong JavaScript, làm thế nào để lấy một phần của mảng gốc và tạo một mảng mới từ các phần tử đó?",   
    "Câu 30: Làm thế nào để sắp xếp một mảng theo thứ tự tăng dần trong JavaScript?",
];

let Answers = [
    ["A.HyperText Markup Language","B.HyperText Machine Language",'C.HighText Markup Language','D.HyperLink and Text Markup Language'], 
    ["A.true'","B.false","C.Null","D.Undefined"],
    ["A.Các phần tử của một mảng","B.Các thuộc tính của một đối tượng",'C. Cả a) và b)','D.Không có câu trả lời đúng'],
    ["A.Ngôn ngữ lập trình dùng để phát triển game.","B.Ngôn ngữ lập trình dùng để phát triển ứng dụng di động",'C.Ngôn ngữ lập trình phía máy khách (trình duyệt).','D.Ngôn ngữ lập trình phía máy chủ.'],
    ["A.Xử lý dữ liệu được gửi từ máy chủ","B.Tạo ra các trang web động.",'C.Tạo ra các trang web tĩnh','D.Tất cả các phương án trên'],
    ["A.const myVariable","B.let myVariable",'C.var myVariable','D.Tất cả các phương án trên.'],
    ["A.Khai báo một biến","B.Gọi một hàm",'C.Tạo một vòng lặp','D.Kiểm tra kiểu dữ liệu của một biến.'],//7
    ["A..size","B..length",'C..size()','D..length()'],//8
    ["A.var myArray = (1, 2, 3)","B.var myArray = '1, 2, 3'",'C.var myArray = {1, 2, 3}','D.var myArray = [1, 2, 3]'],//9
    ["A.Là toán tử phép chia","B.Là toán tử gán giá trị",'C.Là toán tử so sánh bằng giữa hai giá trị','D.Là toán tử cộng 2 giá trị'],//10
    ["A.null","B.object",'C.undefined','D.string'],//11
    ["A..toFixed()","B.parseInt()",'C..toString()','D..toInt()'],//12
    ["A..length()","B..slice(-1)",'C..pop()','D..last()'],//13
    ["A.Not a Number","B.Null and None",'C.No Available Number','D.Never Add Numbers'],//14
    ["A.1","B.2",'C.true1','D.NaN'], //15
    ["A.for (let i = 0; i < 5; i++) {}","B.for (i = 0; i < 5; i++) {}","C. for (i = 0; i++) {}","D.for (let i = 0; i < 5; i--) {}"],//16
    ["A.Kết thúc vòng lặp và thoát khỏi nó.","B.Bỏ qua các lệnh bên dưới và chuyển đến lần lặp tiếp theo.","C.Thực hiện một lệnh trong vòng lặp.","D.Kiểm tra điều kiện để tiếp tục hoặc kết thúc vòng lặp."],//17
    ["A.while (i < 5) {}","B.while (let i = 0; i < 5; i++) {}","C.while (i++) {}","D.while (i < 5; i++) {}"],//18
    ["A.do {} while (i < 5);","B.do (i < 5) {} while;","C.do (i < 5); {} while;","D.do while (i < 5) {};"],//19
    ["A.Vòng lặp for","B.Vòng lặp while","C.Vòng lặp do...while","D.Tất cả đều thực thi ít nhất một lần"],//20
    ["A.invoke()","B. call()","C. run()","D. Đều đúng"],//21
    ["A.Sự sẵn có của biến trong toàn bộ chương trình","B.Sự sẵn có của biến chỉ trong phạm vi của hàm đó","C. Sự sẵn có của biến trong phạm vi của khối mã chứa hàm đó","D.Sự sẵn có của biến chỉ trong phạm vi của đối tượng gọi hàm"],//22
    ["A.Hàm gọi lại (callback function)","B. Hàm nặc danh (anonymous function)","C.Hàm bất đồng bộ (asynchronous function)","D.Hàm gán (function assignment)"],//23
    ["A.Hàm con (child function)","B.Hàm mẹ (parent function)","C.Hàm lồng nhau (nested function)","D.Hàm đệ quy (recursive function)"],//24
    ["A.Đối tượng mà hàm được gọi từ đó","B.Đối tượng được truyền vào hàm như một đối số","C.Đối tượng cha của hàm","D.Đối tượng mặc định của hàm"],//25
    ["A.array.add(element)","B.array.append(element)","C.array.push(element)","D.array.insert(element)"],//26
    ["A.array.remove(index)","B. array.delete(index)","C.array.splice(index, 1)","D.array.pop(index)"],//27
    ["A.array.contains(value)","B. array.exists(value)","C.array.includes(value)","D.array.check(value)"],//28
    ["A.array.copy()","B.array.slice()","C.array.extract()","D.array.clone()"],//29
    ["A.array.sortAscending()","B. array.sort()","C.array.orderByAscending()","D. array.sortByAscending()"],//30

];

let CorrectAnswers = [
    0,//1
    0,//2
    1,//3
    2,//4
    3,//5
    3,//6
    3,//7
    1,//8
    3,//9
    2,//10  
    1,//11  
    1,//12
    1,//13
    0,//14
    1,//15
    0,//16
    1,//17
    0,//18
    0,//19
    2,//20
    3,//21
    1,//22
    0,//23
    2,//24
    0,//25
    2,//26
    2,//27
    2,//28
    1,//29
    1,//30

    ];

let timeCount;
let message;
let timeID;

let cauhoihientai = 0;
let diem = 0;

function showQuestions() {
  timeCount = 130;
  document.getElementById('question').innerHTML = Questions[cauhoihientai];
  showAnswers();
}

function reload() {
  location.reload();
}

function Showdiem() {
  document.getElementById('result').innerHTML = "Điểm Của bạn" + " " + diem;
}

function showAnswers() {
  let Options = Answers[cauhoihientai];
  document.getElementById('answer_1').innerHTML = Options[0];
  document.getElementById('answer_2').innerHTML = Options[1];
  document.getElementById('answer_3').innerHTML = Options[2];
  document.getElementById('answer_4').innerHTML = Options[3];
}

function checkAnswer(traloi) {
  if (traloi == CorrectAnswers[cauhoihientai]) {
    diem++;
    Showdiem();
    if (cauhoihientai == Questions.length - 1) {
      alert('YOU WIN');
    } else {
      cauhoihientai++;
      document.getElementById('question').innerHTML = Questions[cauhoihientai];
      showAnswers();
    }
  } else {
    alert('GAME OVER');
    reload();
  }
}

function countdown() {
  let styles = document.getElementById('styleTime');
  let styleTime = document.getElementById('timeCountDown');
  if (timeCount < 0) {
    clearInterval(timeID);
    message = window.alert('Time Out!');
  }
  if (timeCount < 5) {
    styles.style.color = 'red';
    styleTime.style.color = 'red';
  }
}

function startCountdown() {
  timeCount = 600;
  timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + " giây";
    timeCount--;
    countdown();
  }, 1000);
}

showQuestions();
startCountdown();