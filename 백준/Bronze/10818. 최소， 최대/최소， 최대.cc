#include <stdio.h>

int main()
{
  int n, temp, min = 1000000, max = -10000000;
  scanf("%d", &n);

  for (int i = 0; i < n; i++)
  {
    scanf("%d", &temp);
    if (temp < min)
      min = temp;
    if (temp > max)
      max = temp;
  }

  printf("%d %d", min, max);
  return 0;
}