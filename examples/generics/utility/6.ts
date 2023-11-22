// Record<K, T>
// Record<K, T> — це утилітний тип, що дозволяє створювати типи із заздалегідь відомими властивостями. Це дуже корисно,
// коли вам потрібно створити об'єкт із певними ключами та значеннями, типи яких ви заздалегідь знаєте.
// Принцип роботи Record наступний: ви вказуєте набір ключів K і тип T, який буде присвоєно кожному з цих ключів. 
// Ось базовий приклад використання Record:
type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: 'Понеділок',
  Tue: 'Вівторок',
  Wed: 'Середа',
  Thu: 'Четверг',
  Fri: "П'ятниця",
  Sat: 'Субота',
  Sun: 'Неділя',
};

export {};
// У цьому прикладі DayTranslations — це тип об'єкта, ключами якого є значення типу Day, а значеннями – рядки.
// Отже, ви отримуєте суворо типізований об'єкт перекладу, який гарантує, що кожен день тижня буде перекладено.