const thisYear = new Date().getFullYear();
const Halloweenday = thisYear + "/10/31";

function conutdown() {
  const halloweenDate = new Date(Halloweenday);
  const currentDate = new Date();

  console.log("thisyear : ", thisYear);
  console.log("Halloweenday : ", Halloweenday);
  console.log("from date : ", halloweenDate - currentDate);
}

conutdown();
