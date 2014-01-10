/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'ibaraki_mito_2013_r4';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* mito cofog */
  // 議会費
  '1': { icon: 'icons/ibaraki-mito.svg', color: '#C75746', bcolor: '#935B3B' },
  '101': { icon: 'icons/ibaraki-mito.svg', color: '#C75746', bcolor: '#935B3B' }, // 議会費
  // 総務費
  '2': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' },
  '201': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' }, // 総務管理費
  '202': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' }, // 徴税費
  '203': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' }, // 戸籍住民基本台帳費
  '204': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' }, // 総務費
  '205': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' }, // 総務費
  '206': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' }, // 総務費
  // 民生費
  '3': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' },
  '301': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' }, // 民生費
  '302': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' }, // 民生費
  '303': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' }, // 民生費
  '304': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' }, // 民生費
  // 衛生費
  '4': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '401': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' }, // 衛生費
  '402': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' }, // 衛生費
  '403': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' }, // 衛生費
  // 労働費
  '5': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#2A3A03' },
  '501': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#2A3A03' }, //　労働費
  // 農林水産費
  '6': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  '601': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' }, // 農林水産費
  '602': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' }, // 農林水産費
  '603': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' }, // 農林水産費
  // 商工費
  '7': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '701': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' }, // 商工費
  // 土木費
  '8': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '801': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' }, // 土木費
  '802': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' }, // 土木費
  '803': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' }, // 土木費
  '804': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' }, // 土木費
  '805': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' }, // 土木費
  // 消防費
  '9': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#D33673' },
  '901': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#D33673' }, // 消防費
  // 教育費
  '10': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1001': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' }, // 教育費
  '1002': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' }, // 教育費
  '1003': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' }, // 教育費
  '1004': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' }, // 教育費
  '1005': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' }, // 教育費
  '1006': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' }, // 教育費
  // 災害復旧費
  '11': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#935B3B' },
  '1101': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#935B3B' }, // 災害復旧費
  '1102': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#935B3B' }, // 災害復旧費
  // 公債費
  '12': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D36B3B' },
  '1201': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D36B3B' }, // 公債費
  // 予備費
  '13': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#C35B4B' },
  '1301': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#C35B4B' }  // 予備費
};


