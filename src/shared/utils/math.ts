type Vector2 = [number, number];

export function getSizeDiffToScale(size1: Vector2, size2: Vector2): [number, number] {
  return [size2[0] / size1[0], size2[1] / size1[1]];
}
