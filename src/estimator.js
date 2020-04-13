// const data = {
//     region: {
//     name: "Africa",
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//     },
//     periodType: "days",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614
//     };


const covid19ImpactEstimator = (data) => {
  const input = data;
  const impact = {};
  const severeImpact = {};
  const periodName = input.periodType;
  const period = input.timeToElapse;
  const duration = (pt, p) => {
    let days = 0;
    if (pt === 'days') {
      days = p;
    } else if (pt === 'weeks') {
      days = 7 * p;
    } else if (pt === 'months') {
      days = 30 * p;
    } else {
      return days;
    }
    return days;
  };

  const time = Math.floor(duration(periodName, period) / 3);

  impact.currentlyInfected = input.reportedCases * 10;
  severeImpact.currentlyInfected = input.reportedCases * 50;

  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** time);
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** time);

  impact.severeCasesByRequestedTime = Math.floor((15 / 100)
  * impact.infectionsByRequestedTime);
  severeImpact.severeCasesByRequestedTime = Math.floor((15 / 100)
  * severeImpact.infectionsByRequestedTime);

  impact.hospitalBedsByRequestedTime = Math.floor(input.totalHospitalBeds * (35 / 100))
  - impact.severeCasesByRequestedTime + 1;
  severeImpact.hospitalBedsByRequestedTime = Math.floor(input.totalHospitalBeds * (35 / 100))
  - severeImpact.severeCasesByRequestedTime + 1;

  impact.casesForICUByRequestedTime = Math.floor((5 / 100) * impact.infectionsByRequestedTime);
  severeImpact.casesForICUByRequestedTime = Math.floor((5 / 100)
  * severeImpact.infectionsByRequestedTime);

  impact.casesForVentilatorsByRequestedTime = Math.floor((2 / 100)
  * impact.infectionsByRequestedTime);
  severeImpact.casesForVentilatorsByRequestedTime = Math.floor((2 / 100)
  * severeImpact.infectionsByRequestedTime);

  impact.dollarsInFlight = Math.floor(impact.infectionsByRequestedTime
  * input.region.avgDailyIncomePopulation * input.region.avgDailyIncomeInUSD)
  * input.timeToElapse;
  severeImpact.dollarsInFlight = Math.floor(severeImpact.infectionsByRequestedTime
  * input.region.avgDailyIncomePopulation * input.region.avgDailyIncomeInUSD)
  * input.timeToElapse;

  return {
    data: input,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
