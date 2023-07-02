#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

typedef long long ll;

int bs(vector<int> &b, int a)
{
  int l = 0, r = b.size();

  while (l < r)
  {
    int m = l + (r - l) / 2;

    b[m] < a ? l = m + 1 : r = m;
  }

  return l;
}

int main()
{
  int T;
  cin >> T;

  while (T--)
  {
    int N, M;
    cin >> N >> M;

    vector<int> A(N), B(M);
    for (int i = 0; i < N; i++)
      cin >> A[i];

    for (int i = 0; i < M; i++)
      cin >> B[i];

    sort(B.begin(), B.end());

    ll answer = 0;

    for (int i = 0; i < N; i++)
      answer += bs(B, A[i]);

    cout << answer << endl;
  }

  return 0;
}
