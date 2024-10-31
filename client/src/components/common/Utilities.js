export const months = [
  { name: "January", value: "January", _id: "January" },
  { name: "February", value: "February", _id: "February" },
  { name: "March", value: "March", _id: "March" },
  { name: "April", value: "April", _id: "April" },
  { name: "May", value: "May", _id: "May" },
  { name: "June", value: "June", _id: "June" },
  { name: "July", value: "July", _id: "July" },
  { name: "August", value: "August", _id: "August" },
  { name: "September", value: "September", _id: "September" },
  { name: "October", value: "October", _id: "October" },
  { name: "November", value: "November", _id: "November" },
  { name: "December", value: "December", _id: "December" }
];

export const banks = [
  { name: "UNION BANK OF COLOMBO PLC", value: "UNION BANK OF COLOMBO PLC", _id: "UNION BANK OF COLOMBO PLC" },
  { name: "BANK OF CEYLON", value: "BANK OF CEYLON", _id: "BANK OF CEYLON" },
  { name: "CENTRAL BANK OF SRI LANKA", value: "CENTRAL BANK OF SRI LANKA", _id: "CENTRAL BANK OF SRI LANKA" },
  { name: "CITIZEN DEVELOPMENT BUSINESS FINANCE", value: "CITIZEN DEVELOPMENT BUSINESS FINANCE", _id: "CITIZEN DEVELOPMENT BUSINESS FINANCE" },
  { name: "COMMERCIAL BANK OF CEYLON PLC", value: "COMMERCIAL BANK OF CEYLON PLC", _id: "COMMERCIAL BANK OF CEYLON PLC" },
  { name: "DFCC Bank PLC", value: "DFCC Bank PLC", _id: "DFCC Bank PLC" },
  { name: "HATTON NATIONAL BANK", value: "HATTON NATIONAL BANK", _id: "HATTON NATIONAL BANK" },
  { name: "HDFC BANK", value: "HDFC BANK", _id: "HDFC BANK" },
  { name: "HNB FINANCE PLC", value: "HNB FINANCE PLC", _id: "HNB FINANCE PLC" },
  { name: "HSBC", value: "HSBC", _id: "HSBC" },
  { name: "NATIONAL DEVELOPMENT BANK", value: "NATIONAL DEVELOPMENT BANK", _id: "NATIONAL DEVELOPMENT BANK" },
  { name: "NATIONAL SAVINGS BANK", value: "NATIONAL SAVINGS BANK", _id: "NATIONAL SAVINGS BANK" },
  { name: "NATIONS TRUST BANK", value: "NATIONS TRUST BANK", _id: "NATIONS TRUST BANK" },
  { name: "PAN ASIA BANK", value: "PAN ASIA BANK", _id: "PAN ASIA BANK" },
  { name: "PEOPLES BANK", value: "PEOPLES BANK", _id: "PEOPLES BANK" },
  { name: "SAMPATH BANK PLC", value: "SAMPATH BANK PLC", _id: "SAMPATH BANK PLC" },
  { name: "SEYLAN BANK PLC", value: "SEYLAN BANK PLC", _id: "SEYLAN BANK PLC" },
  { name: "SANASA DEVELOPMENT BANK", value: "SANASA DEVELOPMENT BANK", _id: "SANASA DEVELOPMENT BANK" },
  { name: "STANDARD CHARTERED BANK", value: "STANDARD CHARTERED BANK", _id: "STANDARD CHARTERED BANK" },
]

export const roles = [
  {name: "Administrator", value: 0, _id: 0},
  {name: "Super Administrator", value: 1, _id: 1}
]

export const formatMoney = money => {
  let formatedValue = money
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return formatedValue;
};
