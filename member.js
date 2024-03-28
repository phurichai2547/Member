// credit: https://www.fakenamegenerator.com/gen-random-us-us.php
function memberManagement() {
    const members = [
      {
        id: 1001,
        firstname: 'Jason',
        lastname: 'Parsley',
        email: 'JasonParsley@teleworm.us',
        address: '3512 Florence Street Longview, TX 75601'
      },
      {
        id: 1002,
        firstname: 'Mack',
        lastname: 'Pierce',
        email: 'MackKPierce@dayrep.com',
        address: '3484 Hiddenview Drive Garfield Heights, OH 44128'
      },
      {
        id: 1003,
        firstname: 'Zaida',
        lastname: 'Daniels',
        email: 'ZaidaDaniels@dayrep.com',
        address: '1367 Clarksburg Park Road Sedona, AZ 86336'
      },
      {
        id: 1004,
        firstname: 'Lawrence',
        lastname: 'McGinnis',
        email: 'LawrenceMMcGinnis@dayrep.com',
        address: '1723 Roane Avenue Bethesda, MD 20014'
      }
    ]
    function getMembers() {
      return members
    }
    function findMember(id) {
      return members.find((member) => member.id === id)
    }
    return { getMembers, findMember }
  }
  export { memberManagement }
  // module.exports = memberManagement

  