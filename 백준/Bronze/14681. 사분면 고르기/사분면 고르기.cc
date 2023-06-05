#include <stdio.h>

int main()
{
  int x, y, answer;
  scanf("%d %d", &x, &y);
  answer = x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
  printf("%d", answer);

  return 0;
}