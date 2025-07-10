import React from 'react';
import { parseISO, differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

function pluralize(number, one, few, many) {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function formatTimeAgo(isoDate) {
  const date = parseISO(isoDate);
  const now = new Date();

  const years = differenceInYears(now, date);
  if (years >= 1) {
    const word = pluralize(years, 'год', 'года', 'лет');
    return `${years} ${word}`;
  }

  const months = differenceInMonths(now, date);
  if (months >= 1) {
    const word = pluralize(months, 'месяц', 'месяца', 'месяцев');
    return `${months} ${word}`;
  }

  const days = differenceInDays(now, date);
  if (days >= 1) {
    const word = pluralize(days, 'день', 'дня', 'дней');
    return `${days} ${word}`;
  }

  return 'менее дня';
}

const CreatedAtAgo = ({ isoDate }) => {
  return <span className="stat__value">{formatTimeAgo(isoDate)}</span>;
};

export default CreatedAtAgo;
