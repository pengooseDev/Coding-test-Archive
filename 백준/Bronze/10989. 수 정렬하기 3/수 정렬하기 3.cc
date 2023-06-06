#include <stdio.h>
#include <algorithm>
using namespace std;

int arr[10001];
int main()
{
  int n, tmp;
  scanf("%d", &n);

  for (int i = 0; i < n; i++)
  {
    scanf("%d", &tmp);
    arr[tmp] += 1;
  }

  for (int i = 1; i <= 10000; i++)
    for (int j = 1; j <= arr[i]; j++)
    {
      printf("%d\n", i);
    }

  return 0;
};