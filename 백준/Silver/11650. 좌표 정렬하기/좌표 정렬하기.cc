#include <stdio.h>
#include <algorithm>
using namespace std;

struct position
{
  int x;
  int y;
};

bool sorting(const position &p1, const position &p2)
{
  if (p1.x > p2.x)
    return false;
  if (p1.x < p2.x)
    return true;

  return p1.y > p2.y ? false : true;
}

main()
{
  int n;
  scanf("%d", &n);
  position positions[100000];

  for (int i = 0; i < n; i++)
  {
    int x, y;
    scanf("%d %d", &x, &y);
    positions[i].x = x;
    positions[i].y = y;
  }

  sort(positions, positions + n, sorting);

  for (int i = 0; i < n; i++)
  {
    printf("%d %d\n", positions[i].x, positions[i].y);
  }

  return 0;
}