#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N, M, res = 1e9;
vector<pair<int, int>> houses, chickens;

int get_dis(pair<int, int> a, pair<int, int> b)
{
  return abs(a.first - b.first) + abs(a.second - b.second);
}

void dfs(int i, int c, vector<pair<int, int>> s)
{
  if (c == M)
  {
    int sum = 0;

    for (auto house : houses)
    {
      int min_dis = 1e9;

      for (auto chicken : s)
        min_dis = min(min_dis, get_dis(house, chicken));

      sum += min_dis;
    }

    res = min(res, sum);

    return;
  }

  if (i >= chickens.size())
    return;

  s.push_back(chickens[i]);
  dfs(i + 1, c + 1, s);

  s.pop_back();
  dfs(i + 1, c, s);
}

int main()
{
  cin >> N >> M;

  for (int i = 0; i < N; i++)
    for (int j = 0; j < N; j++)
    {
      int curr;
      cin >> curr;

      if (curr == 1)
        houses.push_back({i, j});
      if (curr == 2)
        chickens.push_back({i, j});
    }

  dfs(0, 0, vector<pair<int, int>>());

  cout << res << endl;
}
