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
    errMessage("");
    let notes = [2000, 500, 100, 20, 10, 5, 1];
    for (let i = 0; i < notes.length; i++) {
      let noOfNotes = Math.trunc(Amt / notes[i]);
      Amt %= notes[i];
      numberOfNotes[i].innerText = noOfNotes;
    }
  }

  console.log("CASH", typeof parseInt(cashGiven.value));
  console.log("Bill", typeof parseInt(billAmt.value));

  if (
    parseInt(billAmt.value) > 0 &&
    parseInt(cashGiven.value) > parseInt(billAmt.value)
  ) {
    const returnAmt = parseInt(cashGiven.value) - parseInt(billAmt.value);
    console.log("returnAmt", returnAmt);
    calculateChange(returnAmt);
  } else if (parseInt(cashGiven.value) < parseInt(billAmt.value)) {
    errMessage(
      "Cash must be atleast equal to the bill amout or greater than bill amount!"
    );
  } else if (parseInt(cashGiven.value) === parseInt(billAmt.value)) {
    errMessage("No change has to be returned");
  } else {
    errMessage("Invalid Bill Amount");
  }
}

checkBtn.addEventListener("click", clickHandler);
