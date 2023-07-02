#include <iostream>
#include <vector>
using namespace std;

typedef long long ll;

ll calc_height(vector<int> &t, int limit)
{
  ll res = 0;
  for (int i : t)
    if (i > limit)
      res += i - limit;

  return res;
}

int main()
{
  int N, M;
  cin >> N >> M;

  vector<int> trees(N);

  for (int i = 0; i < N; i++)
    cin >> trees[i];

  int l = 0, r = 1000000000;
  int answer = 0;

  while (l <= r)
  {
    ll mid = (l + r) / 2;
    ll sum = calc_height(trees, mid);

    if (sum >= M)
    {
      answer = mid;
      l = mid + 1;
    }
    else
      r = mid - 1;
  }

  cout << answer << endl;

  return 0;
}