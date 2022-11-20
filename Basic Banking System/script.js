function sendMoney() {
    var EnterName = document.getElementById("EnterName").value;
    var EnterAmount = parseInt(document.getElementById("EnterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (EnterAmount > enterSAmount) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = EnterName + "BankBalance";

        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + EnterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - EnterAmount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!  
       Rs ${EnterAmount} is sent to ${EnterName}@gmail.com.`)

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${EnterAmount} is sent from the sender with Email-id ${enterSName}@gmail.com
  to recepient with Email-id ${EnterName}@gmail.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}