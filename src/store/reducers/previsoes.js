export default function previsoes(state = [], action) {
  switch (action.type) {
    case "ADD_PREVISAO":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          main: action.payload.main,
          name: action.payload.name,
        },
      ];
    default:
      return state;
  }
}
