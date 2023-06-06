#include <stdio.h>
#include <algorithm>
using namespace std;

int main()
{
  int n, tmp;
  scanf("%d", &n);
  int arr[n];

  for (int i = 0; i < n; i++)
  {
    scanf("%d", &tmp);
    arr[i] = tmp;
  }

  sort(arr, arr + n);
  tmp = -1001;

  for (int i = 0; i < n; i++)
  {
    if (tmp == arr[i])
      continue;
    printf("%d ", arr[i]);
    tmp = arr[i];
  }

  return 0;
}