// Dữ liệu câu hỏi IQ
const iqQuestions = [
    {
        question: "Số nào tiếp theo trong dãy: 2, 4, 8, 16, ...",
        options: [
            { text: "24", score: 0 },
            { text: "32", score: 1 },
            { text: "30", score: 0 },
            { text: "20", score: 0 }
        ]
    },
    {
        question: "Nếu 5 + 3 = 28, 9 + 1 = 810, 8 + 6 = 214, thì 7 + 3 = ?",
        options: [
            { text: "410", score: 1 },
            { text: "104", score: 0 },
            { text: "210", score: 0 },
            { text: "310", score: 0 }
        ]
    },
    {
        question: "Tìm từ không cùng nhóm với các từ còn lại:",
        options: [
            { text: "Sông", score: 0 },
            { text: "Hồ", score: 0 },
            { text: "Biển", score: 0 },
            { text: "Núi", score: 1 }
        ]
    },
    {
        question: "Nếu hôm nay là thứ Hai, thì 15 ngày sau là thứ mấy?",
        options: [
            { text: "Thứ Ba", score: 1 },
            { text: "Thứ Tư", score: 0 },
            { text: "Thứ Năm", score: 0 },
            { text: "Thứ Sáu", score: 0 }
        ]
    },
    {
        question: "Tìm số còn thiếu: 1, 4, 9, 16, 25, ?",
        options: [
            { text: "30", score: 0 },
            { text: "36", score: 1 },
            { text: "49", score: 0 },
            { text: "35", score: 0 }
        ]
    },
    {
        question: "Nếu APPLE = 50, BANANA = 64, thì ORANGE = ?",
        options: [
            { text: "63", score: 0 },
            { text: "69", score: 0 },
            { text: "66", score: 1 },
            { text: "60", score: 0 }
        ]
    },
    {
        question: "Tìm hình tiếp theo trong dãy: Hình vuông, Hình tròn, Hình tam giác, Hình vuông, Hình tròn, ?",
        options: [
            { text: "Hình vuông", score: 0 },
            { text: "Hình tròn", score: 0 },
            { text: "Hình tam giác", score: 1 },
            { text: "Hình chữ nhật", score: 0 }
        ]
    },
    {
        question: "Nếu tất cả các Blicks là Blocks và tất cả các Blocks là Blacks, thì tất cả các Blicks là:",
        options: [
            { text: "Blocks", score: 0 },
            { text: "Blacks", score: 1 },
            { text: "Cả hai đáp án trên", score: 0 },
            { text: "Không đáp án nào đúng", score: 0 }
        ]
    },
    {
        question: "Một người đi bộ 5km về hướng Nam, sau đó rẽ phải và đi 3km. Người đó đang ở hướng nào so với điểm xuất phát?",
        options: [
            { text: "Đông Nam", score: 0 },
            { text: "Tây Nam", score: 1 },
            { text: "Nam", score: 0 },
            { text: "Tây", score: 0 }
        ]
    },
    {
        question: "Tìm số còn thiếu: 3, 6, 18, 72, ?",
        options: [
            { text: "144", score: 0 },
            { text: "216", score: 0 },
            { text: "288", score: 1 },
            { text: "360", score: 0 }
        ]
    },
    {
        question: "Nếu bạn sắp xếp các chữ cái 'ARILNB' bạn sẽ có tên của:",
        options: [
            { text: "Một quốc gia", score: 0 },
            { text: "Một loại động vật", score: 1 },
            { text: "Một loại thực vật", score: 0 },
            { text: "Một thành phố", score: 0 }
        ]
    },
    {
        question: "Tìm mối quan hệ: Giày : Chân = Găng tay : ?",
        options: [
            { text: "Cánh tay", score: 0 },
            { text: "Ngón tay", score: 0 },
            { text: "Bàn tay", score: 1 },
            { text: "Khuỷu tay", score: 0 }
        ]
    },
    {
        question: "Nếu 2 người thợ làm xong 2 cái ghế trong 2 giờ, thì 8 người thợ sẽ làm xong 8 cái ghế trong bao lâu?",
        options: [
            { text: "8 giờ", score: 0 },
            { text: "4 giờ", score: 0 },
            { text: "2 giờ", score: 1 },
            { text: "1 giờ", score: 0 }
        ]
    },
    {
        question: "Tìm từ đồng nghĩa với 'Tiết kiệm':",
        options: [
            { text: "Hào phóng", score: 0 },
            { text: "Dè xẻn", score: 0 },
            { text: "Tằn tiện", score: 1 },
            { text: "Phung phí", score: 0 }
        ]
    },
    {
        question: "Nếu ngày mai là thứ Bảy, thì ngày kia sẽ là:",
        options: [
            { text: "Thứ Sáu", score: 0 },
            { text: "Thứ Bảy", score: 0 },
            { text: "Chủ Nhật", score: 1 },
            { text: "Thứ Hai", score: 0 }
        ]
    },
    {
        question: "Tìm số còn thiếu: 2, 6, 12, 20, ?",
        options: [
            { text: "30", score: 1 },
            { text: "28", score: 0 },
            { text: "32", score: 0 },
            { text: "42", score: 0 }
        ]
    }
];

// Biến toàn cục
let currentIQQuestion = 0;
let userIQAnswers = [];
let totalIQScore = 0;

// Các phần tử DOM
const startIQBtn = document.getElementById('start-iq-btn');
const prevIQBtn = document.getElementById('prev-iq-btn');
const nextIQBtn = document.getElementById('next-iq-btn');
const introIQSection = document.getElementById('intro-iq-section');
const quizIQSection = document.getElementById('quiz-iq-section');
const resultsIQSection = document.getElementById('results-iq-section');
const questionIQContainer = document.getElementById('question-iq-container');
const progressIQBar = document.getElementById('progress-iq');
const restartIQBtn = document.getElementById('restart-iq-btn');
const resultIQTitle = document.getElementById('result-iq-title');
const resultIQDescription = document.getElementById('result-iq-description');

// Khởi tạo ứng dụng
function initIQ() {
    // Thêm sự kiện cho các nút
    startIQBtn.addEventListener('click', startIQQuiz);
    prevIQBtn.addEventListener('click', showPreviousIQQuestion);
    nextIQBtn.addEventListener('click', handleNextIQButton);
    restartIQBtn.addEventListener('click', restartIQQuiz);
    
    // Ẩn nút quay lại ở câu hỏi đầu tiên
    prevIQBtn.style.visibility = 'hidden';
    
    // Tạo các câu hỏi
    createIQQuestions();
}

// Tạo các câu hỏi
function createIQQuestions() {
    iqQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `question-iq-${index}`;
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Câu ${index + 1}: ${q.question}`;
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        q.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option.text;
            optionDiv.dataset.questionIndex = index;
            optionDiv.dataset.optionIndex = optionIndex;
            
            optionDiv.addEventListener('click', selectIQOption);
            
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsDiv);
        questionIQContainer.appendChild(questionDiv);
    });
}

// Bắt đầu bài kiểm tra
function startIQQuiz() {
    introIQSection.classList.remove('active');
    quizIQSection.classList.add('active');
    showIQQuestion(0);
}

// Hiển thị câu hỏi theo chỉ số
function showIQQuestion(index) {
    // Ẩn tất cả câu hỏi
    document.querySelectorAll('#question-iq-container .question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Hiển thị câu hỏi hiện tại
    document.getElementById(`question-iq-${index}`).classList.add('active');
    
    // Cập nhật thanh tiến trình
    const progress = ((index + 1) / iqQuestions.length) * 100;
    progressIQBar.style.width = `${progress}%`;
    
    // Cập nhật trạng thái nút
    prevIQBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextIQBtn.textContent = index === iqQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp';
    
    // Cập nhật câu hỏi hiện tại
    currentIQQuestion = index;
    
    // Khôi phục lựa chọn của người dùng (nếu có)
    if (userIQAnswers[index] !== undefined) {
        const options = document.querySelectorAll(`#question-iq-${index} .option`);
        options.forEach(option => {
            option.classList.remove('selected');
        });
        options[userIQAnswers[index]].classList.add('selected');
    }
}

// Xử lý khi người dùng chọn một lựa chọn
function selectIQOption(e) {
    const questionIndex = parseInt(e.target.dataset.questionIndex);
    const optionIndex = parseInt(e.target.dataset.optionIndex);
    
    // Xóa lựa chọn trước đó
    const options = document.querySelectorAll(`#question-iq-${questionIndex} .option`);
    options.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Đánh dấu lựa chọn hiện tại
    e.target.classList.add('selected');
    
    // Lưu lựa chọn của người dùng
    userIQAnswers[questionIndex] = optionIndex;
}

// Hiển thị câu hỏi trước đó
function showPreviousIQQuestion() {
    if (currentIQQuestion > 0) {
        showIQQuestion(currentIQQuestion - 1);
    }
}

// Xử lý nút tiếp theo
function handleNextIQButton() {
    // Kiểm tra xem người dùng đã chọn câu trả lời chưa
    if (userIQAnswers[currentIQQuestion] === undefined) {
        alert('Vui lòng chọn một câu trả lời trước khi tiếp tục!');
        return;
    }
    
    if (currentIQQuestion < iqQuestions.length - 1) {
        showIQQuestion(currentIQQuestion + 1);
    } else {
        calculateIQResults();
    }
}

// Tính toán kết quả
function calculateIQResults() {
    // Reset điểm số
    totalIQScore = 0;
    
    // Tính tổng điểm
    userIQAnswers.forEach((answer, index) => {
        const selectedOption = iqQuestions[index].options[answer];
        totalIQScore += selectedOption.score;
    });
    
    // Hiển thị kết quả
    showIQResults();
}

// Hiển thị kết quả
function showIQResults() {
    quizIQSection.classList.remove('active');
    resultsIQSection.classList.add('active');
    
    // Tính điểm IQ (giả lập)
    const iqScore = 85 + (totalIQScore * 10);
    
    // Hiển thị tiêu đề kết quả
    resultIQTitle.textContent = `Chỉ số IQ của bạn: ${iqScore}`;
    
    // Hiển thị mô tả kết quả
    if (iqScore >= 130) {
        resultIQDescription.textContent = "Bạn có chỉ số IQ rất cao, thuộc nhóm 2% dân số có IQ cao nhất. Bạn có khả năng tư duy logic và giải quyết vấn đề xuất sắc.";
    } else if (iqScore >= 120) {
        resultIQDescription.textContent = "Bạn có chỉ số IQ cao, thuộc nhóm 10% dân số có IQ cao. Bạn có khả năng tư duy tốt và giải quyết các vấn đề phức tạp.";
    } else if (iqScore >= 110) {
        resultIQDescription.textContent = "Bạn có chỉ số IQ khá cao, trên mức trung bình. Bạn có khả năng tư duy logic tốt.";
    } else if (iqScore >= 90) {
        resultIQDescription.textContent = "Bạn có chỉ số IQ ở mức trung bình. Đây là mức IQ của đa số dân số.";
    } else if (iqScore >= 80) {
        resultIQDescription.textContent = "Bạn có chỉ số IQ ở mức trung bình thấp. Bạn có thể cải thiện kỹ năng tư duy logic thông qua các bài tập và trò chơi trí tuệ.";
    } else {
        resultIQDescription.textContent = "Bạn có thể cải thiện chỉ số IQ bằng cách luyện tập các bài tập tư duy, đọc sách và học hỏi thêm.";
    }
    
    // Tạo biểu đồ
    createIQChart(iqScore);
    
    // Thiết lập nút chia sẻ
    setupIQShareButtons(iqScore);
}

// Tạo biểu đồ kết quả
function createIQChart(iqScore) {
    const ctx = document.getElementById('result-iq-chart').getContext('2d');
    
    // Hủy biểu đồ cũ nếu có
    if (window.resultIQChart) {
        window.resultIQChart.destroy();
    }
    
    // Dữ liệu cho biểu đồ
    const labels = ['Rất thấp', 'Thấp', 'Trung bình thấp', 'Trung bình', 'Trung bình cao', 'Cao', 'Rất cao'];
    const data = [0, 0, 0, 0, 0, 0, 0];
    
    // Xác định vị trí của điểm số IQ
    if (iqScore < 70) data[0] = 1;
    else if (iqScore < 85) data[1] = 1;
    else if (iqScore < 100) data[2] = 1;
    else if (iqScore < 115) data[3] = 1;
    else if (iqScore < 130) data[4] = 1;
    else if (iqScore < 145) data[5] = 1;
    else data[6] = 1;
    
    // Tạo biểu đồ mới
    window.resultIQChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Chỉ số IQ của bạn',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Thiết lập nút chia sẻ
function setupIQShareButtons(iqScore) {
    const shareText = `Tôi vừa làm bài kiểm tra IQ và kết quả là: ${iqScore} điểm. Hãy thử và xem kết quả của bạn!`;
    
    const facebookBtn = document.querySelector('.social-iq-btn.facebook');
    const twitterBtn = document.querySelector('.social-iq-btn.twitter');
    
    facebookBtn.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    });
    
    twitterBtn.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    });
}

// Làm lại bài kiểm tra
function restartIQQuiz() {
    // Reset các biến
    currentIQQuestion = 0;
    userIQAnswers = [];
    totalIQScore = 0;
    
    // Xóa các lựa chọn đã chọn
    document.querySelectorAll('#question-iq-container .option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Quay lại màn hình giới thiệu
    resultsIQSection.classList.remove('active');
    introIQSection.classList.add('active');
}

// Khởi tạo ứng dụng khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem các phần tử DOM đã tồn tại chưa
    if (startIQBtn && prevIQBtn && nextIQBtn && introIQSection && quizIQSection && 
        resultsIQSection && questionIQContainer && progressIQBar && restartIQBtn && 
        resultIQTitle && resultIQDescription) {
        initIQ();
    } else {
        console.error('Không tìm thấy các phần tử DOM cần thiết cho bài kiểm tra IQ');
    }
});