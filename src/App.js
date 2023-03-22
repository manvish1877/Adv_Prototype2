import "./styles.css";

export default function App() {
  // Step 1: Generate an array of 101 items
  const arr = new Array(101).fill(null);

  // Step 2: Map empty items to their index and filter out odd numbers
  const filteredArr = arr.map((_, i) => i).filter((num) => num % 2 === 0);

  // Step 3: Generate an array of date objects that go back every other day for the past 101 days
  const today = new Date().getTime();
  const dateArr = filteredArr
    .map((num) => today - num * 86400000)
    .map((time) => new Date(time));

  // Step 4: Create a new array called 'randomValues' whose properties include the date from the original array and a property called 'val' whose value is a random number between the values 0 and 50.
  const randomValues = dateArr.map((date) => ({
    date,
    val: Math.floor(Math.random() * 51)
  }));

  // Step 5: Create a series of dots
  const dotSize = 10;
  const dotMargin = 3;
  const dotColor = "blue";
  const middleY = window.innerHeight / 2;

  randomValues.forEach((value, i) => {
    const dot = document.createElement("div");
    const x = i * (dotSize + 2 * dotMargin) + dotMargin;
    const y = middleY - value.val;

    dot.style.width = dotSize + "px";
    dot.style.height = dotSize + "px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = dotColor;
    dot.style.position = "absolute";
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    document.body.appendChild(dot);
  });
}
