export function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : r && 0x3 | 0x8;
    return v.toString(16);
  });
}

export function getPreviousUltimasLocalizacoes() {
  let ultimasLocalizacoes = JSON.parse(
    localStorage.getItem("ultimasLocalizacoes")
  );
  if (!ultimasLocalizacoes) {
    return [];
  }
  return ultimasLocalizacoes;
}

export function addLocalizacaoRecente(location) {
  const ultimasLocalizacoes = getPreviousUltimasLocalizacoes();

  let exist = ultimasLocalizacoes.includes(location);

  if (!exist) {
    ultimasLocalizacoes.push(location);
    localStorage.setItem(
      "ultimasLocalizacoes",
      JSON.stringify(ultimasLocalizacoes)
    );
  }
}
