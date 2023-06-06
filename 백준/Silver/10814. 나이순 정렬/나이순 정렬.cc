#include <stdio.h>
#include <algorithm>
using namespace std;

struct user
{
  int age;
  int idx;
  char name[101];
};

user arr[100000];

int main()
{
  int n, tmp;
  scanf("%d", &n);

  for (int i = 0; i < n; i++) {
    scanf("%d %s", &arr[i].age, &arr[i].name);
    arr[i].idx = i;
  }

  sort(arr, arr + n, [](user a, user b)
       {
    if (a.age == b.age) return a.idx < b.idx;

    return a.age < b.age; });

  for (int i = 0; i < n; i++)
    printf("%d %s\n", arr[i].age, arr[i].name);

  return 0;
}