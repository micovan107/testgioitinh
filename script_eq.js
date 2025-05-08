// Dữ liệu câu hỏi EQ
const eqQuestions = [
    {
        question: "Khi một người bạn đang buồn, bạn thường:",
        options: [
            { text: "Cố gắng làm họ vui lên ngay lập tức", score: 1 },
            { text: "Lắng nghe và để họ chia sẻ cảm xúc", score: 3 },
            { text: "Cho họ lời khuyên để giải quyết vấn đề", score: 2 },
            { text: "Cho họ không gian riêng tư", score: 1 }
        ]
    },
    {
        question: "Khi bạn cảm thấy tức giận, bạn thường:",
        options: [
            { text: "Bộc lộ cảm xúc ngay lập tức", score: 1 },
            { text: "Cố gắng bình tĩnh và suy nghĩ trước khi phản ứng", score: 3 },
            { text: "Giữ im lặng và tránh đối đầu", score: 1 },
            { text: "Tìm cách giải tỏa cảm xúc một cách lành mạnh", score: 2 }
        ]
    },
    {
        question: "Trong một cuộc tranh luận, bạn thường:",
        options: [
            { text: "Cố gắng thắng bằng mọi giá", score: 0 },
            { text: "Lắng nghe quan điểm của người khác", score: 3 },
            { text: "Tìm kiếm giải pháp thỏa hiệp", score: 2 },
            { text: "Tránh tranh luận nếu có thể", score: 1 }
        ]
    },
    {
        question: "Khi gặp thất bại, bạn thường:",
        options: [
            { text: "Tự trách bản thân và cảm thấy tồi tệ", score: 1 },
            { text: "Phân tích nguyên nhân và rút kinh nghiệm", score: 3 },
            { text: "Đổ lỗi cho hoàn cảnh hoặc người khác", score: 0 },
            { text: "Cố gắng quên đi và tiếp tục", score: 2 }
        ]
    },
    {
        question: "Khi một người đồng nghiệp được khen ngợi, bạn cảm thấy:",
        options: [
            { text: "Vui mừng và chúc mừng họ", score: 3 },
            { text: "So sánh bản thân với họ", score: 1 },
            { text: "Thờ ơ, không quan tâm lắm", score: 0 },
            { text: "Tự hỏi tại sao bạn không được khen", score: 0 }
        ]
    },
    {
        question: "Khi phải đưa ra quyết định quan trọng, bạn:",
        options: [
            { text: "Dựa vào trực giác và cảm nhận", score: 2 },
            { text: "Cân nhắc cả lý trí và cảm xúc", score: 3 },
            { text: "Chỉ dựa vào sự phân tích logic", score: 1 },
            { text: "Thường trì hoãn quyết định", score: 0 }
        ]
    },
    {
        question: "Khi thấy một người lạ gặp khó khăn, bạn thường:",
        options: [
            { text: "Chủ động giúp đỡ họ", score: 3 },
            { text: "Chỉ giúp nếu họ yêu cầu", score: 2 },
            { text: "Cảm thấy tiếc cho họ nhưng không hành động", score: 1 },
            { text: "Cho rằng đó không phải việc của bạn", score: 0 }
        ]
    },
    {
        question: "Trong các mối quan hệ, bạn thường:",
        options: [
            { text: "Dễ dàng hiểu cảm xúc của người khác", score: 3 },
            { text: "Cố gắng hiểu nhưng đôi khi khó khăn", score: 2 },
            { text: "Tập trung vào hành động hơn là cảm xúc", score: 1 },
            { text: "Thấy khó hiểu tại sao người khác phản ứng như vậy", score: 0 }
        ]
    },
    {
        question: "Khi bạn cảm thấy căng thẳng, bạn thường:",
        options: [
            { text: "Nhận biết và tìm cách giải tỏa hiệu quả", score: 3 },
            { text: "Cố gắng bình tĩnh nhưng đôi khi khó kiểm soát", score: 2 },
            { text: "Để cảm xúc tiêu cực ảnh hưởng đến bạn", score: 1 },
            { text: "Phớt lờ cảm giác căng thẳng", score: 0 }
        ]
    },
    {
        question: "Khi làm việc trong nhóm, bạn thường:",
        options: [
            { text: "Nhận biết và điều chỉnh theo không khí nhóm", score: 3 },
            { text: "Tập trung vào hoàn thành công việc", score: 2 },
            { text: "Thích làm việc độc lập hơn", score: 1 },
            { text: "Cảm thấy khó khăn khi phải hợp tác", score: 0 }
        ]
    },
    {
        question: "Khi ai đó chia sẻ thành công với bạn, bạn thường:",
        options: [
            { text: "Thực sự vui mừng cho họ", score: 3 },
            { text: "Chúc mừng họ một cách lịch sự", score: 2 },
            { text: "Cảm thấy ghen tị nhưng không thể hiện", score: 1 },
            { text: "So sánh với thành công của bản thân", score: 0 }
        ]
    },
    {
        question: "Khi gặp xung đột với người khác, bạn thường:",
        options: [
            { text: "Cố gắng hiểu quan điểm của họ", score: 3 },
            { text: "Tìm cách thỏa hiệp", score: 2 },
            { text: "Bảo vệ quan điểm của mình", score: 1 },
            { text: "Tránh xung đột bằng mọi giá", score: 1 }
        ]
    },
    {
        question: "Khi một người bạn gặp thành công, bạn cảm thấy:",
        options: [
            { text: "Thực sự hạnh phúc và tự hào về họ", score: 3 },
            { text: "Vui vẻ nhưng hơi ghen tị", score: 1 },
            { text: "So sánh với thành tích của bản thân", score: 0 },
            { text: "Chúc mừng họ nhưng không cảm thấy gì đặc biệt", score: 2 }
        ]
    },
    {
        question: "Khi phải đối mặt với thay đổi lớn, bạn thường:",
        options: [
            { text: "Thích nghi nhanh chóng và tìm mặt tích cực", score: 3 },
            { text: "Cần thời gian nhưng cuối cùng thích nghi được", score: 2 },
            { text: "Cảm thấy lo lắng và khó chấp nhận", score: 1 },
            { text: "Chống lại sự thay đổi", score: 0 }
        ]
    },
    {
        question: "Khi nhận được phản hồi tiêu cực, bạn thường:",
        options: [
            { text: "Xem như cơ hội để cải thiện", score: 3 },
            { text: "Lắng nghe nhưng cảm thấy buồn", score: 2 },
            { text: "Phòng thủ và biện minh", score: 1 },
            { text: "Cảm thấy tổn thương và giận dữ", score: 0 }
        ]
    }
];

// Biến toàn cục
let currentEQQuestion = 0;
let userEQAnswers = [];
let totalEQScore = 0;

// Các phần tử DOM
const startEQBtn = document.getElementById('start-eq-btn');
const prevEQBtn = document.getElementById('prev-eq-btn');
const nextEQBtn = document.getElementById('next-eq-btn');
const introEQSection = document.getElementById('intro-eq-section');
const quizEQSection = document.getElementById('quiz-eq-section');
const resultsEQSection = document.getElementById('results-eq-section');
const questionEQContainer = document.getElementById('question-eq-container');
const progressEQBar = document.getElementById('progress-eq');
const restartEQBtn = document.getElementById('restart-eq-btn');
const resultEQTitle = document.getElementById('result-eq-title');
const resultEQDescription = document.getElementById('result-eq-description');
const backToMenuEQBtn = document.getElementById('back-to-menu-eq-btn');

// Khởi tạo ứng dụng
function initEQ() {
    // Thêm sự kiện cho các nút
    startEQBtn.addEventListener('click', startEQQuiz);
    prevEQBtn.addEventListener('click', showPreviousEQQuestion);
    nextEQBtn.addEventListener('click', handleNextEQButton);
    restartEQBtn.addEventListener('click', restartEQQuiz);
    backToMenuEQBtn.addEventListener('click', backToMenu);
    
    // Ẩn nút quay lại ở câu hỏi đầu tiên
    prevEQBtn.style.visibility = 'hidden';
    
    // Tạo các câu hỏi
    createEQQuestions();
}

// Tạo các câu hỏi
function createEQQuestions() {
    eqQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `question-eq-${index}`;
        
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
            
            optionDiv.addEventListener('click', selectEQOption);
            
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsDiv);
        questionEQContainer.appendChild(questionDiv);
    });
}

// Bắt đầu bài kiểm tra
function startEQQuiz() {
    introEQSection.classList.remove('active');
    quizEQSection.classList.add('active');
    showEQQuestion(0);
}

// Hiển thị câu hỏi theo chỉ số
function showEQQuestion(index) {
    // Ẩn tất cả câu hỏi
    document.querySelectorAll('#question-eq-container .question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Hiển thị câu hỏi hiện tại
    document.getElementById(`question-eq-${index}`).classList.add('active');
    
    // Cập nhật thanh tiến trình
    const progress = ((index + 1) / eqQuestions.length) * 100;
    progressEQBar.style.width = `${progress}%`;
    
    // Cập nhật trạng thái nút
    prevEQBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextEQBtn.textContent = index === eqQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp';
    
    // Cập nhật câu hỏi hiện tại
    currentEQQuestion = index;
    
    // Khôi phục lựa chọn của người dùng (nếu có)
    if (userEQAnswers[index] !== undefined) {
        const options = document.querySelectorAll(`#question-eq-${index} .option`);
        options.forEach(option => {
            option.classList.remove('selected');
        });
        options[userEQAnswers[index]].classList.add('selected');
    }
}

// Xử lý khi người dùng chọn một lựa chọn
function selectEQOption(e) {
    const questionIndex = parseInt(e.target.dataset.questionIndex);
    const optionIndex = parseInt(e.target.dataset.optionIndex);
    
    // Xóa lựa chọn trước đó
    const options = document.querySelectorAll(`#question-eq-${questionIndex} .option`);
    options.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Đánh dấu lựa chọn hiện tại
    e.target.classList.add('selected');
    
    // Lưu lựa chọn của người dùng
    userEQAnswers[questionIndex] = optionIndex;
}

// Hiển thị câu hỏi trước đó
function showPreviousEQQuestion() {
    if (currentEQQuestion > 0) {
        showEQQuestion(currentEQQuestion - 1);
    }
}

// Xử lý nút tiếp theo
function handleNextEQButton() {
    // Kiểm tra xem người dùng đã chọn câu trả lời chưa
    if (userEQAnswers[currentEQQuestion] === undefined) {
        alert('Vui lòng chọn một câu trả lời trước khi tiếp tục!');
        return;
    }
    
    if (currentEQQuestion < eqQuestions.length - 1) {
        showEQQuestion(currentEQQuestion + 1);
    } else {
        calculateEQResults();
    }
}

// Tính toán kết quả
function calculateEQResults() {
    // Reset điểm số
    totalEQScore = 0;
    
    // Tính tổng điểm
    userEQAnswers.forEach((answer, index) => {
        const selectedOption = eqQuestions[index].options[answer];
        totalEQScore += selectedOption.score;
    });
    
    // Hiển thị kết quả
    showEQResults();
}

// Hiển thị kết quả
function showEQResults() {
    quizEQSection.classList.remove('active');
    resultsEQSection.classList.add('active');
    
    // Tính điểm trung bình và phần trăm
    const maxPossibleScore = eqQuestions.length * 3; // Mỗi câu hỏi có thể đạt tối đa 3 điểm
    const eqPercent = Math.round((totalEQScore / maxPossibleScore) * 100);
    
    // Hiển thị tiêu đề kết quả
    if (eqPercent >= 85) {
        resultEQTitle.textContent = "Chỉ số EQ rất cao";
        resultEQDescription.textContent = "Bạn có khả năng nhận biết, hiểu và quản lý cảm xúc của bản thân và người khác rất tốt. Bạn thường thể hiện sự đồng cảm cao, có kỹ năng giao tiếp tốt và dễ dàng xây dựng các mối quan hệ lành mạnh.";
    } else if (eqPercent >= 70) {
        resultEQTitle.textContent = "Chỉ số EQ cao";
        resultEQDescription.textContent = "Bạn có khả năng hiểu và quản lý cảm xúc tốt. Bạn thường nhận thức được cảm xúc của người khác và có thể điều chỉnh hành vi của mình phù hợp với tình huống xã hội.";
    } else if (eqPercent >= 50) {
        resultEQTitle.textContent = "Chỉ số EQ trung bình";
        resultEQDescription.textContent = "Bạn có khả năng nhận biết và quản lý cảm xúc ở mức trung bình. Đôi khi bạn có thể gặp khó khăn trong việc hiểu hoặc đáp ứng cảm xúc của người khác, nhưng nhìn chung bạn có thể xử lý các tình huống xã hội thông thường.";
    } else if (eqPercent >= 30) {
        resultEQTitle.textContent = "Chỉ số EQ thấp";
        resultEQDescription.textContent = "Bạn có thể gặp khó khăn trong việc nhận biết hoặc quản lý cảm xúc. Việc hiểu cảm xúc của người khác đôi khi là thách thức đối với bạn. Phát triển kỹ năng lắng nghe và đồng cảm có thể giúp bạn cải thiện chỉ số EQ.";
    } else {
        resultEQTitle.textContent = "Chỉ số EQ rất thấp";
        resultEQDescription.textContent = "Bạn thường xuyên gặp khó khăn trong việc nhận biết và quản lý cảm xúc của bản thân và người khác. Việc phát triển kỹ năng nhận thức cảm xúc và đồng cảm sẽ giúp bạn cải thiện đáng kể trong các mối quan hệ và tình huống xã hội.";
    }
    
    // Tạo biểu đồ
    createEQChart(eqPercent);
    
    // Thiết lập nút chia sẻ
    setupEQShareButtons(eqPercent);
}

// Tạo biểu đồ kết quả
function createEQChart(eqPercent) {
    const ctx = document.getElementById('result-eq-chart').getContext('2d');
    
    // Hủy biểu đồ cũ nếu có
    if (window.eqResultChart) {
        window.eqResultChart.destroy();
    }
    
    // Tạo biểu đồ mới
    window.eqResultChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Chỉ số EQ', 'Còn lại'],
            datasets: [{
                data: [eqPercent, 100 - eqPercent],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(200, 200, 200, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(200, 200, 200, 1)'
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
function setupEQShareButtons(eqPercent) {
    const shareText = `Tôi vừa làm bài kiểm tra EQ và kết quả là: ${eqPercent}%. Hãy thử và xem kết quả của bạn!`;
    
    const facebookBtn = document.querySelector('.social-eq-btn.facebook');
    const twitterBtn = document.querySelector('.social-eq-btn.twitter');
    
    facebookBtn.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    });
    
    twitterBtn.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    });
}

// Quay lại menu chính
function backToMenu() {
    resultsEQSection.classList.remove('active');
    document.getElementById('test-selection').classList.add('active');
}

// Làm lại bài kiểm tra
function restartEQQuiz() {
    // Reset các biến
    currentEQQuestion = 0;
    userEQAnswers = [];
    totalEQScore = 0;
    
    // Xóa các lựa chọn đã chọn
    document.querySelectorAll('#question-eq-container .option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Quay lại màn hình giới thiệu
    resultsEQSection.classList.remove('active');
    introEQSection.classList.add('active');
}

// Khởi tạo ứng dụng khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('start-eq-btn')) {
        initEQ();
    } else {
        console.error('Không tìm thấy các phần tử DOM cần thiết cho bài kiểm tra EQ');
    }
});