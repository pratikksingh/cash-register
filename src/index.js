var billAmt = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");

var checkBtn = document.querySelector("#check-btn");
var errMsg = document.querySelector("#err-Msg");

var numberOfNotes = document.querySelectorAll("#notes-number");

function clickHandler() {
  errMsg.innerText = "";

  function errMessage(message) {
    errMsg.innerText = message;
  }

  function calculateChange(Amt) {
    let notes = [2000, 500, 100, 20, 10, 5, 1];
    for (let i = 0; i < notes.length; i++) {
      let noOfNotes = Math.trunc(Amt / notes[i]);
      Amt %= notes[i];
      numberOfNotes[i].innerText = noOfNotes;
    }
  }

  if (billAmt.value > 0) {
    if (cashGiven.value > billAmt.value) {
      errMessage("");
      const returnAmt = cashGiven.value - billAmt.value;
      calculateChange(returnAmt);
    } else if (cashGiven.value < billAmt.value) {
      errMessage("Invalid cash amount given");
    } else if (cashGiven.value === billAmt.value) {
      errMessage("No change has to be returned");
    }
  } else {
    errMessage("Invalid Bill Amount");
  }
}

checkBtn.addEventListener("click", clickHandler);
