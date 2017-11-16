function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function message() {
  return {
    part: random(['A', 'B']),
    feature: random(['One', 'Two', 'Three']),
    status: random([0, 1, 2]),
    data: [
      [Math.random(), Math.random(), random([0, 1, 2])],
      [Math.random(), Math.random(), random([0, 1, 2])],
      [Math.random(), Math.random(), random([0, 1, 2])],
      [Math.random(), Math.random(), random([0, 1, 2])],
    ],
  };
}