// Dữ liệu câu hỏi
const questions = [
    {
        question: "Bạn thích màu sắc nào nhất?",
        options: [
            { text: "Màu hồng hoặc tím", score: { feminine: 2, masculine: 0 } },
            { text: "Màu xanh dương hoặc xanh lá", score: { feminine: 0, masculine: 2 } },
            { text: "Màu đen hoặc trắng", score: { feminine: 1, masculine: 1 } },
            { text: "Màu đỏ hoặc cam", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích hoạt động nào sau đây nhất?",
        options: [
            { text: "Mua sắm và làm đẹp", score: { feminine: 2, masculine: 0 } },
            { text: "Thể thao và các hoạt động ngoài trời", score: { feminine: 0, masculine: 2 } },
            { text: "Đọc sách và xem phim", score: { feminine: 1, masculine: 1 } },
            { text: "Chơi game và công nghệ", score: { feminine: 0, masculine: 2 } }
        ]
    },
    {
        question: "Khi gặp vấn đề, bạn thường:",
        options: [
            { text: "Chia sẻ với bạn bè và tìm kiếm sự đồng cảm", score: { feminine: 2, masculine: 0 } },
            { text: "Tự mình giải quyết và tìm giải pháp", score: { feminine: 0, masculine: 2 } },
            { text: "Phân tích vấn đề một cách logic", score: { feminine: 1, masculine: 1 } },
            { text: "Tìm kiếm lời khuyên từ người có kinh nghiệm", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích phong cách thời trang nào?",
        options: [
            { text: "Thanh lịch và nữ tính", score: { feminine: 2, masculine: 0 } },
            { text: "Đơn giản và thoải mái", score: { feminine: 1, masculine: 1 } },
            { text: "Mạnh mẽ và cá tính", score: { feminine: 0, masculine: 2 } },
            { text: "Theo xu hướng thời trang", score: { feminine: 1, masculine: 0 } }
        ]
    },
    {
        question: "Trong một cuộc trò chuyện, bạn thường:",
        options: [
            { text: "Lắng nghe và thể hiện sự đồng cảm", score: { feminine: 2, masculine: 0 } },
            { text: "Đưa ra lời khuyên và giải pháp", score: { feminine: 0, masculine: 2 } },
            { text: "Chia sẻ câu chuyện và kinh nghiệm cá nhân", score: { feminine: 1, masculine: 0 } },
            { text: "Thảo luận về các chủ đề và ý tưởng", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích loại phim nào nhất?",
        options: [
            { text: "Phim tình cảm, lãng mạn", score: { feminine: 2, masculine: 0 } },
            { text: "Phim hành động, phiêu lưu", score: { feminine: 0, masculine: 2 } },
            { text: "Phim hài hước", score: { feminine: 1, masculine: 1 } },
            { text: "Phim kinh dị, giật gân", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Khi làm việc nhóm, bạn thường:",
        options: [
            { text: "Hỗ trợ và động viên các thành viên", score: { feminine: 2, masculine: 0 } },
            { text: "Đưa ra ý kiến và dẫn dắt nhóm", score: { feminine: 0, masculine: 2 } },
            { text: "Đảm nhận phần việc của mình một cách hiệu quả", score: { feminine: 1, masculine: 1 } },
            { text: "Đóng góp ý tưởng sáng tạo", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích môn thể thao nào nhất?",
        options: [
            { text: "Yoga, aerobic hoặc nhảy múa", score: { feminine: 2, masculine: 0 } },
            { text: "Bóng đá, bóng rổ hoặc võ thuật", score: { feminine: 0, masculine: 2 } },
            { text: "Chạy bộ hoặc đạp xe", score: { feminine: 1, masculine: 1 } },
            { text: "Bơi lội hoặc tennis", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích không gian sống như thế nào?",
        options: [
            { text: "Ấm cúng, nhiều chi tiết trang trí", score: { feminine: 2, masculine: 0 } },
            { text: "Đơn giản, chức năng và gọn gàng", score: { feminine: 0, masculine: 2 } },
            { text: "Hiện đại và thời thượng", score: { feminine: 1, masculine: 1 } },
            { text: "Thoải mái và tiện nghi", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Khi đưa ra quyết định, bạn thường:",
        options: [
            { text: "Dựa vào cảm xúc và trực giác", score: { feminine: 2, masculine: 0 } },
            { text: "Phân tích logic và sự kiện", score: { feminine: 0, masculine: 2 } },
            { text: "Cân nhắc ý kiến của người khác", score: { feminine: 1, masculine: 0 } },
            { text: "Dựa vào kinh nghiệm cá nhân", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích loại âm nhạc nào?",
        options: [
            { text: "Nhạc pop, ballad", score: { feminine: 2, masculine: 0 } },
            { text: "Rock, metal, rap", score: { feminine: 0, masculine: 2 } },
            { text: "Nhạc cổ điển, jazz", score: { feminine: 1, masculine: 1 } },
            { text: "EDM, dance", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích món quà nào nhất?",
        options: [
            { text: "Hoa, nước hoa hoặc đồ trang sức", score: { feminine: 2, masculine: 0 } },
            { text: "Thiết bị công nghệ hoặc dụng cụ thể thao", score: { feminine: 0, masculine: 2 } },
            { text: "Sách hoặc vé xem phim/concert", score: { feminine: 1, masculine: 1 } },
            { text: "Quần áo hoặc phụ kiện thời trang", score: { feminine: 1, masculine: 0 } }
        ]
    },
    {
        question: "Khi rảnh rỗi, bạn thích:",
        options: [
            { text: "Gặp gỡ bạn bè và trò chuyện", score: { feminine: 2, masculine: 0 } },
            { text: "Chơi game hoặc xem thể thao", score: { feminine: 0, masculine: 2 } },
            { text: "Đọc sách hoặc học điều mới", score: { feminine: 1, masculine: 1 } },
            { text: "Tự làm đồ handmade hoặc nấu ăn", score: { feminine: 2, masculine: 0 } }
        ]
    },
    {
        question: "Bạn thích loại sách/truyện nào?",
        options: [
            { text: "Tiểu thuyết lãng mạn hoặc tâm lý", score: { feminine: 2, masculine: 0 } },
            { text: "Truyện phiêu lưu, khoa học viễn tưởng", score: { feminine: 0, masculine: 2 } },
            { text: "Sách phát triển bản thân", score: { feminine: 1, masculine: 1 } },
            { text: "Tiểu sử hoặc lịch sử", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích màu sơn móng tay nào?",
        options: [
            { text: "Hồng, đỏ hoặc các màu pastel", score: { feminine: 2, masculine: 0 } },
            { text: "Không thích sơn móng tay", score: { feminine: 0, masculine: 2 } },
            { text: "Đen, xanh đậm hoặc màu trung tính", score: { feminine: 1, masculine: 1 } },
            { text: "Màu metallic hoặc có họa tiết", score: { feminine: 2, masculine: 0 } }
        ]
    },
    {
        question: "Bạn thích loại xe nào?",
        options: [
            { text: "Xe nhỏ gọn và dễ thương", score: { feminine: 2, masculine: 0 } },
            { text: "Xe thể thao hoặc xe địa hình", score: { feminine: 0, masculine: 2 } },
            { text: "Xe sang trọng và tiện nghi", score: { feminine: 1, masculine: 1 } },
            { text: "Xe tiết kiệm nhiên liệu và thực dụng", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Khi gặp khó khăn, bạn thường:",
        options: [
            { text: "Tìm kiếm sự hỗ trợ từ người thân", score: { feminine: 2, masculine: 0 } },
            { text: "Tự mình vượt qua và không chia sẻ nhiều", score: { feminine: 0, masculine: 2 } },
            { text: "Tìm kiếm lời khuyên từ chuyên gia", score: { feminine: 1, masculine: 1 } },
            { text: "Chia sẻ trên mạng xã hội để được động viên", score: { feminine: 1, masculine: 0 } }
        ]
    },
    {
        question: "Bạn thích loại đồ uống nào?",
        options: [
            { text: "Trà, nước trái cây hoặc cocktail", score: { feminine: 2, masculine: 0 } },
            { text: "Bia, rượu mạnh hoặc đồ uống thể thao", score: { feminine: 0, masculine: 2 } },
            { text: "Cà phê hoặc nước lọc", score: { feminine: 1, masculine: 1 } },
            { text: "Sữa hoặc sinh tố", score: { feminine: 1, masculine: 0 } }
        ]
    },
    {
        question: "Bạn thích loại hình nghệ thuật nào?",
        options: [
            { text: "Hội họa, thủ công mỹ nghệ", score: { feminine: 2, masculine: 0 } },
            { text: "Nhiếp ảnh, điêu khắc", score: { feminine: 0, masculine: 2 } },
            { text: "Âm nhạc, múa", score: { feminine: 1, masculine: 0 } },
            { text: "Phim ảnh, văn học", score: { feminine: 1, masculine: 1 } }
        ]
    },
    {
        question: "Bạn thích loại món ăn nào?",
        options: [
            { text: "Món ngọt, salad hoặc đồ ăn nhẹ", score: { feminine: 2, masculine: 0 } },
            { text: "Thịt nướng, đồ ăn nhanh hoặc món cay", score: { feminine: 0, masculine: 2 } },
            { text: "Hải sản hoặc món Á", score: { feminine: 1, masculine: 1 } },
            { text: "Món truyền thống hoặc đồ ăn chay", score: { feminine: 1, masculine: 0 } }
        ]
    }
];

// Biến toàn cục
let currentQuestion = 0;
let userAnswers = [];
let totalScore = { feminine: 0, masculine: 0 };

// Các phần tử DOM
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const introSection = document.getElementById('intro-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const questionContainer = document.getElementById('question-container');
const progressBar = document.getElementById('progress');
const restartBtn = document.getElementById('restart-btn');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

// Khởi tạo ứng dụng
function init() {
    // Kiểm tra xem các phần tử DOM đã tồn tại chưa
    if (startBtn && prevBtn && nextBtn && introSection && quizSection && 
        resultsSection && questionContainer && progressBar && restartBtn && 
        resultTitle && resultDescription) {
        
        // Thêm sự kiện cho các nút
        startBtn.addEventListener('click', startQuiz);
        prevBtn.addEventListener('click', showPreviousQuestion);
        nextBtn.addEventListener('click', handleNextButton);
        restartBtn.addEventListener('click', restartQuiz);
        
        // Ẩn nút quay lại ở câu hỏi đầu tiên
        prevBtn.style.visibility = 'hidden';
        
        // Tạo các câu hỏi
        createQuestions();
    } else {
        console.error('Không tìm thấy các phần tử DOM cần thiết cho bài kiểm tra giới tính');
    }
}

// Tạo các câu hỏi
function createQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `question-${index}`;
        
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
            
            optionDiv.addEventListener('click', selectOption);
            
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsDiv);
        questionContainer.appendChild(questionDiv);
    });
}

// Bắt đầu bài kiểm tra
function startQuiz() {
    introSection.classList.remove('active');
    quizSection.classList.add('active');
    showQuestion(0);
}

// Hiển thị câu hỏi theo chỉ số
function showQuestion(index) {
    // Ẩn tất cả câu hỏi
    document.querySelectorAll('.question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Hiển thị câu hỏi hiện tại
    document.getElementById(`question-${index}`).classList.add('active');
    
    // Cập nhật thanh tiến trình
    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Cập nhật trạng thái nút
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = index === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp';
    
    // Cập nhật câu hỏi hiện tại
    currentQuestion = index;
    
    // Khôi phục lựa chọn của người dùng (nếu có)
    if (userAnswers[index] !== undefined) {
        const options = document.querySelectorAll(`#question-${index} .option`);
        options.forEach(option => {
            option.classList.remove('selected');
        });
        options[userAnswers[index]].classList.add('selected');
    }
}

// Xử lý khi người dùng chọn một lựa chọn
function selectOption(e) {
    const questionIndex = parseInt(e.target.dataset.questionIndex);
    const optionIndex = parseInt(e.target.dataset.optionIndex);
    
    // Xóa lựa chọn trước đó
    const options = document.querySelectorAll(`#question-${questionIndex} .option`);
    options.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Đánh dấu lựa chọn hiện tại
    e.target.classList.add('selected');
    
    // Lưu lựa chọn của người dùng
    userAnswers[questionIndex] = optionIndex;
}

// Hiển thị câu hỏi trước đó
function showPreviousQuestion() {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}

// Xử lý nút tiếp theo
function handleNextButton() {
    // Kiểm tra xem người dùng đã chọn câu trả lời chưa
    if (userAnswers[currentQuestion] === undefined) {
        alert('Vui lòng chọn một câu trả lời trước khi tiếp tục!');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        calculateResults();
    }
}

// Tính toán kết quả
function calculateResults() {
    // Reset điểm số
    totalScore = { feminine: 0, masculine: 0 };
    
    // Tính tổng điểm
    userAnswers.forEach((answer, index) => {
        const selectedOption = questions[index].options[answer];
        totalScore.feminine += selectedOption.score.feminine;
        totalScore.masculine += selectedOption.score.masculine;
    });
    
    // Hiển thị kết quả
    showResults();
}

// Hiển thị kết quả
function showResults() {
    quizSection.classList.remove('active');
    resultsSection.classList.add('active');
    
    // Tính phần trăm
    const totalPoints = totalScore.feminine + totalScore.masculine;
    const femininePercent = Math.round((totalScore.feminine / totalPoints) * 100);
    const masculinePercent = Math.round((totalScore.masculine / totalPoints) * 100);
    
    // Hiển thị tiêu đề kết quả
    if (femininePercent > 70) {
        resultTitle.textContent = "Bạn có xu hướng nữ tính cao";
        resultDescription.textContent = "Kết quả cho thấy bạn có nhiều đặc điểm và sở thích thường được xem là nữ tính. Bạn có thể là người nhạy cảm, quan tâm đến cảm xúc và thích những hoạt động mang tính thẩm mỹ và chăm sóc.";
    } else if (masculinePercent > 70) {
        resultTitle.textContent = "Bạn có xu hướng nam tính cao";
        resultDescription.textContent = "Kết quả cho thấy bạn có nhiều đặc điểm và sở thích thường được xem là nam tính. Bạn có thể là người thích phiêu lưu, cạnh tranh và giải quyết vấn đề một cách trực tiếp.";
    } else if (femininePercent >= 45 && femininePercent <= 55) {
        resultTitle.textContent = "Bạn có sự cân bằng giữa nam tính và nữ tính";
        resultDescription.textContent = "Kết quả cho thấy bạn có sự cân bằng tốt giữa các đặc điểm nam tính và nữ tính. Bạn có thể linh hoạt trong cách tiếp cận và có nhiều sở thích đa dạng.";
    } else if (femininePercent > 55) {
        resultTitle.textContent = "Bạn có xu hướng nữ tính nhẹ";
        resultDescription.textContent = "Kết quả cho thấy bạn có nhiều đặc điểm nữ tính hơn một chút so với nam tính. Bạn có thể quan tâm đến cảm xúc và các mối quan hệ, nhưng vẫn có những đặc điểm mạnh mẽ và độc lập.";
    } else {
        resultTitle.textContent = "Bạn có xu hướng nam tính nhẹ";
        resultDescription.textContent = "Kết quả cho thấy bạn có nhiều đặc điểm nam tính hơn một chút so với nữ tính. Bạn có thể thích những hoạt động mang tính thách thức và cạnh tranh, nhưng vẫn có sự nhạy cảm và quan tâm đến người khác.";
    }
    
    // Tạo biểu đồ
    createChart(femininePercent, masculinePercent);
    
    // Thiết lập nút chia sẻ
    setupShareButtons(femininePercent, masculinePercent);
}

// Tạo biểu đồ kết quả
function createChart(femininePercent, masculinePercent) {
    const ctx = document.getElementById('result-chart').getContext('2d');
    
    // Hủy biểu đồ cũ nếu có
    if (window.resultChart) {
        window.resultChart.destroy();
    }
    
    // Tạo biểu đồ mới
    window.resultChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Nữ tính', 'Nam tính'],
            datasets: [{
                data: [femininePercent, masculinePercent],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

// Thiết lập nút chia sẻ
function setupShareButtons(femininePercent, masculinePercent) {
    const shareText = `Tôi vừa làm bài kiểm tra độ chuẩn giới tính và kết quả là: ${femininePercent}% nữ tính, ${masculinePercent}% nam tính. Hãy thử và xem kết quả của bạn!`;
    
    const facebookBtn = document.querySelector('.social-btn.facebook');
    const twitterBtn = document.querySelector('.social-btn.twitter');
    
    facebookBtn.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    });
    
    twitterBtn.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    });
}

// Làm lại bài kiểm tra
function restartQuiz() {
    // Reset các biến
    currentQuestion = 0;
    userAnswers = [];
    totalScore = { feminine: 0, masculine: 0 };
    
    // Xóa các lựa chọn đã chọn
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Quay lại màn hình giới thiệu
    resultsSection.classList.remove('active');
    introSection.classList.add('active');
}

// Khởi tạo ứng dụng khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    init();
});