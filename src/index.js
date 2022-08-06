import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let pairs = 0;
  if (n > ar.length) return null;
  for (let i = 0; i < n; i++) {
    ar.slice(i + 1, n).filter((item) => {
      if ((ar[i] + item) % k === 0) {
        pairs++;
      }
    });
  }
  return pairs;
}

let ar = [1, 3, 2, 6, 1, 2];

let result = divisibleSumPairs(6, 3, ar);

console.log(result);
