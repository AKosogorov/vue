# Dashboard

## Чтобы развернуть приложение, установите пакеты через npm командой:
```
npm install
```

### Собрать приложение для разработки
```
npm run serve
```

### Собрать продакшен версию приложения
```
npm run build
```

## Описание задания 

### Сделать страницу редактируемого dashboard.

### Средства разработки
- HTML5/CSS3
- Vue
### Техническое описание приложения
- Приложение состоит из 2 страниц
- По умолчанию пользователь видит 2 карточки с названиями.
- Карточки на странице располагаются в 4 столбца
- Карточка состоит из 2 частей: название и описание
- В верхней части страницы нужно расположить кнопку "Добавить". После нажатия на него
  открывается новая страница в ней расположена форма из 2 полей: Название (text input),
  Описание (Textarea). И две кнопки Добавить и Отмена. При нажатии Отмена возвращаемся на
  первую страницу, при нажатии на кнопку аналогично возвращаемся на первую страницу, но там
  должна появится новая карточка с соответствующими названием и описанием. При создании
  карточки предусмотреть валидацию.
- С помощью Click&drag(drag&drop) на первой странице должна быть возможность менять местами
  карточки
- Все изменения должны сохранятся после обновления страницы
  без взаимодействия с сервером
- В верхней части страницы рядом с кнопкой Добавить нужно расположить switch или чекбокс
  отключающий возможность click&drag
- Высота всех карточек должна быть одинаковой, текст внутри карточки не должен выходить за
  границы карточки

### Дополнительно
- Приветствуется возможность просмотра данных карточки (модальным окном или на усмотрение
разработчика)
