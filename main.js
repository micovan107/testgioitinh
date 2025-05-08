// Quản lý chuyển đổi giữa các bài kiểm tra
document.addEventListener('DOMContentLoaded', function() {
    // Các phần tử DOM
    const testSelection = document.getElementById('test-selection');
    const introSection = document.getElementById('intro-section');
    const introIQSection = document.getElementById('intro-iq-section');
    const introEQSection = document.getElementById('intro-eq-section');
    const resultsSection = document.getElementById('results-section');
    const resultsIQSection = document.getElementById('results-iq-section');
    const resultsEQSection = document.getElementById('results-eq-section');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const backToMenuIQBtn = document.getElementById('back-to-menu-iq-btn');
    const backToMenuEQBtn = document.getElementById('back-to-menu-eq-btn');
    
    // Nút chọn bài kiểm tra
    const selectTestBtns = document.querySelectorAll('.select-test-btn');
    
    // Thêm sự kiện cho các nút chọn bài kiểm tra
    selectTestBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const testType = this.dataset.test;
            
            // Ẩn màn hình chọn bài kiểm tra
            testSelection.classList.remove('active');
            
            // Hiển thị màn hình giới thiệu tương ứng
            if (testType === 'gender') {
                introSection.classList.add('active');
            } else if (testType === 'iq') {
                introIQSection.classList.add('active');
            } else if (testType === 'eq') {
                introEQSection.classList.add('active');
            }
        });
    });
    
    // Thêm sự kiện cho nút quay lại menu từ kết quả bài kiểm tra giới tính
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', function() {
            resultsSection.classList.remove('active');
            testSelection.classList.add('active');
            
            // Reset bài kiểm tra giới tính
            restartQuiz();
        });
    }
    
    // Thêm sự kiện cho nút quay lại menu từ kết quả bài kiểm tra IQ
    if (backToMenuIQBtn) {
        backToMenuIQBtn.addEventListener('click', function() {
            resultsIQSection.classList.remove('active');
            testSelection.classList.add('active');
            
            // Reset bài kiểm tra IQ
            restartIQQuiz();
        });
    }
    
    // Thêm sự kiện cho nút quay lại menu từ kết quả bài kiểm tra EQ
    if (backToMenuEQBtn) {
        backToMenuEQBtn.addEventListener('click', function() {
            resultsEQSection.classList.remove('active');
            testSelection.classList.add('active');
            
            // Reset bài kiểm tra EQ
            restartEQQuiz();
        });
    }
});