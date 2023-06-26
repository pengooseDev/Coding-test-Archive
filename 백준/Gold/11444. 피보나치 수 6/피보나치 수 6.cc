#include <iostream>
#include <vector>
using namespace std;

const long long MOD = 1000000007;

void get_mul(const vector<vector<long long>> &x, const vector<vector<long long>> &y, vector<vector<long long>> &res)
{
  for (int i = 0; i < 2; i++)
    for (int j = 0; j < 2; j++)
    {
      res[i][j] = 0;
      for (int k = 0; k < 2; k++)
        res[i][j] = (res[i][j] + x[i][k] * y[k][j]) % MOD;
    }
}

vector<vector<long long>> get_pow(vector<vector<long long>> m, long long p)
{
  vector<vector<long long>> res = {{1, 0}, {0, 1}};

  while (p > 0)
  {
    if (p % 2 == 1)
    {
      vector<vector<long long>> tmp(2, vector<long long>(2));
      get_mul(res, m, tmp);
      swap(res, tmp);
    }

    vector<vector<long long>> tmp(2, vector<long long>(2));
    get_mul(m, m, tmp);
    swap(m, tmp);

    p /= 2;
  }

  return res;
}

int main()
{
  long long n;
  cin >> n;

  if (n == 0)
  {
    cout << 0 << "\n";
    return 0;
  }

  vector<vector<long long>> matrix = {{1, 1}, {1, 0}};
  vector<vector<long long>> answer = get_pow(matrix, n - 1);

  cout << answer[0][0] << endl;
  return 0;
}
