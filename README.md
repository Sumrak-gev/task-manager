# Task Manager (Flask + SQLite + Docker)

Веб-приложение для управления задачами: REST API на Flask, хранение в SQLite, простой фронтенд на HTML/JS.

## Затрагиваемые темы
- Разработка интерфейсов — HTML/CSS/JS фронтенд
- Серверная разработка — Flask REST API (GET/POST/PATCH/DELETE)
- Базы данных — SQLite
- Сетевые технологии — контейнеризация через Docker

## Запуск локально

1. Склонировать репозиторий и перейти в папку:
   ```bash
   git clone git@github.com:Sumrak-gev/task-manager.git
   cd task-manager
   ```

2. Создать виртуальное окружение (если ещё не создано) и активировать его:
   ```bash
   python -m venv .venv
   # Windows:
   .venv\Scripts\activate
   # Linux/macOS:
   source .venv/bin/activate
   ```
   В PyCharm вместо этого можно просто открыть встроенный терминал (View → Tool Windows → Terminal) — он активирует venv проекта автоматически.

3. Установить зависимости **именно в это окружение**:
   ```bash
   pip install -r requirements.txt
   ```
   Если при запуске видишь `ModuleNotFoundError: No module named 'flask'` — значит команда выше была выполнена не в том интерпретаторе. Проверь: Settings → Project → Python Interpreter, выбран ли `.venv` из папки проекта.

4. Запустить сервер:
   ```bash
   python app.py
   ```

5. Открыть в браузере: **http://127.0.0.1:5000**

Сообщения вида `WARNING: This is a development server` и `Debugger PIN` — нормальный вывод Flask, не ошибка.

## Запуск в Docker
```bash
docker build -t task-manager .
docker run -p 5000:5000 task-manager
```

## Деплой
Проект настроен под хостинг на [Render.com](https://render.com) (через Dockerfile, бесплатный тариф). Порт берётся из переменной окружения `PORT`, что требуется для большинства облачных платформ.

## API
| Метод  | Путь              | Описание           |
|--------|-------------------|---------------------|
| GET    | /api/tasks        | список задач        |
| POST   | /api/tasks        | создать задачу       |
| PATCH  | /api/tasks/{id}   | отметить выполненной |
| DELETE | /api/tasks/{id}   | удалить задачу       |
