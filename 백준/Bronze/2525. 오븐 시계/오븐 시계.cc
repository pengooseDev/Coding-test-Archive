#include <stdio.h>

int main()
{
  int h, m, t, unit;
  scanf("%d %d %d", &h, &m, &t);

  m += t;
  if (m > 59) {
      unit = m / 60;
      m -= unit * 60;
      h += unit;
      if (h > 23) h -= 24;
  }

  printf("%d %d", h, m);

  return 0;
}