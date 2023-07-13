const users = [
  {
    name: "Aleksey",
    works: [
      {
        job: "front",
        start: 2019,
        end: 2020,
      },
      {
        job: "back",
        start: 2020,
        end: 2022,
      },
    ],
  },
  {
    name: "Adam",
    works: [
      {
        job: "front",
        start: 2009,
        end: 2020,
      },
      {
        job: "back",
        start: 2020,
        end: null,
      },
    ],
  },
  {
    name: "Pavel",
    works: [
      {
        job: "front",
        start: 2019,
        end: 2020,
      },
      {
        job: "back",
        start: 2020,
        end: null,
      },
    ],
  },
  {
    name: "Dima",
    works: [
      {
        job: "front",
        start: 2019,
        end: 2021,
      },
      {
        job: "back",
        start: 2021,
        end: 2022,
      },
      {
        job: "lead",
        start: 2022,
        end: null,
      },
    ],
  },
  {
    name: "Oleg",
    works: [
      {
        job: "front",
        start: 2017,
        end: 2020,
      },
      {
        job: "back",
        start: 2021,
        end: 2022,
      },
      {
        job: "lead",
        start: 2022,
        end: null,
      },
    ],
  },
];

function getUsersWorkPeriod(users) {
  const result = [];

  users.forEach((user) => {
    let sumUserJobPeriod = 0;
    const lastJob = user.works[user.works.length - 1];
    if (lastJob.end === null) {
      user.works.forEach((work) => {
        if (!work.end) {
          work.end = new Date().getFullYear();
        }
        const jobPeriod = work.end - work.start;
        sumUserJobPeriod += jobPeriod;
      });

      result.push({
        name: user.name,
        "Period of work (years)": sumUserJobPeriod,
      });
    }
  });

  result.sort((a, b) => b.yearsWorked - a.yearsWorked);

  console.table(result);

  return result;
}

getUsersWorkPeriod(users);
