
const reminders = [
    " Indeed prayer prohibit immorality and wrongdoing. (Q 29:45)" ,
    " The Prophet SAW said: 'The best of you are those who learn the Qura'n and teach it.' (Bukhaari)" ,
    " The Prophet SAW said: 'Smilling at your brother is charity.' (Tirmidhi) " ,
    " And whoever relies upon Allah, then He is sufficientfor him. (Qur'an 65:3)" ,
    " So remember Me; I will remember you, And be grateful to Me anddo not deny Me. (Q2 vs 152)"
];


function showReminder() {
    const randomIndex = Math.floor(Math.random () * 
reminders.length);
    document.getElementById("reminderOutput").textContent =
reminders[randomIndex];
}

document.getElementById("getReminderButton").addEventListener
("click", showReminder);