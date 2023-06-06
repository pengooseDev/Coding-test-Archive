#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

main()
{
  int n;
  scanf("%d", &n);
  vector<pair<int, int>> v(n);

  for (int i = 0; i < n; i++)
    scanf("%d %d", &v[i].first, &v[i].second);

  sort(v.begin(), v.end());

  for (auto [x, y] : v)
    printf("%d %d\n", x, y);

  return 0;
}