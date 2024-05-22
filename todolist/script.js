// script.js
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('inputTodo');
    const addButton = document.getElementById('bt-add');
    const todoList = document.getElementById('todoList');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const priorityButtons = document.querySelectorAll('.priority-btn');
    
    let selectedPriority = '보통'; // 기본 우선순위
    
    // 우선순위 버튼 클릭 이벤트
    priorityButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedPriority = button.textContent;
            priorityButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // 할 일 추가 버튼 클릭 이벤트
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTodo();
    });

    // 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.id.split('-')[1];
            filterTodos(filter);
        });
    });

    // 할 일 추가 함수
    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');

            const textSpan = document.createElement('span');
            textSpan.textContent = `${todoText} [${selectedPriority}]`;
            textSpan.classList.add('todo-text');

            checkbox.addEventListener('change', () => {
                li.classList.toggle('completed');
            });

            li.appendChild(checkbox);
            li.appendChild(textSpan);

            const editButton = document.createElement('button');
            editButton.textContent = '수정';
            editButton.addEventListener('click', () => {
                const newText = prompt('수정할 내용을 입력하세요:', todoText);
                if (newText) {
                    textSpan.textContent = `${newText} [${selectedPriority}]`;
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    }

    // 할 일 필터링 함수
    function filterTodos(filter) {
        const todos = todoList.children;
        for (let todo of todos) {
            switch (filter) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'complete':
                    todo.querySelector('.checkbox').checked ? todo.style.display = 'flex' : todo.style.display = 'none';
                    break;
                case 'incomplete':
                    todo.querySelector('.checkbox').checked ? todo.style.display = 'none' : todo.style.display = 'flex';
                    break;
            }
        }
    }
});
