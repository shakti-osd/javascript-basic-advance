const convert12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes}`;
};

// console.log(convert12to24("2:02 PM"));
// console.log(convert12to24("4:06 PM"));
// console.log(convert12to24("12:00 PM"));
// console.log(convert12to24("12:00 AM"));
