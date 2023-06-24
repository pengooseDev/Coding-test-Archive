#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int N, M, T, a, b;
  cin >> N >> M;

  vector<int> known(N + 1, 0), count(M, 0);
  vector<vector<int>> group(M);

  cin >> T;
  while (T--)
  {
    cin >> a;
    known[a] = 1;
  }

  for (int i = 0; i < M; i++)
  {
    cin >> count[i];
    group[i].resize(count[i]);
    for (int j = 0; j < count[i]; j++)
      cin >> group[i][j];
  }

  for (int k = 0; k < M; k++)
    for (int i = 0; i < M; i++)
      for (int j = 0; j < count[i]; j++)
        if (known[group[i][j]])
        {
          for (int l = 0; l < count[i]; l++)
            known[group[i][l]] = 1;
          break;
        }

  int cnt = 0;
  for (int i = 0; i < M; i++)
  {
    bool canLie = true;
    for (int j = 0; j < count[i]; j++)
      if (known[group[i][j]])
      {
        canLie = false;
        break;
      }
    cnt += canLie;
  }

  cout << cnt << '\n';

  return 0;
}
