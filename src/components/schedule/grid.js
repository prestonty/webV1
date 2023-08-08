export default function grid() {
  return (
    <div>
      <div>
        <p>8 am</p>
      </div>
      <div class="week" id="mon"></div>
      <div class="week" id="tue"></div>
      <div class="week" id="web"></div>
      <div class="week" id="thu"></div>
      <div class="week" id="fri"></div>
    </div>
  );
}

// relay these div tags into vertical ones

// should fit the schedule by having 5 columns
// time should start at 7 am to 9 pm

// but there is monday to friday so extra row
// total 17 rows

// make an algorithm
// E.g. 8 am means it is 1/16th so you move form the top by 1/16th
