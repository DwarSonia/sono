const roles = {
  /*
  'Nome da função': <Nível mínimo para obter esta função>
  */
  'Principiante': 0,
  'Cidade dos Gatinhos': 10,
  'Bosques Negros': 20,
  'Farmount': 30,
  'Rosenvale': 40,
  'Amberhill': 50,
  'Mestre Blast': 60,
  'Mestre Woods': 80,
  'Lenda': 90
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
