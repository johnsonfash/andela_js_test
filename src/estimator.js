var data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    };


const covid19ImpactEstimator = (data) => {
    const input = data;
    var impact = {};
    var severeImpact = {};
    const duration = Math.floor(input.timeToElapse / 3);
    
    impact.currentlyInfected = input.reportedCases * 10;
    severeImpact.currentlyInfected = input.reportedCases * 50;
    
    impact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2,duration);  //// 30 days period
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * Math.pow(2,duration); ////30 days period
    
    impact.severeCasesByRequestedTime = Math.floor((15/100) * impact.infectionsByRequestedTime);
    severeImpact.severeCasesByRequestedTime = Math.floor((15/100) * severeImpact.infectionsByRequestedTime);

    impact.hospitalBedsByRequestedTime = Math.floor(input.totalHospitalBeds*(35/100) - impact.severeCasesByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = Math.floor(input.totalHospitalBeds*(35/100)) - severeImpact.severeCasesByRequestedTime;
    
    impact.casesForICUByRequestedTime = Math.floor((5/100) * impact.infectionsByRequestedTime); //// 30 days period
    severeImpact.casesForICUByRequestedTime = Math.floor((5/100) * severeImpact.infectionsByRequestedTime); //// 30 days period
    
    impact.casesForVentilatorsByRequestedTime = Math.floor((2/100) * impact.infectionsByRequestedTime); //// 30 days period
    severeImpact.casesForVentilatorsByRequestedTime = Math.floor((2/100) * severeImpact.infectionsByRequestedTime); //// 30 days period
    
    impact.dollarsInFlight = impact.infectionsByRequestedTime * input.region.avgDailyIncomePopulation * input.region.avgDailyIncomeInUSD * 58;   ///30 days period
    severeImpact.dollarsInFlight = severeImpact.infectionsByRequestedTime * input.region.avgDailyIncomePopulation * input.region.avgDailyIncomeInUSD * 58;   ///30 days period
    
    return {
        data: input,
        impact,
        severeImpact
    };
};

export default covid19ImpactEstimator;
