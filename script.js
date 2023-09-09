


const todayTag = document.getElementById('today');
const timeUtc = document.getElementById('utc');

const updateTime = () => {
  const date = new Date();
  todayTag.textContent = formatDate(date);
  
};

const formatDate = (date) => {
  const options = {
    weekday: 'long', // Display the full day of the week
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };
  return date.toLocaleDateString('en-US', options);
};

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 1000);
});




