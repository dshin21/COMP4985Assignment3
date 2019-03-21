var net = require("net");

var client = new net.Socket();

client.connect(3000, "127.0.0.1", function() {
  console.log("Connected");

  let data = { 
    lat: 1,
    lng: 2,
    device_id: "test"
  };

  client.write(JSON.stringify(data));
});
