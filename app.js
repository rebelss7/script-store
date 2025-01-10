
function buyScript(scriptName, price) {
  alert(`You are about to buy ${scriptName} for ${price} USDT.`);
  const usdtAddress = "YOUR_USDT_WALLET_ADDRESS";
  const message = `Send ${price} USDT to this wallet address: ${usdtAddress}`;
  alert(message);
}
