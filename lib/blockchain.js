
const params = {
  LAST_POW_BLOCK: 960,
  RAMP_TO_BLOCK: 0,
  LAST_SEESAW_BLOCK: 0,
  FIRST_BUDGET_BLOCK: 172801,
};

const avgBlockTime = 90; // 1.5 minutes (90 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 960

const blocksPerWeek = blocksPerDay * 7; // 6720

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

const blocksPerYear = blocksPerDay * 365.25; // 350640

const mncoins = 5000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
    const blockValue = getSubsidy(nHeight);
    const budgetHeight = params.FIRST_BUDGET_BLOCK;
    const height = nHeight + 1;
    let payment = 0;

    if (height >= 2 && height < budgetHeight)
        payment = blockValue / 100 * 65;
    // Budget withhold 5%
    else if (height >= budgetHeight)
        payment = blockValue / 100 * 60;

    return payment;
};

const getSubsidy = (nHeight = 1) => {
    const height = nHeight + 1;
    let value = 0;

    if (height == 1)
        value = 95000000;
    else if (height >= 2 && height <= 172800)
        value = 500;
    else if (height >= 172801 && height <= 345600) 
        value = 375;
    else if (height >= 345601 && height <= 518400) 
        value = 281.25;
    else if (height >= 518401 && height <= 691200) 
        value = 210.938;
    else if (height >= 691201 && height <= 864000) 
        value = 158.203;
    else if (height >= 864001 && height <= 1036800) 
        value = 118.652;
    else if (height >= 1036801 && height <= 1209600) 
        value = 88.989;
    else if (height >= 1209601 && height <= 1382400) 
        value = 66.742;
    else if (height >= 1382401 && height <= 1555200) 
        value = 50.056;
    else if (height >= 1555201 && height <= 1728000) 
        value = 37.54;
    else if (height >= 1728001) 
        value = 18.771;
    
    // Budget withhold 5%
    if (height >= params.FIRST_BUDGET_BLOCK)
        value -= value / 100 * 5;

    return value;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 960
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};
