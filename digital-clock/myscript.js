/// COMPONENT DIGIT NUMBER
const component = (prop) => {
  return `
          <div class="flex flex-col gap-1">
        <!-- TOP SECTION -->
        <div class="flex gap-1">
          <div id="${prop}_node_1" class="bg-gray-900 rounded-tl-full w-3 h-3"></div>
          <div id="${prop}_node_2" class="bg-gray-900 w-[30px] h-3"></div>
          <div id="${prop}_node_3" class="bg-gray-900 rounded-tr-full w-3 h-3"></div>
        </div>
        <!-- FIRST -->
        <div class="flex justify-between">
          <div id="${prop}_node_4" class="w-3 rounded-tr-full h-[30px] bg-gray-900"></div>
          <div id="${prop}_node_5" class="w-3 rounded-tl-full h-[30px] bg-gray-900"></div>
        </div>
        <!-- SECOND -->
        <div class="flex gap-1">
          <div id="${prop}_node_6" class="bg-gray-900 w-3 h-3"></div>
          <div id="${prop}_node_7" class="bg-gray-900 w-[30px] h-3"></div>
          <div id="${prop}_node_8" class="bg-gray-900 w-3 h-3"></div>
        </div>
        <!-- THIRD -->
        <div class="flex justify-between">
          <div id="${prop}_node_9" class="w-3 rounded-tr-full h-[30px] bg-gray-900"></div>
          <div id="${prop}_node_10" class="w-3 rounded-tl-full h-[30px] bg-gray-900"></div>
        </div>
        <!-- BOTTOM -->
        <div class="flex gap-1">
          <div id="${prop}_node_11" class="bg-gray-900 rounded-bl-full w-3 h-3"></div>
          <div id="${prop}_node_12" class="bg-gray-900 w-[30px] h-3"></div>
          <div id="${prop}_node_13" class="bg-gray-900 rounded-br-full w-3 h-3"></div>
        </div>
      </div>
    `;
};
/// DEFINE ELEMENT
const firstHourElement = document.getElementById("first_hour");
const secondHourElement = document.getElementById("second_hour");
const firstMinuteElement = document.getElementById("first_minute");
const secondMinuteElement = document.getElementById("second_minute");
const firstSecondsElement = document.getElementById("first_seconds");
const secondSecondsElement = document.getElementById("second_seconds");

/// NUM GETTER
const formula = (number) => {
  return [
    /// NUMBER 0
    [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    /// NUMBER 1
    [3, 5, 8, 10, 13],
    /// NUMBER 2
    [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13],
    /// NUMBER 3
    [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13],
    /// NUMBER 4
    [1, 3, 4, 5, 6, 7, 8, 10, 13],
    /// NUMBER 5
    [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13],
    /// NUMBER 6
    [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
    /// NUMBER 7
    [1, 2, 3, 5, 8, 10, 13],
    /// NUMBER 8
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    /// NUMBER 9
    [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13],
  ][number];
};

/// INSERT COMPONENT
firstHourElement.insertAdjacentHTML("afterbegin", component("first_hour"));
secondHourElement.insertAdjacentHTML("afterbegin", component("second_hour"));
firstMinuteElement.insertAdjacentHTML("afterbegin", component("first_minute"));
secondMinuteElement.insertAdjacentHTML(
  "afterbegin",
  component("second_minute")
);
firstSecondsElement.insertAdjacentHTML(
  "afterbegin",
  component("first_seconds")
);
secondSecondsElement.insertAdjacentHTML(
  "afterbegin",
  component("second_seconds")
);

const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
/// ONCHANGE BLOCK OF DIGIT NUMBER
/// AND ALSO RESETER NUMBER
const onChangeBlock = (time, indexParent, node) => {
  const activeBlock = time.find((x) => x === indexParent);
  if (activeBlock) {
    node.className = node.className.replace("bg-gray-900", "bg-white");
  } else {
    node.className = node.className.replace("bg-white", "bg-gray-900");
  }
};
setInterval(() => {
  const time = new Date();

  /// INSERT DATE
  const dateElement = document.getElementById("date");
  dateElement.innerText = time.getDate();
  /// INSERT DAY
  const dayElement = document.getElementById("list-day");
  dayElement.innerText = day[time.getDay()];
  /// INSERT MONTH
  const monthElement = document.getElementById("list-month");
  monthElement.innerText = month[time.getMonth()];
  /// ====== HOUR ======
  const numTimeHour = String(time.getHours()).split("");
  const firstHour = formula(
    numTimeHour.length > 1 ? Number(numTimeHour[0]) : 0
  );
  const secondHour = formula(
    numTimeHour.length > 1 ? Number(numTimeHour[1]) : Number(numTimeHour[0])
  );
  /// ====== MINUTE ======
  const numTimeMinute = String(time.getMinutes()).split("");
  const firstMinute = formula(
    numTimeMinute.length > 1 ? Number(numTimeMinute[0]) : 0
  );
  const secondMinute = formula(
    numTimeMinute.length > 1
      ? Number(numTimeMinute[1])
      : Number(numTimeMinute[0])
  );
  /// ====== SECONDS ======
  const numTimeSeconds = String(time.getSeconds()).split("");
  const firstSeconds = formula(
    numTimeSeconds.length > 1 ? Number(numTimeSeconds[0]) : 0
  );
  const secondSeconds = formula(
    numTimeSeconds.length > 1
      ? Number(numTimeSeconds[1])
      : Number(numTimeSeconds[0])
  );

  const listOfTime = [
    {
      type: "first_hour",
      time: firstHour,
    },
    {
      type: "second_hour",
      time: secondHour,
    },
    {
      type: "first_minute",
      time: firstMinute,
    },
    {
      type: "second_minute",
      time: secondMinute,
    },
    {
      type: "first_seconds",
      time: firstSeconds,
    },
    {
      type: "second_seconds",
      time: secondSeconds,
    },
  ];
  /// 14 is 13 total of block number
  for (let indexParent = 1; indexParent < 14; indexParent++) {
    for (let index = 0; index < listOfTime.length; index++) {
      const node = document.getElementById(
        `${listOfTime[index].type}_node_${indexParent}`
      );
      onChangeBlock(listOfTime[index].time, indexParent, node);
    }
  }

  /// BEEP
  const beep = document.querySelectorAll("#beep");
  beep[0].className = beep[0].className.replace("opacity-0", "opacity-100");
  beep[1].className = beep[1].className.replace("opacity-0", "opacity-100");
  setTimeout(() => {
    beep[0].className = beep[0].className.replace("opacity-100", "opacity-0");
    beep[1].className = beep[1].className.replace("opacity-100", "opacity-0");
  }, 500);
}, 1000);
