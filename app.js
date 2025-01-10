function buyScript(scriptName, price) {
  if (scriptName === "Script 1") {
    // Script 1 par click karne se YouTube video open hoga
    window.open("https://youtu.be/k63f2cRLIDY", "_blank");
  } else {
    // Baaki scripts ke liye payment process
    alert(`You are about to buy ${scriptName} for ${price} USDT.`);
    const usdtAddress = "THtoYxaiwi56S6JAhTTjo6jf2GGV3nsHHg";  // Aapka TRC-20 Address
    const message = `Please send ${price} USDT to this wallet address:\n\n${usdtAddress}\n\nAfter payment, contact us for the script.`;
    alert(message);
  }
}

