#include <stdio.h>
#include <algorithm>
#include <vector>
using namespace std;

int main()
{
  int N;
  scanf("%d", &N);

  vector<int> v(N);
  for (int i = 0; i < N; i++)
  {
    scanf("%d", &v[i]);
  }

  vector<int> sorted_v = v;

  sort(sorted_v.begin(), sorted_v.end());
  sorted_v.erase(unique(sorted_v.begin(), sorted_v.end()), sorted_v.end());

  for (int i = 0; i < N; i++)
  {
    printf("%d ", lower_bound(sorted_v.begin(), sorted_v.end(), v[i]) - sorted_v.begin());
  }

  return 0;
}