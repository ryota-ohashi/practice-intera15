export default function digitalClock() {
  const now = new Date();

  let hours: string | number = now.getHours();
  let minutes: string | number = now.getMinutes();
  let seconds: string | number = now.getSeconds();
  const year: number = now.getFullYear();
  const month: number = now.getMonth() + 1;
  const day: number = now.getDate();

  let daysName: string[] = ["Sun", "Mon", "Tue", "Wed ", "Thu", "Fri", "Sat"];
  let dayOfWeek: string = daysName[now.getDay()];

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  (document.getElementById("time") as HTMLElement).innerText = `${hours}:${minutes}:${seconds}`;

  (document.getElementById("date") as HTMLElement).innerText = `${year}/${month}/${day} ${dayOfWeek}`;

  setTimeout(digitalClock, 1000);
}
