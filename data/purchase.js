const purchaseQuery = (name, phone, dt, data) => {
  console.log(data);

  return `create table if not exists items(phone varchar(50), itemname varchar(50), quantity int, price int, discount int, gst int,total int); insert into items values(${phone},'${data.name}',${data.quantity},${data.price},${data.discount},${data.gst},(${data.price}-(${data.price}*(${data.discount}/100))-(${data.price}*(${data.gst}/100)))*${data.quantity}) `;
};

module.exports = { purchaseQuery };
