1
const bankAccount = {
    ownerName: "Дмитро",
    accountNumber: "123456789",
    balance: 10000,

    deposit: function () {
        const amount = parseFloat(document.getElementById("amount").value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById("message").textContent = "Помилково введена сума";
            return;
        }
        this.balance += amount;
        document.getElementById("message").textContent = `Рахунок поповнено на ${amount}грн.`;
        updateBalance();
    },

    withdraw: function () {
        const amount = parseFloat(document.getElementById("amount").value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById("message").textContent = "Помилково введена сума";
            return;
        }

        if (amount > this.balance) {
            document.getElementById("message").textContent = "Недостатньо коштів";
            return;
        }

        this.balance -= amount;
        document.getElementById("message").textContent = `Знято ${amount}грн.`;
        updateBalance();
    }
};

function updateBalance() {
    document.getElementById("ownerName").textContent = bankAccount.ownerName;
    document.getElementById("accountNumber").textContent = bankAccount.accountNumber;
    document.getElementById("balance").textContent = bankAccount.balance;
}

updateBalance();