#include <iostream>
#include <vector>

using namespace std;

typedef long long ll;
ll MOD = 1000000007;

vector<vector<ll>> multiple(const vector<vector<ll>> &a, const vector<vector<ll>> &b)
{
  int n = a.size();
  vector<vector<ll>> c(n, vector<ll>(n));
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      for (int k = 0; k < n; k++)
        c[i][j] = (c[i][j] + a[i][k] * b[k][j]) % MOD;

  return c;
}

vector<vector<ll>> mp(const vector<vector<ll>> &m, ll exp)
{
  if (exp == 1)
    return m;

  if (exp % 2 == 0)
  {
    vector<vector<ll>> half = mp(m, exp / 2);
    return multiple(half, half);
  }

  return multiple(m, mp(m, exp - 1));
}

int main()
{
  ll n;
  cin >> n;

  vector<vector<ll>> matrix = {{1, 1}, {1, 0}};

  if (n == 0)
    cout << 0 << endl;
  else
  {
    vector<vector<ll>> answer = mp(matrix, n);

    cout << (answer[1][0] * answer[0][0]) % MOD << endl;
  }

  return 0;
}
