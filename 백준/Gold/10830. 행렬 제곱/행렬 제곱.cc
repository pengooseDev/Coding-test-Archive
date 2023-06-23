#include <iostream>
#include <vector>
using namespace std;

const int MOD = 1000;

vector<vector<int>> get_mul(const vector<vector<int>> &a, const vector<vector<int>> &b)
{
  int n = a.size();

  vector<vector<int>> res(n, vector<int>(n));

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      for (int k = 0; k < n; k++)
      {
        res[i][j] += a[i][k] * b[k][j];
        res[i][j] %= MOD;
      }

  return res;
}

vector<vector<int>> dim_pow(const vector<vector<int>> &dim, long long p)
{
  int n = dim.size();
  if (p == 1)
    return dim;

  vector<vector<int>> half_pow = dim_pow(dim, p / 2);
  vector<vector<int>> res = get_mul(half_pow, half_pow);

  if (p % 2)
    res = get_mul(res, dim);

  return res;
}

int main()
{
  int N;
  long long B;
  cin >> N >> B;

  vector<vector<int>> dim(N, vector<int>(N));

  for (int i = 0; i < N; i++)
    for (int j = 0; j < N; j++)
      cin >> dim[i][j];

  vector<vector<int>> res = dim_pow(dim, B);

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
      cout << res[i][j] % MOD << " ";
    cout << "\n";
  }

  return 0;
}
