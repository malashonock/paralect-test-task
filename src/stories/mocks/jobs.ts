import { Currency, Job } from 'data/model';

export const job: Job = {
  id: 100500,
  profession: 'Менеджер-дизайнер',
  payment_from: 70000,
  currency: Currency.RUB,
  type_of_work: {
    id: 6,
    title: 'полный рабочий день'
  },
  town: {
    title: 'Новый Уренгой',
  },
  vacancyRichText: '<p>Обязанности:</p><ul><li>Разработка и сопровождение веб-проектов.</li></ul><p>Требования:</p><ul><li>Высшее образование;</li><li>Знание английского языка;</li><li>Знание HTML, PHP, CSS, JavaScript, MySQL, PostgreSQL, NodeJS, WebPack, Babel, Gulp, Git, React, Vue, Redis;</li><li>Знания в области ГИС - протоколы, форматы (GeoTIFF, GeoJSON etc).</li></ul><p>Условия:</p><ul><li>Полная занятость.</li></ul>'
};