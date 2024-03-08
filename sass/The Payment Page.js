const paymentForm = document.getElementById('paymentForm');
const payButton = document.getElementById('payButton');

paymentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const studentIndex = document.getElementById('studentIndex').value;
  const studentName = document.getElementById('studentName').value;
  const amount = document.getElementById('amount').value;
  const newTab = window.open('', '_blank');
  newTab.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        background: #6bbfff url('https://source.unsplash.com/1600x900/?school') repeat-x fixed 50% 10%;
        color: auto change;
        padding: 20px;
        margin: 0;
        height: 100vh;
      }
    </style>
    </head>
    <body>
      <h1>Hello, ${studentName}</h1>
      <h2>Payment of $${amount} Received</h2>
    </body>
    </html>
  `);
  newTab.document.close();
});
