function buyScript(scriptName, price) {
  alert(`You are about to buy ${scriptName} for ${price} USDT.`);
  const usdtAddress = "THtoYxaiwi56S6JAhTTjo6jf2GGV3nsHHg";  // Aapka TRC-20 Address
  const message = `Please send ${price} USDT to this wallet address:\n\n${usdtAddress}\n\nAfter payment, contact us for the script.`;
  alert(message);
}
