const questionsAndAnswer = [
  {
    question: "Quel(s) type(s) de vin(s) préfère-tu ? ",
    answers: [
      { answer: "Rouge", label: "red" },
      { answer: "Blanc", label: "white" },
    ],
    example: "",
  },
  {
    question: "Quel(s) arôme(s) préfères-tu ?  ",
    answers: [
      { answer: "Fruité", label: "fruity" },
      { answer: "Floral", label: "floral" },
      { answer: "Epicé", label: "spicy" },
      { answer: "Végétal", label: "vegetal" },
      { answer: "Boisé", label: "wooded" },
    ],
    example:
      "Exemple : demande-toi si tu préfères l’odeur d’un étal d’épices à l’odeur d’un champ de fleurs",
  },
  {
    question: "Quelle(s) saveur(s) préfères-tu ? ",
    answers: [
      { answer: "Acide", label: "acid" },
      { answer: "Amère", label: "bitter" },
      { answer: "Sucre", label: "sugar" },
      { answer: "Alcool", label: "alcool" },
    ],
    example:
      "Exemple : demande-toi si tu préfères une tartine de confiture à tartine de miel",
  },
  {
    question: "Quelle(s) intensité préfères-tu ? ",
    answers: [
      { answer: "Courte", label: "short" },
      { answer: "Moyenne", label: "medium" },
      { answer: "Persistante", label: "intense" },
    ],
    example:
      "Exemple : demande-toi si tu préfères boire une tasse de thé léger et rafraîchissant ou un café corsé et intense",
  },
];

export default questionsAndAnswer;
