#include <stdio.h>
int main()
{
  long long int R, r;
  scanf("%lld %lld", &R, &r);
  printf("%lld\n", R * R - 2 * R * r);

  return 0;
}