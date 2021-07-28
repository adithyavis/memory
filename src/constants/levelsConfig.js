const levelsConfig = {
  byLevels: {
    1: {
      noOfCardRows: 2,
      noOfCardColumns: 2,
      maxTime: 30,
      maxMoves: 10,
    },
    2: {
      noOfCardRows: 2,
      noOfCardColumns: 4,
      maxTime: 90,
      maxMoves: 30,
    },
    3: {
      noOfCardRows: 3,
      noOfCardColumns: 3,
      maxTime: 80,
      maxMoves: 100,
    },
    4: {
      noOfCardRows: 3,
      noOfCardColumns: 4,
      maxTime: 200,
      maxMoves: 60,
    },
    5: {
      noOfCardRows: 4,
      noOfCardColumns: 4,
      maxTime: 210,
      maxMoves: 70,
    },
    6: {
      noOfCardRows: 4,
      noOfCardColumns: 5,
      maxTime: 130,
      maxMoves: 100,
    },
    7: {
      noOfCardRows: 5,
      noOfCardColumns: 5,
      maxTime: 120,
      maxMoves: 100,
    },
    8: {
      noOfCardRows: 6,
      noOfCardColumns: 5,
      maxTime: 120,
      maxMoves: 140,
    },
    9: {
      noOfCardRows: 6,
      noOfCardColumns: 6,
      maxTime: 30,
      maxMoves: 10,
    },
    10: {
      noOfCardRows: 7,
      noOfCardColumns: 6,
      maxTime: 30,
      maxMoves: 10,
    },
  },
  allLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export default levelsConfig;
