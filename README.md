<h1>GraphReact</h1>
<h3>Тестовое задание для позиции Frontend developer/Javascript developer</h3>

<h3>Приложение предоставляет API состоящее из трех пуктов:</h3>
<ol>
    <li><strong>/api/items – получения списка текстовых значений</strong></li>
    <li><strong>/api/addItem – добавление текстовых значений в список возвращаемый пунктом выше</strong></li>
    <li><strong>/api/chart – возвращает список из 10 элементов для построения графиков, структура каждого элемента { X: value[random 0-100], Y: value(0-10) }</strong></li>
</ol>
<p>Кандидату необходимо реализовать 3-ех колоночную адаптивную Web-страницу на которой разместить две диаграммы и список.</p>
<p>Диаграммы должны быть построены на основе библиотеки highcharts, используя данные возвращаемые (/api/chart)/. Тип диаграмм выбрать на свое усмотрение.</p>
<p>Список должен отображать возвращаемое (/api/getItems).Будет плюсом реализовать навигацию между страницами используя SPA подход.</p>
<h3>Страница 1</h3>
Также должна быть кнопка «Добавить» по нажатию на которую, необходимо перейти на форму добавления элементов списка Форма добавления элемента в список
<h3>Пожелания</h3>

            <p>Задание необходимо выполнить используя весь имеющийся в арсенале масив подходов и технологий :)</p>
                <p>Используйте bower.</p>
                    <p>Используйте Angular или подобный фреймворк.</p>
                        <p>Настройте сборку проекта посредством grunt/gulp.</p>

<h3>Детали реализации:</h3>

<ol>
  <li><strong>По указанному выше т/з было реализовано SPA с использованием React(Redux), ES6, Babel, NodeJs(Express)
      и библиотеки highcharts.</strong><br></li>
    <li><strong>От 3-ех колоночного макета было принято решение отказаться, т.к. реализован постраничный роутинг;</strong></li>
    <li><strong>Страница адаптивна(так же корректно отображается на моб. разрешенях);</strong></li>
    <li><strong> В качестве сборщика проекта использовался Webpack;</strong></li>
    <li><strong>Все пункты т/з были реализованы.</strong></li>
</ol>

<h3>Деплой на винде:</h3>
<ol>
  <li><strong>Устанавливаем NodeJs >=6.0.0 (на предыдущих версиях не проверялось но также должно работать)</strong></li>
  <li><strong>Скопировать репозиторий</strong></li>
  <li><strong>npm i</strong><br></li>
  <li><strong>npm start для dev запуска (localhost 3333)</strong><br></li>
  <li><strong>npm run build для продакшина</strong><br></li>
</ol>

