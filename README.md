# Task Manager (Flask + SQLite + Docker)

Веб-приложение для управления задачами: REST API на Flask, хранение в SQLite, простой фронтенд на HTML/JS.

## Затрагиваемые темы
- Разработка интерфейсов — HTML/CSS/JS фронтенд
- Серверная разработка — Flask REST API (GET/POST/PATCH/DELETE)
- Базы данных — SQLite
- Сетевые технологии — контейнеризация через Docker

## Запуск локально
```bash
pip install -r requirements.txt
python app.py
```
Открыть http://localhost:5000

## Запуск в Docker
```bash
docker build -t task-manager .
docker run -p 5000:5000 task-manager
```

## API
| Метод  | Путь              | Описание           |
|--------|-------------------|---------------------|
| GET    | /api/tasks        | список задач        |
| POST   | /api/tasks        | создать задачу       |
| PATCH  | /api/tasks/{id}   | отметить выполненной |
| DELETE | /api/tasks/{id}   | удалить задачу       |
