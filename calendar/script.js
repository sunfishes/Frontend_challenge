document.addEventListener('DOMContentLoaded', () => {
    const currentMonthElement = document.getElementById('current-month');
    const daysContainer = document.querySelector('.days');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const memoContainer = document.querySelector('.memo-container');
    const memoDateElement = document.getElementById('memo-date');
    const memoText = document.getElementById('memo-text');
    const saveMemoButton = document.getElementById('save-memo');
    const closeMemoButton = document.getElementById('close-memo');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let selectedDate = null;
    const memos = {};

    function renderCalendar() {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const daysInMonth = lastDayOfMonth.getDate();

        currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;
        daysContainer.innerHTML = '';

        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDiv = document.createElement('div');
            daysContainer.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.addEventListener('click', () => selectDate(i));
            if (memos[`${currentYear}-${currentMonth}-${i}`]) {
                dayDiv.classList.add('memo');
            }
            daysContainer.appendChild(dayDiv);
        }
    }

    function selectDate(day) {
        selectedDate = new Date(currentYear, currentMonth, day);
        memoDateElement.textContent = `${currentYear}년 ${currentMonth + 1}월 ${day}일`;
        memoText.value = memos[`${currentYear}-${currentMonth}-${day}`] || '';
        memoContainer.style.display = 'block';
    }

    function saveMemo() {
        if (selectedDate) {
            const memoKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
            memos[memoKey] = memoText.value;
            memoContainer.style.display = 'none';
            renderCalendar();
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    saveMemoButton.addEventListener('click', saveMemo);
    closeMemoButton.addEventListener('click', () => {
        memoContainer.style.display = 'none';
    });

    renderCalendar();
});
