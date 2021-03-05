const collect_info = require("./collect_info");

const rewards = [
  {
    itemNo: 0,
    itemName: "Nike",
    itemType: "",
    itemTypeNo: 0,
    itemKind: "D",
    rarity: 0,
    value: 30
  },
  {
    itemNo: 0,
    itemName: "Puma",
    itemType: "",
    itemTypeNo: 0,
    itemKind: "DP",
    rarity: 0,
    value: 30
  },
  {
    itemNo: 0,
    itemName: "New Balance",
    itemType: "",
    itemTypeNo: 0,
    itemKind: "PCR",
    rarity: 0,
    value: 30
  }
];
const db = {
  info: {
    coin: 0,
    isChangeRate: false,
    isDonaPremium: true,
    status: 1,
    items: [
      {
        resultCode: 1,
        resultName: "*****",
        rewards
      },
      {
        resultCode: 2,
        resultName: "****",
        rewards
      },
      {
        resultCode: 3,
        resultName: "***",
        rewards
      },
      {
        resultCode: 4,
        resultName: "**",
        rewards
      },
      {
        resultCode: 5,
        resultName: "*",
        rewards
      }
    ]
  },
  result: {
    resultCode: -1,
    resultName: "cuname",
    rewards
  },
  collect_info
};

module.exports = db;
