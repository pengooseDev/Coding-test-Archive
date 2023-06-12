#include <iostream>
#include <algorithm>
#include <vector>
#include <limits.h>
using namespace std;

int main()
{
  int N;
  cin >> N;

  vector<int> v(N);

  for (int i = 0; i < N; i++)
    cin >> v[i];

  vector<pair<int, pair<int, int>>> olafs;
  for (int i = 0; i < N - 1; i++)
    for (int j = i + 1; j < N; j++)
      v[i] >= v[j] ? olafs.push_back({v[i] + v[j], {i, j}}) : olafs.push_back({v[j] + v[i], {i, j}});

  sort(olafs.begin(), olafs.end());

  int min_gap = INT_MAX;
  for (int i = 1; i < olafs.size(); ++i)
  {
    int gap = olafs[i].first - olafs[i - 1].first;
    int o1_i = olafs[i].second.first;
    int o1_j = olafs[i].second.second;
    int o2_i = olafs[i - 1].second.first;
    int o2_j = olafs[i - 1].second.second;

    if (o1_i != o2_i && o1_i != o2_j && o1_j != o2_i && o1_j != o2_j)
      min_gap = min(min_gap, abs(gap));
  }

  cout << min_gap << endl;

  return 0;
}